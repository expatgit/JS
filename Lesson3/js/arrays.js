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

console.log(i);

nums = [2, 56, 66, -123, 0, 45, 45];
for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) nums[i] *= 2;
}
console.log(nums)

//Найти сумму значений элементов массива
nums = [2, 56, 66, -123, 0, 45, 45];
let sum = 0;

for (let elem of nums) {

}