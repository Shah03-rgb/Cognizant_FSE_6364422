using System;
using Confluent.Kafka;

namespace ChatConsole.Consumer
{
    class Program
    {
        static void Main(string[] args)
        {
            var config = new ConsumerConfig
            {
                BootstrapServers = "localhost:9092",
                GroupId = "chat-console-group",
                AutoOffsetReset = AutoOffsetReset.Earliest
            };

            using var consumer = new ConsumerBuilder<Ignore, string>(config).Build();
            consumer.Subscribe("chat");

            Console.CancelKeyPress += (_, e) =>
            {
                e.Cancel = true;
                consumer.Close();
            };

            Console.WriteLine("Waiting for chat messages...");
            while (true)
            {
                var cr = consumer.Consume();
                Console.WriteLine(cr.Message.Value);
            }
        }
    }
}