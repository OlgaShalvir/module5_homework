// 6
let arr1 = [1, 2, 4, 7, 2, 4, 6,];
console.log(arr1.every((element, index, array) => array[index] === array[0]));
let arr2 = [2,2,2,2,2];
console.log(arr2.every((element, index, array) => array[index] === array[0]));

// 7
let arr3 = [1, 2, 3, 5, 47, 8, 9, 0, 0, 4, null, 'a','b'];

let even = (arr3.filter((num) => num % 2 === 0 && num !== 0 ).length);
let odd = (arr3.filter((num) => num % 2 !== 0).length);
let zero = (arr3.filter((num) => num === 0).length);
console.log(`Количество четных элементов ${even}, нечетных ${odd} и нулевых ${zero} `)


  