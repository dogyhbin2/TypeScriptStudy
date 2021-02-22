import { CarInfo } from "./CarInfo";

CarInfo.Hello();

let car = new CarInfo.car("My CAr");
console.log(car.name);

let engine = new CarInfo.engine("My Engine");
console.log(engine.name);