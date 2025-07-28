using System;
using System.Threading.Tasks;
using Confluent.Kafka;

namespace ChatConsole.Producer
{
    class Program
    {
        static async Task Main(string[] args)
        {
            var config = new ProducerConfig { BootstrapServers = "localhost:9092" };
            using var producer = new ProducerBuilder<Null, string>(config).Build();

            Console.Write("Enter your username: ");
            string user = Console.ReadLine();
            Console.WriteLine("Type messages and press ENTER to send. Ctrl+C to exit.");

            while (true)
            {
                var msg = Console.ReadLine();
                if (string.IsNullOrWhiteSpace(msg)) continue;

                var payload = $"{DateTime.Now:HH:mm} [{user}]: {msg}";
                await producer.ProduceAsync("chat", new Message<Null, string> { Value = payload });
            }
        }
    }
}