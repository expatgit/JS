'use strict';
/*
console.log('Пользователь загадывает число в диапазоне от [1 до 100], программа пытается его угадать.\n' +
    '    Программа может задавать пользователю вопросы:\n' +
    '        Число равно ...? / Число больше ...? / Число меньше ...? и в зависимоти от ответа пользователя принимать решения.\n' +
    '    Пользователь может отвечать ДА, НЕТ, ВЫХОД.\n' +
    '    Игра заканчивается:\n' +
    '        если пользователь отвечает ВЫХОД\n' +
    '        если программа угадала число\n' +
    '        \n' +
    '    При решении используйте метод бинарного поиска - деление отрезка на 2.    \n' +
    '     ')

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33,34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67,68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79,
    80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100];

console.log(arr[51]);

let x = arr.length - 1;
console.log(x);

let num = null;
let answer = confirm('Загадайте число от 1 до 100 \n' +
    'Загаданное число больше 50?');
while (answer === true) {
    num = arr.length / 2
        console.log(num);

}*/




/*
    if answer === true;
    num > 50;
    answer = confirm('Загаданное число - четное?');
        if answer === true;
        for*/

/*


function getRandomInt(max) {
    return Math.floor(Math.random() * 100);
}

console.log(getRandomInt(5));*/

console.log('Задачи на массивы.\n' +
    '1. Создать массив из 10 элементов и заполить его рандомными значениями. <br>\n' +
    '   Вывести в консоль элемент массива, индекс выбрать используя рандом. <br>\n' +
    '   Вывести среднее арифметическое значение. \n\n' +
    'Ответ: ')

let arr = [];
arr.length = 10;
let arr1 = [];
let mid = 0;
let i = 0;
while (i < 10) {

    arr[0] = Math.floor(Math.random() * 10);

    arr1.push(arr[0]);
    mid += arr[0];
    i++;

}
console.log(arr1);
console.log(`Среднее арифметическое заданного массива ${mid/10} \n\n`);

console.log('2. Создать массив целых чисел произвольного размера. <br>\n' +
    '   Найти в данном массиве такие два элемента, чтобы их сумма была равна 7. <br>\n' +
    '   Найденные элементы и их индексы вывести в консоль. <br>\n' +
    '   Для решения достаточно найти одну пару. <br>\n\n Ответ:\n');

arr = [];
arr.length = Math.floor(Math.random() * 10);

while (i < arr.length) {
    arr[0] = Math.floor(Math.random() * 10);
    arr1.push(arr[0]);
    i++
}
console.log(arr1);
console.log('aaa');
let arr2 = arr1;
for (let i = 0; i < arr2.length; i+=1) {
    console.log(`Индекс элемента ${i} равен ${arr2[i]}`);
}
let arr3 = arr2;
let sum = 0;

for (let i = 0; i < arr3.length; i++) {
    sum = arr3[i] + arr3[i+1];
    if (sum === 7) {
        console.log(`Сумма элементов ${i} и ${i+1} равна 7`);
        break;
    }
    else {
        console.log(`В данном массиве нет элементов, сумма которых равна 7`);
    }
}

console.log('3. На многомерный массив: \n' +
    '\n' +
    '        Дан массив: \n' +
    '            [\n' +
    '               [23, 56, 78, 12, -900],\n' +
    '               [0, 0, 67, -3, 621],\n' +
    '               [89, 67, 12],\n' +
    '               [23, 56, 78, 12, -900, 89, 33, 21]\n' +
    '            ]\n' +
    '        Увеличить значение каждого элемента массива на 10.\n' +
    '        Найти сумму значений элементов массива.\n\n Решение:\n')

