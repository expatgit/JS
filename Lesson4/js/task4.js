'use strict';


{

    console.log('1. Найти количество вхождений одной строки в другую.\n' +
        'Например, строка "дом" встречается в строке "дом домик домой одомашненный" 4 раза\n\n');

    let count = 0;

    let str1 = "дом домик домой одомашненный домашний";
    let str2 = (str1.split('дом').length-1);
    console.log(str2);






}






{
    console.log('\n' +
        '2. Проверить строку на палиндром.\n' +
        'Палиндром — это число, буквосочетание, слово или текст, которые одинаково читаются по буквам или по словам как слева направо, так и справа налево.\n' +
        'Например, 202 - палиндром / fafaf - палиндром / а роза упала на лапу Азора - палиндром \n\n');


    let str1 = "а роза упала на лапу азора";
    str1 = str1.split(' ').join('');
    let str2 = str1.split('').reverse().join('');

    let compare = str2.localeCompare(str1);


    if (compare === 0 ) {
        console.log("Ответ: Строка - палиндром");

    }
    else  {
        console.log("Ответ: Строка - не палиндром");
    }

}





{
    console.log('3. Заменить все буквы в слове на строчные, а первую букву на заглавную\n' +
        'Например, дано hello, получаем Hello / дано HeLLO, получаем Hello\n')

    let text = prompt("Задача 3. \n Введите текст");

    let textForPrint;
    for (let idx = 0; idx < text.length; idx++) {
       if (idx === 0)
           textForPrint = text[idx].toUpperCase();
       else

           textForPrint += text[idx].toLowerCase(); //почему Што?рм ругается? Говорит, что переменная может быть не задана, хотя в 12 строке такой проблемы нет



        } alert(textForPrint);
    }

//Как выполнить проверку того, что введенный символ - в верхнем или нижнем регистре?


{
    console.log('4. Найдите самое длинное слово в предложении, при условии, что в предложении все слова разной длины\n' +
        'Например, в "в предложении все слова разной длины" самое длинное слово "предложении" ')


    let str1 = prompt('Задача 4. \n Введите предложение');


    let str2 = str1.split(' ');
    let longest = 0;
    let target = 0;
    for (let i = 0; i < str2.length; i++) {
        if (longest < str2[i].length) {
            longest = str2[i].length;
            target = str2[i];

        }
    }
    console.log(`Самое длинное слово в предложении ${str1} - "${target}", длина составляет ${target.length} символов`);
}


{

    let year = null;




    while (true){



        let year = prompt("Допзадача, бесконечный цикл\nПроверка: високосный год или нет.\n Введите год (например: 1925)");

        if (value === "" || value === null || !isFinite(value)) break;

        if (year % 400 === 0) {
            alert("год високосный");

        }else if (year % 100 === 0) {
            alert("год не високосный1");
        }else if (year % 4 !== 0) {
            alert("год не високосный2");
        }
        /*else {
            alert("год не високосный3");
        }*/
    }



}