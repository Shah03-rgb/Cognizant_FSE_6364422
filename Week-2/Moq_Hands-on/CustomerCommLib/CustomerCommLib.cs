namespace CustomerCommLib;

public class CustomerComm_ {
    private IMailSender _mailSender;

    public CustomerComm_(IMailSender mailSender) {
        _mailSender = mailSender;
    }

    public bool SendMailToCustomer() {
        _mailSender.SendMail("cust123@abc.com", "Some Message");
        return true;
    }
}
