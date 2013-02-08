public class MyClass {
  private string myProperty;

  public MyClass() {
    this.myProperty = this.initMyProperty();
  }

  private String initMyProperty() {
    // Do some initialization stuff
    return "myValue";
  }
}