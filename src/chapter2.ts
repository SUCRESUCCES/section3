/**
 * UnKnown 타입
 */

function UnKnownExam() {
  // unknown 타입은 모든 타입의 상위 타입으로, 어떤 값이든 할당할 수 있지만,
  // 그 값을 사용하기 위해서는 타입 단언(type assertion)이나 타입 검사가 필요합니다.
  // 업캐스팅
  let a: unknown = 1;
  let b: unknown = "hello";
  let c: unknown = true;
  let d: unknown = null;
  let e: unknown = undefined;

  let unknownVar: unknown;

  // 다운캐스팅
  //   let num: number = unknownVar; // Error: Type 'unknown' is not assignable to type 'number'.
  //   let str: string = unknownVar; // Error: Type 'unknown' is not assignable to type 'string'.
  //   let bool: boolean = unknownVar; // Error: Type 'unknown' is not assignable to type 'boolean'.

  // unknown 타입의 변수에는 모든 값을 넣을 수 있지만(업캐스팅),
  // unknown 타입의 변수는 어떤 타입의 변수에도 들어갈 수 없다.(다운캐스팅)
}

/**
 * Never 타입
 * 모든 타입의 서브타입
 * 공집합..?
 */

function neverExam() {
  function neverFunc(): never {
    while (true) {}
  }
  // never 타입은 함수가 절대 반환할 값이 없음을 의미

  // never 타입은 모든 타입의 서브타입이므로,
  // never 타입의 값을 다른 타입에 할당가능
  // 업캐스팅
  let num: number = neverFunc();
  let str: string = neverFunc();
  let bool: boolean = neverFunc();

  // 다운캐스팅은 불가능
  // never 타입의 값은 어떤 타입에도 할당할 수 없기 때문에,
  //   let never1: never = 10; // Error: Type 'number' is not assignable to type 'never'.
  //   let never2: never = "hello"; // Error: Type 'string' is not assignable to type 'never'.
  //   let never3: never = true;

  // => never타입은 어떤 값도 저장되면 안되는 변수의 타입으로 사용
}

/**
 * void 타입
 */

function voidExam() {
  function voidFunc(): void {
    console.log("hi");
    return undefined;
  }

  // 업캐스팅이라 가능
  let voidVar: void = undefined; // void 타입은 undefined만 할당 가능
}

/**
 * any 타입
 */

// any 타입은 모든 타입의 수퍼타입일 수도,, 그리고 서브타입일 수도,,
function anyExam() {
  let unknownVar: unknown;
  let anyVar: any;
  let undefinedVar: undefined;

  // 다운캐스팅 가능
  anyVar = unknownVar; // unknown 타입은 any 타입에 할당 가능

  // 다운캐스팅 가능
  undefinedVar = anyVar; // any 타입은 undefined 타입에 할당 가능

  // neverVar = anyVar;
  // never 타입은 어떤 값도 담을 수 없기 때문에 any타입도 할당 불가능
}
