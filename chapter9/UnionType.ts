// var x: string | number = 1;
// var y: boolean | string = "hello";

// console.log(x);
// console.log(y);

// function check(p: string | number | boolean): string | number | boolean {
//     if(typeof p ==="string"){
//         return p;
//     }else if(typeof p === "number"){
//         return p;
//     }else{
//         return p;
//     }
// }

// console.log(typeof check(1), check(1));
// console.log(typeof check("1"), check("1"));
// console.log(typeof check(true), check(true));

//타입 가드 -> 유니언 타입에 대한 타입 검사를 통해 타입 안정성을 주는 방법
// function myIndexOf(x: number | string, y: string) {
//     if (typeof x === "string") {
//         return x.indexOf(y);
//     } else if (typeof x === "number") {
//         return "not available";
//     }
// }

// console.log(myIndexOf("hello1", "1"));

// class Cat{
//     name = "cat";
//     age = 13;
// }

// class Dog{
//     name = "dog";
//     leg = 4;
// }

// function diffCheck(x:Cat|Dog){
//     if(x instanceof Cat){
//         console.log(x.name);
//         console.log(x.age);
//     }else if(x instanceof Dog){
//         console.log(x.name);
//         console.log(x.leg);
//     }
// }

// diffCheck(new Cat());

//문자 리터럴 타입
// type EventType = "keyup" | "mouseover" | 1;
// const myEvent: EventType = "keyup";
// console.log(typeof myEvent, myEvent);

// function on(event: EventType, callback: (message: string) => void) {
//     console.log(typeof event, event);
//     if(typeof event === "string"){
//         callback(`callback1!`);
//     }else{
//         callback(`callback2!`);
//     }

// };

// on(myEvent, (message) => console.log(message));

//룩업 타입
// interface Profile{
//     name:string;
//     gender:string;
//     age:number;
// }

// type Profile1 = keyof Profile;
// type Profile2 = keyof Profile[];
// type Profile3 = keyof {[x:string]:Profile};
// type Profile4 = keyof Profile["name"];

// let pValue1 : Profile1 = "name";
// //let pValue2 : Profile1 = "name";
// let pValue3 : Profile2 = "length";
// let pValue4 : Profile3 = "push";
// let pValue5 : Profile3 = "hello";
// let pValue6 : Profile4 = "length";
// //let pValue7 : Profile4 = "abc";

// console.log(`1 - ${pValue1}, 2 - err, 3 - ${pValue3}, 4 - ${pValue4}, 5 - ${pValue5}, 6 - ${pValue6}, 7 - err`);

// let studentName:string;
// studentName = "happy";
// studentName = null;
// studentName = undefined;


// let title: string | null;
// title = "Typescript Programming";
// title = null;

// let title2: string | undefined;
// title2 = "Typescript Programming";
// title2 = undefined;

//네버 타입 ->함수에 닿을 수 없는 영역이 있어서 반환값이 존재하지 않을 때, Throw 객체가 반환돼 오류가 발생할 때 
// const neverTouch = function (): never {
//     while (true) {
//         console.log("Never");
//     }
//     console.log("asdf");
// };
// let resultNever: never = neverTouch();

//조건 검사에서 예외 상황이 없게끔 수정하면 됨
// function nevertest(value: string | number) {
//     if (typeof value === "string") {
//         return value;
//     } else if (typeof value === "number") {
//         return value;
//     } else {
//         return value;
//     }
// }
// console.log(nevertest("test"));

// function error(message: string): never {
//     throw new Error(message);
// }

// function fail() {
//     return error("error!!!");
// }

// fail();


// function neverTouch(): never {

// };

// neverTouch();



//this -> 인터페이스와 클래스의 하위 타입이면서 이들을 참조할 수도 있는 타입, 선언 위치에 따라 참조하는 대상이 달라짐
//플루언트 인터페이스패턴 -> 자기 자신을 반환하는 인스턴스 메서드를 활용해 체이닝 형태로 선언하면 마치 데이터가 흐르듯이 표현 가능
//자기 자신을 반환함으로써 그 뒤에 함수를 더 달 수 있음. 꽤 깔끔한듯 나쁘지 않음
class AddClac {
    public constructor(public value: number = 0) { }
    public add(operand: number): this {
        this.value += operand;
        return this;
    }
}

class MyCalc extends AddClac {
    public multiply(operand: number): this {
        this.value += operand;
        return this;
    }
}

let calc = new MyCalc(3).multiply(5).add(3);
console.log(calc.value);