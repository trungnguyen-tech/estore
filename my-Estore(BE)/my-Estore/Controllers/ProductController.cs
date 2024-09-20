using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using my_Estore.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using my_Estore.Models.Requests;
using System.Collections;

namespace my_Estore.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly myEStoreContext _context;

        public ProductController(myEStoreContext context)
        {
            _context = context;
        }


        [HttpPost("createProduct")]
        public async Task<IActionResult> CreateProduct([FromBody] CreateProductRequest newItem)
        {
            if (newItem == null ||
                string.IsNullOrWhiteSpace(newItem.ProductName) ||
                newItem.Price <= 0 || newItem.Stock <= 0 )
            {
                return BadRequest("Dữ liệu không hợp lệ");
            }

            try
            {

                var isHaveItem = await _context.Products.FirstOrDefaultAsync(x => x.ProductName == newItem.ProductName);
                if (isHaveItem != null)
                {
                    return BadRequest("Sản phẩm đã tồn tại");
                }

                var newProduct = new Product
                {
                    ProductName = newItem.ProductName,
                    Description = newItem.Description,
                    Price = newItem.Price.Value,
                    Stock = newItem.Stock.Value,
                    Category = newItem.Category,
                    Brand = newItem.Brand,
                    Color = newItem.Color,
                    
                };

                await _context.Products.AddAsync(newProduct);
                await _context.SaveChangesAsync();
                return Ok("Đã lưu sản phẩm thành công");
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Lỗi xảy ra trong phương thức CreateProduct(): {ex.Message}");
                return StatusCode(StatusCodes.Status500InternalServerError, "Lỗi nội bộ máy chủ");
            }
        }

        [HttpDelete("removeProduct/{productId}")]
        public async Task<IActionResult> RemoveProduct(int productId)
        {
            using (var transaction = await _context.Database.BeginTransactionAsync())
            {
                try
                {
                    var removeItem = await _context.Products.FirstOrDefaultAsync(x => x.ProductId == productId);
                    if (removeItem == null)
                    {
                        return NotFound("Không tìm thấy sản phẩm");
                    }

                    var relatedImages = await _context.ProductImages.Where(x => x.ProductId == productId).ToListAsync();
                    if (relatedImages.Any())
                    {
                        _context.ProductImages.RemoveRange(relatedImages);
                        await _context.SaveChangesAsync();
                    }

                    _context.CartItems.RemoveRange(_context.CartItems.Where(x => x.ProductId == productId));
                    _context.Products.Remove(removeItem);
                    await _context.SaveChangesAsync();
                    await transaction.CommitAsync();
                    return Ok("Đã xóa sản phẩm thành công");
                }
                catch (DbUpdateException dbEx)
                {
                    await transaction.RollbackAsync();
                    Console.WriteLine($"Lỗi xảy ra trong phương thức RemoveProduct() khi cập nhật database: {dbEx.Message}");
                    Console.WriteLine($"Chi tiết lỗi nội bộ: {dbEx.InnerException?.Message}");
                    return StatusCode(StatusCodes.Status500InternalServerError, "Lỗi khi cập nhật database");
                }
                catch (Exception ex)
                {
                    await transaction.RollbackAsync();
                    Console.WriteLine($"Lỗi xảy ra trong phương thức RemoveProduct(): {ex.Message}");
                    return StatusCode(StatusCodes.Status500InternalServerError, "Lỗi nội bộ máy chủ");
                }
            }
        }

        [HttpPut("uppdateProduct/{ProductID}")]
        public async Task<IActionResult> UppdateProduct(int ProductID, [FromBody] UppdateProductRequest uppdateProduct)
        {
            try
            {
                var uppItem = await _context.Products.FindAsync(ProductID);
                if(uppItem == null)
                {
                    return NotFound("Không tìm thấy sản phẩm.");
                }

                uppItem.ProductName = uppdateProduct.ProductName;
                uppItem.Description = uppdateProduct.Description;
                uppItem.Price = uppdateProduct.Price.Value;
                uppItem.Stock = uppdateProduct.Stock.Value;
                

                _context.Products.Update(uppItem);
                await _context.SaveChangesAsync();
                return Ok("Bạn đã cập nhật thành công!");
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Lỗi xảy ra trong phương thức DeleteAccount(): {ex.Message}");
                return StatusCode(StatusCodes.Status500InternalServerError, "Lỗi nội bộ máy chủ");
            }

        }
    }
}
