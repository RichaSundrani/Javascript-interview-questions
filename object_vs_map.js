/*
Objects are similar to Maps in that both let you set keys to values, retrieve those values, delete keys, 
and detect whether something is stored at a key. Due to this reason, Objects have been used as Maps historically. 
But there are important differences that make using a Map preferable in certain cases.

Differences: 
    1. The keys of an Object are Strings and Symbols, whereas they can be any value for a Map, including functions, objects, and any primitive.
    2. The keys in Map are ordered while keys added to Object are not. Thus, when iterating over it, a Map object returns keys in order of insertion.
    3. You can get the size of a Map easily with the size property, while the number of properties in an Object must be determined manually.
    4. A Map is an iterable and can thus be directly iterated, whereas iterating over an Object requires obtaining its keys in some fashion and iterating over them.
    5. An Object has a prototype, so it contains default keys that could collide with your own keys if you're not careful.
       A Map does not contain any keys by default. It only contains what is explicitly put into it.
    6. A Map may perform better in scenarios involving frequent addition and removal of key pairs.
*/

// Map 
// A Map object iterates its elements in insertion order,
// a for...of loop returns an array of [key, value] for each iteration.
// for (let [key, value] of mapName)
// for (let key of mapName.keys()) 
// for (let value of mapName.values())
// for (let [key, value] of mapName.entries())

let wrongMap = new Map()
wrongMap['bla'] = 'blaa'
wrongMap['bla2'] = 'blaaa2'

console.log(wrongMap)  // Map { bla: 'blaa', bla2: 'blaaa2' }
// this way of setting a property does not interact with the Map data structure. It uses the feature of the generic object. 
// The value of 'bla' is not stored in the Map for queries. Other operations on the data fail:
wrongMap.has('bla')    // false
wrongMap.delete('bla') // false
console.log(wrongMap)  // Map { bla: 'blaa', bla2: 'blaaa2' }

// Correct - way 
let employees = new Map()
employees.set('John', {phone: "123-456-1234", address: "123 N 1st Ave"})
employees.has('john') // true
employees.get('Jane') // undefined
employees.set('Jane', {phone: "456-789-0097", address: "321 S 2nd St"})
console.log(employees.get('John')) // {phone: "123-456-1234", address: "123 N 1st Ave"}
console.log(employees.size) // 2
console.log(employees.delete('Jdoe')) // false
console.log(employees.delete('John')) // true
console.log(employees.size) // 1

console.log("break");