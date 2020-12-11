'use strict';
{
    function getCats() {
        return [
            {
                "name": "Люся",
                "age": "1 год",
                "color": "трехцветная",
                "additional_info": {"vaccinations": true, "passport": true}
            },
            {
                "name": "Том",
                "age": "3 месяца",
                "color": "белый",
                "additional_info": {"vaccinations": false, "passport": false}
            },
            {
                "name": "Макс",
                "age": 2,
                "color": "серый",
                "additional_info": {"vaccinations": false, "passport": true}
            },
            {
                "name": "Василий",
                "age": 3,
                "color": "черный",
                "additional_info": {"vaccinations": true, "passport": true}
            }
        ];
    }
console.log(getCats());

    /*for (let i = 0; i < getCats().length; i++) {

        //bigSection.classList.add(`cats + ${i}`);
        bigSection.innerText = '...';
        document.body.append(bigSection);

    }
    generateCards(document.querySelector('section'));

    function generateCards(catInfo) {
        let cats = getCats();
        for (let elem of cats) {
            let bigSection = document.createElement("section");
            bigSection.innerText = '...';
            let card = document.createElement("div");
            card.classList.add("cats");
            let title = document.createElement('p');
            title.innerText = elem.name;
            let catAge = document.createElement('p');
            catAge.innerText = elem.age;
            let catColor = document.createElement('p');
            catColor.innerText = `Цвет: ${elem.color}`;
            let addInfo = document.createElement('p');
            addInfo.innerText = elem.additional_info;
            card.append(title, catAge, catColor, addInfo);
            catInfo.append(card);
            bigSection.append(catInfo);

        }

    }*/

    function generateCatsCards(catInfo) {
        let cats = getCats();
        for (let cat of cats) {
            let section = document.createElement('section');
            let div = document.createElement('div');
            let spanName = document.createElement('span');
            spanName.innerText = cat.name;
            let spanAge = document.createElement('span');
            spanAge.innerText = cat.age;
            div.append(spanName, spanAge);
            section.append(catInfo);
            return cat.name;
        }

    }
   generateCatsCards(document.querySelector("section"));
}//block end
/*

{

    let articles = [
        {
            id: 1,
            title: "JS",
            text: "Статья про JS",
            author: "Александр"
        },
        {
            id: 2,
            title: "PHP",
            text: "Статья про PHP",
            author: "Виталий"
        },
        {
            id: 3,
            title: "Базы Данных",
            text: "Статья про Базы Данных",
            author: "Евгения"
        },
        {
            id: 4,
            title: "HTML",
            text: "Статья про HTML",
            author: "Виталий"
        }
    ];

    let goods = [
        {
            title: "Пианино",
            price: 3000,
            count: 25
        },
        {
            title: "Гитара",
            price: 1200,
            count: 40
        },
        {
            title: "Барабаны",
            price: 2700,
            count: 12
        },
        {
            title: "Флейта",
            price: 900,
            count: 50
        },
        {
            title: "Арфа",
            price: 3400,
            count: 5
        }
    ];
    function generateTable(arr) {
        let testArr1 = articles
        let table = document.createElement('table');
        for (let item of testArr1) {
            let row = table.insertRow(testArr1[elem]);
            row.innerText = 'aasdasd';
            tableArea.append(table);

        }
    }





}*/
