export const matchAnalysis = (matches) => {
    let numberOfGoals = matches.reduce((acc, cur) => (acc > cur ? acc : cur));
    alert(
        `Самый результативный матч был под номером ${
            matches.indexOf(numberOfGoals) + 1
        }. В нем было забито ${numberOfGoals} гол(ов).`
    );

    numberOfGoals = matches
        .filter((goal) => goal >= 0)
        .reduce((acc, cur) => (acc < cur ? acc : cur));
    const worstResult = [];
    for (let i = 0; i < matches.length; i++) {
        if (matches[i] === numberOfGoals) {
            worstResult.push(i + 1);
        }
    }
    alert(
        `«Самые нерезультативные матчи были под номерами ${worstResult}. В каждом из них было забито по ${numberOfGoals} мячу(а).»`
    );

    numberOfGoals = matches
        .filter((goal) => goal >= 0)
        .reduce((acc, cur) => (acc += cur));
    alert(` «Общее количество голов за сезон равно ${numberOfGoals}»`);

    if (matches.some((item) => item < 0)) {
        alert("«Были автоматические поражения: да»");
    }

    numberOfGoals = Number(
        matches.reduce((acc, cur) => (acc += cur)) / matches.length,
        2
    ).toFixed(2);
    alert(`Среднее количество голов за матч равно ${numberOfGoals}`);

    const sortGoals = [...matches].sort((a, b) => a - b);
    alert(sortGoals);
    console.log(sortGoals);
    console.log(matches);
};

export const getMathResult = (expression) => {
    if (expression.length < 3 || !Array.isArray(expression)) return `Ошибка`;

    const operations = {
        ">": (a, b) => a > b,
        "<": (a, b) => a < b,
        "=": (a, b) => a == b,
        "+": (a, b) => a + b,
        "-": (a, b) => a - b,
        "*": (a, b) => a * b,
        "/": (a, b) => a / b,
    };
    const operationKeys = Object.keys(operations);

    if (expression.length > 3 && Array.isArray(expression)) {
        expression = expression.filter(
            (item) =>
                !Number.isNaN(Number(item)) || operationKeys.includes(item)
        );
    }

    if (operationKeys.includes(expression[1])) {
        expression = expression.map((item) => {
            if (parseInt(item)) {
                return Number(item);
            } else {
                return item;
            }
        });
        console.log(operations[expression[1]](expression[0], expression[2]));
    } else {
        console.log("Ошибка");
    }
};

export const createMatrixArray = (row, col) => {
    let matrixArray = (len) => {
        const arr = [];
        for (let i = 0; i < len; i++) arr.push(i);
        return arr;
    };
    return (matrixArray(row)).map(item => matrixArray(col));
};


export const concatArray = (array) => {
    return array.reduce((a,b) => a.concat(b),[]);
}