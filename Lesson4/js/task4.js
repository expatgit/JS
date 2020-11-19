'use strict';
/*

{
    console.log('3. Заменить все буквы в слове на строчные, а первую букву на заглавную\n' +
        'Например, дано hello, получаем Hello / дано HeLLO, получаем Hello\n')

    let text = prompt("Введите текст");

    let textForPrint;
    for (let idx = 0; idx < text.length; idx++) {
       if (idx === 0)
           textForPrint = text[idx].toUpperCase();
       else

           textForPrint += text[idx].toLowerCase(); //почему Што?рм ругается? Говорит, что переменная может быть не задана, хотя в 12 строке такой проблемы нет



        } alert(textForPrint);
    }

Как выполнить проверку того, что введенный символ - в верхнем или нижнем регистре?


{
    console.log('4. Найдите самое длинное слово в предложении, при условии, что в предложении все слова разной длины\n' +
        'Например, в "в предложении все слова разной длины" самое длинное слово "предложении" ')


    let str1 = prompt('Введите предложение');


    let str2 = str1.split(' ');
    let longest = 0;
    let target = 0;
    for (let i = 0; i < str2.length; i++) {
        if (longest < str2[i].length) {
            longest = str2[i].length;
            target = str2[i];

        }
    }
    console.log(`Самое длинное слово в предложении - "${target}", длина составляет ${target.length} симв`);
}

*/
let year = null;
do {

    let year = prompt("Проверка: високосный год или нет.\n Ведите год (например: 1925)");

    if (year % 400 === 0) {
        alert("год високосный");

    }
    else if (year % 100 === 0) {
        alert("год не високосный");
    }
    else if (year % 4 !== 0) {
        alert("год не високосный");
    }
    else {
        alert("вводите год цифрами");
    }
}

while (year !== toString());
