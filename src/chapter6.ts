/**
 * 타입 단언(type assertion)
 */

type Person = {
  name: string;
  age: number;
};

let person = {} as Person;
person.name = "쪼얌";
person.age = 100;

type Dog = {
  name: string;
  color: string;
};

let dog = {
  name: "멍멍이",
  color: "brown",
  breed: "진도", // 초과 프로퍼티 검사 발동해서 원래 불가능
} as Dog; // 타입 단언으로 우회 가능

/**
 * 타입 단언의 규칙
 * 값 as 단언 <- 단언식
 * A as B
 * A가 B의 슈퍼타입이거나
 * A가 B의 서브타입이어야 함
 */

let num1 = 10 as never;
// 10은 number타입이고 never는 모든 타입의 서브타입이므로 가능
// a는 b의 슈퍼 타입
let num2 = 10 as unknown;
// 10은 number타입이고 unknown은 모든 타입의 슈퍼타입이므로 가능
// a는 b의 서브 타입

// let num3 = 10 as string;
// 10은 number타입이고 string은 서로 겹치는 부분이 없으므로
// 서로의 슈퍼타입도 서브타입도 아님
// 따라서 타입 단언 불가능

// 위의 값을 오류가 안나게 변경 가능
let num3 = 10 as unknown as string;
// 다중 단언을 하면 단언이 안되는 타입도 가능 하지만 안 좋은 방법

/**
 * const 단언
 *  */

let num = 10 as const;

let cat = {
  name: "얌",
  color: "orange",
} as const;

cat.name = ""; // 오류 발생 : 프로퍼티의 값 수정 불가능
// as const는 readonly로 취급

/**
 * Non Null 단언
 */

type Post = {
  title: string;
  author?: string; // 선택적 프로퍼티
};

let post: Post = {
  title: "게시글1",
  author: "쪼얌",
};

// const len: number = post.author?.length;
// ? : obtional chaining
const len: number = post.author!.length;
// ! : Non Null 단언 연산자(값이 있어..!라는 의미?)
