/**
 * 타입 추론
 */

let a: number = 10;

// 자동 추론
let b = "hello";
let c = {
  id: 1,
  name: "얌",
  profile: {
    nickname: "yammysays",
  },
  urls: ["https://yammysays.com"],
};

let { id, name, profile } = c;

// 구조분해할당
let [one, two, three] = [1, "hello", true];

function func(message = "hello") {
  return "hello";
}

// any 타입의 진화

let d;
// 변수를 선언하고 초기 값을 할당하지 않으면
// 암묵적인 any 타입으로 추론됨

// 암묵적으로 any 타입 추론한 것 과 명시적으로 any 타입을 지정한 것은 다름
// 명시적으로 any 타입을 지정하면 타입 추론이 되지 않음
// 암묵적으로 any 타입으로 추론된 변수는 계속 진화됨

d = 10;
d.toFixed(); // d는 any 타입으로 추론됨
// d.toUpperCase(); // 에러 발생, d는 any 타입이므로 string 메서드 사용 불가

d = "hello";
d.toLocaleLowerCase(); // d는 string 타입으로 추론됨
// d.toFixed(); // 에러 발생, d는 string 타입이므로 number 메서드 사용 불가

const num = 10;
const str = "hello";
// 상수는 타입 추론이 되지 않음

let arr = [1, "string"];
// 배열은 각 요소의 타입을 추론함

// 타입 넓히기?
