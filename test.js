class A {
     display()
    {
     console.log("A is invoked<br>");
    }
  }
class B extends A {
    display()
    {
     console.log("B is invoked");
    }
  }

var a=[new A(), new B()]

a.forEach(function(msg) {
    msg.display();
});