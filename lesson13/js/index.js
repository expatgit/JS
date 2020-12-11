

'use strict';
import {default as Cat} from './Cat.js';
import {default as Mouse} from './Mouse.js';
import {Unit, Knigh} from "./unit"

// создание объектов
let cat = new Cat('Tom', 7);
//использование геттеров и сеттеров
cat.speed = 5; //обращение к сеттеру
console.log(cat.speed)//обращение к геттеру



let mouse1 = new Mouse('Jerry', 10);
let mouse2 = new Mouse('Mickey', 3);
let mouse3 = new Mouse('Pinkey', 6);

cat.catchMouse(mouse1);
cat.catchMouse(mouse2);
cat.catchMouse(mouse3);

console.log(cat);
console.log(mouse1);
console.log(cat._mice);


// export default class {}
// export default {}
// import {default as AliasName} from './file.js'

// export default class ClassName {}
// import {default as AliasName} from './file.js'
// import ClassName from './file.js'



let knight = new Knight ('Рыцарь', addAttack: 2);
knight.attack = 7;
knight.health = 18;
let infantry = new Unit ('Пехотинец');
infantry.attack = 10;
infantry.health = 10;

knight.attackOther(infantry);
infantry.attackOther(knight);
