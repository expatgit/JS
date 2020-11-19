'use strict';



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

}
