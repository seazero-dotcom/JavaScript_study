// Q1. make a string out of an array  (주어진 배열을 스트링으로 변환하라)
{
  const fruits = ["apple", "banana", "orange"];
  const result = fruits.join("|"); // 배열을 String 으로 한번에 보여주는 api
  console.log(result);
}

// Q2. make an array out of a string  (String을 array로 만들기)
{
  const fruits = "🍎, 🥝, 🍌, 🍒";
  const result = fruits.split(",", 2); // ,(콤마) 단위로 잘라서 전달한다. 뒤에 숫자를 입력하면 첫 번째 2개만 전달 받을 수 있다.
  console.log(result);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  const result = array.reverse();
  console.log(result);
  console.log(array); // reverse()는 기존 배열 자채도 변경해버린다.
}

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  const result = array.slice(2, 5); // 배열의 특정한 부분을 리턴한다. start, end 범위를 쓰면 end가 5라면 5는 배재되고 4까지 출력된다.
  console.log(result);
  console.log(array); // 기존배열은 그대로 살아있다.

  /* 우리는 새로운 배열을 만들어야하니까 splice말고 slice를 사용한다.
  const result = array.splice(0, 2); // 어디서부터 몇 개나 지울것인가, 지운것을 저장
  console.log(result);
  console.log(array); // 위에서 2개 지웠으니까 배열 자체에는 3개만 남아있음
*/
}

class Student {
  constructor(name, age, enrolled, score) {
    // enrolled: 수업에 등록했는지 안했는지
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student("A", 29, true, 45),
  new Student("B", 28, false, 80),
  new Student("C", 30, true, 90),
  new Student("D", 40, false, 66),
  new Student("E", 18, true, 88),
];

// Q5. find a student with the score 90
{
  // call back 함수..
  // 배열의 요소들마다 호출이 되고 student를 받아왔을 때 90점이면 true를 리턴하고 아니면 false
  const result = students.find((student) => student.score === 90); //true일 때 리턴된다.
  console.log(result);
}

// Q6. make an array of enrolled students
{
  // 수업에 등록한 학생들만 retrun
  const result = students.filter((student) => student.enrolled);
  console.log(result);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
  // map: 배열안에 들어있는 모든 요소들을 전달해준 콜백함수로 호출하면서 콜백함수에서 가공되어진 리턴되어진 값들로 대체하는 것이다.
  const result = students.map((student) => student.score);
  console.log(result);
}

// Q8. check if there is a student with the score lower than 50  (점수가 50점 밑에인 학생이 있는지 없는지)
{
  //some: 배열의 요소중에서 콜백함수가 true를 리턴하는애가 있는지 없는지 확인하는 것
  const result = students.some((student) => student.score < 50);
  console.log(result); // 50보다 낮은 애가 한 명이라도 있으면 true가 리턴된다.

  //evey: 배열에 들어있는 모든 요소들이 이 조건을 충족해야지만 true가 리턴된다.
  const result2 = !students.every((student) => student.score >= 50);
  console.log(result2); // 모든학생들의 점수가 50보다 높거나 같아야지 true인데 !로 뒤집어줌
}

// Q9. compute students' average score
{
  //reduce: 배열에 있는 모든 요소들을 누적하는 (함께 모아놓는) 여기서는 누적합함
  const result = students.reduce((prev, curr) => prev + curr.score, 0);
  console.log(result / students.length);

  /* 이걸 간단하게 만들면 위에 것
  const result = students.reduce((prev, curr) => {
    // 배열하나하나 순차적으로 curr에 전달이 되는데
    // prev는 우리가 리턴(prev + curr.score)한 값이 그 다음에 호출될 떄 prev로 연결되어진다. 리턴한 값들이 순차적으로 prev에 전달이 된다.
    console.log("----------");
    console.log(prev);
    console.log(curr);
    return prev + curr.score;
  }, 0); //0부터 시작 ~('A'부터 시작아니고 0,A,B,C..)
  console.log(result);
  */
}

// Q10. make a string containing all the scores  (학생들의 모든 점수를 string으로 변환하기)
// result should be: '45, 80, 90, 66, 88'
{
  //와씨..... 아주 좋네
  const result = students.map((student) => student.score).join();
  console.log(result);

  /* 이렇게 filter도 추가할 수 있음 
  const result = students
    .map((student) => student.score)
    .filter((score) => score >= 50)
    .join();
  console.log(result);
  */
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  const result = students
    .map((student) => student.score)
    .sort((a, b) => a - b) //(이전값, 현재값) -값이 리턴되면 이전값이 현재값보다 작다고 간주되어지면서 정렬이돼, b - a 로 하면 점수가 높은것이 먼저 나오는 순서로 정렬이 된다.
    .join();
  console.log(result);
}
