//type alias -> 기존 타입에 새로운 이름을 지을 수 있음
// type myId = string|number;
// let asdf : myId = 1;

// type myId = string;
// type myAlias = string | undefined;
// type User = {
//     id: myId;
//     alias?: myAlias;
//     city: string;
// };

// let id1: User = { id: "happy1", city: "a" };
// let id2: User = { id: "happy2", alias: undefined, city: "b" };
// let id3: User = { id: "happy3", alias: "happy3!!", city: "c" };

// console.log(typeof id1, id1);
// console.log(typeof id2, id2);
// console.log(typeof id3, id3);

// type MyArrayType = Array<number | boolean>;
// let myArray: MyArrayType = [1, true];
// console.log(myArray.toString());
// console.log(typeof myArray[0], typeof myArray[1]);

//console.log(parseInt("12aa"));

//타임 캐스팅
// let myNum = "10aa";
// let num1 = + myNum;
// let num2 = Number(myNum);
// let num3 = parseInt(myNum);
// let iasdf = ""
// if (isNaN(num1)) {
//     iasdf = "NANANANANAN"
// } else {
//     iasdf = `${num1}`
// }
// console.log(`1 - ${num1}
// 2 - ${num2}
// 3 - ${num3}
// 4 - ${iasdf}`);


//타임 어썰션
// let myNum: any = "2016";

// let num1 = +myNum;
// let num2 = Number(myNum);
// let num3 = parseInt(myNum);

// console.log(`num1=${num1}, ${typeof num1}`);
// console.log(`num1=${num2}, ${typeof num2}`);
// console.log(`num1=${num3}, ${typeof num3}`);

// let num4: number = <number>myNum;
// let num5: number = myNum as number;
// console.log(`num1=${num4}, ${typeof num4}`);
// console.log(`num1=${num5}, ${typeof num5}`);


//타입 시스템 - 동적 타입 검사(런타임시점에 수행), 정적 타입 검사(컴파일 시점에 수행)
//타입스크립트는 타입이 선언됐다면 정적 타입 검사 수행
//구조 타입 시스템(타입의 구조와 정의만 같다면 타입 호환 가능), 명목 타입 시스템(명시적으로 같은 타입이어야함)
//타입스크립트 지원 타이핑 방식 -> 덕 타이핑, 구조 타이핑, 구조 서브 타이핑, 명목 타이핑
//덕 타이핑 -> 런타임시 동적으로 타입의 구조가 정해지는 타입 지정 방식
//구조 타이핑 -> 타입의 구조만 같으면 서로 호환 가능한 타입 지정 방식
//구조 서브 타이핑 -> 타입의 구조가 부분적으로 같더라도 타입 호환을 지원
//명목 타입 시스템 -> 타입구조뿐만 아니라 타입까지 같아야함 

//구조 타이핑, 구조 서브 타이핑의 차이 -> 일부 구조가 같을 때 이뤄지는 타입 호환 방식

//덕타이핑
// class Duck {
//     a() {
//         console.log("DUCKA");
//     }

//     b() {
//         console.log("DUCKB");
//     }
// }

// class Goose {
//     a() {
//         console.log("GOOSEA");
//     }

//     b() {
//         console.log("GOOSEB");
//     }

//     c() {
//         console.log("GOOSEC");
//     }
// }

// function swim(obj) {
//     obj.a();
//     obj.b();
// }

// let duck = new Duck();
// let goose = new Goose();
// swim(duck);
// swim(goose);


// class Animal{
//     name:number;
//     constructor (name:string, weight:number){

//     }
// }

// class Bird{
//     name:number;
//     constructor(speed:number){}
// }

// let animal : Animal = new Animal("happy", 100);
// let bird:Bird = new Bird(10);

// animal = bird;
// bird = animal;


// class Person{
//     public name:string;
// }

// class Member extends Person{}

// class Admin extends Member{}

// class MemberCard{
//     public name : string;
//     public grade:number;
// }

// let admin : Admin = new Admin();
// admin = new MemberCard();

// interface Person {
//     name: string;
// }

// class Employee {
//     name: string;
// }

// let person: Person;
// person = new Employee();

// type Upper = { a: string, b: string };
// type Sub = { a: string, b: string, c: string };
// let objectUpper: Upper = { a: "a", b: "b" };
// let objectSub: Sub = { a: "a", b: "b", c: "c" };
// objectUpper = objectSub;
// console.log(objectUpper);

//함수에서만 가능
// let funcUpper = (a: string) => a;
// let funcSub = (a: string, b: string) => a + b;
// funcSub = funcUpper;
// console.log(`${funcSub("hello", "world")}`);

enum EastAsia1 { korea = 88, china = 86, japan = 81 };
enum EastAsia2 { korea = 88, china = 86, japan = 81 };

let east1: EastAsia1 = EastAsia1.china;
let east2: EastAsia2 = EastAsia2.china;

east1 = 1000;
east2 = 1000;
//east2 = EastAsia1.china;

console.log(`east1=${east1} ${typeof east1}
east2 = ${east2} ${typeof east2}`);
