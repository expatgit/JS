'use strict';

import {Knight} from "./unit";

function Unit(unitName) {//функция конструктор
    //класс это функиця,
    this._name = unitName;
    this._attack = 3;
    this._health = 10;
}

Unit.prototype.isAlive = function (){
    return this._health > 0;
};
Unit.prototype.attackOther = function(otherUnit){};



//Array.prototype

let unit1 = new Unit ("Пехотинец1");
unit1.isAlive();
let unit2 = new Unit ("Пехотинец2");
unit2.isAlive();

console.log(unit1, unit2);

//наследование
//Knight extends Unit

function Knight(unitName, addAttack) {
    Unit.call(this, unitName);
    this._addAttack = addAttack;
}

let knight = new Knight ('Рыцарь', 2);
console.log(knight);
