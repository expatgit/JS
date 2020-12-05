'use strict';

let someObj = {
    someProp: "Свойство объекта",
    someVoid(){
        console.log("Контекст someVoid", this);
    },
    someVoidWithArgs: function (count) {
        console.log("Контекст someVoidWithArgs", this);
        console.log("count", count);
    }
};

let user = {
    name: 'Олег'
};

function someFunc(func) {
    func();
}

someObj.someVoid();
someFunc(someObj.someVoid);
// потеря контекста
// при испольщовании функции контекст теряется.

//привязка контекста

someFunc(someObj.someVoid.bind(someObj));

// метод bind - метод функций
someObj.someVoidWithArgs(100); //someObj
someFunc(someObj.someVoidWithArgs.bind(someObj, 100)); // undefind

someFunc(someObj.someVoidWithArgs.bind(someObj)); // this - 100, count - undefined


someFunc(someObj.someVoidWithArgs.bind(null, 100)); // this - null - count - 100

function newFunc(someFunc) {

};

someFunc(newFunc.bind(user,[2, 5 -10]));
