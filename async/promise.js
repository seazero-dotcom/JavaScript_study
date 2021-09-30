"use strict";

//Promise is a JavaScript object for asynchronous operation.
// State: pending -> fulfilled or rejected
// Producer vs Consumer

// 1. Producer
// when new Promise is created, the executor runs automatically.
// 우리가 원하는 기능을 비동기적으로 실행하는 promise만들기
// Promise는 class이기 때문에 new라는 키워드를 이용해서 오브젝트 생성한다.
const promise = new Promise((resolve, reject) => {
  //Promise를 만드는 순간  executor(resolve,reject)라는 콜백함수가 바로 실행이된다.
  //doing some heavy work (network, read files)
  console.log("doing something...");
  setTimeout(() => {
    // resolve("seazero");
    reject(new Error("no network")); //reject는 보통 Error라는 오브젝트를 통해서 값을 전달한다.
  }, 2000);
});

// 2. Consumers: then, catch, finally
//promise의 값이 정상적으로 잘 수행이 된다면 .then , 내가 값을 받아올거야 (value)
promise //then=성공한값, error=실패한에러,  finally=성공하든 실패하든 무조건 마지막에 실행되어짐
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

fetchNumber
  .then((num) => num * 2)
  .then((num) => num * 3)
  .then((num) => {
    return new Promise((resolve, reject) => {
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
    //위에 getEgg에서 생긱는 error를 해결하고 싶다면 바로 다음에 catch를 작성해서 바로바로 문제를 해결할 수 있다.
    //계란을 가져오다 에러가 생긴다면 다른것을 전달해준다.
    return "🥖";
  })
  .then(cook) //(egg) => cook(egg)
  .then(console.log) //(meal) => console.log(meal)
  .catch(console.log);
