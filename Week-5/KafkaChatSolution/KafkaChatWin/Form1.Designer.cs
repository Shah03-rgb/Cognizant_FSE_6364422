namespace KafkaChatWin
{
    partial class Form1
    {
        private System.ComponentModel.IContainer components = null;
        private System.Windows.Forms.TextBox txtMessages;
        private System.Windows.Forms.TextBox txtInput;
        private System.Windows.Forms.Button btnSend;

        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        private void InitializeComponent()
        {
            this.txtMessages = new System.Windows.Forms.TextBox();
            this.txtInput = new System.Windows.Forms.TextBox();
            this.btnSend = new System.Windows.Forms.Button();
            this.SuspendLayout();
            //
            // txtMessages
            //
            this.txtMessages.Location = new System.Drawing.Point(12, 12);
            this.txtMessages.Multiline = true;
            this.txtMessages.ReadOnly = true;
            this.txtMessages.ScrollBars = System.Windows.Forms.ScrollBars.Vertical;
            this.txtMessages.Size = new System.Drawing.Size(460, 300);
            //
            // txtInput
            //
            this.txtInput.Location = new System.Drawing.Point(12, 320);
            this.txtInput.Size = new System.Drawing.Size(360, 23);
            //
            // btnSend
            //
            this.btnSend.Location = new System.Drawing.Point(380, 320);
            this.btnSend.Size = new System.Drawing.Size(92, 23);
            this.btnSend.Text = "Send";
            this.btnSend.Click += new System.EventHandler(this.btnSend_Click);
            //
            // Form1
            //
            this.ClientSize = new System.Drawing.Size(484, 361);
            this.Controls.Add(this.txtMessages);
            this.Controls.Add(this.txtInput);
            this.Controls.Add(this.btnSend);
            this.Name = "Form1";
            this.Text = "Kafka Chat";
            this.FormClosing += new System.Windows.Forms.FormClosingEventHandler(this.OnFormClosing);
            this.ResumeLayout(false);
            this.PerformLayout();
        }
    }
}