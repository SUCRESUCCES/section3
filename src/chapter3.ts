/**
 * 기본 타입간의 호환성
 */

let num1: number = 10; // number 타입
let num2: 10 = 10; // number리터럴 타입

num1 = num2; // number 타입은 number리터럴 타입에 할당 가능
// number타입이 number리터럴 타입보다 넓은 타입인 슈퍼타입이라 업캐스팅이라 가능

/**
 * 객체 타입의 호환성
 * -> 어떤 객체타입을 다른 객체타입으로 취급해도 괜찮은가?
 */

type Animal = {
  name: string;
  color: string;
};

type Dog = {
  name: string;
  color: string;
  breed: string;
};

let animal: Animal = {
  name: "기린",
  color: "yellow",
};

let dog: Dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도",
};

animal = dog; // Dog 타입은 Animal 타입에 할당 가능

// dog= animal; // Animal 타입은 Dog 타입에 할당 불가능

// type Book = {
//   name: string;
//   price: number;
// };

type ProgrammingBook = {
  name: string;
  price: number;
  skill: string;
};

let book: Book;
let programmingBook: ProgrammingBook = {
  name: "한 입 크기로 잘라먹는 리액트",
  price: 33000,
  skill: "reactjs",
};

book = programmingBook; // ProgrammingBook 타입은 Book 타입에 할당 가능
// 서브타입을 슈퍼타입에 할당하는 것은 가능

// programmingBook = book; // Book 타입은 ProgrammingBook 타입에 할당 불가능
// 슈퍼타입을 서브타입에 할당하는 것은 불가능

/**
 * 초과 프로퍼티 검사
 * (타입스크립트의 특수 기능)
 */

type Book = {
  name: string;
  price: number;
};

let book2: Book = {
  name: "한 입 크기로 잘라먹는 리액트",
  price: 33000,
  // skill: "reactjs", // Book 타입에 정의되지 않은 프로퍼티가 있음
};

// 초과 프로퍼티 검사란?
// 객체 리터럴을 타입에 할당할 때,
// 타입에 정의되지 않은 프로퍼티가 있으면 에러 발생

let book3: Book = programmingBook;

function func(book: Book) {}
func({
  name: "한 입 크기로 잘라먹는 리액트",
  price: 33000,
  // skill: "reactjs",
  // 함수의 인자로 객체를 전달할 때도 초과 프로퍼티 검사 발동
});
