export const checkUser = () => {
    const existingUserLogin = "the_best_user",
        existingUserPassword = "12345678";

    const userLogin = prompt("Введите логин")?.trim(),
        userPassword = prompt("Введите пароль")?.trim();

    const checkLogin = existingUserLogin === userLogin,
        checkPassword = existingUserPassword === userPassword;

    if (checkLogin && checkPassword) {
        alert(`Добро пожаловать, ${userLogin}!`);
        return;
    }
    alert(`Логин и (или) Пароль введены неверно!`);
};

export const testChildren = () => {
    let correctAnswers = 0;
    let incorrectAnswers = 0;

    const arrQuest = [
        "Сколько будет 2 + 2?",
        "Сколько будет 2 * 2?",
        "У Пети было 5 яблок. 3 из них он съел, 1 отдал другу. Сколько яблок у Пети осталось?",
        "У Маши было 10 конфет. 2 она съела, 1 отдала другу. После мама дала Маше еще 5 конфет. Сколько в итоге конфет осталось у Маши?",
        "Сколько будет 2 + 2 * 2?",
    ];

    const arrAnswer = [4, 4, 1, 12, 6];

    for (let i = 0; i < arrQuest.length; i++) {
        const answerUser = Number(prompt(arrQuest[i]));
        if (answerUser === arrAnswer[i]) {
            alert("Ответ Верный");
            correctAnswers++;
        } else {
            alert("Ответ Неверный");
            incorrectAnswers++;
        }
        if (i === arrQuest.length - 1) {
            alert(
                `Конец теста! Правильные ответы — ${correctAnswers}; Неправильные ответы — ${incorrectAnswers}.`
            );
        }
    }
};

export const confirmLearn = () => {
    const arrQuest = [
        "JavaScript появился в 1995 году?",
        "Спецификация JavaScript называется ECMAScript?",
        "JavaScript был создан за 1 месяц?",
    ];
    const arrDesc = [
        "JavaScript появился в 1995 году!",
        "ECMAScript - это стандарт, на котором основан JavaScript!",
        "JavaScript был создан за 10 дней!",
    ];
    const arrAnswer = [true, true, false];

    for (let i = 0; i < arrQuest.length; i++) {
        const answer = confirm(arrQuest[i]);
        if (arrAnswer[i] === answer) {
            alert(`Верно`);
        } else {
            alert(arrDesc[i]);
        }
    }
};

export const cicle = () => {    
    const doWhile = (count) => {
        let i = 0;
        do {
            let newStudent = prompt("Введите имя нового студента!");
            if (newStudent) {
                newStudent = newStudent.trim();
                alert(`Добро пожаловать, ${newStudent}!`);
            }
            i++;
        } while (i < count);
    }
    const whileFunc = (count) => {
        while(i < count) {
            let newStudent = prompt("Введите имя нового студента!");
            if (newStudent) {
                newStudent = newStudent.trim();
                alert(`Добро пожаловать, ${newStudent}!`);
            }
            i++;
        }
    } 
    
    doWhile(3)
    whileFunc(3)
};


export const sumRange = (startRange, endRange) => {
    const getRange = (start, end) => {
        const arrRange = []
        for(let i = start; i <= end; i++) {
            arrRange.push(i)
        }
        return arrRange;
    }

    console.log(getRange(startRange, endRange).reduce((acc, cur) =>  acc += cur , 0))
}