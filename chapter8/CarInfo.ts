import { MyCar as SuperCar, SuperEngine } from "./MyCar";
export namespace CarInfo {
    export let car = SuperCar;
    export let engine = SuperEngine;
    export function Hello() {
        console.log("hello");
    }
}