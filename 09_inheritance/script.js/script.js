// Parent constructor function
function Parent(name, age) {
    this.name = name;
    this.age = age;
  }
  
  // Adding a method to the parent's prototype
  Parent.prototype.greet = function() {
    console.log(`Hello, ${this.name}!`);
  };
  
  // Child constructor function
  function Child(name, age, location) {
    // Calling the parent constructor function
    Parent.call(this, name, age);
    this.location = location;
  }
  
  // Setting up the prototype chain
  Child.prototype = Object.create(Parent.prototype);// child ke proto me ek object banaya usme parent ka proto inherit krliya
  Child.prototype.constructor = Child;
  
  // Creating an instance of the child
  const instance = new Child("Arslan", 24, "Lahore");
  
  console.log(instance.name, instance.age, instance.location);
  instance.greet(); // This should work now
