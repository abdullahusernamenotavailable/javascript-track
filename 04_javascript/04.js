// singleton 

// object literals 
const user = {
  name: "Abdullah",
  age: 20,
  isStudent: true
};
console.log(user.name);      // dot
console.log(user["age"]);    // bracket
user.city = "Delhi";     // add
user.age = 21;           // update
delete user.isStudent;   // delete
const user = {
  name: "Abdullah",
  address: {
    city: "Delhi",
    pincode: 110001
  }
};
//DE STRUCTURING
// console.log(user.address.city);
// const user = { name: "Abdullah", age: 20 };

// const { name, age } = user;
// console.log(name, age);
//Copy
// const user2 = { ...user };
//const updated = { ...user, age: 21 }; update while copy
// const a = { x: 1 };
// const b = { y: 2 };

// const merged = { ...a, ...b };
