'use strict';


// строки хранятся в кодировке UTF-16 в виде массива символов
// поезд -> ['П', 'о', 'е', 'з', 'д']

//строки в JS неизменны, можно лишь создать новую строку на основе существующей.

//длина строки

let train = 'train';
console.log(train.length);

//каждый символ хранится под индексом
//нумерация начинается с 0

console.log(train[train.length-3]);
console.log("first" + ", " + "second");

//1. Приведение к верхнему/нижнему регистру

let newStr = train.toUpperCase()
console.log(newStr);

newStr = newStr.toLowerCase();
console.log(newStr);

console.log(train);

let x = 32;
x = x.toString();
console.log(x, typeof x);


//2.trim
train = "        Поезд            ";
console.log(train.length);
train = "train".trim();
console.log(train.length);

// 3. includes Проверка если строка содержит какой-то последовательностью символов
// / 4. startWith --/-- начинается с какой-то последовательности
// / 5. endWith --/-- заканчивается

// 3. 4. 5. - тип данных - булевые

train = "Поезд";
console.log(train.includes("з")); //метод чувствителен к регистру
console.log(train.startsWith("з"));
console.log(train.endsWith("з"));

// 6. split

let text = "lorem10 asdasd lot lkljsad123 nnhdsdfutha;lk qweroituo223 ppokl;kjlf";
let arrFromText = text.split(" "); // если сепаратор будет "" - разобъет по буквам и пробелам
console.log(arrFromText);


// 7. join


// 8. indexOf


// 9. lastIndexOf

// 10. slice

// 11. substring

// Отличие методов 10 и 11.

// 12. Сравнение строк

let str1 = "Поезд";
let str2 = "Автобус";

console.log(str1 === str2);
console.log(str1 !== str2)

let compareRes = str1.localeCompare(str2, undefined, {sensitivity: 'accent'})
console.log(compareRes);

/*
* результат работы метода LocalCompare: -1 // 1 // 0
* 0 - если строки равны
* - 1 - если строки str1 < str2
* 1 - если строки str1 > str2
*
* метод чувствительный к регистру
*
* Чтобы был не чувствительным надо передать доп параметры
* */