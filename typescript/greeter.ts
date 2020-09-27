interface Person {
  firstName: string;
  lastName: string;
}

function greeter(person: Person):string{
  return "Hello, " + person.firstName + " " + person.lastName;
}

var user = { firstName: "Jane", lastName: "User" };

document.body.innerHTML = greeter(user);
