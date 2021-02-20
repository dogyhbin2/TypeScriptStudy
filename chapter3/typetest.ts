// function add10(a) {
//     return a + 10;
// }
// console.log(add10(10))
// //타입스크립트 : 점진적 타입 검사 - 컴파일시에 검사한다. 필요 없을 시 생략

// var width = 10;
// var height = 10.0;
// var myName = "happy";
// var animals = ["tiger", "hourse", "rhi"];
// var myFullName = { first: "happy", last: "grammer" };
// console.log(typeof width, typeof height);
// console.log(typeof myName);
// console.log(typeof animals, typeof myFullName);

// if (typeof width === "number" && typeof height == "number") {
//     console.log("area: ", width * height);
// }

// //Any -> 기본타입, Union, Intersection, Object
// //기본 타입 -> string, number , boolean, symbol, enum, 문자열 리터럴
// enum WeekDay { Mon, Tue, Wed, Thu }
// let day: WeekDay = WeekDay.Tue;
// console.log(day);

// let Thr2 = 2
// enum WeekDay2{Mon = 10, Tue, Wed = 102, Thr = Thr2}
// console.log(WeekDay2);

// type EventType = "keyup" | "mouseover";
// let asdf: EventType = "keyup"

// //객체 타입 (Object) -> Array, Tuple, Function, Constructor, Class, Interface

// //Union -> 2개 이상의 타입을 하나의 타입으로 정의한 타입
// let asdfasdf: number | string = "1";

// //Intersection -> 두 타입을 합쳐 하나로 만들 수 있는 타입
// interface Cat { leg: number; }
// interface Bird { wing: number; }
// let birdCat: Cat & Bird = { leg: 4, wing: 2 };

// //특수 타입 -> void, null, undefined
// //void -> 반환값이 없을 때, undefined나 null값을 받을 때 
// function say() : void{
//     alert("hello");
// }

// let unusable : void = undefined;

// //undefined -> 어떠한 빈값으로도 초기화 되지 않는 타입, 모든 타입의 하위 타입
// let a : undefined = undefined;
// console.log(a);

// var persion = {name : "happy"};
// console.log(   persion);
// persion = null;
// console.log(persion);

// let arr: string[] = ["a", "b", "c"];
// let arr2: Array<String> = ["a", "b", "c"];
// console.log(typeof arr);
// console.log(typeof arr2);

// let x: Array<[string, number]> = [["Tuple", 100]];
// console.log(typeof x, typeof x[0], typeof x[1]);
// console.log( x[0][1].toFixed(2));

// let testUndefined;
// console.log(testUndefined, typeof testUndefined);

// let testUndeinfed2 : undefined = undefined;
// console.log(testUndeinfed2, typeof testUndeinfed2);

// let testNull:null = null;
// console.log(testNull, typeof testNull);

//undefined는 선언은 됐지만 값이 할당되지 않았고, null은 값은 할당되었으나 값이 없다.
console.log(null === undefined);
console.log(null == undefined);
console.log(undefined == undefined);

//=== : 타입과 값이 같은지, == : 값이 같은지