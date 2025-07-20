using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace JwtAuthDemo.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [Authorize(Roles = "Admin")]
    public class AdminController : ControllerBase
    {
        [HttpGet("dashboard")]
        public IActionResult GetAdminDashboard()
        {
            return Ok(new
            {
                Message = "Welcome to the admin dashboard",
                Data = new
                {
                    TotalUsers = 1000,
                    ActiveSessions = 45,
                    SystemStatus = "Online",
                    ServerTime = DateTime.UtcNow
                },
                UserInfo = new
                {
                    Username = User.Identity?.Name,
                    Role = User.FindFirst("role")?.Value
                }
            });
        }

        [HttpGet("users")]
        public IActionResult GetAllUsers()
        {
            return Ok(new
            {
                Message = "User management data (Admin only)",
                Users = new[]
                {
                    new { Id = 1, Username = "admin", Role = "Admin", Status = "Active", LastLogin = DateTime.UtcNow.AddHours(-2) },
                    new { Id = 2, Username = "user", Role = "User", Status = "Active", LastLogin = DateTime.UtcNow.AddHours(-5) },
                    new { Id = 3, Username = "manager", Role = "Manager", Status = "Active", LastLogin = DateTime.UtcNow.AddHours(-1) }
                }
            });
        }

        [HttpPost("settings")]
        public IActionResult UpdateSettings([FromBody] object settings)
        {
            return Ok(new 
            { 
                Message = "Settings updated successfully (Admin only)",
                UpdatedBy = User.Identity?.Name,
                Timestamp = DateTime.UtcNow
            });
        }
    }
}