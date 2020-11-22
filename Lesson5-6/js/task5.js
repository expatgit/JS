'use strict';

{
console.log('1. Напишите функцию, которая в зависимости от переданного в нее целочисленного аргумента count,\n' +
    'будет возвращать слово "товар" в нужно форме ("12 товаров", но "22 товара", "1 товар", "97 товаров" и тд).\n\n')

let count = prompt('Введите целое число от 1 до 100');

function ending(count) { //Надо ли аргумент count ставить...
    if (count / 1 <= 10) {
        if (count % 10 === 1) {
            return alert(`${count} товар`);
        }        if (count % 10 === 2) {
            return alert(`${count} товара`);
        } if (count % 10 === 3) {
            return alert(`${count} товара`);
        } if (count % 10 === 4) {
            return alert(`${count} товара`);
        } else {
            return alert(`${count} товаров`);
        }
    }
    else if (count / 1 > 10 && count / 1 <= 20) {

            return alert(`${count} товаров`);

    }
    else if (count / 1 > 20 && count / 1 <= 100) {
        if (count % 10 === 1) {
            return alert(`${count} товар`);
        }  if (count % 10 === 2) {
            return alert(`${count} товара`);
        } if (count % 10 === 3) {
            return alert(`${count} товара`);
        } if (count % 10 === 4) {
            return alert(`${count} товара`);
        } else {
            return alert(`${count} товаров`);
        }
    }


}

let result = ending(count);
console.log(ending());

}

{
    console.log('2. Функция range\n' +
        '\n' +
        '       Напишите функцию range, принимающую три аргумента:\n' +
        '         два обязательных: начало и конец диапазона,\n' +
        '         третий аргумент - необязательный (если он не передан, то равен единице) – шаг для построения массива.\n' +
        '       \n' +
        '       Функция возвращает массив, который содержит все числа из диапазона, включая начальное и конечное.\n' +
        '       Например, вызов функции range(1, 10, 2) должен будет вернуть [1, 3, 5, 7, 9]')

       console.log('Ответ:');

    function range (min, max, n = 1) {
        let arrRange = [min];
        while (min < max-n) {
            arrRange.push(min += n)
        } return arrRange
    }

    console.log(range(1, 10, 2));
}



{

    console.log('\n' +
        '3. Дано целое положительное число N.   \n' +
        'Вычислите сумму его цифр, используя рекурсию (строки, массивы и циклы использовать запрещено).')

    let num = prompt('Введите целое положительное число (12345');

    function rekurs(num) {
        if (num === 0) {
            return 0
        }
        else {
            return (Math.floor(num % 10) + rekurs(num / 10));
        }

    }
    console.log(rekurs(num));

}