'use strict';


/*

#### Домашнее задание
При решении задач пользуемся только пройденной в lesson1 информацией!
    1. Задайть высоту, длину и ширину прямоугольного параллелепипеда и найти его площадь.
    Результат выводим в консоль.
2. В переменной n хранится двузначное число. Найти сумму цифр числа n и вывести результат в консоль.

    Например, для числа 56 вывод будет:

    Значение n равно 56, сумма его цифр равна 11

для числа 23 вывод будет:

    Значение n равно 23, сумма его цифр равна 5
3.  Поменять значение двух переменных, не используя третью.*/

//1. Параллелограмм

let a = 3;
let b = 4;
let c = 5;

//как переназначить переменные не по значению, а по имени? Задаем переменную len (длина) = 3, потом переназначить
//длину под новую переменную с новым именем - len = a;

let square = null;

square = 2*(a*b + b*c + a*c);
console.log(square);

//2. Двузначное число.

let n = 25;
let n2 = n%10;
n = (n - n2)/10+n2;
//n = n + n2;
//let summ = n + n2;
console.log(n);
//console.log(summ);

//3. Две переменных...

let int1 = 2;
let int2 = 3;

int1 = 22;
int2 = 33;

console.log(int1, int2);

let int3, int4 = 5;

console.log(int3, int4);

//почему нельзя задать сразу несколько переменных, анпример:
// let a, b, c, d = 0, 1, 2, 3
//что было бы равно a = 0, b = 1, c = 2, d = 3?