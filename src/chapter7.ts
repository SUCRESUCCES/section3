/**
 * 타입 좁히기
 * 조건문 등을 이용해 넓은타입에서 좁은타입으로
 * 타입을 상황에 따라 좁히는 방법을 이야기
 */

type Person = {
  name: string;
  age: number;
};

// value => number : toFixed
// value => string : toUpperCase
// value => Date : getTime
// value => Person : name은 age살 입니다.
function func(value: number | string | Date | null | Person) {
  value;
  // value.toUpperCase(); // 오류 발생: string에만 있는 메서드
  // value.toFixed(); // 오류 발생: number에만 있는 메서드

  if (typeof value === "number") {
    console.log(value.toFixed());
  } else if (typeof value === "string") {
    console.log(value.toUpperCase());
    //   } else if (typeof value === "object") {
    //     console.log(value.getTime());
    // null 값에다 typeof를 해도 object 반환
    // 그래서 value 값에 Date말고도 null이 올 수 있음
    // typeof가 아닌 새로운 타입 가드 사용
  } else if (value instanceof Date) {
    // instanceof는 왼쪽의 값이 오른쪽의 instance인지 확인
    console.log(value.getTime());
  }
  //   else if(value instanceof Person) {
  // Person은 클래스가 아니라 타입이므로 오류 발생
  else if (value && "age" in value) {
    // value가 null이 아닌지 확인
    console.log(`${value.name}은 ${value.age}살 입니다.`);
  }
}
