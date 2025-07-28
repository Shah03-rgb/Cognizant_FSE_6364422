using System;

namespace FactoryMethodPatternExample
{
    public interface IDocument
    {
        void Open();
        void Save();
    }

    public sealed class WordDocument : IDocument
    {
        public void Open() => Console.WriteLine("Opening Word document...");
        public void Save() => Console.WriteLine("Saving Word document...");
    }

    public sealed class PdfDocument : IDocument
    {
        public void Open() => Console.WriteLine("Opening PDF document...");
        public void Save() => Console.WriteLine("Saving PDF document...");
    }

    public sealed class ExcelDocument : IDocument
    {
        public void Open() => Console.WriteLine("Opening Excel spreadsheet...");
        public void Save() => Console.WriteLine("Saving Excel spreadsheet...");
    }

    public abstract class DocumentFactory
    {
        public abstract IDocument CreateDocument();

        public void OpenAndSave()
        {
            var doc = CreateDocument();
            doc.Open();
            doc.Save();
        }
    }

    public sealed class WordDocumentFactory : DocumentFactory
    {
        public override IDocument CreateDocument() => new WordDocument();
    }

    public sealed class PdfDocumentFactory : DocumentFactory
    {
        public override IDocument CreateDocument() => new PdfDocument();
    }

    public sealed class ExcelDocumentFactory : DocumentFactory
    {
        public override IDocument CreateDocument() => new ExcelDocument();
    }

    internal class Program
    {
        private static void Main()
        {
            Console.WriteLine("=== Factory Method Demo ===\n");

            DocumentFactory[] factories = {
                new WordDocumentFactory(),
                new PdfDocumentFactory(),
                new ExcelDocumentFactory()
            };

            foreach (var factory in factories)
            {
                Console.WriteLine($"-- {factory.GetType().Name.Replace("DocumentFactory", "")} --");
                factory.OpenAndSave();
                Console.WriteLine();
            }

            Console.WriteLine("Press any key to exit...");
            Console.ReadKey();
        }
    }
}
