namespace NUnit_handson;

[TestFixture]
public class CalculatorTests
{
    private IMathLibrary? _calculator;


    [SetUp]
    public void SetUp()
    {
        _calculator = new SimpleCalculator();
    }

    [TearDown]
    public void TearDown()
    {
        _calculator = null;
    }

    [TestCase(5, 4, 9)]
    [TestCase(-3, 7, 4)]
    [TestCase(0, 0, 0)]
    public void Addition_ReturnsExpected(double a, double b, double expected)
    {
        var result = _calculator!.Addition(a, b);
        Assert.That(result, Is.EqualTo(expected));
    }

    [TestCase(9, 4, 5)]
    [TestCase(10, 6, 4)]
    public void Subtraction_ReturnsExpected(double a, double b, double expected)
    {
        var result = _calculator!.Subtraction(a, b);
        Assert.That(result, Is.EqualTo(expected));
    }

    [TestCase(4, 5, 20)]
    [TestCase(-3, 4, -12)]
    public void Multiplication_ReturnsExpected(double a, double b, double expected)
    {
        var result = _calculator!.Multiplication(a, b);
        Assert.That(result, Is.EqualTo(expected));
    }

    [TestCase(15, 5, 3)]
    [TestCase(16, 4, 4)]
    public void Division_ReturnsExpected(double a, double b, double expected)
    {
        var result = _calculator!.Division(a, b);
        Assert.That(result, Is.EqualTo(expected));
    }

    [Test]
    public void Division_ByZero_ThrowsException()
    {
        Assert.Throws<System.ArgumentException>(() => _calculator!.Division(5, 0));
    }

}