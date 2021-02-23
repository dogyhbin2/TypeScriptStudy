// const promise = new Promise((resolve, reject) => {
//     let result = "happy";
//     if (result === "happy") {
//         resolve(result);
//     } else {
//         reject("mismatch");
//     }
// });

// promise.then(result => {
//     console.log(result);
//     return result as string + 1;
// }).then(result => {
//     console.log(result);
// }).catch(err => {
//     console.log(err);
// });

// const promiseAsync = new Promise((resolve, reject) => {
//     let sec: number = (Math.floor(Math.random() * 5) + 1);
//     setTimeout(function (isTrue: boolean) {
//         if (isTrue) {
//             resolve(sec);
//         }
//     }, sec * 1000, true);
// }).then(result => {
//     console.log(result + "s");
// });

// function delay(msg) {
//     let ms: number = Math.floor(Math.random() * 1000) + 1;
//     setTimeout(function(){
//         console.log(msg);
//     }, ms)
// }

// function async(){
//     delay("hello1");
//     delay("hello2");
//     delay("hello3");
// }
// async();

// function asyncDelay(order: number) {
//     return new Promise(function (resove, reject) {
//         let ms: number = Math.floor(Math.random() * 1000) + 1;
//         setTimeout(function () {
//             console.log("작업 완료 : " + order);
//             resove(order);
//         }, ms)
//     }).then();
// }

// function syncResultPromise() {
//     let p1 = asyncDelay(1);
//     let p2 = asyncDelay(2);
//     let p3 = asyncDelay(3);
//     let p4 = asyncDelay(4);

//     Promise.all([p1, p2, p3, p4]).then(function (order) {
//         console.log(order);
//     })
// }

// syncResultPromise();


//동시성 => 멀티 스레드와 같이 여러 개의 단위 작업이 동시에 실행되는 성질
//동시성 -> 비동기 프로그래밍 모델, 멀티 스레드 프로그래밍
//자바스크립트는 멀티 스레딩을 지원하지 않음, 싱글 스레드가 페이지를 로딩하는데 더 빠름, 브라우저가 멀티쓰레드를 지원하지 않는 이유

// function delay(msg:string){
//     let ms:number=  Math.floor(Math.random() * 1000)+ 1;
//     setTimeout(function(){
//         console.log(msg, ms+ "ms");
//     },ms);
// } 

// function async(){
//     delay("a");
//     delay("b");
//     delay("c");
// }

// async();

// function delay(msg: string) {
//     let ms: number = Math.floor(Math.random() * 1000) + 1;
//     return new Promise(function (resolve) {
//         setTimeout(resolve, ms, msg);
//     }).then(function (v) {
//         console.log(v, ms + "ms");
//     })
// }

// async function sync2() {
//     let start = new Date().getTime();

//     await delay("a");
//     await delay("b");
//     await delay("c");

//     let end = new Date().getTime();
//     console.log(`시간 : ${end - start}ms`);
// }

// sync2();


function delay(msg, ms): Promise<any> {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve(msg);
        }, ms);
    }).then(function (result) {
        console.log(`${result} ${ms}ms`);
        return result;
    });
}

async function sync() {
    let start = new Date().getTime();
    let result1: Promise<any> = await delay("a", 1000);
    let result2: Promise<any> = await delay(result1 + "b", 500);
    let result3: Promise<any> = await delay(result2 + "c", 100);

    let end = new Date().getTime();
    console.log(`시간 : ${end - start}ms`);
}

sync();