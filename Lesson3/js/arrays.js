'use sctrict';

let arr = [];
console.log(arr);

let colors = ["red", "blue", "yellow", "green"];

console.log(colors);

/*
let a = colors[1];
console.log(a);*/

// Изменение значения массива

colors[3] = "black";

colors[30] = "white";

console.log(colors);
let colorLength = colors.length;

console.log(colorLength);

colors.length = 2;
console.log(colors)

let nums = [
    [34,67, -100],
    [2, 45, 4],
    [-700, 221, -100]
]

console.log(nums[0][2]);
console.log(nums[1][1]);
console.log(nums[2][0]);
console.log(nums[2].length);

//увеличить значение каждого четного элемента в 2 раза

/*nums = [2, 56, 66, -123, 0, 45, 45];
for (i in nums) {
    if (i % 2 == 0) {
        i * 2;
        i++;
    }

}*/

/*console.log(i);*/

nums = [2, 56, 66, -123, 0, 45, 45];
for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) nums[i] *= 2;
}
console.log(nums)

//Найти сумму значений элементов массива
nums = [2, 56, 66, -123, 0, 45, 45];
let sum = 0;

for (let elem of nums) {
    sum += elem;
}
console.log(sum)

// Деструктуризация массива

let sizes = [18, 190];
let [height, width] = sizes; // деструктуризация массива. массив разбирается, значение его элементов будет присваиваьбся переменным.
console.log(height, width);
{
    let info = ["Илья", "Тарасов", "23 года", "родился в Москве"];
    let [name, surname, ...others] = info;
// name = "Илья", surname = "Тарасов", ... оператор "..." задает переменной others оставшиеся в массиве значения
// info будет останется в нетронутом виде.
    console.log(name, surname, others, info);
//сначала идут обычные переменные, а потом три точки. Если три точки поставить в начале, все что после трех точек упадет в массив, переменным значение присвоено не будет.

    let elemMargins = [10, 40, 10];
    console.log(elemMargins[elemMargins.length-2]);
    let [topM = 0, rightM = 20, bottomM = 0, leftM = 20] = elemMargins;
    console.log(topM, rightM, leftM, bottomM);

    /*let [без значений по умолчанию, со значеними по умолчанию, ...переменная]*/
//top = 10, right = 40, bottom = 10, left = 20/

//Методы массивов
    colors = ["red", "blue", "yellow", "green"];

//1. Добавление/удаление первого/последнего элемента

    colors.pop(); //удаление последнего элемента - green
    let lastColor = colors.pop();//удаление последнего элемента - green, lastColor = green
}

{
    colors.push("white", "black"); // добавляет элементы в конец массива
    //pop и push работают с концом массива
    let firstColor = colors.shift();//Удаляет и возвращает первый элемент массива
    colors.unshift("ornge", "purple") // добавляет 1 или несколько эдементов в начало массива.
    // [orange, purple, blue, yellow, white, black]
    // если буез разница с какой стороной работать - использоваться pop/push, работает быстрее.

    //2. splice / 3. slice
    colors = ["red", "blue", "yellow", "green", "orange", "purple"]
    let removedColors = colors.splice(0, 2, "greenyellow", "gold")
    console.log(colors);
    console.log(removedColors);
    //удаляет с указанного индекса указанное количество элементов, удаленные элементы - возвращает, можно задать переменную, а также может добавлять элементы в начало массива
    //можно использоваться для добавления элементов в середину массива - splice(3, 10, "n1", "n2" и тд)
    // splice(3, 0, "n1", "n2" и тд) - добавит элементы, начиная с 3 элемента, ничего не удаляя.

    arr = [-3, 56, 78, 90, 97];
    //удалить элемент, если он четный
    for (let i = 0; i < arr.length; ++i) {
        if (!(arr[i] % 2))
        /*if (arr[i] % 2 === 0)*/{
            arr.splice(i, 1);
            i--;

        }
        console.log(arr);
        // for (let i = arr.length - 1; i >= 0; i--){}

    }

    // возвращает новый массив, содержащий копии части исходного массива [от, до)
    let newColors = colors.slice(1, 4);
    console.log(newColors);


}

// mozilla.org мутоды
// 4. include
// 5. reverse
// 6. concat
// 7. indexOf / lastIndexOf



}

nums = [
    [34, 67, -100],
    [22, 45. 12],
    [-700, 281, -152]
]

for (let elemArr of sums) { // for (let i = 0; i < nums.length; i++) nums[i] - можно вносить изменение в массив
    for (let elem of elemArr) {//for (let j = 0; j < nums[i].length; j++) nums[i][j]
        console.log("elem = " + elem)
    }
}

