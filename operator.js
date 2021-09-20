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

// 6. Logical operators: ||(or). &&(and), !(not)
const value1 = false;
const value2 = 4 < 2;
