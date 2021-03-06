"use strict";

// Arrayπ

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

//2. Index position
const fruits = ["π", "π"];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[fruits.length - 1]);

// 3. Looping over an array
// print all fruit
// a. for
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// b. for of
for (let fruit of fruits) {
  console.log(fruits);
}

// c. forEach
//forEachλ λ°°μ΄μμ λ€μ΄μλ valueλ€ λ§λ€ λ΄κ° μ λ¬ν ν¨μλ₯Ό μΆλ ₯νλ κ΅¬λ
fruits.forEach((fruit) => console.log(fruit));
/* μλκ±° κ³ΌμΌλ§ μΆλ ₯νλλ‘ indexλ μ§μ°κ³  κ°λ¨ν arrow ν¨μ μ¬μ©ν κ²
fruits.forEach(function(fruit, index, array){
    console.log(fruit, index);
})
*/

//4. Addition, deletion, copy
// push: add an item to the end
fruits.push("π", "π");
console.log(fruits);

// pop: remove an item from the end
fruits.pop(); // λ€μμ λΆν° ν κ°μ© λΊλ€
fruits.pop();
console.log(fruits);

//  unshift: add an item to the beginning
fruits.unshift("π", "π");
console.log(fruits);

// shift: remove an item from the beginning
fruits.shift(); // μμμλΆν° ν κ°μ© μ¬λΌμ§
fruits.shift();
console.log(fruits);

// note!! shift, unshift are slower than pop, push
// splice: remove an item by index position
fruits.push("π", "π", "π");
console.log(fruits);
//fruits.splice(1); // μ§μ°κ³ μΆμ κ°μλ₯Ό μλ ₯νμ§ μμΌλ©΄ μ°λ¦¬κ° μ§μ ν μΈλ±μ€(λ°λλ)λΆν° λͺ¨λ  λ°μ΄ν°λ₯Ό μ§μλ²λ¦°λ€. μ¬κ³Όλ§ λ¨μ
fruits.splice(1, 1); // λ°λλλΆν° λ°λλκΉμ§λ§ μ§μ΄λ€
console.log(fruits);
fruits.splice(1, 1, "π", "π"); //1,1(μ¬κΈ°μ 1μ λΈκΈ°)μ§μ°κ³  κ·Έ μλ¦¬μ μ¬κ³Όμ μλ°μ λ£μ΄μ€
console.log(fruits);

//combine two arrays
const fruits2 = ["π", "π₯₯"];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. Searching
// indexOf: find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf("π"));
console.log(fruits.indexOf("π"));
console.log(fruits.indexOf("π₯₯")); //λ°°μ΄μ μλ κ²μ λ¬Όμ΄λ³΄λ©΄ -1μ μΆλ ₯νλ€.

// includes
console.log(fruits.includes("π")); //t
console.log(fruits.includes("π₯₯")); // f

// lastIndexOf
console.clear();
fruits.push("π");
console.log(fruits);
console.log(fruits.indexOf("π")); // μμ μ¬κ³Όλ₯Ό μΆκ°ν΄μ 2κ°κ° μμ§λ§ μ μΌ μμ μλ μ¬κ³Όμ μΈλ±μ€λ₯Ό λΆλ¬μ¨λ€.
console.log(fruits.lastIndexOf("π")); // μ΄κ±΄ κ·Έλ₯ indexofλ λ€λ₯΄κ² λ€μͺ½μ μλ μ¬κ³Όμ μΈλ±μ€λ₯Ό κ°μ Έμ€κ² μ§ ~
