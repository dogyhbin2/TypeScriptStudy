import * as ns from "./Car3";

namespace Car{
    let wheels : number;
    console.log(`01 - ${ns.Car.auto}`);
    class Taxi implements ns.Car.ICar{
        name:string;
        vendor:string;
    }
}

console.log(`02 - ${ns.Car.auto}`);