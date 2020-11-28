'use strict';
/*
{
    console.log('4. На методы массивов\n' +
        '        \n' +
        '        Дан массив:\n' +
        '        let numsArr = [\n' +
        '            [3, 5, -1, 6, 0],\n' +
        '            [56, -9, 111, 6],\n' +
        '            [11, 86, -12],\n' +
        '        ];\n' +
        '        \n' +
        '        1. Увеличить кажый элемент массива на 10\n' +
        '        2. Создать массив, в который войдут положительные элементы numsArr\n')
    let numsArr = [
        [3, 5, -1, 6, 0],
        [56, -9, 111, 6],
        [11, 86, -12],
    ];
    let newArr = [];
    for (let i of numsArr) {


        for (let j in i) {

            newArr.push(i[j]);
        }
       /!* console.log(newArr)*!/
    }

    console.log('конвертнули трехмерный массив в одномерный');

    for (let k of newArr) {
        k+=10;
        numsArr.pop(newArr[k]);

        console.log(numsArr);

    }
    console.log(newArr);
    console.log(numsArr);
}*/

{
function more18(age) {
    return age > 18;
}

function less30(age) {
    return age < 30;
}

let funcArr = [more18, less30];

function ageResult(arr, num) {
    for (let func of arr) {
        if (arr[func] > num) {
            return true;
        }
        else {
            return false
        }
    }
}

let xAge = Math.floor(Math.random() * 100);

console.log(ageResult(funcArr, xAge));
console.log(xAge);


}



