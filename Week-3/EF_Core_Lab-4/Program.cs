// See https://aka.ms/new-console-template for more information
using System;
using System.Threading.Tasks;

class Program
{
    static async Task Main(string[] args)
    {
        using var context = new AppDbContext();

        // Create category data
        var electronics = new Category { Name = "Electronics" };
        var groceries = new Category { Name = "Groceries" };

        // Add categories to database
        await context.Categories.AddRangeAsync(electronics, groceries);

        // Create product data and assign categories
        var laptop = new Product { Name = "Laptop", Price = 75000, Category = electronics };
        var riceBag = new Product { Name = "Rice Bag", Price = 1200, Category = groceries };

        // Add products to database
        await context.Products.AddRangeAsync(laptop, riceBag);

        // Save changes to the database
        await context.SaveChangesAsync();

        Console.WriteLine("Initial data inserted.");
    }
}
