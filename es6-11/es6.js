"use strict";

//Shortjhand property names
{
  const zero1 = {
    name: "seazero",
    age: "18",
  };

  const name = "seazero";
  const age = "18";

  //๐ฉ
  const zero2 = {
    name: name,
    age: age,
  };

  //โจ
  const zero3 = {
    name, //key์ value์ ์ด๋ฆ์ด ๋์ผํ ๊ฒฝ์ฐ์๋ ํ๋ฒ๋ง ์จ๋ ๋๋ค.
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

  //object์ key์ value์ ์ ๊ทผํ๊ธฐ ์ํด์๋ .์ ์จ์ ํ๋ค
  //๐ฉ
  {
    const name = student.name;
    const level = student.level;
    console.log(name, level);
  }

  //โจ
  {
    const { name, level } = student; // ์ค๋ธ์ ํธ(student)์ ์๋ key์ ์ด๋ฆ(name,level)์ ๊ดํธ ์์ ์ ์ํด์ฃผ๊ณ  = ์ค๋ธ์ ํธ ์ด๋ฆ ์ ์ ์ํด์ฃผ๋ฉด ๋๋ค
    console.log(name, level);

    //key์ด๋ฆ์ ๋ฐ๊พธ๊ณ  ์ถ์ ๋ ์ฝ๋ก ์ ์ฐ๊ณ  ์ํ๋ ์ด๋ฆ์ ์ฐ๋ฉด ๋๋ค.
    const { name: studentName, level: studentLevel } = student;
    console.log(studentName, studentLevel);
  }

  //Destructuring์ ์ค๋ธ์ ํธ ๋ฟ๋ง ์๋๋ผ ๋ฐฐ์ด์์๋ ์ธ ์ ์๋ค.
  //array
  const animals = ["๐ฆ", "๐ถ"];

  //๐ฉ
  {
    const first = animals[0];
    const second = animals[1];
    console.log(first, second);
  }

  //โจ
  {
    const [first, second] = animals; // ๋ฐฐ์ด์ ๊ฐ ๊ฐ ์ ๊ทผํ์ง ์์๋ ์ด๋ ๊ฒ ๋ถ๋ฅผ ์ ์๋ค.
    console.log(first, second);
  }
}

//์ ๋ง ํ์ฉ๋๊ฐ ๋์ Spread Syntax
{
  const obj1 = { key: "key1" };
  const obj2 = { key: "key2" };
  const array = [obj1, obj2];

  //array copy ๋ฐฐ์ด์ ๊ดํจ []๋ฅผ ์ด์ฉํ๋ค.
  const arrayCopy = [...array]; // ...์ array์ ๋ค์ด์๋ item๋ค ํ๋ํ๋๋ฅผ(obj1, obj2) ๊ฐ๊ฐ ๋ฑ๊ฐ๋ก ๊ฐ์ ธ์์ ๋ณต์ฌํด์จ๋ค.
  console.log(array, arrayCopy);

  //๋ฐฐ์ด์ ๋ณต์ฌํด์ค๋ฉด์ ์๋ก์ด ์์ดํ ์ถ๊ฐํ๊ธฐ
  const arrayCopy2 = [...array, { key: "key3" }];
  obj1.key = "newKey"; // ์ค๋ธ์ ํธ์ ๋ ํผ๋ฐ์ค ๊ฐ์ ๋ณต์ฌํ ๊ฒ์ด๊ธฐ ๋๋ฌธ์ ์ด๋ ๊ฒ ๊ฐ์ ๋ณ๊ฒฝํ๋ฉด ๋ชจ๋ ๋ณํ๋ค.
  console.log(array, arrayCopy, arrayCopy2);

  //object copy  ์ค๋ธ์ ํธ์ ๊ดํธ {}๋ฅผ ์ด์ฉํ๋ค.
  const obj3 = { ...obj1 };
  console.log(obj3);

  //array concatenation  ๋ฐฐ์ด ํฉ์น๊ธฐ ~
  const fruits1 = ["๐ฅญ", "๐"];
  const fruits2 = ["๐", "๐"];
  const fruits = [...fruits1, ...fruits2];
  console.log(fruits);

  //object merge ์ค๋ธ์ ํธ ํฉ์น๊ธฐ ~
  const dog1 = { dog1: "๐" };
  const dog2 = { dog2: "๐ถ" };
  const dog = { ...dog1, ...dog2 };
  console.log(dog);
}

//Default parameters
{
  // ๐ฉ
  {
    function printMessage(message) {
      if (message == null) {
        message = "default message";
      }
      console.log(message);
    }

    printMessage("hello");
    printMessage(); // ์ด๋ ๊ฒ ์๋ฌด๋ฐ parameter๋ฅผ ๋ฐํํด์ฃผ์ง ์์ผ๋ฉด undefined๊ฐ ์ถ๋ ฅ๋๋๋ฐ ์ ๋ ๊ฒ ์์ชฝ์ if๋ฌธ์ผ๋ก default parameter์ ์์ฑํด์ฃผ๋ฉด ๋ฅ์ด๋ค.
  }

  //โจ
  {
    function printMessage(message = "default message") {
      //์ด๋ ๊ฒ ์ธ์ ๋ค์์ ๊ธฐ๋ณธ์ ์ผ๋ก ์ํ๋ ์ด๊ธฐ๊ฐ์ ์ง์ ํด ์ฃผ๋ฉด ๋์ด๋ค
      console.log(message);
    }

    printMessage("hello");
    printMessage();
  }
}

//Ternary Operator ์ผํญ ์ฐ์ฐ์
{
  const isCat = true;

  //๐ฉ
  {
    let compenent;
    if (isCat) {
      compenent = "๐ป";
    } else {
      compenent = "๐ป";
    }
    console.log(compenent);
  }

  //โจ
  {
    const compenent = isCat ? "๐ป" : "๐ป";
    console.log(compenent);
    console.log(isCat ? "๐ป" : "๐ป");
  }
}

//Template Literals
{
  const weather = "๐ง";
  const temparature = "16ยฐC";

  //๐ฉ
  console.log(
    "Today weather is " + weather + " and temparature is " + temparature + "."
  );

  //โจ
  console.log(`Today weather is ${weather} and temparature is ${temparature}.`);
}
