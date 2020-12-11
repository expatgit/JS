// Animal.js
export default class Animal {
    constructor(animalName, animalSpeed = 5) {
        //this._name = animalName;
        //this._speed = animalSpeed;
        this.name = animalName;
        this.speed = animalSpeed;
    }
    // установка значений свойств
    set name(animalName){
        if (animalName.length < 3) throw new Error('Короткое имя');
        this._name = animalName;

    }

    set speed(animalSpeed){
        if (animalSpeed < 0) throw new Error('Значение не может быть отрицательным');
        this._speed = animalSpeed;
    }
    // геттеры - получения значений свойств
    get name (){
        return this.name;
    }
    get speed (){
        return this.speed;
    }
}

// export default {
//     prop: "val"
// }