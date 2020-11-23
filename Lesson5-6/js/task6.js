'use strict';

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
        '        2. Создать массив, в который войдут положительные элементы numsArr\n\n')

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
         /* console.log(newArr)*/
     }

     console.log('конвертнули трехмерный массив в одномерный');
 /*
      for (let k of newArr) {
          k+=10;
          numsArr.pop(newArr[k]);

          console.log(numsArr);

      }*/
     console.log(typeof newArr[0]);
     console.log(typeof numsArr[0]); //Какая прелесть! 8 часов впустую...) К объекту 10 не прибавляется...
     numsArr = newArr;
     newArr = newArr.map(function (digit) {
         return digit + 10;
     });

     console.log(newArr);

 /*    let numsArr2 = numsArr.map(function (digit) {
        if (digit > 0) {
            return digit;
        }

     }); //мысль остановилась.... надо убрать und из консоли

        console.log(numsArr2);*/
    for (let i = 0; i <numsArr.length; i++) {
        if (numsArr[i] < 0) {                  // почему numsArr[i], а не просто i????
            numsArr.splice(i, 1);
        }

    }
   /* for (let i = numsArr.length; i > 0; i--) {
        if (numsArr[i] < 0) {
            numsArr.splice(i, 1);
        }

    }*/
    console.log(numsArr);


 }


