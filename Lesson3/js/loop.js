'use strict';

//Looping statemnt
//Циклы
let password = null;
do {
    password = prompt("Введите пароль");
    console.log(password);
} while (password !== 'admin');


// promt - модальное окно, приостанавливает выполнение скрипта, возврашает то, что ввел вользователь (всегда String),
//либо Null, если нажать отмена

let n = 34, m = 67;
let i = n;
while (i < m) {
    if (i % 2 !==0) {
        console.log(`Нечетное: ${i}`);
    }
    i++;
}

i = 1;

while (i <= 7) {
    if (i < m+1) {
        console.log(i);
    }
    i++;
}

i = 34;
if (i % 2 !== 0) console.log("i меньше 10!");
else console.log("i меньше 10!")

//for
//дано 5 попыток, чтобы угадать число до 1000
//

//Math.random()

let num = Math.floor(Math.random() * 1000);
for (let attemptCount = 5; attemptCount >= 1; attemptCount--) {

    let answer =  +prompt("введите число");
    if (answer === num) {
        alert("угадано");
        break;
    }
    alert(`Осталось потыпыток: ${attemptCount - 1}`)


}