using CustomerCommLib;
using Moq;
namespace CustomerComm.Tests;

[TestFixture]
public class Tests {

    private Mock<IMailSender> _mockMailSender;
    private CustomerComm_ _customerComm;

    [OneTimeSetUp]
    public void Init() {
        _mockMailSender = new Mock<IMailSender>();
        _mockMailSender.Setup(m => m.SendMail(It.IsAny<string>(), It.IsAny<string>())).Returns(true);
        _customerComm = new CustomerComm_(_mockMailSender.Object);
    }

    [TestCase]
    public void SendMailToCustomer_ReturnsTrue() {
        var result = _customerComm.SendMailToCustomer();
        Assert.That(result, Is.True);
    }
}
