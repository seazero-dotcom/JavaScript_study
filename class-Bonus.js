"use strict";
class Counter {
  // 아래 class처럼 구현하면 힘들다
  constructor(runEveyFiveTimes) {
    // 보통은 constructor에서 콜백함수를 받는다.
    this.counter = 0;
    // constructor도 함수이기 때문에 함수의 인자로 받아온(runEveyFiveTimes) 아이들을 클래스 자체에서 기억을 해야하기 때문에
    this.callback = runEveyFiveTimes; //변수에 인자로 받아온 함수를 할당해준다.
  }

  increase() {
    this.counter++;
    console.log(this.counter);
    if (this.counter % 5 === 0) {
      this.callback && this.callback(this.counter); //여기에 this.callback함수를 이렇게 써주면 된다.
      // this.callback이 true이면( = this.callback함수가 있다면, this.callback함수를 실행해라 callback할 함수가 없다면 false이기 때문에 && 뒤로 넘어가지 못함)
      // callback은 printSomething을 가리키고 있기 때문에 그게 수행이된다.
    }
  }
}
/*
Counter
____________________
| counter 0        |
| callback         |
|------------------|
| increase()       |
|__________________|
*/

function printSomething(num) {
  console.log(`WOw!!!!!! ${num}`);
}

function alertNum(num) {
  alert(`Wooooow! ${num}`);
}

//const coolCounter = new Counter(alertNum); //오브젝트를 만들 떄 우리가 원하는 생성자를 전달해주면서 만든다
// 이 말은 coolCounter라는 오브젝트는 Counter라는 클래스의 청사진을 이용해서 오브젝트를 만들었는데
/*
coolCounter
_____________________________________
| counter 0                         |
| callback -> printSimething        |
|-----------------------------------|
| increase()                        |
|___________________________________|
*/

const printCounter = new Counter(printSomething);
const alertCounter = new Counter(alertNum);
printCounter.increase();
printCounter.increase();
printCounter.increase();
printCounter.increase();
printCounter.increase();
printCounter.increase();
alertCounter.increase();
alertCounter.increase();
alertCounter.increase();
alertCounter.increase();
alertCounter.increase();
alertCounter.increase();

// 오브젝트를 생성할 때 함수를 같이 보내면 여기서 일일히 안써도된다.
// coolCounter.increase();
// coolCounter.increase();
// coolCounter.increase();
// coolCounter.increase();
// coolCounter.increase();
// coolCounter.increase();
// coolCounter.increase();
// coolCounter.increase();
// coolCounter.increase();
// coolCounter.increase();
// coolCounter.increase();

/* 이 방법은 너무 수작업이잖아 ~
class Counter {
  //Counter 라는 클래스에는 자체적으로 만들어지는(cosntructor) 변수가 있다
  constructor() {
    this.counter = 0; //이 클래스(Counter)를 이용해서 오브젝트를 만드는 순간 counter는 0으로 초기화가 된다.
  }

  //class안에 함수 선언할때는 function을 쓰지 않는다.
  increase(runIf5Times) {
    this.counter++; //increase를 호출할 때마다 counter를 하나씩 증가시킨다.
    console.log(this.counter);
    
    //여기에 쓰면 클래스 밖에서 조절을 못함
    //if (this.counter % 5 === 0) {
    //  console.log("yo!");
    //} 

    if (this.counter % 5 === 0) {
      runIf5Times(this.counter); //printSomething으로 숫자를 보낸다
    }
  }
}

const coolCounter = new Counter(); //이제 coolCounter는 우리가 만든 오브젝트를 가리키고있다.
function printSomething(num) {
  //runIf5Times에서 this.counter를 통해 숫자를 받는다.
  console.log(`yoyo! ${num}`);
}

function alertNum(num) {
  alert(`Wow!!! ${num}`);
}
coolCounter.increase(printSomething); //함수를 전달해준다
coolCounter.increase(printSomething);
coolCounter.increase(printSomething);
coolCounter.increase(printSomething);
coolCounter.increase(printSomething);
coolCounter.increase(printSomething); //함수를 전달해준다
coolCounter.increase(printSomething);
coolCounter.increase(printSomething);
coolCounter.increase(printSomething);
coolCounter.increase(alertNum);
*/
