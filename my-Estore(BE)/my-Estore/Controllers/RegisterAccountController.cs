using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using my_Estore.Models;
using my_Estore.Models.Requests;
using System;
using System.Threading.Tasks;

namespace my_Estore.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RegisterAccountController : ControllerBase
    {
        private readonly myEStoreContext _context;

        public RegisterAccountController(myEStoreContext context)
        {
            _context = context;
        }

        [HttpPost("registerAccount")]
        public async Task<IActionResult> RegisterAccount([FromBody] RegisterRequest registerRequest)
        {
            if (registerRequest == null ||
                string.IsNullOrWhiteSpace(registerRequest.UserName) ||
                string.IsNullOrWhiteSpace(registerRequest.Password) ||
                string.IsNullOrWhiteSpace(registerRequest.Email) ||
                string.IsNullOrWhiteSpace(registerRequest.Role))
            {
                return BadRequest("Dữ liệu không hợp lệ.");
            }

            try
            {
                var existingAccount = await _context.Accounts.FirstOrDefaultAsync(x => x.UserName == registerRequest.UserName);
                if (existingAccount != null)
                {
                    return BadRequest("Tên đăng nhập đã tồn tại.");
                }

                var newAccount = new Account
                {
                    UserName = registerRequest.UserName,
                    Password = registerRequest.Password,
                    Email = registerRequest.Email,
                    Role = registerRequest.Role,
                    CreatedAt = DateTime.UtcNow
                };

                await _context.Accounts.AddAsync(newAccount);
                await _context.SaveChangesAsync();

                return Ok(newAccount);
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Lỗi xảy ra trong phương thức RegisterAccount(): {ex.Message}");
                return StatusCode(StatusCodes.Status500InternalServerError, "Lỗi nội bộ máy chủ");
            }
        }
        [HttpPut("changePassword/{userName}")]
        public async Task<IActionResult> ChangePassword(string userName,[FromBody] ChangePasswordRequest changePass)
        {
            try
            {
                var account = await _context.Accounts.FindAsync(userName);
                if(account == null)
                {
                    return NotFound("Không tìm thấy account");
                }

                account.Password = changePass.Password;
                account.UpdatedAt = DateTime.UtcNow;

                await _context.SaveChangesAsync();
                return Ok("Bạn đã thay đổi mật khẩu thành công!!!");
            } catch (Exception ex)
            {
                Console.WriteLine($"Lỗi xảy ra trong phương thức RegisterAccount(): {ex.Message}");
                return StatusCode(StatusCodes.Status500InternalServerError, "Lỗi nội bộ máy chủ");
            }
        }

        }
}