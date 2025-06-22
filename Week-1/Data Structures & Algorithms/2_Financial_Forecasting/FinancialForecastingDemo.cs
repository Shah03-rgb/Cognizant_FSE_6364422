using System;
using System.Collections.Generic;

namespace FinancialForecastingDemo
{
    internal class Program
    {
        static void Main()
        {
            Console.WriteLine("=== Financial Forecasting (Recursive) ===\n");

            var pastGrowthRates = new List<double> { 0.05, 0.03, 0.07 };

            double initialValue = 1000.0; // starting amount
            int periodsToForecast = pastGrowthRates.Count;

            Console.WriteLine($"Initial Value: {initialValue:C}");
            Console.WriteLine($"Applying growth rates: {string.Join(", ", pastGrowthRates)}\n");

            double futureValue = CalculateFutureValueRecursive(initialValue, pastGrowthRates, periodsToForecast);
            Console.WriteLine($"\nForecasted Value after {periodsToForecast} periods: {futureValue:C}");

            Console.WriteLine("\nPress any key to exit...");
            Console.ReadKey();
        }


        private static double CalculateFutureValueRecursive(double currentValue, List<double> growthRates, int n)
        {
            if (n == 0)
                return currentValue;
            double rate = growthRates[n - 1];
            double updatedValue = currentValue * (1 + rate);

            return CalculateFutureValueRecursive(updatedValue, growthRates, n - 1);
        }
    }
}
