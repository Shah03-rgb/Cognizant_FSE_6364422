using System;
using System.Threading;
using System.Threading.Tasks;
using System.Windows.Forms;
using Confluent.Kafka;

namespace KafkaChatWin
{
    public partial class Form1 : Form
    {
        private IProducer<Null, string> _producer;
        private IConsumer<Ignore, string> _consumer;
        private CancellationTokenSource _cts = new();

        public Form1()
        {
            InitializeComponent();
            InitKafka();
        }

        private void InitKafka()
        {
            var pConfig = new ProducerConfig { BootstrapServers = "localhost:9092" };
            _producer = new ProducerBuilder<Null, string>(pConfig).Build();

            var cConfig = new ConsumerConfig
            {
                BootstrapServers = "localhost:9092",
                GroupId = Guid.NewGuid().ToString(),
                AutoOffsetReset = AutoOffsetReset.Latest
            };
            _consumer = new ConsumerBuilder<Ignore, string>(cConfig).Build();
            _consumer.Subscribe("chat");

            Task.Run(() =>
            {
                try
                {
                    while (!_cts.Token.IsCancellationRequested)
                    {
                        var msg = _consumer.Consume(_cts.Token);
                        AppendMessage(msg.Message.Value);
                    }
                }
                catch (OperationCanceledException) { }
            });
        }

        private void AppendMessage(string message)
        {
            if (txtMessages.InvokeRequired)
            {
                txtMessages.Invoke(new Action(() => AppendMessage(message)));
            }
            else
            {
                txtMessages.AppendText(message + Environment.NewLine);
            }
        }

        private async void btnSend_Click(object sender, EventArgs e)
        {
            var text = txtInput.Text.Trim();
            if (string.IsNullOrEmpty(text)) return;

            var user = Environment.UserName;
            var chatMsg = $"{DateTime.Now:HH:mm} [{user}]: {text}";
            await _producer.ProduceAsync("chat", new Message<Null, string> { Value = chatMsg });
            txtInput.Clear();
        }

        private void OnFormClosing(object sender, FormClosingEventArgs e)
        {
            _cts.Cancel();
            _consumer.Close();
        }
    }
}