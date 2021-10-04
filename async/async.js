"use strict";

//async & await
// clear style of using promise :)

// 1. async
/*
function fetchUser() {
  // do network request in 10 secs...

  return "seazero";
}

// 이렇게 무언가 오래걸리는 코드(do network request in 10 secs...)를 비동기적인 처리(Promise같은거)를 전혀 하지않으면
//  JS엔진은 동기적으로 코드를 수행하기 때문에 즉, 한줄 한줄씩 한줄이 끝나야지 그 다음줄로 넘어가는 동기적인 처리를 하기 떄문에
// 어? fetchUser()가 호출이 되었네? 함수가 선언된 곳으로가서 함수의 코드 블록을 실행한다.
const user = fetchUser();
console.log(user);
*/

/*Pomise 이용하여 비동기적인 처리 구현한 것
내가 언제 User의 데이터를 받아올지 모르겠지만 내가 약속할께 Promise라는 오브젝트를 가지고 있으면 여기에 니가 then이라는 콜벡함수만 등록해 놓으면 
user의 데이터가 준비되는대로 니가 등록한 콜벡함수를 내가 불러줄게 !
function fetchUser() {
  return new Promise((resolve, reject) => {
    // do network request in 10 secs...

    resolve("seazero");
  });
}
const user = fetchUser();
user.then(console.log);
console.log(user);
*/

//async를 사용하게되면 코드 블럭이 자동적으로 Promise로 변환되어진다.
async function fetchUser() {
  // do network request in 10 secs...
  return "seazero";
}
const user = fetchUser(); // fetchUser가 자동으로 promise를 리턴한다.
user.then(console.log);
console.log(user);

// 2. await✨: async가 붙은 함수안에서만 쓸 수 있다.
function delay(ms) {
  //이 함수는 Promise를 리턴하는데 정해진 ms가 지나면 resolcve를 호출하는 Promise를 리턴하게된다.
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getApple() {
  // async가 있으니까 Promise를 만드는 것과 같다
  // Promise.race()를 실행해보기위해 3000을 4000으로 변경하였다.
  await delay(4000); //delay가 끝날 떄 까지 기다렸다가 사과를 리턴한다
  //throw "error";
  return "🍎";
}

async function getBanana() {
  // async가 있으니까 Promise를 만드는 것과 같다
  await delay(3000);
  return "🍌";
}

/* ***콜백지옥st*** 이렇게 Promise도 중첩적으로 체이닝을하면 콜백지옥과 비슷한 문제점이 발생합니다. 
function pickFruits() {
  return getApple().then((apple) => {
    return getBanana().then((banana) => `${apple} + ${banana}`);
  });
}

pickFruits().then(console.log);
*/

// async를 이용하여 위에 것 간단하게 만들기!
async function pickFruits() {
  // try-catch를 이용하여 에러처리를 해준다.
  //try {
  // 병렬처리를 통해 동시에 실행하여 3초로 단축하기
  // Promise는 만들자마자 바로 코드가 실행하기 때문에 getApple와 getBanana의 Promise를 만들어주면서 둘 다 동시에 실행되도록한다.
  const applePromise = getApple();
  const bananaPromise = getBanana();
  const apple = await applePromise;
  const banana = await bananaPromise;
  /* 기존에 이렇게 쓴다면 직렬적으로 함수를 처리하기 떄문에 6초가 걸린다.
        const apple = await getApple();
        const banana = await getBanana();
        */
  //} catch() {

  //}
  //사과와 바나나를 받고나서 리턴한다.
  return `${apple} + ${banana}`;
}

pickFruits().then(console.log);

//위에처럼 const를 4개나 쓰면서 지저분하게 Promise사용하지 않고 깔끔하게 쓰는 방법!
//3. useful Promise APIs
function pickAllFruits() {
  // 그것은 바로 Promise.all()
  // Promise배열을 전달하게되면 모든 Promise들이 병렬적으로 다 받을 떄까지 모아주는 아이이다.
  //
  return (
    Promise.all([getApple(), getBanana()])
      //getApple과 getBanana의 Promise들이 다 받아지면, then
      .then((fruits) => fruits.join(" + "))
  ); //fruits에 배열이 전달받아진다. 배열을 String으로 묶기위해 join을 쓴다.
}
pickAllFruits().then(console.log);

//어떤 과일이든 상관없이 먼저따지는 첫 번째 과일만 받아오고 싶다.
function pickOnlyOne() {
  //Promise.race(): 배열에 전달된 Promise중에서 가장 먼저 값을 리턴하는 아이만 전달이 된다.
  return Promise.race([getApple(), getBanana()]);
}
pickOnlyOne().then(console.log);

//[[[[[[[ Homework: callback-to-promise.js를 async를 활용해서 변경해보기 ]]]]]]]]
//***** 왜 파라미터를 받지 못하는걸까....도로록 *
async function userStorage() {
  const id = prompt("enter yout id"); // 사용자에게 id 받아오기, prompt api를 이용한다.
  const password = prompt("enter your password");

  const login = await loginUser();
  const roles = await getRoles();

  return `${login} + ${roles}`;
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function loginUser(id, password) {
  //   try {
  await delay(2000);

  if (
    (id === "seazero" && password === "dotcom") ||
    (id === "what" && password == "happened")
  ) {
    return `fuck`;
  } else {
    return "errorssssss";
  }
  //   } catch (err) {
  //     console.log(err);
  //   }
}

async function getRoles(user) {
  //   try {
  await delay(1000);

  if (user === "seazero") {
    const name = "seazero";
    const role = "admin";
    return `fuck`;
  } else {
    return "error";
  }
  //   } catch (err) {
  //     console.log(err);
  //   }
}

userStorage().then(console.log);
//.then((user) => alert(`Hello ${user.name}, you have a ${user.role} role`));

/*
class UserStorage {
    //사용자의 정보를 백엔드에서 받아오는 클래스
    //로그인 api
    loginUser(id, password) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          //지금은 실제 백엔드가 없으니까 setTimeout api를 이용해서 시간 딜레이를 주면서 네트워크통신 하는 것처럼 만들었다.
          if (
            (id === "seazero" && password === "dotcom") ||
            (id === "what" && password == "happened")
          ) {
            resolve(id); //id전달하면서 onSuccess 콜백
          } else {
            reject(new Error("not found")); //Error라는 오브젝트를 만들어서 'not found'를 전달해준다.
          }
        }, 2000);
      });
    }
  
    //사용자역할 api
    getRoles(user) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (user === "seazero") {
            resolve({ name: "seazero", role: "admin" }); // name, role 오브젝트 전달
          } else {
            reject(new Error("no access"));
          }
        }, 1000);
      });
    }
  }
  
  const userStorage = new UserStorage(); // userStorage변수에 UserStorage class만들어주기 class니까 new!!
  const id = prompt("enter yout id"); // 사용자에게 id 받아오기, prompt api를 이용한다.
  const password = prompt("enter your password");
  userStorage
    .loginUser(id, password)
    .then(userStorage.getRoles)
    .then((user) => alert(`Hello ${user.name}, you have a ${user.role} role`))
    .catch(console.log);

  */
