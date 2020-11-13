"use sctrict";

//if else, switch, тернарный оператор

// вевление - выполнение кода в зависимости от условий

let age = 12;
let result;


// В (прописываем условия)

if (age < 7 || age >17) {
    result = "Поездка недоступна для указанного возраста"
}

console.log(result);

let lang = 'javascript';
let experience = 6;
let german = true;

if (lang === 'javascript') {
    result = "Приглашаем на собеседование";
    if (experience > 5) {
        result += " Прибавка к зп";
    }
    if (german) {
        result += " возможен переезд";
    }
}

console.log(result)

// тернарный оператор

let day = 'Пятница';

result = day === "суббота"|| day === "воскресенье" ? "выходные дни" : "Рабочая неделя";

console.log(result)

//switch

let ticketNumber = '22222';
switch (ticketNumber) {
    case "11111": //if номер 11111, то result
        result = 'загородный дом';
        break;
    case "22222":
    case "33333":
        result = 'земельный участок';
        break;
    case "44444":
    case "55555":
    case "55555":
        result = "книга";
        break
    default:
        result = "приза нет"; // else
}

console.log(`Результат: ${result}`);

// switch проверяет на строгое равенство выражение в скобках с тем, что указано в case.



