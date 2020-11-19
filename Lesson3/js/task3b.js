'use strict';


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
arr.length = Math.floor(Math.random() * 100);

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
    '        Найти сумму значений элементов массива.\n\n Ответ:\n')

let multiarr = [
    [23, 56, 78, 12, -900],
    [0, 0, 67, -3, 621],
    [89, 67, 12],
    [23, 56, 78, 12, -900, 89, 33, 21]
    ];
let m1 = multiarr[0];
let m2 = multiarr[1];
let m3 = multiarr[2];
let m4 = multiarr[3];
let sum_m1 = 0;
let sum_m2 = 0;
let sum_m3 = 0;
let sum_m4 = 0;
for (i = 0; i < m1.length; i++) {
    m1[i] += 10;
    sum_m1 += m1[i];
}
for (i = 0; i < m2.length; i++) {
    m2[i] += 10;
    sum_m2 += m2[i];
}
for (i = 0; i < m3.length; i++) {
    m3[i] += 10;
    sum_m3 += m3[i];
}
for (i = 0; i < m4.length; i++) {
    m4[i] += 10;
    sum_m4 += m4[i];
}

let total =  sum_m1 + sum_m2 + sum_m3 + sum_m4;
console.log(total);






/*
while (i < m2.length) {
    sum
}*/
