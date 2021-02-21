//함수의 매개 변수에 대한 타입 검증(타입이 일치하지 않으면 타입 캐스팅)
//ㅎ마수의 연산을 수행한 후에 반환값에 대한 타입 캐스팅
//함수 호출 결과에 대한 타입 캐스팅
// function ambiguity(str){
//     if(typeof str !== "string"){
//         str = String(str);
//     }
//     return String(str) + 1000;
// }

// let result = ambiguity("1000");
// console.log(typeof result, result);

// function max(x:number, y:number) : number{
//     if(x > y){
//         return x;
//     }else{
//         return y;
//     }
// }

// let a = max(1,2);
// //let b = max("asdf","asdasdff");
// console.log(`a = ${a}`);

// function pow(x: number, n = 2) {
//     return x ** n
// }
// console.log(pow(2));
// console.log(pow(3, 3));


// function colors(a: string, ...rest: string[]) {
//     return a + " " + rest.join(" ");
// }
// console.log(colors("a"));
// console.log(colors("1", "asdf", "fdas"));

//선택 매개변수는 초깃값 세팅 불가
// function sum(a: number, b?: number): number {
//     return a + b;
// }
// console.log(sum(1));

// function add(a: string, b: string): string;
// function add(a: number, b: string): string;
// function add(a:number, b:string) : string;
// function add(a: any, b: string): any {
//     return a + b;
// }

// console.log(add(1,"1"));
// console.log(add(1,"1"));

//오버로딩을 할 때 가장 포용력? 상위 타입을 하단에 두고 구현을 한다.
// let cs = [
//     { name: "a", month: 1 },
//     { name: "b", month: 2 },
//     { name: "c", month: 3 },
//     { name: "d", month: 4 },
//     { name: "e", month: 5 },
//     { name: "f", month: 6 },
//     { name: "g", month: 7 },
//     { name: "h", month: 8 },
//     { name: "i", month: 9 },
//     { name: "j", month: 10 },
//     { name: "k", month: 11 },
//     { name: "l", month: 12 }
// ];

// function pick(x: { name: string }): number;
// function pick(x: { month: number }): string;
// function pick(x: number): number;
// function pick(x: any): any {
//     if (typeof x == "object") {
//         if (x.month === undefined && x.name !== undefined) {
//             for (let c of cs) {
//                 if (x.name === c.name) {
//                     return c.month;
//                 }
//             }
//         } else if (x.month !== undefined && x.name === undefined) {
//             if (x.month < 1 || x.month > 12) {
//                 return -1;
//             } else {
//                 return cs[x.month - 1].name;
//             }
//             // for(let c  of cs){
//             //     if(x.month === c.month){
//             //         return c.name;
//             //     }
//             // }
//         }else{
//             return -1;
//         }
//     }else if(typeof x === "number"){
//         if(x > 0 && x < 13){
//             return x-1;
//         }else{
//             return -1;
//         }
//     }else{
//         return -1;
//     }
// }

// console.log(pick({month : 0}));
// console.log(pick({month : 5}));
// console.log(pick({name : "c"}));
// console.log(cs[pick(5)]);


//람다는 익명함수를 더 간략하게 표현할 수 있는 방법
// let x = (y1) => { return y1 };
// console.log(x(1));
// console.log((x => { return x; })(3));

// let numberList = [1, 2, 3, 4, 5];
// numberList = numberList.filter(number => {
//     return number % 2 === 0;
// });
// console.log(numberList);

// function getSum(nums: number[]): number {
//     return nums.reduce((a, b) => {
//         console.log(a);
//         console.log(b);
//         return a + b;
//     });
// }

// let numSum = getSum([1, 2, 3, 4, 5]);
// console.log(`numSum=${numSum}`);

//객체 리터럴은 여러 속성과 값을 한 단위로 묶어서 표현할 수 있는 객체
//객체 리터럴에서 속성은 key가 되고 값은 숫자나 문자열 뿐만 아니라 사용자가 정의한 객체도 할당 가능(함수도 객체이므로 함수도 속성값에 할당할 수 있음)
// let person = {
//     name: "Happy",
//     hello: function (name2: string) {
//         console.log("Hello"+this.name + name2);
//     }
// };
// person.hello("World");

//객체 리터럴 내부 함수에서 외부 속성에 참조할 때 코드 어시스턴트 불가 -> 객체 리터럴의 타입을 선언해 내부 참조를 함
//타입
// interface PersonType {
//     name: string,
//     hello(this: PersonType, name2: string): string;
// }
// //생성, this는 반드시 첫번째 매개변수로 선언
// let typedPerson: PersonType = {
//     name: "Happy",
//     hello: function (this: PersonType, name2: string): string {
//         let message = `Hello, ${this.name} ${name2}`;
//         return message;
//     }
// };
// console.log(typedPerson.hello("World"));


// let myConcat: (str1: string, str2: string) => string = (str1, str2) => { return str1 + str2 };
// // 함수의 타입을 걷어냄
// type calcType = (str1: number, str2: number) => number;
// let addConcat: calcType = (a, b) => a + b;
// let minusConcat: calcType = (a, b) => a - b;

//콜백 함수 -> 또 다른 함수의 매개변수로 전달될 수 있는 함수
//고차함수 -> 콜백 함수를 전달"받는"함수는 콜백함수보다 상위 처리를 담당함
// function echoFunction(message:string, callback){
//     return callback(message);
// }

// let responseMessage = echoFunction("hello World", message => message);
// console.log(responseMessage);

type EchoCalllbackType = (message: string) => string;
let callbackEcho: EchoCalllbackType = message => message;
let callbackEchoWithLength: EchoCalllbackType = message => `${message}${message.length}`;

function echoFunction(message: string, callback: EchoCalllbackType) {
    return callback(message);
}

let responseEcho = echoFunction("Hello World", callbackEcho);
let responseEchoWithLength = echoFunction("Hello World", callbackEchoWithLength);

console.log(responseEcho);
console.log(responseEchoWithLength);