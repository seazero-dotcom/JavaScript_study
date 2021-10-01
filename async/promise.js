"use strict";

//Promise is a JavaScript object for asynchronous operation.
// 비동기적인 것을 수행할 때 콜백함수대신에 유용하게 쓰인다
// State(프로세스가 무거운 오퍼레이션을 수행중인지 아니면 기능수행이 완료되어서 성공했는지 실패했는지)
//        : pending (promise가 만들어져서 우리가 지정한 operation을 수행중인 상태) -> fulfilled (operation을 성공적으로 끝낸 상태) or rejected (파일을 찾을 수 없거나 네트워크에 문제가 생긴 상태)
// Producer (데이터를 제공하는 사람) vs Consumer (제공된 데이터를 쓰는사람)

// 1. Producer
// when new Promise is created, the executor runs automatically.

// 우리가 원하는 기능을 비동기적으로 실행하는 promise만들기
// Promise는 class이기 때문에 new라는 키워드를 이용해서 오브젝트 생성한다.
const promise = new Promise((resolve, reject) => {
  //Promise를 만드는 순간  executor(resolve,reject)라는 콜백함수가 바로 실행이된다.
  // 만약 Promise안에 네트워크 통신을 하는 코드를 작성했다면 Promise가 만들어지는 순간 바로 네트워크 통신을 수행하게 된다.

  //resolve : 기능을 정상정으로 수행해서 마지막에 최종데이터를 전달하는 콜백함수
  // reject :  기능을 수행하다가 문제가 생기면 호출하는 콜백함수

  //doing some heavy work (network, read files)
  /* 네트워크에서 데이터를 받아오거나 파일에서 큰 데이터를 읽어오는 과정은 시간이 꽤 걸린다.
  그런것을 동기적(syncronous)으로 처리하게 되면 파일을 읽어오고 네트워크에서 데이터를 받아오는 동안 그 다음 라인의 코드가 실행되지 않기때문에,
  시간이 조금 걸리는 일들은 promise를 만들어서 비동기적으로 처리하는 것이 좋다.
   */
  console.log("doing something...");
  setTimeout(() => {
    // resolve("seazero");
    reject(new Error("no network")); //reject는 보통 Error라는 오브젝트를 통해서 값을 전달한다.
  }, 2000);
});

// 2. Consumers: then, catch, finally
//promise의 값이 정상적으로 잘 수행이 된다면 .then , 내가 값을 받아올거야 (value)
promise //then=성공한값, catch=실패한에러,  finally=성공하든 실패하든 무조건 마지막에 실행되어짐
  .then((value) => {
    //value 파라미터는 promise가 정상적으로 잘 수행이 되어서 마지막으로 resolve 콜백함수에서 전달된 'seazero'라는 값이 value로 들어온다
    // 값을 받아와서 우리가 원하는 기능을 수행하는 콜백함수를 전달해준다.
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("finally");
  });

// 3. Promise chaining
//Promise는 resolve와 reject라는 콜백함수를 받는 executor라는 콜백함수를 전달해줘야한다. RG?
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

fetchNumber // then은 값을 바로 전달해도 되고 또 다른 비동기인 Promise를 전달해도 된다.
  .then((num) => num * 2)
  .then((num) => num * 3)
  .then((num) => {
    //위에 then에서 받은 숫자를 다른 서버로 보내서 변환된 값을 받아올 것처럼 만들기 위해 새로운 Promise를 리턴한다.
    return new Promise((resolve, reject) => {
      // 이 Pomise가 다른 서버와 통신을 하겠죠?
      setTimeout(() => resolve(num - 1), 1000);
    });
  })
  .then((num) => console.log(num));

//4. Error Handling
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve("🐓"), 1000);
  });
const getEgg = (hen) =>
  new Promise((resolve, reject) => {
    // setTimeout(() => resolve(`${hen} => 🥚`), 1000);
    setTimeout(() => reject(new Error(`error! ${hen} => 🥚`)), 1000);
  });
const cook = (egg) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 🍳`), 1000);
  });

getHen()
  .then(getEgg) //(hen) => getEgg(hen)  한가지만 받아서 그대로 전달하는 경우에는 생략가능
  .catch((error) => {
    //위에 getEgg에서 생기는 error를 해결하고 싶다면 바로 다음에 catch를 작성해서 바로바로 문제를 해결할 수 있다.
    //계란을 가져오다 에러가 생긴다면 다른것을 전달해준다.
    return "🥖";
  })
  .then(cook) //(egg) => cook(egg)
  .then(console.log) //(meal) => console.log(meal)
  .catch(console.log);
