"use strict";

//Optional Chaining (ES11)

{
  const person1 = {
    name: "Seazero",
    job: {
      title: "S/W Engineer",
      manager: {
        name: "Bob",
      },
    },
  };

  const person2 = {
    name: "Bob",
  };

  //💩💩💩💩💩💩💩
  {
    function printManager(person) {
      console.log(person.job.manager.name);
    }
    printManager(person1);
    // printManager(person2); //manager가 존재하지 않기때문에 에러가 난다.
  }

  //💩💩💩💩
  {
    function printManager(person) {
      console.log(
        person.job
          ? person.job.manager
            ? person.job.manager.name
            : undefined
          : undefined
      );
    }

    printManager(person1);
    printManager(person2);
  }
  //💩
  {
    function printManager(person) {
      console.log(person.job && person.job.manager && person.job.manager.name);
    }

    printManager(person1);
    printManager(person2);
  }

  //✨  Hooot Trend
  {
    function printManager(person) {
      console.log(person.job?.manager?.name); //person에 job이 있으면 manager가 있으면 name을 출력!
    }

    printManager(person1);
    printManager(person2);
  }
}

// Nullish Coalescing Operator (ES11)
{
  //Logical OR operator
  //false: false, ''(텅텅빈거), 0, null, undefined

  {
    const name = "Seazero";
    const userName = name || "Guest"; //OR 연산자는 앞에있는 것이 False일때만 뒤에있는 것이 실행된다.
    console.log(userName);
  }

  //💩
  {
    const name = null;
    const userName = name || "Guest"; //null은 false여서 Guest가 출력된다.
    console.log(userName);
  }

  //💩
  {
    const name = ""; // 사용자가 아무런 이름을 쓰고싶지 않을 때도 ''은 false여서 Guest로 들어가지는 참사가 생긴다.
    const userName = name || "Guest";
    console.log(userName);

    const num = 0; // 0으로 할당되어있어도 0을 false로 보기때문에 undefined가 출력된다.
    const userNum = name || "undefined";
    console.log(userNum);
  }

  //✨
  {
    const name = "";
    const userName = name ?? "Guest"; // 이름이 있다면 이름을 쓰고 이름에 아무런 값이 없다면 Guest를 이용
    console.log(userName); //텅텅비어진 문자열 출력

    const num = 0;
    const message = num ?? "undefined"; // num이라는 값이 있다면 num을 이용하고 없다면 undefined를 이용
    console.log(message); // 숫자0 출력
  }
}
