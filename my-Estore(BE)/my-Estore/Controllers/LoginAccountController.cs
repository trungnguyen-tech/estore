using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using my_Estore.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using my_Estore.Models.Requests;

namespace my_Estore.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginAccountController : ControllerBase
    {
        private readonly myEStoreContext _context;

        public LoginAccountController(myEStoreContext context)
        {
            _context = context;
        }

        // GET: api/LoginAccount
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Account>>> GetAccounts()
        {
            try
            {
                var accounts = await _context.Accounts.ToListAsync();
                return Ok(accounts);
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Lỗi xảy ra trong phương thức GetAccounts(): {ex.Message}");
                return StatusCode(StatusCodes.Status500InternalServerError, "Lỗi nội bộ máy chủ");
            }
        }

        // POST: api/LoginAccount
        [HttpPost("authenticate")]
        public async Task<IActionResult> AuthenticateUser([FromBody] LoginRequest loginRequest)
        {
            try
            {
                // Ghi log thông tin đầu vào
                Console.WriteLine($"Đang xác thực người dùng: {loginRequest.UserName}");
                var account = await _context.Accounts.FirstOrDefaultAsync(x => x.UserName == loginRequest.UserName && x.Password == loginRequest.Password);

                if (account == null)
                {
                    return BadRequest("Tên đăng nhập hoặc mật khẩu không chính xác.");
                }

                account.Password = "";
                return Ok(account);
            }
            catch (Exception ex)
            {
                // Log lỗi ở đây
                Console.WriteLine($"Lỗi xảy ra trong phương thức AuthenticateUser(): {ex.Message}");
                return StatusCode(StatusCodes.Status500InternalServerError, "Lỗi nội bộ máy chủ");
            }
        }
        [HttpPut("UppdateAccount/{userName}")]
        public async Task<IActionResult> UppdateAccount(string userName, [FromBody] AccountUpdateRequest accounts)
        {
            try
            {
                var account = await _context.Accounts.FindAsync(userName);
                
                if(account == null)
                {
                    return NotFound("Không tìm thấy account");
                }

                account.Address = accounts.Address;
                account.PhoneNumber = accounts.PhoneNumber;
                account.Email = accounts.Email;
                account.FullName = accounts.FullName;
                account.UpdatedAt = DateTime.UtcNow;

                _context.Accounts.Update(account);
                await _context.SaveChangesAsync();
                return Ok("Bạn đã cập nhật thành công!");
            }
            catch (Exception ex) {
                Console.WriteLine($"Lỗi xảy ra trong phương thức UpdateAccount(): {ex.Message}");
                return StatusCode(StatusCodes.Status500InternalServerError, "Lỗi nội bộ máy chủ");
            }
        }
        [HttpDelete("removeAcc/{UserName}")]
        public async Task<IActionResult> removeAccount(string UserName)
        {
            if (string.IsNullOrWhiteSpace(UserName))
            {
                return BadRequest("Tên đăng nhập không hợp lệ");
            }
            try
            {
                var account = await _context.Accounts.FirstOrDefaultAsync(x => x.UserName == UserName);
                if(account == null)
                {
                    return NotFound("Tài khoản không tồn tại");
                }

                _context.Accounts.Remove(account);
                await _context.SaveChangesAsync();
                return Ok("Tài khoản đã được xóa thành công");
            }catch (Exception ex)
            {
                Console.WriteLine($"Lỗi xảy ra trong phương thức DeleteAccount(): {ex.Message}");
                return StatusCode(StatusCodes.Status500InternalServerError, "Lỗi nội bộ máy chủ");
            }
        }
    }
}
