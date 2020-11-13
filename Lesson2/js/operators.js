'use strict';


//Операторы сравнения

// < | > | <= | >= | == | === | != |

// == равенство с приведение типов
// === - строгое равенство
// !== строгое неравенство

// результат работы операторов сравнения - логический тип данных

let height = 140;
let width = '120';

console.log(height != width);
console.log(height !== width);

let someNum = 800;
console.log(height > someNum);
console.log(height < someNum);
console.log(height >= someNum);
console.log(height <= someNum);

// больше меньше не используется для сравнения данных разных типов.

// логические операторы

//|| - или
// & и
// ! не

console.log(height < width || height > 100);
console.log(height < width && height > 100);

let a = false, b = 12, c = null, d = "", e = " ", f;
//Сначала операнд приводится к типу булля, потом его значение на противоположное.
console.log(!a, !b, !c, !d, !e, !f);
// при приведении к булевым значениям все числа кроме 0 - true. Числа кроме 0 преобразовываются в true.
//null, undefined, Nan - false
//пустая строка преобразована в false
//все остальные строки преобразовываются в true

//префиксные и постфиксные формы инкремента
// префиксная форма i - ++i
// постфиксная форма i - i++

someNum = 2;
console.log(++someNum);//3
console.log(someNum);//3

someNum = 2;
console.log(someNum++);//2 сначала возвращает значение переменной, потом увеличивает
console.log(someNum);//3

someNum = 2;
console.log(--someNum);//1
console.log(someNum);//1

someNum = 2;
console.log(someNum--);//2 сначала возвращает значение переменной, потом увеличивает
console.log(someNum);//1


let num = 7;
let result = num++ - num++ + num++ - --num; // 7 - 8
console.log(result)