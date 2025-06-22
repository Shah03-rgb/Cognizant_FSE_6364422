using System;
using System.Collections.Generic;
using System.Diagnostics;

namespace ECommerceSearchDemo
{

    public sealed class Product
    {
        public int    ProductId   { get; }
        public string ProductName { get; }
        public string Category    { get; }

        public Product(int id, string name, string category)
        {
            ProductId   = id;
            ProductName = name;
            Category    = category;
        }

        public override string ToString() =>
            $"[{ProductId}] {ProductName} ({Category})";
    }


    public static class SearchAlgorithms
    {

        public static Product? LinearSearch(Product[] products, int targetId)
        {
            for (int i = 0; i < products.Length; i++)
            {
                if (products[i].ProductId == targetId)
                    return products[i];
            }
            return null;
        }


        public static Product? BinarySearch(Product[] sortedProducts, int targetId)
        {
            int left  = 0;
            int right = sortedProducts.Length - 1;

            while (left <= right)
            {
                int mid      = left + (right - left) / 2;
                int midValue = sortedProducts[mid].ProductId;

                if (midValue == targetId)
                    return sortedProducts[mid];
                if (targetId < midValue)
                    right = mid - 1;
                else
                    left  = mid + 1;
            }

            return null;
        }
    }

    internal class Program
    {
        private static void Main()
        {
            var products = new[]
            {
                new Product(5, "Wireless Mouse",     "Electronics"),
                new Product(2, "Yoga Mat",           "Fitness"),
                new Product(9, "Electric Toothbrush","Health"),
                new Product(1, "Laptop Stand",       "Office"),
                new Product(7, "Noise-Cancelling Headphones","Electronics")
            };

            var sorted = (Product[])products.Clone();
            Array.Sort(sorted, (a, b) => a.ProductId.CompareTo(b.ProductId));

            Console.WriteLine("=== Products ===");
            foreach (var p in sorted) Console.WriteLine(p);
            Console.WriteLine();

            const int targetId = 7;
            Console.WriteLine($"Searching for ProductId = {targetId}\n");

            var sw = Stopwatch.StartNew();
            var linResult = SearchAlgorithms.LinearSearch(products, targetId);
            sw.Stop();
            Console.WriteLine($"Linear Search:  Found: {linResult}");
            Console.WriteLine($"Linear Search Time: {sw.Elapsed.TotalMilliseconds:F4} ms\n");

            sw.Restart();
            var binResult = SearchAlgorithms.BinarySearch(sorted, targetId);
            sw.Stop();
            Console.WriteLine($"Binary Search:  Found: {binResult}");
            Console.WriteLine($"Binary Search Time: {sw.Elapsed.TotalMilliseconds:F4} ms\n");

            Console.WriteLine("Press any key to exit...");
            Console.ReadKey();
        }
    }
}
