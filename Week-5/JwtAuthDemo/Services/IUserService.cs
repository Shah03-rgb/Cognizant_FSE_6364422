using JwtAuthDemo.Models;

namespace JwtAuthDemo.Services
{
    public interface IUserService
    {
        User? ValidateUser(string username, string password);
        string GenerateJwtToken(User user);
        UserProfile GetUserProfile(string username);
    }
}