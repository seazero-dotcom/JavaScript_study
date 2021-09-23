// 1. String concatenation
console.log("my" + "car");
console.log("1" + 2);
console.log(`string literals:


'''''''
1 + 2 = ${1 + 2}`); // 이렇게 작성해도 출력이 된다

console.log("seazero's \n\tbook");

// 2. Numeric operators
console.log(1 + 1); // add
console.log(1 - 1); // substract
console.log(1 / 1); // divide
console.log(1 * 1); // multiply
console.log(5 % 2); // remainder
console.log(2 ** 3); // exponentiation 2의 3승

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter; // 아래와 같다
// counter = counter + 1;
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);

const postIncrement = counter++; // 아래와 같다
// postIncrement = counter;
// counter = counter + 1;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);

const preDecrement = --counter;
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`);

const postDecrement = counter--;
console.log(`postDecrement: ${postDecrement}, counter: ${counter}`);

// 4. Assigment operators
let x = 3;
let y = 6;
x += y; // x = x+ y;
x -= y;
x *= y;
x /= y;

// 5. Comparison operators
console.log(10 < 6); // less than
console.log(10 <= 6); // less than or equal
console.log(10 > 6); // greater than
console.log(10 >= 6); // greater than or equal

// 6. Logical operators: ||(or), &&(and), !(not)
const value1 = false;
const value2 = 4 < 2; //false

// || (or), finds the first truthy value
console.log(`or: ${value1 || value2 || check()}`); //세 개 중에 하나라도 true인 애가 있으면 true로 계산이 된다
// 만약 처음에 value1 자리에 true가 나오면 뒤에 value2와 check()를 실행하지 않고 멈춰버린다 !!
// 그러므로 무거운 function종류인 check()를 앞에 두면 안되고 가벼운 것들을 앞에 둬야지 좋다.

// && (and), finds the first falsy value
console.log(`and: ${value1 && value2 && check()}`);
// value1이 false가 나오게 되면 아. 게임 끝났네 나는 무족권 false야 ./..
// 뒤에 valse2와 check()가 true든지 false든지 나는 상관 안해. 뒤에 것 실행 안됨.
// and도 헤비한 operation일수록 뒤쪽에 작성하는 것이 좋다.
// often used to compress long if-statement
// nullableObject && nullableObject.something
// (Object가 null이면 false가 되기때문에 뒤에 something이 실행되지 않는다. 즉, nullObject가  null이 아닐때(true) 뒤에 something을 받아오게 된다.)
/* 위에 코드를 풀어보면 이렇게 된다.
if (nullableObject != null) {
  nullableObject.something;
}
*/
function check() {
  for (let i = 0; i < 10; i++) {
    //wasting time
    console.log("😱");
  }
  return true;
}

// ! (not), 값을 반대로 바꿔준다.
console.log(!value1);

// 7. Equality
const stringFive = "5";
const numberFive = 5;

// == loose equality, with type conversion 느슨한
console.log(stringFive == numberFive); // 타입을 변경해서 검사를 한다. 그래서 true다.
console.log(stringFive != numberFive);

// === strict equality, no type conversion 엄격한 ( 웬만하면 이걸 사용해서 검사하는게 좋다. )
console.log(stringFive === numberFive); // 타입을 신경써서 검사한다. 너넨 다른 타입이라서 false.
console.log(stringFive !== numberFive);

// object equality by reference 오브젝트는 메모리에 탑제될 때 레퍼런스 형태로 저장된다.
//zero1과 zero2는 똑같은 데이터가 들어있는 오브젝트지만 실제로 메모리에는 1과 2에는 각각 다른 레퍼런스가 들어있고 다른 레퍼런스는 서로 다른 오브젝트를 가르키고 있다.
const zero1 = { name: "seazero" };
const zero2 = { name: "seazero" };
const zero3 = zero1; //zero1의 레퍼런스가 할당되어있으니까 똑같은 레퍼런스를 가지고 있게 되는 것이다.
console.log(zero1 == zero2); // 각각 다른 레퍼런스가 저장되어 있기 때문에 false
console.log(zero1 === zero2); // 똑같은 타입이든 아니든 레퍼런스값이 다르기 때문에 false이다.
console.log(zero1 === zero3); // 1과 3는 같다. zero1이 가지고 있는 레퍼런스 벨류를 zero3으로 할당했기 때문에  1과 3은 똑같은 레퍼런스를 가지고 있다.

// equality - 퀴즈퀴즈 ~
console.log(0 == false); //둘 다 false로 간주하여 true
console.log(0 === false); // 0은 불리언 타입이 아니기 때문에 엄격한을 사용하면 결과는 false이다.
console.log("" == false); // empty문자열은 false이다. 그래서 둘 다 false이므로 true
console.log("" === false); // empty문자열은 불리언 타입이 아니기 때문에 엄격한을 사용하면 결과는 false이다.
console.log(null == undefined); // null과 nudefined는 같은것으로 간주된다.
console.log(null === undefined); // null과 undefined는 다른 타입이므로 false이다.

// 8. Conditional operations : if
// if, else if, else
const name = "seazero";
if (name === "seazero") {
  console.log("Welcome, zero!");
} else if (name === "coder") {
  console.log("You are amazing coder");
} else {
  console.log("unkwnon");
}

// 9. Ternary operator: ? 삼항연산자
// condition ? value1 : value2;
console.log(name === "seazero" ? "yes" : "no");

// 10. Switch statment
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS, TS에서 정해져있는 타입을 검사하거나 enum비슷한 아이들을 검사할 때 스위치를 쓰는 것이 가독성이 좋다.
// if else if else if... 여러개를 반복한다면 switch를 사용하는 것을 고려해봐
const browser = "IE";
switch (
  browser // browser의 값에 따라 case로 간다.
) {
  case "IE":
    console.log("go away!");
    break;
  case "Chrome":
  case "Firefox": // 출력문이 같은 경우에는 이렇게 case를 연달아서 쓰면 된다. 둘 다 love you!를 출력한다.
    console.log("love you!");
    break;
  default:
    console.log("same all!");
    break;
}

// 11. Loops
//while loop, while the condition is truthy,
// body code is executed
let i = 3;
while (i > 0) {
  console.log(`while: ${i}`);
  i--;
}

//do while loop, body code is executed first,
// then check the condition.
do {
  console.log(`do while: ${i}`);
  i--;
} while (i > 0);

// for loop, for(begin; condition; step)
for (i = 3; i > 0; i--) {
  console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i = i - 2) {
  //inline variable declaration
  console.log(`inline variable for: ${i}`);
}

// nested loops
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    console.log(`i: ${i}, j: ${j}`);
  }
}

// break, continue
// Q1. iterate from 0 to 10 and print only even numbers (use continue)
for (let i = 0; i < 11; i++) {
  if (i % 2 === 0) {
    console.log(`even number: ${i}`);
  }
}

// Q2. iterate from 0 to 10 and print numbers until reaching 8 (use break)
for (let j = 0; j < 11; j++) {
  if (j > 8) {
    break;
  }
  console.log(`number: ${j}`);
}
