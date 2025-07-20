using Microsoft.AspNetCore.Mvc;
using JwtAuthDemo.Models;
using JwtAuthDemo.Services;

namespace JwtAuthDemo.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly IUserService _userService;
        private readonly ILogger<AuthController> _logger;

        public AuthController(IUserService userService, ILogger<AuthController> logger)
        {
            _userService = userService;
            _logger = logger;
        }

        [HttpPost("login")]
        public IActionResult Login([FromBody] LoginModel model)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }

                var user = _userService.ValidateUser(model.Username, model.Password);
                
                if (user == null)
                {
                    _logger.LogWarning("Invalid login attempt for username: {Username}", model.Username);
                    return Unauthorized(new { Message = "Invalid username or password" });
                }

                var token = _userService.GenerateJwtToken(user);
                
                _logger.LogInformation("User {Username} logged in successfully", user.Username);
                
                return Ok(new TokenResponse
                {
                    Token = token,
                    Expires = DateTime.UtcNow.AddMinutes(60),
                    Username = user.Username,
                    Role = user.Role,
                    TokenType = "Bearer"
                });
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error during login process");
                return StatusCode(500, new { Message = "An error occurred during login" });
            }
        }

        [HttpGet("test-users")]
        public IActionResult GetTestUsers()
        {
            return Ok(new
            {
                Message = "Test users for authentication",
                Users = new[]
                {
                    new { Username = "admin", Password = "admin123", Role = "Admin" },
                    new { Username = "user", Password = "user123", Role = "User" },
                    new { Username = "manager", Password = "manager123", Role = "Manager" }
                }
            });
        }
    }
}