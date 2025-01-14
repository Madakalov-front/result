export const checkQueue = () => {
    const peopleWaiting = [
        "Кристина",
        "Олег",
        "Кирилл",
        "Мария",
        "Светлана",
        "Артем",
        "Глеб",
    ];

    const giveParcel = (name, len) => {
        alert(`${name} получил(а) посылку. В очереди осталось ${len} человек.`);
    };

    const leaveQueueWithoutParcel = (arrayQueue) => {
        for (let i = 0, len = arrayQueue.length; i < len; i++) {
            alert(
                `${arrayQueue.shift()} не получил(а) посылку и ушел(ла) из очереди`
            );
        }
    };

    for (const people of peopleWaiting) {
        if (peopleWaiting.includes("Кирилл")) {
            giveParcel(peopleWaiting.shift(), peopleWaiting.length);
        } else {
            leaveQueueWithoutParcel(peopleWaiting);
            break;
        }
    }
};

export const getSumOfSequence = (number) => {
    const range = (end, start = 1) => {
        const numberList = [];
        for (let i = start; i <= end; i++) {
            numberList.push(i);
        }
        return numberList;
    };

    const getRange = range(number);

    return getRange[0] + getRange.at(-1);
};

export const checkCoffees = (coffee) => {
    if (typeof coffee !== "string") return "Такого кофе нет";
    const coffees = ["Latte", "Cappuccino", "Americano"];

    const formattingStr = (str) =>
        str.slice(0, 1).toUpperCase() + str.slice(1).toLowerCase();

    const coffeeName = formattingStr(coffee);

    if (coffees.find((item) => item === coffeeName)) {
        alert(
            `Держите ваш любимый кофе ${coffeeName}. Он ${
                coffees.findIndex((item) => item === coffeeName) + 1
            }-й по популярности в нашей кофейне.`
        );
    } else {
        alert("К сожалению, такого вида кофе нет в наличии");
    }
};

export const updatePrices = (prices, menuCoffee) => {
    // return prices.map((price, idx) => {
    //     price += 0.5;
    //     alert(`Кофе ${menuCoffee[idx]} сейчас стоит ${price} евро`);
    // });
    prices = prices.map((price) => (price += 0.5));
    menuCoffee.forEach((coffee, idx) =>
        alert(`Кофе ${coffee} сейчас стоит ${prices[idx]} евро`)
    );
};

export const askClientToGiveEstimation = () => {
    const clientsEstimations = [];
    for (let i = 0; i < 5; i++) {
        let review = Number(
            prompt("Как вы оцениваете нашу кофейню от 1 до 10?", "")
        );
        if (!review || Number.isNaN(review)) continue;
        if (review < 1 || review > 10) continue;
        clientsEstimations.push(review);
    }
    const goodEstimations = clientsEstimations.filter((item) => item > 5);
    const notGoodEstimations = clientsEstimations.filter((item) => item <= 5);
    alert(
        `Всего положительных оценок: ${goodEstimations.length}; Всего отрицательных оценок: ${notGoodEstimations.length}`
    );
};

export const cubingArray = (array) => {
    let sum = 0;
    const REFERENSE = 1158411;

    for (let i = 0, len = array.length; i < len; i++) {
        sum += array[i] ** 3;
    }
    console.log(`for - ${sum === REFERENSE}`);
    sum = 0;

    for (const item of array) {
        sum += item ** 3;
    }
    console.log(`for/of - ${sum === REFERENSE}`);
    sum = 0;
    
    array.forEach((item) => (sum += item ** 3));
    console.log(`forEach - ${sum === REFERENSE}`);
    sum = 0;

    sum = array.reduce((acc, cur) => (acc += cur ** 3), 0);
    console.log(`reduce - ${sum === REFERENSE}`);
    sum = 0;
};
