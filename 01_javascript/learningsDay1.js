//Variables in JavaScript
// 1) const (constant)
// const is used for values that should NOT be reassigned.
// Example: accountId should stay fixed (like a unique ID).
const accountId = 14455;

// This will cause an error because const cannot be reassigned
// accountId = 2;


// 2) let (block-scoped variable)
// let is used for values that CAN change later.
let accountEmail = "xyz@google.com";


// 3) var (function-scoped - avoid using it)

var accountPass = "12345";

// 4) JavaScript allows creating variables without keywords (NOT recommended)
// If you write a variable without let/const/var,
// it can become a global variable accidentally (bad practice).
// Always use let or const.
accountCity = "Jaipur";

// console.log() prints a single value
console.log(accountId);

// console.table() shows data in a nice table format
console.table([accountEmail, accountId, accountPass, accountCity]);
