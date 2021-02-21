//자바스크립트에서 지원하지 않음, 인터페이스는 선언만 존재, 멤버 변수와 멤버 메서드를 선언할 수 있지만 접근 제한자는 설정 X
// interface Car {
//     speed: number;
//     run():void;
// }
// interface SportsCar extends Car {
//     boost(): void;
// }

// interface Car { speed: number; }
// interface SportsCar { acceleration: number; }

// interface MyOptimizedCar extends Car, SportsCar {
//     waterProof: boolean;
// }

// let myCar = <MyOptimizedCar>{};
// myCar.speed = 100;
// myCar.acceleration = 100;
// myCar.waterProof = true;

// interface Dog {
//     run(): void;
//     getStatus(): { runningSpeed: number };
// }

// interface Bird {
//     fly(): void;
//     getStatus(): { flightSpeed: number; };
// }

// interface DogBird extends Dog, Bird {
//     getStatus(): { flightSpeed: number, runningSpeed: number; }
// }

// class NewAnimal implements DogBird {
//     getStatus(): { flightSpeed: number; runningSpeed: number; } {
//         return { flightSpeed: 10, runningSpeed: 20 };
//     }
//     run(): void {
//         console.log("달린다요");
//     }
//     fly(): void {
//         console.log("난다요");
//     }

// }

// let animal = new NewAnimal();
// animal.getStatus();
// animal.run();
// animal.fly();


//자바스크립트로 변환되고 나면 인터페이스는 존재하지 않음 
// interface ICar { name: string; }
// class MyCar { }

// let mCar: ICar = { name: "car" };
// console.log(typeof mCar);//유효하지 않음
// console.log(typeof MyCar);


// let person = [
//     { name1: "a", city1: "1" },
//     { name2: "b", city2: "2" },
//     { name3: "c", city3: "3" },
// ];

// console.log(person);
// console.log(JSON.stringify(person));

//클래스는 객체 리터럴의 타입으로 사용, 배열 요소가 객체 리터럴이라면 배열 타입을 선언할 때 클래스를 이용
// let person: { name: string, city: string }[];
// person = [
//     { name: "a", city: "1" },
//     { name: "b", city: "2" },
//     { name: "c", city: "3" }
// ]
// console.log(JSON.stringify(person));

//요소 타입에 맞춰 입력하기가 쉽지 않을 때 
// type objectType = { name: string, city: string };
// let person: objectType[];
// person = [
//     { name: "a", city: "1" }
// ]
// console.log(JSON.stringify(person));

//클래스도 배열 타입으로 쌉가능
// class Person {
//     public full: string;
//     constructor(public name: string, public city: string) {
//         this.full = `${name} ${city}`;
//     }
// }
// let personArray: Person[] = [
//     new Person("a", "1"),
//     new Person("b", "2")
// ];

// console.log(JSON.stringify(personArray));

//인터페이스는 객체 리터럴을 정의하는 타입으로 사용
// interface Person {
//     name: string;
//     city: string;
// }
// let personArray: Person[] = [
//     { name: "a", city: "1" },
//     { name: "b", city: "2" },
//     { name: "c", city: "3" }
// ]
// console.log(JSON.stringify(personArray));
// interface Person {
//     name: string;
//     city: string;
// }
// interface PersonItems extends Array<Person> { }
// let person: PersonItems = [
//     { name: "a", city: "1" },
//     { name: "b", city: "2" }
// ];
// console.log(JSON.stringify(person));

// interface IFormat {
//     (data: string, isUpper?: boolean): string;
// }
// let format: IFormat = function (str: string, isUpper: boolean) {
//     if (isUpper) {
//         return str.toUpperCase();
//     } else {
//         return str.toLowerCase();
//     }
// };

// console.log(format("aa"));
// console.log(format("aa", true));
// console.log(format("aa", false));


//overriding은 부모 클래스에 정의된 메서드를 자식에서 새로 구현
//오버라이든 클래스 -> 오버라이딩할 대상이 있는 부모 클래스, 오버라이든 메서드가 존재
//오버라이딩 조건 -> 매개변수의 타입과 같거나 상위 타입(Any 예외), 오버라이든 매서드의 매개변수 개수가 같거나 더 많아야함

// class Bird {
//     constructor() { }
//     flight(kmD: number = 0, kmS: number = 0) {
//         console.log(`새 - ${kmD} - ${kmS}`);
//     }
// }

// class Eagle extends Bird {
//     constructor() {
//         super();
//     }

//     flight(kmD2: number = 0) {
//         console.log(`독수리 - ${kmD2}`)
//     }
// }

// let bird = new Bird();
// bird.flight();
// bird.flight(1000);
// bird.flight(1000, 1000);

// let eagle = new Eagle();
// eagle.flight();
// eagle.flight(1000);


// class SingleTypeChecker {
//     constructor() { }
//     typeCheck(value: string): void {
//         console.log(`${typeof value} : ${value}`);
//     }
// }

// class UnionTypeChecked extends SingleTypeChecker {
//     constructor() { super(); }

//     typeCheck(value: number | string): void {

//     }

//     // typeCheck(value: number): void;
//     // typeCheck(value: string): void;
//     // typeCheck(value: boolean): void;
//     // typeCheck(value: any) {
//     //     if (typeof value === "string") {
//     //         console.log(`string ${value}`);
//     //     } else if (typeof value == "number") {
//     //         console.log(`number ${value}`);
//     //     } else {
//     //         console.log(`기타 ${value}`);
//     //     }
//     // }
// }

// let unionTypeChecked = new UnionTypeChecked();
// unionTypeChecked.typeCheck(123);
// unionTypeChecked.typeCheck("123");
// unionTypeChecked.typeCheck(true);


// interface IPoint {
//     getX(x: any): any;
// }

// class Point implements IPoint {
//     getX(x?: number | string): any {
//         if (typeof x === "number") {
//             return x;
//         } else if (typeof x === "string") {
//             return x;
//         }
//     }
// }

// let point = new Point();
// console.log(point.getX());
// console.log(point.getX(1));
// console.log(point.getX("1"));
// //point.getX(true);

//다형성 -> 여러 타입을 받아들임으로써 여러 형태를 가지는 것
//클래스의 다형성 -> 부모 클래스 A를 타입으로 가지는 변수는 A의 어떤 자식 클래스의 타입이라도 받아들일 수 있음
//인터페이스의 다형성 -> 인터페이스 A를 타입으로 가지는 변수는 인터페이스 A를 구현한 클래스를 받을 수 있음
//매개변수의 다형성 -> 매개변수가 여러 타입(유니언, 인터페이스)을 받아들이면서 생기는 다형성, 매개변수의 타입이 여러 서브 타입을 받아들이면 해당 매개변수의 타입이 서브 타입 다형성이 됨. 

//클래스 다형성 -> 자식에서 새로 생긴 기능들은 사용 쌉불가능, 부모 타입에 자식이 들어가도 됨
// class Planet {
//     public diameter: number;
//     protected isTransduction: boolean = true;

//     getIsTransduction(): boolean {
//         return this.isTransduction;
//     }

//     stopTransduction(): void {
//         console.log("stop");
//         this.isTransduction = false;
//     }
// }

// class Earth extends Planet {
//     public features: string[] = ["soil", "water", "oxyzen"];
//     //오버라이딩 된 함수이기에 사용됨 
//     stopTransduction(): void {
//         console.log("stop2");
//         this.isTransduction = false;
//     }
// }

// let earth: Planet = new Earth();
// earth.diameter = 12;
// console.log(`1 - ${earth.diameter}`);
// console.log(`2 - ${earth.getIsTransduction()}`);
// earth.stopTransduction();
// console.log(`3 - ${earth.getIsTransduction()}`);
// //console.log(earth.features);


// abstract class Train {
//     constructor(protected speed: number) { }
//     speedUp(): void {
//         this.speed++;
//     }
//     abstract getSpeed(): number;
// }
// class Ktx extends Train {
//     constructor(protected speed: number) {
//         super(speed);
//     }
//     getSpeed(): number {
//         return this.speed;
//     }
//     public speedUpUp(): void {
//         this.speed += 2;
//     }
// }

// let ktx: Train = new Ktx(300);
// console.log(`1 - ${ktx.getSpeed()}`);
// ktx.speedUp();
// console.log(`2 - ${ktx.getSpeed()}`);

//인터페이스의 다형성
// interface IPerson {

//     height: number;
//     getAlias: () => string;
//     getAge(): number;
// }

// class PoliceOfficer implements IPerson {
//     height: number;
//     constructor(height: number) {
//         this.height = height;
//     }
//     getAlias = function () { return "happy" };
//     //getAlias = () => "happy";
//     getAge(): number {
//         return 10;
//     }
//     hasClub() {
//         return true;
//     }
// }

// let policeMan: IPerson = new PoliceOfficer(40);
// console.log(`${policeMan.getAge()}`);
// console.log(`${policeMan.getAlias()}`);
// console.log(`${policeMan.height}`);

//매개변수의 다형성(유니언 타입)->유니언 타입으로 클래스를 더 넣어줄때마다 if else가 추가됨, 별로임... -> 매개변수의 다형성(인터페이스 타입) 사용
// interface Monitor {
//     getName(): string;
// }

// class Led implements Monitor {
//     constructor(private name: string) { }
//     getName(): string {
//         return `LED - ${this.name}`;
//     }
// }

// class OLed implements Monitor {
//     constructor(private name: string) { }
//     getName(): string {
//         return `OLed - ${this.name}`;
//     }
// }


// class MonitorDisplayTest {
//     display1(monitor: Led | OLed) {
//         if (monitor instanceof Led) {
//             let myMonitor: Led = <Led>monitor;
//             return myMonitor.getName();
//         } else if (monitor instanceof OLed) {
//             let myMonitor: OLed = <OLed>monitor;
//             return myMonitor.getName();
//         }
//     }

//     display2(monitor: Monitor) {
//         let myMonitor: Monitor = monitor;
//         return myMonitor.getName();
//     }
// }

// let displayTest = new MonitorDisplayTest();
// console.log(`
// 1 - ${displayTest.display1(new Led("1"))} 
// 2 - ${displayTest.display1(new OLed("2"))}
// 3 - ${displayTest.display2(new Led("3"))}
// 4 - ${displayTest.display2(new OLed("4"))}
// `);


// let obj = {
//     set name(name) {
//         this.myName = name;
//     },
//     get name() {
//         return this.myName;
//     },
//     myName: ""
// }

// obj.name = "happy";
// console.log(obj.name);

// class Student {
//     name: string;
//     birthYear: number;
// }

// let student = new Student();

// student.name = "happy";
// student.birthYear = 2021;

// console.log(student.name);
// console.log(student.birthYear);


// class Student2 {
//     private studentName: string;
//     private studentBirth: number;

//     get name(): string {
//         return this.studentName;
//     }

//     set name(name: string) {
//         if (name.indexOf("happy") !== 0) {
//             this.studentName = name;
//         } else {
//             this.studentName = "error";
//         }
//     }

//     get birth(): number {
//         return this.studentBirth;
//     }

//     set birth(birth: number) {
//         if (birth < 2021) {
//             this.studentBirth = birth;
//         } else {
//             this.studentBirth = 0;
//         }
//     }
// }

// let student = new Student2();
// student.birth = 2000;
// console.log(`1 - ${student.birth}`);

// student.birth = 2022;
// console.log(`2 - ${student.birth}`);

// student.name = "happy world";
// console.log(`3 - ${student.name}`);

// student.name = "notasdf";
// console.log(`4 - ${student.name}`);

//static 가능 -> static은 정적 멤버 변수나 정적 ㅔ서드 선언 등, 객체 생성 없이 접근 가능하므로 메모리 절약 효과
//클래스와 객체 간에 공통으로 사용돼야할 멤버가 있다면 사용

// class Circle {
//     static pi = 3.14;
// }

// console.log(Circle.pi);

// class Circle {
//     private static pi: number = 3.14;
//     static circleArea: number = 0;
//     static getArea(radius: number) {
//         this.circleArea = radius * radius * Circle.pi;
//         return this.circleArea;
//     }

//     static set area(pArea: number) {
//         Circle.circleArea = pArea;
//     }

//     get area(): number {
//         return Circle.circleArea;
//     }
// }

// console.log(`1 - ${Circle.getArea(3)}`);
// Circle.area = 100;
// let circle = new Circle();
// console.log(`2 - ${circle.area}`);

//static은 클래스에 선언된 멤버 변수를 객체 생성 없이 접근하게 해주는 장점
//싱글턴 패턴
//부지런한 초기화
// class EagerLogger {
//     private static uniqueObject: EagerLogger = new EagerLogger();
//     private EagerLogger() { }
//     public static getLogger(): EagerLogger {
//         return this.uniqueObject;
//     }
//     public info(message: string) {
//         console.log(`info - ${message}`);
//     }

//     public warning(message: string) {
//         console.log(`warn - ${message}`);
//     }
// }

// let eagerLogger: EagerLogger = EagerLogger.getLogger();
// let eagerLogger2: EagerLogger = EagerLogger.getLogger();
// eagerLogger.info("1 - 정보 log");
// eagerLogger.warning("2 - 경고 log");
// eagerLogger.info(`3 - ${eagerLogger === eagerLogger2}`);

//게이른 초기화
// class LazeLogger {
//     private static uniqueObject: LazeLogger;

//     private LazeLogger() {

//     }

//     public static getLogger(): LazeLogger {
//         if (this.uniqueObject == null) {
//             this.uniqueObject = new LazeLogger();
//         }
//         return this.uniqueObject;
//     }

//     public info(message: string) {
//         console.log(`info - ${message}`);
//     }

//     public warning(message: string) {
//         console.log(`warn - ${message}`);
//     }

// }

// let lazeLogger: LazeLogger = LazeLogger.getLogger();
// let lazeLogger2: LazeLogger = LazeLogger.getLogger();
// lazeLogger.info("1 - 정보 log");
// lazeLogger.warning("2 - 경고 log");
// lazeLogger.info(`3 - ${lazeLogger === lazeLogger2}`);

//부지런한 초기화는 미리 만들언호고 가져다 씀, 게으른 초기화는 없을 때 1회 만들어서 가져다 씀

//readonly는 인터페이스, 클래스 변수, 객체 리터럴의 속성 이름
//const -> 초기화 강제, readonly-> 초기화 선택
// interface ICount {
//     readonly count: number;
// }

// class TestReadOnly implements ICount {
//     readonly count: number;
//     static readonly count2: number;
//     private readonly count3: number;
//     readonly count4: number = 0;
//     getCount() {
//         //this.count4 = 0;
//         //readonly count5: number = 0;
//     }
// }

// function getCount() {
//     // readonly count:Number;
// }

// let literalObj: {readonly name: string } = { name: "happpy" };
// literalObj.asdf = "happy";
// literalObj = "test"

//readonly 특성이 사라지도록 type 속이기 
let emotion: { readonly name: string } = { name: "sad" };
function aliasing(pEmotion: { name: string }) {
    pEmotion.name = "happy"
}

console.log(emotion.name);
//emotion.name = "asdf";
aliasing(emotion);
console.log(emotion.name);

