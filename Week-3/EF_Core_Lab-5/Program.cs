using System;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

class Program
{
    static async Task Main(string[] args)
    {
        using var context = new AppDbContext();

        // 1. Retrieve all products
        var allProducts = await context.Products.ToListAsync();
        Console.WriteLine("All Products:");
        allProducts.ForEach(p => Console.WriteLine($"{p.Name} - ₹{p.Price:N2}"));

        // 2. Find a product by primary key
        var productById = await context.Products.FindAsync(1);
        Console.WriteLine($"\nFound by ID 1: {productById?.Name}");

        // 3. Find first product with Price > 50,000
        var expensive = await context.Products.FirstOrDefaultAsync(p => p.Price > 50000);
        Console.WriteLine($"\nFirst expensive (>₹50,000): {expensive?.Name}");
    }
}
