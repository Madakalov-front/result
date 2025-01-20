// import { checkTemp, getHP, salary, square } from "./week_2/debugg/debugger.js";

import {
    askClientToGiveEstimation,
    checkCoffees,
    checkQueue,
    cubingArray,
    getSumOfSequence,
    updatePrices,
} from "./week_2/array/array.js";
import {
    concatArray,
    createMatrixArray,
    getMathResult,
    matchAnalysis,
} from "./week_2/dop/dop_week_2-array.js";
import {
    checkQuestionAnswer,
    checkTextOnErrorSymbol,
    showErrorMessage,
    showSuccessMessage,
} from "./week_2/dop/dop_week_2-function.js";
import {
    getDivisorsCount,
    getSumOfNumbers,
    setGetName,
} from "./week_2/functions/functions.js";

// Debugger
// getHP()
// checkTemp()
// salary()
// square()

// Functions
// setGetName()
// console.log(getSumOfNumbers('1asd')) // NaN
// console.log(getSumOfNumbers(10, "odd")); // 25
// console.log(getSumOfNumbers(10, "even")); // 30
// console.log(getSumOfNumbers(10, "")); // 55
// getDivisorsCount(1.2) // alert
// console.log(getDivisorsCount(4)); // Вернет 3 (делители - 1, 2, 4)
// console.log(getDivisorsCount(5)); // Вернет 2 (делители - 1, 5)
// console.log(getDivisorsCount(12)); // Вернет 6 (делители - 1, 2, 3, 4, 6, 12)
// console.log(getDivisorsCount(30)); // Вернет 8 (делители - 1, 2, 3, 5, 6, 10, 15, 30)

// Array
// console.log(getSumOfSequence(10))
// checkCoffees('CapPuCciNo')
// updatePrices([1.5, 1, 2], ['Latte', 'Cappuccino', 'Americano']);
// askClientToGiveEstimation();
// cubingArray([10, 4, 100, -5, 54, 2]);

// Dop_week_2
// checkQuestionAnswer('Арбуз это фрукт или ягода?', 'ЯгОда');
// checkQuestionAnswer('Сколько в среднем зубов у взрослого человека?', '321');
// checkQuestionAnswer('Как называется самая маленькая птица в мире?', 'КолиБри');
// const text = 'Привет! Как дела! Давно мы с тобой не виделись.';
// checkTextOnErrorSymbol(text, 'а', showSuccessMessage, showErrorMessage);

// matchAnalysis([8, 1, 1, 3, 2, -1, 5])
// getMathResult(['200', '+', 300]); // 500
// getMathResult(['20', '-', '5']); // 15
// getMathResult([100, '/', 100]); // 1
// getMathResult([2, '-', 2]); // 0
// getMathResult(['5', '>', '10']); // false
// getMathResult(['5', '<', '10']); // true
// getMathResult(['1', '=', 1]); // true
// getMathResult(['1', '**', 1]); // 'Ошибка'
// getMathResult(['+', '100', 10]); // 'Ошибка'
// getMathResult(['100', 'hello', 'javascript', 'help200', '+', 4]); //  104
// console.log(createMatrixArray(3, 5))
// console.log(concatArray([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
// ]));
// console.log(concatArray(createMatrixArray(3, 5)));
