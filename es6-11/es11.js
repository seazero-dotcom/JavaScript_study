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

  //๐ฉ๐ฉ๐ฉ๐ฉ๐ฉ๐ฉ๐ฉ
  {
    function printManager(person) {
      console.log(person.job.manager.name);
    }
    printManager(person1);
    // printManager(person2); //manager๊ฐ ์กด์ฌํ์ง ์๊ธฐ๋๋ฌธ์ ์๋ฌ๊ฐ ๋๋ค.
  }

  //๐ฉ๐ฉ๐ฉ๐ฉ
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
  //๐ฉ
  {
    function printManager(person) {
      console.log(person.job && person.job.manager && person.job.manager.name);
    }

    printManager(person1);
    printManager(person2);
  }

  //โจ  Hooot Trend
  {
    function printManager(person) {
      console.log(person.job?.manager?.name); //person์ job์ด ์์ผ๋ฉด manager๊ฐ ์์ผ๋ฉด name์ ์ถ๋ ฅ!
    }

    printManager(person1);
    printManager(person2);
  }
}

// Nullish Coalescing Operator (ES11)
{
  //Logical OR operator
  //false: false, ''(ํํ๋น๊ฑฐ), 0, null, undefined

  {
    const name = "Seazero";
    const userName = name || "Guest"; //OR ์ฐ์ฐ์๋ ์์์๋ ๊ฒ์ด False์ผ๋๋ง ๋ค์์๋ ๊ฒ์ด ์คํ๋๋ค.
    console.log(userName);
  }

  //๐ฉ
  {
    const name = null;
    const userName = name || "Guest"; //null์ false์ฌ์ Guest๊ฐ ์ถ๋ ฅ๋๋ค.
    console.log(userName);
  }

  //๐ฉ
  {
    const name = ""; // ์ฌ์ฉ์๊ฐ ์๋ฌด๋ฐ ์ด๋ฆ์ ์ฐ๊ณ ์ถ์ง ์์ ๋๋ ''์ false์ฌ์ Guest๋ก ๋ค์ด๊ฐ์ง๋ ์ฐธ์ฌ๊ฐ ์๊ธด๋ค.
    const userName = name || "Guest";
    console.log(userName);

    const num = 0; // 0์ผ๋ก ํ ๋น๋์ด์์ด๋ 0์ false๋ก ๋ณด๊ธฐ๋๋ฌธ์ undefined๊ฐ ์ถ๋ ฅ๋๋ค.
    const userNum = name || "undefined";
    console.log(userNum);
  }

  //โจ
  {
    const name = "";
    const userName = name ?? "Guest"; // ์ด๋ฆ์ด ์๋ค๋ฉด ์ด๋ฆ์ ์ฐ๊ณ  ์ด๋ฆ์ ์๋ฌด๋ฐ ๊ฐ์ด ์๋ค๋ฉด Guest๋ฅผ ์ด์ฉ
    console.log(userName); //ํํ๋น์ด์ง ๋ฌธ์์ด ์ถ๋ ฅ

    const num = 0;
    const message = num ?? "undefined"; // num์ด๋ผ๋ ๊ฐ์ด ์๋ค๋ฉด num์ ์ด์ฉํ๊ณ  ์๋ค๋ฉด undefined๋ฅผ ์ด์ฉ
    console.log(message); // ์ซ์0 ์ถ๋ ฅ
  }
}
