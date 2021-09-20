// 1. Use strict
//added ECMAScript 5
//use this for Vanlia Javascript
//use strict를 쓰면 비상식적인 문법을 쓸 수 없게한다 
'use strict';

console.log('Hello World!');


// 2. Variable(변수), rw(read/write)
// let (added in EX6)

// 3. Block scope
// 블럭 안에 선언한 것은 블럭 밖에서 사용할 수 없다.

// 4. Global scope
// 어느 곳에서나 접근이 가능하다.
// global한 변수들은 어플리케이션이 실행되는 순간부터 끝날 때까지 항상 메모리에 탑재되어 있기 때문에 최소한으로 쓰는 것이 좋다.
// 가능하면 클래스나 함수 if나 for loop로 필요한 부분에서만 정의해서 쓰는 것이 좋다.

let globalName = 'globalName'
{
    let name = 'haeyoung';
    console.log(name);
    name ='hello';
    console.log(name); 
    console.log(globalName);

}
console.log(name); //아무값도 나오지 않은다.
console.log(globalName);

// 5. var
// let 전에는 var를 썼는데 DON'T EVER USE THIS!!!!!!!!!!
// var hoisting이란 어디에 선언했는지 상관없이 제일 위로 끌어올려주는 것을 말한다.
// var has no block scope
age =4; //이렇게 var로 선언하기도 전에 값을 할당해도 되기때문에 위험하다.
var age;


// 6. Constant, r(read only)
// 선언함과 동시헤 할당한 뒤로는 값이 절대로 바뀌지 않는다.
// use const whenever possible.
// only use let if variable needs to change.
const daysInWeek = 7;
const maxNumber = 5;

// Note!
// Immutable data type: primitive types, frozon objects (i.e. object.freese())
// Mutable data types: all objects by default are mutable in JS.
// favor immutable data type always for a reasons:
//   - security
//   - thread safety
//      : 다양한 쓰레드들이 동시에 접근해서 값을 변경을 할 수 있는데 동시에 값을 변경한다는 것은 위험하다. 그렇기 때문에 가능하면 값이 변하지 않는 것을 사용하는 것이 좋다.
//   - reduce human mistakes
// 값이 계속 변경될 수 있는 것을 Mutable 데이터 타입이라 한다. = let



// 7. Variable types
// primitive 타입은 더이상 작은 단위로 나누어질 수 없는 single item을 말한다.
//      : number, string, boolean, null, undefiedn, symbol
// object 타입은 single item들을 여러개 묶어서 한 박스(box container)로 관리할 수 있도록 해주는 것이다.
// JS에서는 function도 데이터 타입중 하나인데 
//      first-class function이 지원이돼서 function도 다른 데이터 타입처럼 변수에 할당이 가능하고 
//      함수의 파라미터 인자로도 전달이 되고 함수에서 return타입으로도 function을 리턴 할 수 있는 것이 가능하다.

/* [ primitive type ] number~symbol */
//number type
const count = 17; //integer
const size = 17.1; //decimal number
console.log(`value: ${count}. type: ${typeof count}`);
console.log(`value: ${size}. type: ${typeof size}`);

// number - speical numeric valuse: infinity, -infinity, Not a Number(nAn)
const infinity = 1 / 0; //양의 무한대
const negativeInfinity = -1 / 0; //음의 무한대
const nAn = 'not a number' / 2; // 숫자가 아닌 String을 숫자로 나누게 되면 NaN이 출력된다.
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);


// bigInt (fairly new, don't use it yet) 새로 추가된 애들 !! 모든 브라우저에 사용되는지 확인하기
const bigInt = 123456789012345678901234567890n; //over (-2*53) ~ 2*53, 마지막에 n을 붙여주면 bigInt가 된다.
console.log(`value: ${bigInt}. type: ${typeof bigInt}`);


// string 
// 한 글자든 문자열이든 모두 스트링으로 쓴다 !!!
const char = 'c';
const brenden = 'brenden';
const greeting = 'hello ' + brenden;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brenden}!`; //template literals(string) : 백틱쓰고 ${}쓰면 불러와서 쓰는 것
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);
console.log('vlaue: ' + helloBob + ' type: ' + typeof helloBob); // 이렇게 불편하게 쓰는걸 template literals로 해결!!(백틱과 ${}사용)


// boolean
// false: 0, null, undefined, NaN, ''(비어진 값) 이건 다 flase!!
// true: any other value 1, string 등등
const canRead = true;
const test = 3 < 1; // false 3이 1보다 작다는 거짓이다.
console.log(`value : ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);


//null
let nothing = null;
console.log(`value : ${nothing}, type: ${typeof nothing}`);


//undefined
let x;
console.log(`value : ${x}, type: ${typeof x}`);


// symbol, create unique identifiers for objects
// map이나 다른 자료구조에서 고유한 식별자가 필요하거나 동시에 다발적으로 concurrent하게 일어날 수 있는 코드에서 우선순위를 주고 싶을 때 (정말 고유한 식별자가 필요할 때)쓰인다.
//간혹 식별자를 string을 이용해서 쓰는 경우가 있는데요. 다른 모듈이나 다른 파일에서 동일한 string을 썻을 때 동일한 식별자로 간주된다.
// 하지만 반대로 symbol같은 경우에는 이렇게 동일한 'id'를 이용해서 symbol을 만들었지만 이 두 가지의 symbol은 다른 경우이다.
const symbol1 = Symbol('id'); 
const symbol2 = Symbol('id');
console.log(symbol1 ==symbol2); //이 두 개가 동일한지 아닌지 검사를 해보려면 이렇게 한다. false
// 이렇게 symbol은 동일한 string('id')으로 작성했어도 다른 symbol로 만들어지기 때문에 주어지는 string에 상관없이 고유한 식별자를 만들때 사용되어 진다.

// symbol을 동일한 string을 사용하여 만들고 싶다면, symbol.for을 사용한다.
const gSymbol2 = Symbol.for('id');
const gSymbol1 = Symbol.for('id'); 
console.log(gSymbol1 ==gSymbol2); //true

// symbol을 그냥 ${symbol1}으로 출력하게 되면 에러가 난다. ${symbol1.description}을 사용한다.
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

/* [object] real-life object, data structure */
// object는 우리가 일상생활에서 사용하는 물건과 물체들을 대표할 수 있는 박스형태를 말한다.
const seazero = { name: 'seazero', age: 20}; //seazero라는 오브젝트를 만들어서 이름은 뭐고 나이는 얼마다 라고 정의한다. const로 지정되어있어서 한 번 선언된 옵젝트는 변경이 불가능하다.
seazero.age = 21 ; //이렇게 변경이 가능하다


// 8. Dynamic typing: dynamically typed language
// c, java : statically typed language (변수를 선언할 때 어떤 타입인지 결정해서 타입을 같이 선언해준다.)
// javaScript : dynamically typed language (선언할 때 어떤 타입인지 선언하지 않고, runtime(프로그램이 동작할 때)할당된 값에 따라서 타입이 변경될 수 있다.)
// Dynamic typing언어는 내가 좋은아이디어가 있을 때 빠르게 프로토타입을 하고싶을 때는 정말 유용하게 쓸 수 있는 언어지만,
// 다수의 엔지니어들과 일 할 때는 발등에 불똥이 떨어질 수 있다.
let text = 'hello';
console.log(text.charAt(0)); // h 가 출력된다
console.log(`value: ${text}, type: ${typeof text}`); //여기서는 hello가 string 

text =1;
console.log(`value: ${text}, type: ${typeof text}`); //여기서는 hello가 number 

text = '7'+ 5; //string + number : 문자열에 더하기가 있으니까 뒤에 number 5를 string으로 변환해서 75를 출력한다.
console.log(`value: ${text}, type: ${typeof text}`); //여기서는 hello가 string

text = '8'/'2'; //string과 string을 나누면 number를 나누는 나누기 연산자를 썼네? 그리고 string안에 들어있는 것은 실제로 숫자 값이잖아. 그럼 숫자와 숫자를 나누자!
console.log(`value: ${text}, type: ${typeof text}`); //여기서는 hello가 number 
console.log(text.charAt(0)); // 중간에 number로 타입이 변해서 에러가 난다. 
//그래서 JS는 런타임에서 타입이 정해지기 때문에 이것 때문에 에러가 런타임으로 발생하는 경우가 굉장히 많다.
// 이런 문제 때문에 typeScript가 나왔다. JS위에 type이 올려진 것 ~

