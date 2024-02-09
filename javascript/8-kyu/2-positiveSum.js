// https://www.codewars.com/kata/5715eaedb436cf5606000381

const positiveSum = (arr) => arr.filter((x) => x >= 0).reduce((a, c) => a + c, 0);

console.log(positiveSum([1, 2, 3, 4, 5]));
