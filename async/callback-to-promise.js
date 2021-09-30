"use strict";

// callback.js의 Callback Hell example을 promise를 사용해서 살려보자 !

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

//와대박 이렇게 짧아지네 ㅋㅎㅎ
