// Note: Call is for comma (separated list) and Apply is for Array.

// Call: The call() method invokes a function with a given `this` value and arguments provided one by one.
var person1 = {firstName: 'Richard', lastName: 'Parker'};
var person2 = {firstName: 'Nimmu', lastName: 'Gt'};


function sendMessage(message1, message2){
    console.log(`${message1} ${this.firstName} ${this.lastName} ${message2}` )
}; 

// sendMessage('Welcome', 'Have a great day!');   // Welcome undefined undefined Have a great day!
sendMessage.call(person1, 'Welcome', 'Have a great day!');  // Welcome Richard Parker Have a great day!
sendMessage.call(person2, 'Welcome', 'Have a great day!');  // Welcome Nimmu Gt Have a great day!

// Apply: Invokes the function and allows you to pass in arguments as an array
sendMessage.apply(person1, ['Welcome', 'Have a great day!']);  // Welcome Richard Parker Have a great day!
sendMessage.apply(person2, ['Welcome', 'Have a great day!']);  // Welcome Nimmu Gt Have a great day!

// bind: returns a new function, allowing you to pass in an array and any number of arguments
let p1 = sendMessage.bind(person1); 
let p2 = sendMessage.bind(person2); 
p1('Welcome', 'Have a great day!');   // Welcome Richard Parker Have a great day!
p2(['Welcome', 'Have a great day!']); // Welcome,Have a great day! Nimmu Gt undefined

