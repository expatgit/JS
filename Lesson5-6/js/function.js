'use strict';









let a = 34, b = 45;
let result = a + b;
console.log(result);

let n = 70, m = 12;
result = n + m;
console.log(result);

//выносим операцию сложения в функцию.
//объявление функции

function getSum(first, second) { //аргументы функции
    //тело функции
    return first + second;
}//при объявлении именовоной функции ; поесле фиг.скобки не ставится.

result = getSum(a,b);
console.log(result);

result = getSum(n,m);
console.log(result);

// Аргументы функции:
// 1. через аргументы мы можем передавать в функцию различные данные
// 2. если функция не принимает аргументов, то () остаются пустыми.
// 3. модно задать функции значения аргументов по умолчанию,
// при этом сначала указываются обязательные аргументы, потом аргументы с дефолтными значениями,
// 4. в функцию можно передать переменое количество аргументов через "..." . Тогда в функции мы получим их в виде массива,
//при этом переменное количество аргументов определяется самым последним.

//return: используется для того, чтобы:

// 1. вернуть из функции данные (если не задан, функция вернет undefined/
// 2. прервать работу функции.


/*let a = 3;
let b = 5;
let result = getMin();*/

let age = 15;

function less18(age) {
    return age < 18;
}
console.log(less18());

function getGreetingStr(userAge, useName = 'Гость') {
    //Если возраст не подходит, прерываем работу функции.
    //Если условие окажется верным, то сработает return и функция//
    //завершит свою работу.
    if (userAge < 7 || useName > 200) return 'Пользователь Вашего возраста не может войти на сайт';
    let greetingStr = `Добро пожаловать ${useName}`; //Можно объявлять любое количество локальных переменных внутри функиции.
    if (less18(userAge)) return greetingStr + "Вы не можете осуществлять покупки";
    return greetingStr + "Весь функционал сайта доступен";

}



getGreetingStr(12, "Алиса");
getGreetingStr("Алиса");
getGreetingStr(35);
getGreetingStr();
getGreetingStr(12, 'Алиса', [2, 4, 6]);


// написать функцию getMin, которая принимает на вход 2 числа и возвращает наименьшее.



function getMin(a, b) {

    return  a < b ? a : b;
}


// Переменное количество аргументов
function getNumsSum(...nums) {
    let sum = 0;
    for (let num of nums) {
        sum += num;
    }
    return sum;
}

result = getNumsSum(3, 4, 123);
console.log(result);

result = getNumsSum(-93, 465, 661, 1, 45)

console.log(result);

//объекты (ссылочные типы) передаются в функцию по ссылке, примитивы - по значению.

let catName = 'Tom';
let codes = [12, 0, 1, 45, 13];

function changeCatName(name) {
    name += " Cat";
}

function changeCodes(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 10) arr[i] += 100;
    }
}

changeCatName(catName);
changeCodes(codes);
console.log(catName);
console.log(codes);

// аннонимные функции
// должны быть либо присвоены переменной,
// либо быть переданы аргументом в другую функцию.
// могут быть вызваны только после объявления

let fullInfo = function (name, surname, ...others) {
    let resultStr = `${name} ${surname} Дополнительная информация:`;
    for (let elem of others) {
        resultStr += elem + "|"
    }
    return resultStr;
}; //если функция присвоена переменной, то после } ставится ;

console.log(fullInfo());

function multi(n) {
    let x = n;
    return function (m) {
        return x * m;
    }
}

let multiSix = multi(6);
alert(multiSix);

result = multiSix(5);
alert(result);