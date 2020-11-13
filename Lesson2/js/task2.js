'use strict';



console.log('1. Задача на if else ' +

    'Дана переменная sum (сумма покупки). ' +
    'В зависимости от значения переменной sum рассчитать персональную скидку и  вывести в консоль сумму к оплате с учетом скидки!: \n' +
    'сумма до 1000 - скидка не предусмотрена \n' +
    'сумма от 1000 до 2000 - скидка 5% \n' +
    'сумма от 2000 до 3000 - скидка 10% \n' +
    'сумма от 3000 - скидка 10% + подарок); \n');

console.log('\n Ответ:');

let sum = 11301;

if (sum < 1000) {
    console.log(`скидка не предусмотрена, к оплате: ${sum} `);
} else if (1001 <= sum & sum <= 2000) {
    console.log(`Ваша скидка - 5%, сумма к оплате: ${sum * 0.95}`);
} else if (2001 <= sum & sum <= 3000) {
    console.log(`Ваша скидка - 10%, сумма к оплате: ${sum * 0.9}`);
} else /*(sum >= 3001) */
    console.log(`Ваша скидка - 10% + подарок, сумма к оплату: ${sum * 0.9}`);

console.log('\n______________________________________________________ \n \n');

console.log('2. Даны переменные: lang, salary\n' +
    '        Eсли значение lang - javascript перейти к проверке salary.\n' +
    '        Eсли значение salary > 100000, присвоить переменной result - Приглашаем Вас на собеседование.\n' +
    '        Eсли больше, присвоить переменной result - Мы перезвоним Вам в ближайшее время.')

console.log('Ответ:');

let lang = 'javascript';
let salary = 100001;
let result = null;

if (lang === 'javascript') {
    if (salary <= 100000) {
        result = 'Приглашаем Вас на собеседование.';
    } else {
        result = 'Мы перезвоним Вам в ближайшее время.'
    }
}
console.log(result);

console.log('\n______________________________________________________ \n \n');

console.log('3. Дана константа month (название месяца), в зависимости от названия месяца присвоить значение переменной season:\n' +
    '       декабрь / январь / февраль  -> присвоить значение "зима"    \n' +
    '       март / апрель / май  -> присвоить значение "весна"    \n' +
    '       июнь / июль / август  -> присвоить значение "лето"    \n' +
    '       сентябрь / окрябрь / ноябрь  -> присвоить значение "осень"')
console.log('Ответ:');

const MONTH = 'сентябрь';
let season;

switch (MONTH) {
    case 'январь':
    case "декабрь":
    case "февраль":
       /* console.log("Зима");*/
        season = 'Зима'
        break;
    case 'март':
    case 'апрель':
    case 'май':
        /*console.log("Весна");*/
        season = 'Весна'
        break;
    case 'июнь':
    case 'июль':
    case 'август':
       /* console.log("Лето");*/
        season = 'Лето'
        break;
    case 'сентябрь':
    case 'октябрь':
    case 'ноябрь':
       /* console.log("Осень");*/
        season = 'Осень'
        break;
}

console.log(season);