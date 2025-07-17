/**
 * 대수 타입
 * -> 여러 개의 타입을 합성해서 새롭게 만들어낸 타입
 * -> 합집합 타입과 교집합 타입이 존재합니다
 */

/**
 * 1. 합집합 - Union 타입
 */
let a: string | number | boolean | undefined | null | {}; // string, number, boolean 중 하나의 타입을 가질 수 있습니다
a = 1;
a = "hello";

a = true;

let arr: number | string | boolean = [1, "hello", true];

// type Dog = {
//   name: string;
//   color: string;
// };

// type Person = {
//   name: string;
//   language: string;
// };

type Union1 = Dog | Person; // Dog 타입 또는 Person 타입을 가질 수 있습니다

let union1: Union1 = {
  name: "",
  color: "",
};

let union2: Union1 = {
  name: "",
  language: "",
};

let union3: Union1 = {
  name: "",
  color: "",
  language: "",
};

// 교잡합과 합집합에도 속하지 않음
// let union4: Union1 = {
//   name: "",
// };

/**
 * 2. 교집합 타입 - Intersection 타입
 */

let veriable: number & string;
// never 타입이 됨... 기본타입으로 교집합을 만들면 대부분 never 타입이 됨

type Dog = {
  name: string;
  color: string;
};

type Person = {
  name: string;
  language: string;
};

type Intersection = Dog & Person;

let intersection: Intersection = {
  name: "",
  color: "",
  language: "",
  // 하나라도 없을 경우 타입 에러 발생
};
