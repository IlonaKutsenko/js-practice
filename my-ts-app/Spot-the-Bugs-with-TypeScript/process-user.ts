 interface User {
    name: string;
    age: number;
    email: string;
    getGreeting(): string; 
}
 
 const user: User = {
  name: "Daniel",
  age: 26,
  email: '123@gmail.com',
  getGreeting: function() {
    return `Hello, my name is ${this.name}.`;
  }
};

function processUser(userObject:User) {
  // Bug 1: Typo in a standard method name.
  const announcement = "Processing user data...";
  console.log(announcement.toLocaleLowerCase());

  // Bug 2: Trying to access a property that doesn't exist.
  console.log(`User's email: ${userObject.email}`);

  // Bug 3: Forgetting to call a function/method.
  const greeting = userObject.getGreeting();
  if (greeting) {
     console.log("Greeting function exists.");
  }
}

processUser(user);