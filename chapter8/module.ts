// 모듈은 독립 가능한 기능의 단위
// 모듈의 장점 
// 1. 유지보수의 용이성 -> 중복코드를 없앨 수 있음 
// 2. 전역 스코프 오염을 방지
// 3. 재사용성 향상

//내부 모듈과 외부 모듈로 구분
//내부 모듈 -> 네임스페이스를 의미
//외부 모듈 -> export라고 선언해 외부로 공개된 모듈

//내부 모듈 -> 네임스페이스는 전역 이름 공간과 분리된 네임스페이스 단위의 이름 공간
//외부 모듈 -> export 키워드를 이용하여 외부 모듈로 선언, 외부 모듈의 이름 공간은 파일 내로 제한됨. 파일이 다르다면 외부 모듈 이름이 같아도 ㄱㅊ

//네임스페이스는 전역 스코프에 속하지만 전역 스코프와 독립된 이름 공간

//네임스페이스는 하나의 독립된 이름 공간을 만들고 여러 파일에 걸쳐 하나의 이름 공간을 공유할 수 있음
//module, namespace는 키워드의 차이, 성능 역할 차이 X이지만 namespace사용 권장
// namespace Hello{}
// module Hello{}

// namespace Hello {
//     function print() {
//         console.log("Hello!");
//     }
// }

// module Hello {
//     function print() {
//         console.log("Hello!");
//     }
// }

// namespace MyInfo1 {
//     export let name1 = "happy1";
//     export function getName2() {
//         return MyInfo2.name2;
//     }
// }
// namespace MyInfo2 {
//     export let name2 = "happy2"
//     export function getName1() {
//         return MyInfo1.name1;
//     }
// }

// console.log(MyInfo1.getName2());
// console.log(MyInfo2.getName1());

//네임스페이스는 export를 이용해 모듈로 선언할 수 있음.
