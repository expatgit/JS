'use strict';

function getsum(a, b) {
    return a + b;
}

function getNumsSum(...nums) {
    return nums.reduce((sum, current) => sum + current);
}

export {getsum, getNumsSum};
