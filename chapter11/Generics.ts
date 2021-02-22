// function asdf<T>(a: T, b: T);
// function asdf(a: any, b: any) {
//     return a + b;
// }

// console.log(asdf(1, 2));

// function concat6<T extends string | number>(strs: T, strs2: T): T;
// function concat6(strs: any, strs2: any) {
//     return strs + strs2;
// }

// console.log(concat6<string | number>("abc", 123));

// let mapArr = [];
// function put<T, T2>(strs: T, strs2: T2): T;
// function put(idx: any, str: any) {
//     mapArr[idx] = str;
// }
// function get<T, T2>(idx: T): T2;
// function get(idx: any) {
//     return mapArr[idx];
// }
// put<number, string>(1, "helllo");
// console.log(get<number, string>(1));


// class ArrayConverter<T>{
//     elements: Array<T>;
//     constructor(elms: Array<T>) {
//         this.elements = elms;
//     }
//     arrayToString(): string {
//         let text = "";
//         for (let i = 0; i < this.elements.length; i++) {
//             if (i > 0) {
//                 text += " ";
//             }
//             text += this.elements[i].toString();
//         }
//         return text;
//     }
//     getValue(elms: Array<T>, index: number): T {
//         return elms[index];


//     }
// }

// let arr = [1, 2];
// //let arr2 = [1, 2, "hello"];

// let numConvertor = new ArrayConverter<number>(arr);
// console.log(numConvertor.arrayToString());
// console.log(numConvertor.getValue(arr, 1));

// let arr2 = new Array<string>();
// arr2.push("A");
// arr2.push("B");
// let stringConvertor = new ArrayConverter<string>(arr2);
// console.log(stringConvertor.arrayToString());
// console.log(stringConvertor.getValue(arr2, 0));


// interface IName {
//     name: string;
// }

// class INameClass implements IName {
//     name: string = "INAME"
// }

// class Profile implements IName {
//     name: string = "happy!";
// }

// class Accessor1 {
//     getKey<T>(obj: T) {
//         return obj["name"];
//     }
//     getKey2<T extends IName>(obj: T) {
//         return obj["name"];
//     }
//     get(obj) {
//         let objName = obj instanceof Profile ? obj.name : obj;
//         return objName;
//     }
// }

// let ac = new Accessor1();
// console.log(ac.getKey<IName>(new Profile()));
// console.log(ac.getKey2(new Profile()));
// console.log(ac.get(new INameClass()));

// function getValue<T, K extends keyof T>(obj: T, key: K) {
//     return obj[key];
// }
// let numberKeys = { one: 1, two: 2, three: 3 };
// console.log(getValue(numberKeys, "one"));

// interface IFilter<T> {
//     unique(array: Array<T>): Array<T>;
// }

// class Filter<T> implements IFilter<T>{
//     unique(array: Array<T>): Array<T> {
//         return array.filter((value, index, array) => array.indexOf(value) === index);
//     }
// }

// let myFilter = new Filter<string>();
// let resultFilter = myFilter.unique(["a", "b", "c", "a", "b"]);
// console.log(resultFilter);


// let myMap = new Map();
// myMap.set(1, "one");
// myMap.set(2, "two");

// for (let v of myMap) {
//     console.log(v);
// }

// let mapIter = myMap[Symbol.iterator]();
// console.log(mapIter.next().value);
// console.log(mapIter.next().done);

// let list: Map<number, string> = new Map<number, string>();
// list.set(1, "one");
// list.set(2, "two");
// list.set(3, "three");
// // list.set(4,"four");

// console.log(list);

// if (list.delete(2)) {
//     console.log(list);
// }

// list.clear();
// console.log(list);

