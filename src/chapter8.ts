/**
 * 서로소 유니온 타입
 * 교집합이 없는 타입들로만 만든 유니온 타입을 말함
 */

import { error } from "console";
import { stat } from "fs";

type Admin = {
  tag: "ADMIN"; // 태그를 추가하여 타입을 구분
  name: string;
  kickCount: number;
};

type Member = {
  tag: "MEMBER";
  name: string;
  point: number;
};

type Guest = {
  tag: "GUEST";
  name: string;
  visitCount: number;
};

type User = Admin | Member | Guest;

// Admin -> {name}님 현재까지 {kickCount}명 강퇴했습니다.
// Member -> {name}님 현재까지 {point} 모았습니다.
// Guest -> {name}님 현재까지 {visitCount}번 방문했습니다.
// function login(user: User) {
//   if ("kickCount" in user) {
//     // adimin 타입
//     // user;
//     console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`);
//   } else if ("point" in user) {
//     // member 타입
//     // user;
//     console.log(`${user.name}님 현재까지 ${user.point} 모았습니다.`);
//   } else {
//     //guest타입
//     // user;
//     console.log(`${user.name}님 현재까지 ${user.visitCount}번 방문했습니다.`);
//   }
// }
// 위의 것은 직관적이지 못함

// 태그와 스위치를 이용해 직관적으로 변경
function login(user: User) {
  switch (user.tag) {
    case "ADMIN":
      console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`);
      break;
    case "MEMBER":
      console.log(`${user.name}님 현재까지 ${user.point} 모았습니다.`);
      break;
    case "GUEST":
      console.log(`${user.name}님 현재까지 ${user.visitCount}번 방문했습니다.`);
      break;
  }
}

//   if (user.tag === "ADMIN") {
//     // adimin 타입
//     // user;
//     console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`);
//   } else if ("point" in user) {
//     // member 타입
//     // user;
//     console.log(`${user.name}님 현재까지 ${user.point} 모았습니다.`);
//   } else {
//     //guest타입
//     // user;
//     console.log(`${user.name}님 현재까지 ${user.visitCount}번 방문했습니다.`);
//   }
// }

/**
 * 복습겸 한가지 더 사례
 */

// 비동기 작업의 결과를 처리하는 객체

// 로딩 중, 실패, 성공의 세 가지 상태를 가지는 유니온 타입을 정의
type LoadingTask = {
  state: "LOADING";
};

type FailedTask = {
  state: "FAILED";
  error: {
    message: string;
  };
};

type SuccessTask = {
  state: "SUCCESS";
  response: {
    data: string;
  };
};

type AsyncTask = LoadingTask | FailedTask | SuccessTask;
// 위의 유니온 타입을 아래와 같이 정의할 수도 있음
// {
//   state: "LOADING" | "FAILED" | "SUCCESS";
//   error?: {
//     // 선택적 프로퍼티
//     message: string;
//   };
//   response?: {
//     // 선택적 프로퍼티
//     data: string;
//   };
// };

// 로딩 중 -> 콘솔에 로딩중 출력
// 실패 -> 실패 : 에러메시지를 출력
// 성공 -> 성공 : 데이터를 출력
function processResult(task: AsyncTask) {
  switch (task.state) {
    case "LOADING": {
      console.log("로딩 중");
      break;
    }
    case "FAILED": {
      console.log(`에러 발생 : ${task.error.message}`);
      break;
    }
    case "SUCCESS": {
      console.log(`성공 : ${task.response.data}`);
      break;
    }
  }
}

const loading: AsyncTask = {
  state: "LOADING",
};

const failed: AsyncTask = {
  state: "FAILED",
  error: {
    message: "오류 발생 원인은~~",
  },
};

const success: AsyncTask = {
  state: "SUCCESS",
  response: {
    data: "데이터~~",
  },
};
