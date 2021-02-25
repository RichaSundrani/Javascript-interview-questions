/*
When it comes to inheritance, JavaScript only has one construct: objects. 
Each object has a private property which holds a link to another object called its prototype. 
That prototype object has a prototype of its own, and so on until an object is reached with null as its prototype. 
By definition, null has no prototype, and acts as the final link in this prototype chain.
*/

let foo = function () {
    this.a = 1;
    this.b = 2;
 }; 

 let obj = new foo(); // {a: 1, b: 2}

 console.log(obj);
 foo.prototype.b = 3;
 foo.prototype.c = 4;
 // foo.prototype.d = 4;
// do not set the prototype foo.prototype = {b:3,c:4}; this will break the prototype chain;


 console.log(obj.a); // 1
// Is there an 'a' own property on obj? Yes, and its value is 1.

console.log(obj.b); // 2
console.log(obj.__proto__.b); // 3
// Is there a 'b' own property on obj? Yes, and its value is 2.
// The prototype also has a 'b' property, but it's not visited.
// This is called Property Shadowing

console.log(obj.c); // 4
// Is there a 'c' own property on obj? No, check its prototype.
// Is there a 'c' own property on obj.[[Prototype]]? Yes, its value is 4.

console.log(obj.d); // undefined
// Is there a 'd' own property on obj? No, check its prototype.
// Is there a 'd' own property on obj.[[Prototype]]? No, check its prototype.
// obj.[[Prototype]].[[Prototype]] is Object.prototype and there is no 'd' property by default, check its prototype.
// obj.[[Prototype]].[[Prototype]].[[Prototype]] is null, stop searching,
// no property found, return undefined.


