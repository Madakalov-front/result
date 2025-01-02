export const changeStr = () => {
    const javaScriptDescription = `JavaScript — мультипарадигменный язык программирования. 
    Поддерживает объектно-ориентированный, императивный и функциональный стили. 
    Является реализацией спецификации ECMAScript. 
    JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений.`;
    const update = javaScriptDescription
        .slice(0, Math.floor(javaScriptDescription.length / 2))
        .replaceAll("а", "A")
        .replaceAll("а", "А")
        .replaceAll(" ", "")
        .repeat(3);
    console.log(update[Math.floor(update.length / 2)]);
    console.log(update);
};

export const clientPay = (name, payAllTime, buyNow) => {
    let discount = 0;

    if (Number.isNaN(Number(payAllTime)) || Number.isNaN(Number(buyNow))) {
        alert(
            `Сумма, которую клиент потратил за все время и которую потратил сегодня, должна быть числом! Перезагрузи страницу, чтобы повторить попытку.`
        );
        return false;
    }

    if (payAllTime >= 100 && payAllTime < 300) {
        discount = 0.9;
        alert("Вам предоставляется скидка в 10%!");
    } else if (payAllTime >= 300 && payAllTime < 500) {
        discount = 0.8;
        alert("Вам предоставляется скидка в 20%!");
    } else if (payAllTime >= 500) {
        discount = 0.7;
        alert("Вам предоставляется скидка в 30%!");
    } else {
        alert("Сумма покупок меньше 100$");
    }

    const clientSpentForAllTime = payAllTime + buyNow;
    const clientSpentToday = buyNow * discount;

    alert(
        `Спасибо, ${name}! К оплате ${clientSpentToday}$. За все время в нашем ресторане вы потратили ${clientSpentForAllTime}$.`
    );
};

export const passwordUser = (userPassword) => {
    
    const lthPsw = userPassword.length;
    const reg = /^(?=.*[A-Z])(?=.*\d).*$/g.test(userPassword);

    if (lthPsw >= 3 && lthPsw <= 30 && reg) {
        alert("Пароль валидный. Добро пожаловать в аккаунт!");
    } else {
        alert(
            "Пароль не удовлетворяет условиям! Перезагрузите страницу и попробуйте ввести его еще раз."
        );
    }
};
