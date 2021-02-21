//객체 지향 프로그래밍은 커다란 문제를 클래스라는 단위로 나누고 클래스 간의 관계(상속, 포함관계)를 추가하면서 코드 중복을 최소화하는 개발 방식
// class Rectangle {
//     x: number;
//     y: number;

//     constructor(x: number, y: number) {
//         this.x = x;
//         this.y = y;
//     }
//     getArea(): number { return this.x * this.y };
// }

// //클래스는 멤버 변수와 멤버 메소드 등으로 거성된 "틀", 객체를 생성해줘야함
// //생성된 객체는 실제 메모리에 위치하고 객체의 참조가 객체 참조변수에 할당되는 과정을 인스턴스화라고 함
// //인스턴스 -> 객체를 참고하는 것

// let rectangle = new Rectangle(20, 20);
// console.log(rectangle.getArea());

// class Rectangle {
//     x: number;
//     y: number;

//     constructor(x: number, y: number) {
//         this.x = x;
//         this.y = y;
//     }

//     getArea() {
//         return this.x * this.y;
//     }
// }

// let rectangle = new Rectangle(1, 5);
// let area: number = rectangle.getArea();
// console.log(area);

// //객체지향에서 클래스의 간의 관계 -> 상속, 포함
// //포함 관계 -> 클래스가 다른 클래스를 소유?포함?하고 있는 관계 합성관계, 집합 관계
// //합성 -> myCar이 null이 되면 engine도 null이 됨. 수명주기를 함께함, 강한 관계
// class Engine { }
// class Car {
//     private engine;
//     constructor() {
//         this.engine = new Engine();
//     }
// }
// let myCar = new Car();
// myCar = null;

// //집합 -> 외부에서 생성된 engine2를 넣어줌. 수명주기를 함께하지 않음. 약한 관계
// class Engine2 { }
// class Car2 {
//     private engine2: Engine2;
//     constructor(engine2: Engine2) {
//         this.engine2 = engine2;
//     }
// }
// let engine2 = new Engine2();
// let myCar2 = new Car2(engine2);

// 클래스 내부 변수에 클래스를 만들면 포함, 상속은 extends로 너무 명확
// class FlashLight {
//     constructor(public lightIntentsity) { }
// }

// class Bicycle {
//     constructor(public numberOfWheel: number) { }
//     getNumberOfWheel(): number {
//         return this.numberOfWheel;
//     }
// }

// class MountineBike extends Bicycle{
//     flashlight : FlashLight;

//     constructor(public numberOfWheel:number, private hasBackSaddle : boolean){
//         super(numberOfWheel);

//         this.flashlight = new FlashLight(90);
//     }

//     getHasBackSaddle(){
//         return this.hasBackSaddle;
//     }

//     getNumberOfWheel(){
//         return this.numberOfWheel;
//     }

// }

// let hasBackSaddle = true;
// let numberOfWheel = 2;
// let mountineBike = new MountineBike(numberOfWheel, hasBackSaddle);
// console.log(mountineBike.flashlight);
// console.log(mountineBike.getHasBackSaddle());
// console.log(mountineBike.getNumberOfWheel());

//생성자 매개변수에 접근 제한자를 추가하면 매개변수 속성이 돼 멤버 변수가 되는 효과
// class Cube {
//     public width: number;
//     private length: number;
//     protected height: number;
//     constructor(pWidth: number, pLenght: number, pHeight: number) {
//         this.width = pWidth;
//         this.length = pLenght;
//         this.height = pHeight;
//     }
// }

// class Cube2 {
//     constructor(public width: number, private length: number, protected height: number) { }
// }

// class Base{
//     protected birthYear = "2017";
// }

// class Member extends Base{
//     protected getBirthYear(){
//         return this.birthYear;
//     }
// }

// let member = new Member();
// //member.getBirthYear();


//super -> 부모 클래스의 공개 멤버에만 접근 가능
//this -> 부모 클래스에서 상속 받은 멤버와 현재 클래스의 멤버 모두에게 접근 가능
//부모 클래스의 멤버 변수 값을 가져오려면 멤버 메서드나 getter를 통해야함
// class Pc {
//     constructor(public hddCapacity: string) { }


//     private ram: string = "0G";
//     set ramCapacity(value: string) { this.ram = value; }
//     get ramCapacity() { return this.ram; }


//     protected getHddCapacity() {
//         return this.hddCapacity;
//     }
// }

// class Desktop extends Pc {
//     constructor(public hddCapacity: string) {
//         super(hddCapacity);
//     }

//     getInfo() {

//         console.log("1" + super.getHddCapacity(), super.hddCapacity);
//         console.log("1" + this.getHddCapacity(), this.hddCapacity);

//         this.hddCapacity = "200006";
//         console.log("2" + super.getHddCapacity(), super.hddCapacity);
//         console.log("2" + this.getHddCapacity(), this.hddCapacity);

//         super.ramCapacity = "166";
//         console.log("3" + this.ramCapacity, super.ramCapacity);

//         this.ramCapacity = "166";
//         console.log("4" + this.ramCapacity, super.hddCapacity);
//     }
// }

// let myDesktop = new Desktop("10006");
// myDesktop.getInfo();

// class Account {
//     balance: number;
//     get getBalance() {
//         return this.balance;
//     }

//     set setBalance(amount: number) {
//         this.balance += amount;
//     }

//     deposite(depositeAmount: number) {
//         this.setBalance = depositeAmount;
//     }

//     constructor(defaultBalance: number = 0, protected bankName: string = "happy bank", readonly interestRate: number = 0.1) {
//         this.balance = defaultBalance;
//     }

//     getInterestRate() {
//         return this.interestRate;
//     }

//     getDefaultBalance() {
//         //  return this.defaultBalance;
//     }
// }

// class MyAccount extends Account {
//     constructor() {
//         super();
//         this.deposite(1000);
//         this.setBalance = 1000;
//         console.log(`2번) 적금 : ${this.balance}원, ${this.getBalance}원 / 이율 : ${this.interestRate}, ${this.getInterestRate()}% / 은행명 : ${this.bankName}`);
//     }
// }

// let account = new Account();
// console.log(`1번) 적금 : ${account.balance}원, ${account.getBalance}원 / 이율 : ${account.interestRate}, ${account.getInterestRate()}% `);

// let myAccount = new MyAccount();

abstract class AbstractBird {
    abstract birdNAme: string;
    abstract habitat: string;
    abstract flySound(sound: string);

    fly(): void {
        this.flySound("파다가닥");
    }

    getHabitat() {
        console.log(`<${this.birdNAme}>의 서식지는 <${this.habitat}> 입니다`);
    }

}

class WildGoose extends AbstractBird {
    constructor(public birdNAme: string, public habitat: string) {
        super();
    }

    flySound(sound: string) {
        console.log(`<${this.birdNAme}>가 <${sound}> 날아갑니다.`);
    }
}

let wildGoose = new WildGoose("기러기", "순천만 ");
wildGoose.fly();
wildGoose.getHabitat();