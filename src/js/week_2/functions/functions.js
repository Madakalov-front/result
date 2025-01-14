export const setGetName = () => {
    function getName1(name) {
        return `Имя равно ${name}`;
    }

    const getName2 = function (name) {
        return `Имя равно ${name}`;
    };

    const getName3 = (name) => `Имя равно ${name}`;
    console.log(getName1("Tom"), " - getName1");
    console.log(getName2("Tom"), " - getName2");
    console.log(getName3("Tom"), " - getName3");
};

export const getSumOfNumbers = (number, type = "odd") => {

    if (!number || Number.isNaN(Number(number))) return NaN;

    let count = null;

    for (let i = 0; i <= number; i++) {
        if (type === "odd") {
            if (i % 2 !== 0) {
                count += i;
            }
        } else if (type === "even") {
            if (i % 2 === 0) {
                count += i;
                continue;
            }
        } else if (type === "") {
            count += i;
        }
    }

    return count;
};


export const getDivisorsCount = (number) => {
    if (!number || Number.isNaN(Number(number))) return NaN;
    if(number  < 0 || !Number.isInteger(number)) alert(`${number} должен быть целым числом и больше нуля!`);
    // const divider = []
    let count = 0;

    for (let i = 1; i <= number; i++) {
        if(number % i === 0) {
            count++;
            // divider.push(i)
        }
    }

    // return `Число - ${number}! Делители - ${divider}! Кол-во - ${count}`
    return count;
}