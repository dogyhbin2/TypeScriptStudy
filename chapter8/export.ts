// export interface ICard {
//     name: string;
// }
// export function saveInfo(card: ICard, name: string) {
//     card.name = name;
// }

// let ver = "1.0";
// let author: string = "happy";
// let extensions = ["jpg", "bmp", "png"];
// let diaply = () => "hello word";

// export { ver, author, extensions, diaply };

interface IProfile {
    name: string;
}
function saveName(profile: IProfile, name: string) {
    profile.name = name;
}

export {IProfile, saveName as save};