export const getHP = () => {
    let health = prompt('Введите число параметра "здоровье" для персонажа');
    console.log(health);
    if (health < 0 || !health) {
        alert('Параметр "здоровье" должен быть больше нуля!');
    } else {
        console.log(health);
        alert(`Параметр "здоровье" равен ${health}`);
    }
};

export const checkTemp = () => {
    const temperatureInCelsius = Number(
        prompt("Введите температуру в градусах Цельсия")
    );
    console.log(typeof temperatureInCelsius, temperatureInCelsius);

    if (temperatureInCelsius === 0) {
        alert("0 градусов по Цельсию - это температура замерзания воды");
    } else if (temperatureInCelsius > 0) {
        alert(
            "Для замерзания воды температура должна быть 0 градусов по Цельсию либо ниже"
        );
    }

    const temperatureInFahrenheit = (temperatureInCelsius * 9) / 5 + 32;
    console.log(`${temperatureInFahrenheit}`);
    alert(
        `${temperatureInCelsius} градусов по Цельсию - это ${temperatureInFahrenheit} по Фаренгейту.`
    );
};

export const salary = () => {
    const salaryOfJuniorDeveloper = 500;
    const numberOfJuniorDevelopers = 3;
    let taxPercentage = 13;
    // let totalJuniorDevelopersSalary = null;
    let totalJuniorDevelopersSalary = 0;
    console.log(
        typeof totalJuniorDevelopersSalary,
        totalJuniorDevelopersSalary
    );

    const salaryWithTax =
        salaryOfJuniorDeveloper -
        (salaryOfJuniorDeveloper * taxPercentage) / 100;

    for (let i = 0; i < numberOfJuniorDevelopers; i += 1) {
        totalJuniorDevelopersSalary += salaryWithTax;
    }

    console.log("totalJuniorDevelopersSalary", totalJuniorDevelopersSalary);
};

export const square = () => {
    let numbers = [10, 4, 100, -5, 54, 2];
    let sum = 0;

    // Через цикл for
    for (let i = 0; i < numbers.length; i++) {
        // console.log(numbers[i] ** 3)
        // console.log(numbers[i])
        sum += numbers[i] ** 3;
    }
    console.log(sum); // 1158411

    // Через цикл for of
    sum = 0;
    for (let num of numbers) {
        // console.log(num ** 3)
        // console.log(num)
        sum += num ** 3;
    }
    console.log(sum); // 1003904306910622800
};
