"use strict";

// JavaScript is synchronous.
// (동기적이다 = hoisting이 된 이후부터 코드가 우리가 작성한 순서에 맞춰서 하나하나씩 동기적으로 실행된다는 말).
// Excute the code block in order after hoisting.
// hoisting: var, function declaration이 자동적으로 제일 위로 선언들이 제일위로 올라가는 것

// sync: 정해진 순서에 맞게 코드가 실행되는 것
// async: 비동기적으로 언제 코드가 실행될지 예측할 수 없는것

console.log("1"); //동기
// browser api는 browser에 요청을 먼저 보낸다.
setTimeout(() => console.log("2"), 1000); //비동기
/* 위에 arrow함수로 간단하게 쓰기
setTimeout(function () { //setTimeout은 browser api이기 때문에 이걸 만나면 브라우저야 1초뒤에 콜백함수 실행하라고 알려줘라며 전달해준다.
  console.log("2");
}, 1000); // 1000밀리세컨드=1초 가 지나면 우리가 전달한 함수가 실행되도록 하는 것
*/
console.log("3"); //동기

// Syncronous callback
function printImmediately(print) {
  //callback을 파라미터 인자로 받아서 처리하는 함수
  print(); //print라는 콜백을 받아서 함수가 실행되면 바로 그 콜백을 실행하는 함수
  // 밑에서 console.log를 출력하는 함수를 print를 통해서 전달했다.
  // 그러니까 여기서는 print라는 파라미터는 함수를 받아오는거구낭
}

printImmediately(() => console.log("hello")); //함수 요청해서 바로 출력하니까 동기

// Asyncronous callback
function printWithDelay(print, timeout) {
  //print(콜백함수)와 얼마정도 timeout을 하고싶은지 받아온다.
  setTimeout(print, timeout); //아하...오호....
}

printWithDelay(() => console.log("async callback"), 2000); //비동기

// Callback Hell example
class UserStorage {
  //사용자의 정보를 백엔드에서 받아오는 클래스
  //로그인 api
  loginUser(id, password, onSuccess, onError) {
    //onSuccess와 onError는 콜백함수
    setTimeout(() => {
      //지금은 실제 백엔드가 없으니까 setTimeout api를 이용해서 시간 딜레이를 주면서 네트워크통신 하는 것처럼 만들었다.
      if (
        (id === "seazero" && password === "dotcom") ||
        (id === "what" && password == "happened")
      ) {
        onSuccess(id); //id전달하면서 onSuccess 콜백
      } else {
        onError(new Error("not found")); //Error라는 오브젝트를 만들어서 'not found'를 전달해준다.
      }
    }, 2000);
  }

  //사용자역할 api
  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === "seazero") {
        onSuccess({ name: "seazero", role: "admin" }); // name, role 오브젝트 전달
      } else {
        onError(new Error("no access"));
      }
    }, 1000);
  }
}

const userStorage = new UserStorage(); // userStorage변수에 UserStorage class만들어주기 class니까 new!!
const id = prompt("enter yout id"); // 사용자에게 id 받아오기, prompt api를 이용한다.
const password = prompt("enter your password");
userStorage.loginUser(
  //userStorage를 이용해서 login을 한다.
  id, //받아온 id와 password를 전달하고
  password,

  //loginUser의 onSuccess callback function
  (user) => {
    // id전달을 여기서는 user라고 칭함
    // 사용자가 로그인이 되었다면
    userStorage.getRoles(
      //userStorage를 통해 사용자의 역할을 받아온다.
      user,

      //getRoles의 onSuccess callback function
      (userWithRole) => {
        //userWithRole 콜백함수에 주어진 name과 role을 써야한다.
        alert(
          `Hello ${userWithRole.name}, you have a ${userWithRole.role} role`
        );
      },

      // getRoles의 onError callback fuction
      (error) => {
        console.log(error);
      }
    );
  },

  // loginUser의 onError callback fuction
  (error) => {
    console.log(error);
  }
);
