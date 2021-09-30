//Json
// JavaScript Object Notaion

// 1. Object to Json
// stringfy(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(["apple", "banana"]);
console.log(json); // json의 규격사항에 맞에 더블쿼트로 감싸진 배열 형태로 나온다

const rabbit = {
  name: "tori",
  color: "tori",
  size: null,
  birthDate: new Date(),
  jump: () => {
    console.log(`${this.name} can jump!`);
  },
};

json = JSON.stringify(rabbit);
// 이렇게 찍어보면 jump함수는 JSON에 포함되지않아 출력되지 않는다.
// 함수는 오브젝트에 있는 데이터가 아니기때문에 함수는 제외된다.
console.log(json);

json = JSON.stringify(rabbit, ["name", "color"]); //원하는 속성만 불러와서 정의할 수 있다.
console.log(json);

// 좀 더 세밀하게 통제하고 싶을 때 콜백함수를 사용하면 된다.
json = JSON.stringify(rabbit, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === "name" ? "seazero" : value;
});
console.log(json);

// 2. Json to Object
// parse(json)
console.clear();

json = JSON.stringify(rabbit);
console.log(json);

const obj = JSON.parse(json, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === "birthDate" ? new Date(value) : value;
});
console.log(obj);
rabbit.jump();
// obj.jump(); json오브젝트에 JSON형태로 jump함수가 들어가지 못했기 때문에 obj오브젝트에는 jump가 없다.

console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate); // obj에는 string형태로 저장되어있기 때문에 getDate()로 불러올수 없다.
console.log(obj.birthDate.getDate()); //위에서 콜백함수로 Date를 불러올 수 있는 조건을 만들어줬으므로 getDate()가 가능하다
