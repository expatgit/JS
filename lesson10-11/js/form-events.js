'use strict';

let form = document.forms.lesson;

console.log(form);

// Доступ к элементам формы по значению атрибута name

let loginInput = form.elements.login;

console.log(loginInput);

console.log(loginInput.value);

loginInput.value = "qwe";
let pwdInput = form.elements.pwd;
console.log(pwdInput);
pwdInput.value = "123";

// name = colors, элементов с name = color в html несколько, поэтому  в colorRadios получим

let colorRadios = form.elements.color;
console.log(colorRadios);

for (let radio of colorRadios){
    radio.addEventListener("focus", changeColor);
}

function changeColor() {
    // this
    form.elements.checkbox_fieldset.style.background = this.value;
}

let langArr = form.elements["lang[]"];

// у чекбоксов и радиокнопок есть атрибут checked. получить значение checked - через свойство checked.

for (let lang of langArr){
    if (lang.checked) console.log(lang.value);

}
let countries = form.elements.countries;
console.log(countries);

for (let elem of countries){
    if (elem.selected) console.log(elem.value);
}

form.addEventListener("submit", takeForm);

// у события submit есть обработчик по умолчанию - отправка данных на сервер

function takeForm (event) {
    event.preventDefault();//отмена отправки данных на сервер
    console.log("takeForm");
    console.log(this.elements.login.value)
}
// отправка даных
let formData = new formData(this);

//отправка данных с перезагрузкой
this.submit;