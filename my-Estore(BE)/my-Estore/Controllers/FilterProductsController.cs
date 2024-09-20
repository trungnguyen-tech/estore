using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using my_Estore.Models;
using my_Estore.Models.Requests;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace my_Estore.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FilterProductsController : ControllerBase
    {
        private readonly myEStoreContext _context;

        public FilterProductsController(myEStoreContext context)
        {
            _context = context;
        }
        private async Task<ActionResult<IEnumerable<ProductDto>>> GetProductsAsync(
            string? q = null,
            string? cate = null,
            string? brand = null,
            bool? sort = null)
        {
            try
            {
                var query = _context.Products.AsQueryable();

                if(!string.IsNullOrEmpty(q) )
                {
                    query = query.Where(p => p.ProductName.Contains(q));
                }

                if (!string.IsNullOrEmpty(cate))
                {
                    query = query.Where(p => p.Category == cate);
                }

                if (!string.IsNullOrEmpty(brand))
                {
                    query = query.Where(p => p.Brand == brand);
                }

                if (sort.HasValue)
                {
                    query = sort.Value ? query.OrderByDescending(p => p.Price) : query.OrderBy(p => p.Price);
                }

                var products = await query.Include(p => p.ProductImages)
                    .Select(p => new ProductDto
                    {
                        ProductId = p.ProductId,
                        ProductName = p.ProductName,
                        Description = p.Description,
                        Price = p.Price,
                        Stock = p.Stock,
                        Category = p.Category,
                        Brand = p.Brand,
                        Color = p.Color,
                        ProductImages = p.ProductImages.Select(pi => pi.ImageUrl).ToList()
                    }).ToListAsync();

                return Ok(products);
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Lỗi xảy ra: {ex.Message}");
                Console.WriteLine($"Stack Trace: {ex.StackTrace}");
                return StatusCode(StatusCodes.Status500InternalServerError, "Lỗi nội bộ máy chủ");
            }
        }

        [HttpGet]
        public Task<ActionResult<IEnumerable<ProductDto>>> GetFilteredProducts(
            [FromQuery] string? q,
            [FromQuery] string? cate,
            [FromQuery] string? brand,
            [FromQuery] bool? sort )
            
        {
            return GetProductsAsync(q,cate, brand,sort);
        }
    }
}
