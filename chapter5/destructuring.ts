//destructuring (디스트럭쳐링) -> 객체의 구조를 제거한다는 의미, 객체의 구조를 분해 후 할당이나 확장과 같은 연산을 수행
//객체 디스트럭처링, 배열 디스트럭처링

//객체디스트럭처링 -> 객체 리터럴에서 변수명에 대응하는 속성 값을 추출해 변수로 할당하는데 유용
//객체의 속성값을 변수에 할당하는 것을 디스트럭처링 할당

// let { id, country } = { id: "happy", country: "korea" };
// console.log(id);
// console.log(country);

// let { id2: IDID, country2: COUNTRYCOUNTRY = "korea" } = { id2: "happy" };
// //console.log(id);
// console.log(IDID);
// //console.log(country2);
// console.log(COUNTRYCOUNTRY);

// function printProfile(obj){
//     var name = "";
//     var nationality ="";

//     name = (obj.name == undefined) ? "anonymous" : obj.name;
//     nationality = (obj.nationality == undefined) ? "?" : obj.nationality;

//     console.log(name);
//     console.log(nationality);
// }

// printProfile({ nationality : "korea"});

// function printProfile({name = "?", nationality = "asdf"}){
//     console.log(name);
//     console.log(nationality);
// }

// printProfile({ nationality: "korea"});

// function printProfile({name, nationality = "none"} = {name :"anoanymous"}){
//     console.log(name, nationality);
// }

// printProfile();
// printProfile({name : "happy"});
// printProfile({name : "happy", nationality: "korea"});

// type C = { a: String, b?: number };
// function fruit({ a, b }: C): void {
//     console.log(a, b);
// }

// fruit({ a: "apple", b: 10 });
// fruit({ a: "apple" });

// let numbers = ["one", "two", "three", "four", "five"];
// let [num1, num2] = numbers;
// console.log(num1, num2);

// let [, , num3, num4] = numbers;
// console.log(num3, num4);

// [num4, num3] = [num3, num4];
// console.log(num3, num4);

// let [color1, color2 = "blue"] = ["black"];
// console.log(color1, color2);

// function f([first,second] : [number,string]){
//     console.log(first);
//     console.log(second); 
// }
// f([100,"hello"]);


//전개 연산자 -> '...'으로 사용함
//나머지 매개변수를 선언할 때, 배열 요소를 확장할 때, 객체 요소를 확장할 때 사용함
//나머지 매개변수를 선언할 때  -> 함수에서 설명 추가
//배열 요소를 확장할 때 -> 배열 합치기와 배열 디스트럭처링할 때 
//객체 요소 확장할 때 -> 객체 합치기와 객체 디스트럭처링할 때 

// let arr: number[] = [1, 2];
// let arr2: number[] = [...arr, 3, 4];
// console.log(arr);
// console.log(arr2);

// let [firstItem, ...rest]: [number, number, number] = [10, 20, 30];
// console.log(firstItem);
// console.log(rest);
// console.log(rest[0]);


// let obj = { a: "a1", b: "b1", c: "c1", d: "d1" };
// let obj2 = { e: "e1", f: "f1", g: "g1", h: "h1", ...obj };

// console.log("1obj",obj);
// console.log("1obj2",obj2);
// obj["z"] = "z";
// console.log("2obj",obj);
// console.log("2obj2",obj2);

let { a, b, ...c } = { a: 1, b: 2, c: 3, d: 4 };
console.log(a);
console.log(b);
console.log(c);
