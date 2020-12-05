'use strict';

let titleElems = document.querySelectorAll(".article p:first-child");

// [p, p, p].style.add - коллекции нельзя добавить стиль. Стиль добавляется через перебор

// перебор коллекции html элементов

for (let elem of titleElems){
    // на каждой итерации цикла в переменную elem копируется элемент коллекции
    //на первой интерации будет <p>Короткий текст 1</p>
    // на второй - <p>Короткий текст 2</p> и тд.

    //ДОбавление обработчика события
    elem.addEventListener("click", openDescription);//функция openDescription будет вызвана только тогда, когда будет левый клик мыши.

}

//Array.from(titleElems).forEach(elem=>{});

function openDescription() {

    //this - элемент, на который был повешен обработчик события
    console.log("элемент, на который был повешен обработчик", this);
    this.nextElementSibling.classList.toggle('open');


}


//data-*
// атрибут data-* используется для передачи пользовательских данным из HTML в JS

//получение значения атрибута data-*:
//элемент.dataset.present(название)

let getPresent = () => {
    return {
        car: "машина",
        dog: "Собака",
        book: "Книга"
    };
};

let presentContainer = document.getElementById("present_container");
presentContainer.addEventListener("click", showPresent);

// при клике на present_container вызывается функция showPresent,  в нее передается объект с информацие о событии

function  showPresent(event) {

    //this - presentContainer
    console.log(event);
    let clickElem = event.target; // элемент на котором произошщло событие
    let presentValue = clickElem.dataset.present;
    if (presentValue) { //car book dog
        let presents = getPresent();
        clickElem.innerText = presents[presentValue];
        clickElem.classList.add("present");

        // удаление обработчика события
        this.removeEventListener("click", showPresent);

    }

}

window.addEventListener("scroll", fixedMenu);

let fixedBlock = document.getElementById("fixed");
let fixedBlockOffsetTop = fixedBlock.getBoundingClientRect().top;

function fixedMenu() {
    if (window.pageYOffset > fixedBlockOffsetTop) {
        fixedBlock.classList.add("fixed");
        }
    else {
        fixedBlock.classList.remove("fixed");
    }
}