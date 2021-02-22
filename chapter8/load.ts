// import { ICard, saveInfo } from "./export";

// let card: ICard = { name : "카카오카드" };
// console.log(card.name);
// saveInfo(card, "삼성카드");
// console.log(card.name);

// import {ver, author, extensions, diaply} from "./export";

// console.log(ver);
// console.log(author);
// console.log(extensions);
// console.log(diaply());

import { IProfile, save } from "./export";
let profile: IProfile = { name: "" };
save(profile, "name");
