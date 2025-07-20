using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using JwtAuthDemo.Models;

namespace JwtAuthDemo.Services
{
    public class UserService : IUserService
    {
        private readonly IConfiguration _configuration;
        
        // In-memory user store for demo purposes
        private readonly List<User> _users = new()
        {
            new User { Id = 1, Username = "admin", Password = "admin123", Role = "Admin", Email = "admin@demo.com" },
            new User { Id = 2, Username = "user", Password = "user123", Role = "User", Email = "user@demo.com" },
            new User { Id = 3, Username = "manager", Password = "manager123", Role = "Manager", Email = "manager@demo.com" }
        };

        public UserService(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public User? ValidateUser(string username, string password)
        {
            // In production, hash passwords and use proper user store
            return _users.FirstOrDefault(u => 
                u.Username.Equals(username, StringComparison.OrdinalIgnoreCase) && 
                u.Password == password);
        }

        public UserProfile GetUserProfile(string username)
        {
            var user = _users.FirstOrDefault(u => 
                u.Username.Equals(username, StringComparison.OrdinalIgnoreCase));
            
            if (user == null)
                throw new ArgumentException("User not found");

            return new UserProfile
            {
                Id = user.Id,
                Username = user.Username,
                Role = user.Role,
                Email = user.Email,
                CreatedAt = user.CreatedAt,
                IsActive = user.IsActive
            };
        }

        public string GenerateJwtToken(User user)
        {
            var key = _configuration["Jwt:Key"];
            var issuer = _configuration["Jwt:Issuer"];
            var audience = _configuration["Jwt:Audience"];
            var duration = int.Parse(_configuration["Jwt:DurationInMinutes"] ?? "60");

            var claims = new[]
            {
                new Claim(ClaimTypes.NameIdentifier, user.Id.ToString()),
                new Claim(ClaimTypes.Name, user.Username),
                new Claim(ClaimTypes.Role, user.Role),
                new Claim(ClaimTypes.Email, user.Email),
                new Claim("username", user.Username),
                new Claim("role", user.Role)
            };

            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(key!));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

            var token = new JwtSecurityToken(
                issuer: issuer,
                audience: audience,
                claims: claims,
                expires: DateTime.UtcNow.AddMinutes(duration),
                signingCredentials: credentials
            );

            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }
}