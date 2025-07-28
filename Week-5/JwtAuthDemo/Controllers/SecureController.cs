using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;
using JwtAuthDemo.Services;

namespace JwtAuthDemo.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [Authorize]
    public class SecureController : ControllerBase
    {
        private readonly IUserService _userService;

        public SecureController(IUserService userService)
        {
            _userService = userService;
        }

        [HttpGet("data")]
        public IActionResult GetSecureData()
        {
            var username = User.Identity?.Name;
            var role = User.FindFirst(ClaimTypes.Role)?.Value;
            
            return Ok(new
            {
                Message = "This is protected data",
                Username = username,
                Role = role,
                Timestamp = DateTime.UtcNow
            });
        }

        [HttpGet("profile")]
        public IActionResult GetProfile()
        {
            try
            {
                var username = User.FindFirst(ClaimTypes.Name)?.Value;
                if (string.IsNullOrEmpty(username))
                {
                    return BadRequest("Username not found in token");
                }

                var profile = _userService.GetUserProfile(username);
                return Ok(profile);
            }
            catch (ArgumentException ex)
            {
                return NotFound(new { Message = ex.Message });
            }
        }

        [HttpGet("claims")]
        public IActionResult GetUserClaims()
        {
            return Ok(new
            {
                Claims = User.Claims.Select(c => new { c.Type, c.Value }).ToArray(),
                Identity = User.Identity?.Name,
                IsAuthenticated = User.Identity?.IsAuthenticated ?? false
            });
        }
    }
}