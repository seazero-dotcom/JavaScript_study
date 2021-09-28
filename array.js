"use strict";

// Array🎉

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

//2. Index position
const fruits = ["🍎", "🍌"];
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
//forEach는 배열안에 들어있는 value들 마다 내가 전달한 함수를 출력하는 구나
fruits.forEach((fruit) => console.log(fruit));
/* 아래거 과일만 출력하도록 index는 지우고 간단한 arrow 함수 사용한 것
fruits.forEach(function(fruit, index, array){
    console.log(fruit, index);
})
*/

//4. Addition, deletion, copy
// push: add an item to the end
fruits.push("🍓", "🍑");
console.log(fruits);

// pop: remove an item from the end
fruits.pop(); // 뒤에서 부터 한 개씩 뺀다
fruits.pop();
console.log(fruits);

//  unshift: add an item to the beginning
fruits.unshift("🍓", "🍋");
console.log(fruits);

// shift: remove an item from the beginning
fruits.shift(); // 앞에서부터 한 개씩 사라짐
fruits.shift();
console.log(fruits);

// note!! shift, unshift are slower than pop, push
// splice: remove an item by index position
fruits.push("🍓", "🍑", "🍋");
console.log(fruits);
//fruits.splice(1); // 지우고싶은 개수를 입력하지 않으면 우리가 지정한 인덱스(바나나)부터 모든 데이터를 지워버린다. 사과만 남음
fruits.splice(1, 1); // 바나나부터 바나나까지만 지운다
console.log(fruits);
fruits.splice(1, 1, "🍏", "🍉"); //1,1(여기서 1은 딸기)지우고 그 자리에 사과와 수박을 넣어줘
console.log(fruits);

//combine two arrays
const fruits2 = ["🍐", "🥥"];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. Searching
// indexOf: find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf("🍎"));
console.log(fruits.indexOf("🍉"));
console.log(fruits.indexOf("🥥")); //배열에 없는 것을 물어보면 -1을 출력한다.

// includes
console.log(fruits.includes("🍉")); //t
console.log(fruits.includes("🥥")); // f

// lastIndexOf
console.clear();
fruits.push("🍎");
console.log(fruits);
console.log(fruits.indexOf("🍎")); // 위에 사과를 추가해서 2개가 있지만 제일 앞에 있는 사과의 인덱스를 불러온다.
console.log(fruits.lastIndexOf("🍎")); // 이건 그냥 indexof랑 다르게 뒤쪽에 있는 사과의 인덱스를 가져오겠지 ~
