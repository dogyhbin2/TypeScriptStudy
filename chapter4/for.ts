// for (var i = 0; i < 2; i++) {
//     console.log(`i : ${i}`);
// }

// for (let j: number = 0; j < 2; j++) {
//     console.log(`j : ${j}`);
// }

// let a = ["a", "b", "c", "d"];
// for (let aIndex in a) {
//     console.log(a[aIndex]);
// }

// let b = {"a": "a1", "b": "b1", "c": "c1"};
// for(let property in b){
//     console.log(`b : ${b[property]}`)
// }

// for(const value of "hi"){
//     console.log(value);
// }

//맵과 셋은 ES5에서 사용 불가

// let itMap = new Map([["one",1],["two",2]]);
// for(const mapValue of itMap){
//     console.log(mapValue);
// }

// let itSet = new Set(["a","b","c","d","a","b","c"]);
// itSet.add("asdf");
// for(let value of itSet){
//     console.log(value);
// }

let arr = [1, 2];
let itObj = arr[Symbol.iterator]();

console.log(`1 : ${typeof itObj}`);
console.log("2 : ", itObj.next());
console.log("3 : ", itObj.next());
console.log("4 : ", itObj.next());
