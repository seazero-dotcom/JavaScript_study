// Function
// - fundamental building block in the program  (프로그램을 구성하는 기본적인 빌딩 블록
// - subprogram can be used multiple times  (서브프로그램이라고도 불리고 여러번 재사용이 가능하다
// - performs a task or calculates a value  (한 가지의 task나 어떠한 값을 계산하기 위해서 쓰여지고 있다

// 1. Function declaration
// function name(param1, param2) { body... return; }
// one function === one thing   (하나의 함수는 한 가지의 일만 하도록 만들어야한다!!
// naming: dosomething, command, verb   (함수는 무언가를 동작하는것이기 때문에 저런 형태로 지정한다.
// e.g. createCardAndPoint -> createCrad, createPoint
// function is object in JS     (자바스크립트에서 function은 object입니다.

function printHello() {
  console.log("Hello");
}
printHello();

//JS는 타입이 없기 때문에 함수 자체의 인터페이스만 보고 어떤 타입인지 알 수 없다. 그래서 typeScript씀
function log(message) {
  //이 message가 string을 전달해야하는지 숫자도 되는지 명확하게 알 수 없다.
  console.log(message);
}
log("Hello@->~");
log(1234); // 숫자도 string으로 변환이 되어서 출력한다.

// 2. Parameters
// premitive parameters: passed by value    (메모리에 value가 그대로 저장되어 있기 때문에 value가 전달이 되고 )
// object parameters: passed by reference   (메모리에 레퍼런스가 저장되어 있기 때문에 레퍼가 전달이 된다. )
function changeName(obj) {
  obj.name = "coder"; // 전달된 옵젝트의 name을 무조건 coder로 변경하는것
}
const zero = { name: "seazero" }; //옵젝트(zero)가 만들어진 레퍼런스가 메모리에 들어가게 되고 레퍼런스는 오브젝트를 메모리 어딘가에 가리키고 있다.(name: "seazero" 를 가리키고 있다.)
changeName(zero);
console.log(zero);

// 3. Default parameters (added in ES6)
function showMessage(message, from = "unknown") {
  // = "unknown" 이렇게 원하는 디폴트값을 정해놓으면 undefined말고 지정한 값으로 나온다.
  console.log(`${message} by ${from}`);
}
showMessage("Hi!!"); // 이걸 전달하면 message는 정의되어 있지만 from는 파라미터를 전달하지 않아서 undefined로 나오게된다.

// 4. Rest parameters (added in ES6)
function printAll(...args) {
  // ...이렇게 작성하는 것을 rest parameters라고 부르는데 배열 형태로 전달되는 것이다!
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }

  for (const arg of args) {
    // 이렇게 for~of를 사용할 수 있다.
    console.log(arg);
  }

  // 더 간단한건 배열의 .forEach라는 함수형언어를 이용하면된다.
  args.forEach((arg) => console.log(arg));
}
printAll("javaScript", "study", "hard");

// 5. Local scope
// ****** 밖에서는 안이 보이지 않고 안에서만 밖을 볼 수 있다. ******
let globalMessage = "global"; // global variable
function printMessage() {
  // 블럭안에서 선언한건 지역변수
  let message = "hello";
  console.log(message); //local variable
  console.log(globalMessage); //블럭밖에서 선언한 글로벌 변수는 안에서 사용가능

  function printAnother() {
    // 중첩된 함수에서 자식함수는 부모함수에서 정의된 변수들에 접근이 가능하다.
    console.log(message);
    let childMessage = "hello";
  }
  //console.log(childMessage); // 부모는 자식 안에서 정의된 변수를 쓰면 에러발생!
}
printMessage();

//sum(2, 3); //sum이라는 함수를 정의하기 전에 함수호출 가능, 이것은 JS엔진이 아래 선언된 함수 sum을 제일 위로 올려주기(hoisting) 때문에 가능하다
// 6. Return a value
function sum(a, b) {
  return a + b;
}
const result = sum(1, 2); // 3이 return된다.
console.log(`sum: ${sum(1, 2)}`);

// 7. Early return, early exit (현업에서 쓰는 TIP!)
// bad
function upgradeUser(user) {
  if (user.point > 10) {
    // user의 포인트가 10이상인 경우에만 업그레이드를 해라
    // ~ 일때 ~ 해라 인 경우 블럭안에 많은 로직을 작성하면 가독성이 떨어진다.
    //long upgrade logic...
  }
}

// good
// 위와같은 경우에서 if와 else를 번갈아가면서 쓰기 보다는
function upgradeUser(user) {
  if (user.point <= 10) {
    // 조건이 맞지 않은 경우에는 빨리 리턴해서 함수를 종료하고
    return;
  }
  // 조건이 맞을 때만 여기로와서 필요한 로직들을 죽 실행하도록 해라
  //long upgrade logic...
}

/* ############################################################################ */

// First-class function  ( 위에 첫 시간에 배운 function ... )
// function are treated like any other variable     (함수는 다른 변수와 마찬가지로)
// can be assigned as a value to variable   (변수에 할당이 되고)
// can be passed as an argument to other functions.     (함수의 파라미터로 전달이 되며)
// can be returned by another function  (리턴값으로도 리턴이 된다.)

// 1. Function expression
// a function declaration can be called earlier than it is defiend. (hoisted)
// a function expression is created when the excution reached it.

//print(); 를 이렇게 선언하기 이전에 호출하면 에러가 난다.
// function declaration과 function expresstion의 가장 큰 차이점은
// function expression은 할당된 다음부터 호출이 가능한 반면에
// function declaration은 hoist가 가능하다. (위에 6번으로 가기)
const print = function () {
  // function에 이름이 없고 바로 print라는 변수에 할당이된다.
  // function에 이름이 없는 것을 anonymous function이라고 한다.
  // 이렇게 함수 이름없이 필요한 부분만 작성해서 변수에 할당할 수 있다.
  console.log("print");
};
print(); // 이렇게 변수를 함수처럼 호출할 수 있다.
const printAgain = print; // 이렇게 다른 변수에 할당하게 되면 결국 printAgain은 함수를 가리키고 있는 것이다.
printAgain(); // 얘도 함수처럼 호출할 수 있다.
const sumAgain = sum;
console.log(sumAgain(1, 3));

// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
  // 너가 상황에 맞으면 전달된 함수(printYes, printNO)를 불러!라고 전달하는 것을 callback 함수라고 한다.
  if (answer === "love you") {
    printYes();
  } else {
    printNo();
  }
}

//anonymous function
const printYes = function () {
  console.log("Yessss!");
};

//named function
// better debugging in debugger's stack traces (named function을 쓰는 경우는 디버깅을 할때 stack traces에 나오게 하기 위해서 쓰는 것)
// recursions ( 재귀함수가 필요 할 때도 쓴다 )
const printNo = function print() {
  console.log("Nooooo!");
  //print(); 피보나치, 반복되는 평균값을 계산하는 등 필요할 때만 재귀를 써라
};

randomQuiz("wrong", printYes, printNo);
randomQuiz("love you", printYes, printNo);

// Arrow function ❤️❤️❤️
// always anonymous     (항상 이름이 없는 함수이다.)
/* 이걸 아래에 Arrow function을 이용해서 바꿈
const simplePrint = function () {
  console.log("simplePrint");
};
*/
const simplePrint = () => console.log("simplePrint"); //function지우고 블럭 지우고 => 넣으면 끝!
const added = (a, b) => a + b; // retrun값이 a+b인것이다
const simpleMultiply = (a, b) => {
  // 더 긴 함수를 이용해야하면 블럭을 만들어서 사용한다. 대신 블럭을 사용하면 retrun을 사용해서 값을 반환해줘야한다.
  //do something more
  return a + b;
};

// IIFE: Immediately Invoked Function Expression
(function hello() {
  console.log("IIFE");
})(); //이렇게 괄호들로 묶어주면 된다.
//hello(); //함수를 선언하고 이렇게 따로 호출해줘야하지만 IIFE를 사용하면 선언함과 동시에 호출 할 수 있다.

// Fun quiz time❤️
// function calculate(command, a, b)
// command: add, substract, divide, multiply, remainder

const calculate = (command, a, b) => {
  switch (command) {
    case "add":
      add(a, b);
      break;
    case "substract":
      substract(a, b);
      break;
    case "divide":
      divide(a, b);
      break;
    case "multiply":
      multiply(a, b);
      break;
    case "remainder":
      remainder(a, b);
      break;
  }
};

const add = (a, b) => console.log(a + b);
const substract = (a, b) => console.log(a - b);
const divide = (a, b) => console.log(a / b);
const multiply = (a, b) => console.log(a * b);
const remainder = (a, b) => console.log(a % b);

calculate("add", 5, 3);
calculate("substract", 5, 3);
calculate("divide", 5, 3);
calculate("multiply", 5, 3);
calculate("remainder", 5, 3);
