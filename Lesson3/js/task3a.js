'use strict';

console.log('Задачи на циклы.');
console.log('1. Вывести в консоль первые 20 элементов последовательности 2 4 8 16 32 64 128...N \n\n' +
'Ответ:');

let range = 1;

for (let i = 10; range < 2**20; i++) {
    range *= 2;
    console.log(range);
}

console.log('2. Вывести в консоль все неотрицательные элементы последовательности 90 85 80 75 70 65 60...N \n\n' +
    'Ответ:');

range = 95;

for (let i = 0; range > 0; ++i) {
    range -= 5;
    console.log(range);
}

console.log('2. 3. Задача на while: \n'+

'Дано: количество моющего средства и количество тарелок.\n' +
    'Для мытья одной тарелки необходимо 0.5 моющего средства.\n' +
    'Когда средство / тарелки закончатся вывести в консоль количество оставшихся тарелок / средства.\n' +
    'На каждой итерации цикла (после мытья тарелки) выводить в консоль количество моющего средства.\n Ответ:' );
let plate = 133;
let soap = 33;
let i = null;

while (plate > 0 && soap > 0) {

        plate -= 1;
        soap -= 0.5;
        /*i++;*/
        console.log(`Моющего средства: израсходовано 0.5 уе, остаток ${soap} уе.`);


}
console.log(`\n Итого: Осталось ${plate} тарелок и ${soap} моющего средства.`);

console.log('Задачи на массивы.\n 4.1. Создать массив из 10 элементов и заполить его рандомными значениями. <br>\n' +
    '   Вывести в консоль элемент массива, индекс выбрать используя рандом. <br>\n' +
    '   Вывести среднее арифметическое значение.  \n\n' +
    'Ответ:');