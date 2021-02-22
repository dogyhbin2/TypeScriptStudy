// namespace Asdf {
//     export function asdf() {
//         console.log("asdf");
//     }
// }

// namespace MyAnimal.Land {
//     export function run() {
//         console.log("달려 오빠");
//     }
// }

// namespace MyAnimal {
//     MyAnimal.Land.run();
//     Asdf.asdf();
// }


// namespace Animal{
//     export function run(){
//         console.log("동물");
//     }
// }

// namespace Animal.Land{
//     Animal.run();
//     export function run(){
//         console.log("육지동물");
//     }
// }

// namespace Animal.Land.Pet{
//     Animal.Land.run();
//     export function run(){
//             console.log("애완동물");
//     }
//      export class Cat{
//          run(){
//              Animal.Land.Pet.run();
//          }
//      }
// }

// let cat = new Animal.Land.Pet.Cat();
// cat.run();