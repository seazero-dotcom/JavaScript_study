"use strict";

// Objects
// one of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instance of Object
// object = {key : value, key:value, ... };

// 1. Literals and properties
// {}를 이용해서 오브젝트 만들기와 class를 이용해서 오브젝트 만들기
const obj1 = {}; // 'object literal' syntax
const ob2 = new Object(); // 'object constructor' syntax

function print(person) {
  console.log(person.name);
  console.log(person.age);
}

const zero = { name: "seazero", age: 4 };
print(zero);

// with JavaScript magic (dynamically typed language)
// can add properties later
// 이렇게 구현이 가능하지만 사용하지 않는 것이 좋다.
zero.hasJob = true;
console.log(zero.hasJob);

// can delete properties later
delete zero.hasJob;
console.log(zero.hasJob);

// 2. Computed properties , 계산된 속성
// key should be always string
console.log(zero.name); // 이렇게 접근해도 되고 (코딩하는 그 순간 키에 해당하는 값을 받아오고 싶을 때 .을 쓴다)
// 배열에서 데이터를 받아오는 것처럼 이런식으로 접근해도 된다. computed properties (정확하게 어떤키가 필요한지 모를 때 즉, runtime에서 결정될 때 쓴다.)
console.log(zero["name"]); // key는 항상 'string' 타입으로 불러와야한다.

zero["hasJob"] = true;
console.log(zero.hasJob);

function printValue(obj, key) {
  // 사용자에게 받아오는데 key는 어떤걸 출력할지 코딩하는 이 시점에는 모른다.
  // console.log(obj.key) 이렇게 쓰면 object에 key라는 properties가 들어있니? 인데
  // 이때는 사용자가 입력하지 않아서 key라는 properties가 존재하지 않는다. 그래서 undefined이다.
  console.log(obj[key]); // 그렇기 때문에 이럴 때는 computed properties를 써줘야한다.
  //동적으로 key의 value를 받아와야할 때 유용하게 쓸 수 있다.
}
printValue(zero, "name");
printValue(zero, "age");

// 3. Property value shorthand
const person1 = { name: "bob", age: 2 };
const person2 = { name: "steve", age: 3 };
const person3 = { name: "dave", age: 4 };
const person4 = new Person("seazero", 30); //호출할때도 class에서 오브젝트를 만드는 것 처럼 new 를 써준다. 호출하여 간단하게 작성이 가능하다
console.log(person4);

// 4. Constructor Function
//다른 계산을 하지않고 순수하게 오브젝트를 생성하는 함수들은 보통 대문자로 시작해서 만든다. 그리고 return 쓰지 않고 this.을 쓴다.
function Person(name, age) {
  //class에서 constructor에서 했던것 처럼 작성한다.
  // this = {};
  this.name = name;
  this.age = age;
  // return this;
}
/* class가 생기기 이전의 형식
function makePerson(name, age) {
  return {
    name, //원래 name: name, 인데 키(name)와 받아올 value의 이름(name)이 동일하다면 생략가능, shorthand~
    age, // 이렇게만 해줘도 오브젝트가 생성이 될 수 있습니다 ~
  };
}
*/

//5. in operator: property existence check (key in obj)
// 해당 operator 안에 키가 있는지 없는지 확인하는 것
console.log("name" in zero);
console.log("age" in zero);
console.log("random" in zero);
console.log(zero.random); //정의하지 않은 것 출력하면 undefined

// 6. for...in vs for...of      (프로젝트할 때 굉장히 유용한 아이)
// for (key in obj)
console.clear(); // console.log기록 너무 많으니까 이전로그 지우기
for (let key in zero) {
  // zero가 가지고있는 키들이 블럭을 돌 때마다 키라는 지역변수에 할당되어진다.
  console.log(key);
}

// for (value of iterable) 순서가 있는
const array = [1, 2, 4, 5];
for (let value of array) {
  console.log(value);
}

// 7. Fun cloning
//Object assign(dest, [obj1, obj2, obj3...])
const user = { name: "seazero", age: "20" };
const user2 = user;
user2.name = "coder";
console.log(user); // user와 user2의 레퍼런스는 다르지만 그 레퍼런스가 가리키는 오브젝트는 같기때문에 user2의 name을 바꾸면 user도 그 값을 출력한다.

// 오브젝트까지 분리해서 복제하는 방법???????
// old way
const user3 = {};
for (let key in user) {
  user3[key] = user[key];
}
console.log(user3);

const user4 = Object.assign({}, user);
/* 이걸 줄여쓰면 위에것
const user4 = {};
Object.assign(user4, user); //(타겟 오브젝트 , 복사하고자하는 오브젝트)
*/
console.log(user4);

//another example
const fruit1 = { colr: "red" };
const fruit2 = { color: "blue", size: "big" };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);
