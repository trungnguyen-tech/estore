using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using my_Estore.Models;
using my_Estore.Models.DTOs;
using my_Estore.Models.Requests;

namespace my_Estore.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CartController : ControllerBase
    {
        private readonly myEStoreContext _context;

        public CartController(myEStoreContext context)
        {
            _context = context;
        }
        private async Task<Cart> AddProductToCart(string userName, int productId, int quantity)
        {
            //Tìm giỏ hàng của người dùng với trạng thái chưa được thanh toán. Sử dụng Include để trả về các CartItems liên quan mà không cần sử dụng thêm truy vấn riêng biệt nào khác.
            
            var cart = await _context.Carts.Include(p => p.CartItems)
                                            .FirstOrDefaultAsync(c => c.UserName == userName && c.Status == 0);

            //Nếu không có giỏ hàng. Tạo giỏ hàng mới:
            if (cart == null)
            {
                cart = new Cart
                {
                    UserName = userName,
                    Status = 0
                };
                _context.Carts.Add(cart);
                await _context.SaveChangesAsync();
            }

            //Lấy thông tin sản phẩm.
            var product = await _context.Products.FindAsync(productId);
            if(product == null)
            {
                throw new Exception("Không tìm thấy Product");
            }

            //Tìm item nào mà có giá trị ID product và ID giỏ hàng, Nghĩa là nếu trong giỏ hàng đã có sản phẩm đó thì chỉ việc tăng số lượng quantity lên thôi.
            
            var cartItem = await _context.CartItems
                                .FirstOrDefaultAsync(ci => ci.CartId == cart.CartId && ci.ProductId == productId);

            // Nếu chưa có thì tạo 1 item mới vào trong cart.
            if(cartItem == null)
            {
                cartItem = new CartItem
                {
                    CartId = cart.CartId,
                    ProductId = productId,
                    Quantity = quantity,
                    Price = product.Price * quantity,
                    PurchaseDate = DateTime.UtcNow,
                };
                _context.CartItems.Add(cartItem);
            }
            else // Nếu có rồi thì tăng quantity lên.
            {
                cartItem.Quantity += quantity;
                cartItem.Price = product.Price * quantity;
            }

            await _context.SaveChangesAsync();

            //Cập nhật lại Cart để trả về thông tin giỏ hàng. 
            cart = await _context.Carts.Include(c => c.CartItems)
                                        .ThenInclude(ci => ci.Product)
                                        .FirstOrDefaultAsync(c => c.CartId == cart.CartId);
            return cart;            
        }
        private async Task<Cart> ComepleteCheckout ( CheckoutRequest request)
        {
            //Truy vấn giỏ hàng nào user đó chưa thanh toán.

            var cart = await _context.Carts.Include(c => c.CartItems)
                                            .ThenInclude(ci => ci.Product)
                                            .FirstOrDefaultAsync(c => c.UserName == request.UserName && c.Status == 0);

            if(cart == null)
            {
                throw new Exception("Không tìm thấy giỏ hàng của người dùng");
            }

            // Cập nhật số lượng tồn kho cho từng sản phẩm trong giỏ hàng.
            // Sử dụng vòng lặp để lấy từng item trong cartItems để xét. Nếu không đủ số lượng thì trả về. Còn nếu đủ thì trừ đi số lượng đó.
            
            foreach(var cartItem in cart.CartItems)
            {
                var product = cartItem.Product;
                //Kiểm tra số lượng tồn kho
                if(product.Stock < cartItem.Quantity)
                {
                    throw new Exception($"Không đủ số lượng cho sản phẩm ${product.ProductName}");
                }

                product.Stock -= cartItem.Quantity;
            }

            //Cập nhật ngày thanh toán và trạng thái thanh toán:
            cart.RecipientName = request.RecipientName;
            cart.Address = request.Address;
            cart.Phone = request.Phone;
            cart.PaymentMethod = request.PaymentMethod;
            cart.PurchaseDate = DateTime.UtcNow;
            cart.Status = 1;

            await _context.SaveChangesAsync();
            return cart;
        }
        private async Task DeleteCartItem (int cartItemId)
        {
            //Tìm mặt hàng cần xóa:
            var cartItem = await _context.CartItems.FindAsync(cartItemId);
            if(cartItem == null)
            {
                throw new Exception("Không tìm thấy sản phẩm cần xóa");
            }

            _context.CartItems.Remove(cartItem);
            await _context.SaveChangesAsync();
        }

        [HttpPost("addToCart")]
        public async Task<IActionResult> AddProductToCart([FromBody] CartRequest request)
        {
            if(request == null)
            {
                return BadRequest("Yêu cầu không hợp lệ");
            }
            try
            {
                var cart = await AddProductToCart(request.UserName, request.ProductId, request.Quantity);
                return Ok("Đã thêm vào giỏ hàng thành công");
            }catch(Exception ex)
            {
                return BadRequest(new { message = ex.Message });
            }
        }

        [HttpPost("completeCheckout")]
        public async Task<IActionResult> CompleteCheckout([FromBody] CheckoutRequest request)
        {
            if (string.IsNullOrEmpty(request.UserName) || request == null)
            {
                return BadRequest("Lỗi thông tin.");
            }

            try
            {
                var cart = await ComepleteCheckout(request);
                return Ok("Hoàn thành thanh toán thành công!");
            }
            catch(Exception ex)
            {
                return BadRequest(new { message = ex.Message });
            }
        }

        [HttpDelete("removeItem")]
        public async Task<IActionResult> RemoveItem(int cartItemid) {
            if(cartItemid < 0)
            {
                return BadRequest("Lỗi id");
            }

            try
            {
                await DeleteCartItem(cartItemid);
                return NoContent();
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = ex.Message });
            }
        }
        
        [HttpGet("getCart")]
        public async Task<IActionResult> GetCart(string userName)
        {
            if(string.IsNullOrEmpty(userName))
            {
                return BadRequest("Lỗi tên đăng nhập");
            }

            try
            {
                var cart = await _context.Carts.Include(c => c.CartItems)
                                         .ThenInclude(ci => ci.Product)
                                         .ThenInclude(p => p.ProductImages)
                                         .FirstOrDefaultAsync(c => c.UserName == userName && c.Status == 0);
                if(cart == null)
                {
                    return NoContent();
                }
                var cartDto = new CartDto
                {
                    CartId = cart.CartId,
                    UserName = cart.UserName,
                    Status = cart.Status,
                    PurchaseDate = cart.PurchaseDate,
                    CartItems = cart.CartItems.Select(ci => new CartItemDto
                    {
                        CartItemId = ci.CartItemId,
                        ProductId = ci.ProductId,
                        Product = new ProductCartDto
                        {
                            ProductId = ci.Product.ProductId,
                            ProductName = ci.Product.ProductName,
                            Price = ci.Product.Price,
                            Category = ci.Product.Category,
                            Brand = ci.Product.Brand,
                            Color = ci.Product.Color,
                            ProductImages = ci.Product.ProductImages.Select(pi => pi.ImageUrl).ToList()
                        },
                        Quantity = ci.Quantity,
                        Price = ci.Price,
                        PurchaseDate = ci.PurchaseDate ?? DateTime.MinValue
                    }).ToList()
                };

                return Ok(cartDto);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new { message = ex.Message });
            }
        }
        
        [HttpGet("getHistoryOrder")]
        public async Task<IActionResult> GetHistoryOrder (string userName)
        {
            if(string.IsNullOrEmpty(userName))
            {
                return BadRequest("Lỗi tên đăng nhập");
            }

            try
            {
                var carts = await _context.Carts.Include(c => c.CartItems)
                                                .ThenInclude(ci => ci.Product)
                                                .ThenInclude(p => p.ProductImages)
                                                .Where(c => c.UserName == userName && c.Status == 1)
                                                .ToListAsync();
                if(carts == null || !carts.Any())
                {
                    return NotFound("Không có lịch sử mua hàng");
                }

                var cartDtos = carts.Select(cart => new CartDto
                {
                    CartId = cart.CartId,
                    UserName = cart.UserName,
                    Status = cart.Status,
                    RecipientName = cart.RecipientName,
                    Phone = cart.Phone,
                    Address = cart.Address,
                    PaymentMethod = cart.PaymentMethod,
                    PurchaseDate = cart.PurchaseDate,
                    CartItems = cart.CartItems.Select(ci => new CartItemDto
                    {
                        CartItemId = ci.CartItemId,
                        ProductId = ci.ProductId,
                        Product = new ProductCartDto
                        {
                            ProductId = ci.Product.ProductId,
                            ProductName = ci.Product.ProductName,
                            Price = ci.Product.Price,
                            Category = ci.Product.Category,
                            Brand = ci.Product.Brand,
                            Color = ci.Product.Color,
                            ProductImages = ci.Product.ProductImages.Select(pi => pi.ImageUrl).ToList()
                        },
                        Quantity = ci.Quantity,
                        Price = ci.Price,
                        PurchaseDate = ci.PurchaseDate ?? DateTime.MinValue // Xử lý trường hợp PurchaseDate là null
                    }).ToList()
                }).ToList();

                return Ok(cartDtos);
                
            }
            catch(Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new { message = ex.Message });
            }
        }
    }
}
