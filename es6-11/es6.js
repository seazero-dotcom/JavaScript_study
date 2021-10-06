"use strict";

//Shortjhand property names
{
  const zero1 = {
    name: "seazero",
    age: "18",
  };

  const name = "seazero";
  const age = "18";

  //💩
  const zero2 = {
    name: name,
    age: age,
  };

  //✨
  const zero3 = {
    name, //key와 value의 이름이 동일한 경우에는 한번만 써도 된다.
    age,
  };
  console.log(zero1, zero2, zero3);
}

//Destructuring Assignment
{
  //object
  const student = {
    name: "Jena",
    level: 1,
  };

  //object의 key와 value에 접근하기 위해서는 .을 써서 했다
  //💩
  {
    const name = student.name;
    const level = student.level;
    console.log(name, level);
  }

  //✨
  {
    const { name, level } = student; // 오브젝트(student)에 있는 key의 이름(name,level)을 괄호 안에 정의해주고 = 오브젝트 이름 을 정의해주면 된다
    console.log(name, level);

    //key이름을 바꾸고 싶을 때 콜론을 쓰고 원하는 이름을 쓰면 된다.
    const { name: studentName, level: studentLevel } = student;
    console.log(studentName, studentLevel);
  }

  //Destructuring은 오브젝트 뿐만 아니라 배열에서도 쓸 수 있다.
  //array
  const animals = ["🦊", "🐶"];

  //💩
  {
    const first = animals[0];
    const second = animals[1];
    console.log(first, second);
  }

  //✨
  {
    const [first, second] = animals; // 배열에 각 각 접근하지 않아도 이렇게 부를 수 있다.
    console.log(first, second);
  }
}

//정말 활용도가 높은 Spread Syntax
{
  const obj1 = { key: "key1" };
  const obj2 = { key: "key2" };
  const array = [obj1, obj2];

  //array copy 배열의 괄효 []를 이용한다.
  const arrayCopy = [...array]; // ...은 array에 들어있는 item들 하나하나를(obj1, obj2) 각각 낱개로 가져와서 복사해온다.
  console.log(array, arrayCopy);

  //배열을 복사해오면서 새로운 아이템 추가하기
  const arrayCopy2 = [...array, { key: "key3" }];
  obj1.key = "newKey"; // 오브젝트의 레퍼런스 값을 복사한 것이기 때문에 이렇게 값을 변경하면 모두 변한다.
  console.log(array, arrayCopy, arrayCopy2);

  //object copy  오브젝트의 괄호 {}를 이용한다.
  const obj3 = { ...obj1 };
  console.log(obj3);

  //array concatenation  배열 합치기 ~
  const fruits1 = ["🥭", "🍍"];
  const fruits2 = ["🍒", "🍌"];
  const fruits = [...fruits1, ...fruits2];
  console.log(fruits);

  //object merge 오브젝트 합치기 ~
  const dog1 = { dog1: "🐕" };
  const dog2 = { dog2: "🐶" };
  const dog = { ...dog1, ...dog2 };
  console.log(dog);
}

//Default parameters
{
  // 💩
  {
    function printMessage(message) {
      if (message == null) {
        message = "default message";
      }
      console.log(message);
    }

    printMessage("hello");
    printMessage(); // 이렇게 아무런 parameter를 반환해주지 않으면 undefined가 출력되는데 저렇게 위쪽에 if문으로 default parameter을 작성해주면 똥이다.
  }

  //✨
  {
    function printMessage(message = "default message") {
      //이렇게 인자 다음에 기본적으로 원하는 초기값을 지정해 주면 끝이다
      console.log(message);
    }

    printMessage("hello");
    printMessage();
  }
}

//Ternary Operator 삼항 연산자
{
  const isCat = true;

  //💩
  {
    let compenent;
    if (isCat) {
      compenent = "😻";
    } else {
      compenent = "👻";
    }
    console.log(compenent);
  }

  //✨
  {
    const compenent = isCat ? "😻" : "👻";
    console.log(compenent);
    console.log(isCat ? "😻" : "👻");
  }
}

//Template Literals
{
  const weather = "🌧";
  const temparature = "16°C";

  //💩
  console.log(
    "Today weather is " + weather + " and temparature is " + temparature + "."
  );

  //✨
  console.log(`Today weather is ${weather} and temparature is ${temparature}.`);
}
