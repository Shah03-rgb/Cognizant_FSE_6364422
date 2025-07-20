using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace JwtAuthDemo.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [Authorize(Roles = "Manager,Admin")]
    public class ManagerController : ControllerBase
    {
        [HttpGet("reports")]
        public IActionResult GetReports()
        {
            return Ok(new
            {
                Message = "Manager reports (Manager or Admin only)",
                Reports = new[]
                {
                    new { Name = "Sales Report", Status = "Completed", CreatedDate = DateTime.UtcNow.AddDays(-1) },
                    new { Name = "User Activity", Status = "In Progress", CreatedDate = DateTime.UtcNow.AddHours(-3) },
                    new { Name = "Performance Metrics", Status = "Pending", CreatedDate = DateTime.UtcNow.AddHours(-1) }
                },
                AccessedBy = User.Identity?.Name,
                Role = User.FindFirst("role")?.Value
            });
        }

        [HttpGet("team")]
        public IActionResult GetTeamData()
        {
            return Ok(new
            {
                Message = "Team management data",
                TeamMembers = new[]
                {
                    new { Name = "John Doe", Role = "Developer", Status = "Active" },
                    new { Name = "Jane Smith", Role = "Designer", Status = "Active" },
                    new { Name = "Bob Johnson", Role = "Tester", Status = "On Leave" }
                }
            });
        }
    }
}