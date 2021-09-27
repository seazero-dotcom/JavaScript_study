"use strict";
// Object - oriented programming
// class: template
// object: instance of a class (template에 데이터를 넣어서 사용한 것)
// JavaScript classes
//  - introduced in ES6
//  - syntactical sugar over prototype-based inheritance (기존에 존재하던 프로토타입을 베이스로 한것에 기반해서 그 위에 간편하게 쓸 수 있도록 Class 문법만 추가된 것)

// 1. Class declarations
class Person {
  //constructor생성자
  constructor(name, age) {
    //fields
    this.name = name;
    this.age = age;
  }

  // method
  speak() {
    console.log(`${this.name}: hello!`);
  }
}

// Object 만들기
const zero = new Person("seazero", 20);
console.log(zero.name);
console.log(zero.age);
zero.speak();

// 2. Getter and setters
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age; // this.age는 getter를 호출하고 = age;는 setter를 호출한다.
  }

  //get함수를 이용해서 값을 리턴하고
  get age() {
    this._age;
  }

  //set함수를 이용해서 값을 설정할 수 있다.
  //set은 값을 설정하기 때문에 value를 받아온다.
  set age(value) {
    /*  이렇게 공격적으로 조건을 써줘도 됨 ㅋㅋ
    if(value <0){
          throw Error('age can not be negative');
      }
      */
    this._age = value < 0 ? 0 : value;
    // = value;가 계속 this.age로 받으면서 setter를 불러와서 call stack size가 꽉차기 때문에 getter setter에서 이름을 다르게 써준다.
  }
}

const user1 = new User("Steve", "Job", -1);
console.log(user1.age); // 나이가 -1이 되는건 말이 안되는 것처럼 사용해도 우리가 좀 더 방어적인 자세로 만들 수 있도록 해주는 것이 getter setter이다.

//3. Fields (public, private)
// Too soon!
// dd
class Expertiment {
  publicField = 2;
  #privateField = 0; // class내부에서만 값을 읽을 수 있다.
}
const exptertiment = new Expertiment();
console.log(exptertiment.publicField);
console.log(exptertiment.privateField);

//4. Static properties and methods
// Too soon!
class Article {
  static publisher = "Dream Coding";
  constructor(articleNumber) {
    this.articleNumber = articleNumber;
  }

  static printPublisher() {
    console.log(Article.publisher);
  }
}

const article1 = new Article(1);
const article2 = new Article(2);
// static은 object마다 생성되는 것이 아니고 class자체에 붙어있다.
console.log(Article.publisher); // static함수를 불러오려면 object.을 쓰면 안되고 class.을 써야된다.
Article.printPublisher();
