export const checkQuestionAnswer = (quest, answer) => {
    const listQuerstionAnswer = {
        "Арбуз это фрукт или ягода?": "Ягода",
        "Сколько в среднем зубов у взрослого человека?": "32",
        "Как называется самая маленькая птица в мире?": "Колибри",
    };

    const checkCorrectAnswer = (answerUser, answerProgramm) => {
        return (
            answerProgramm ===
            answerUser.slice(0, 1).toUpperCase() +
                answerUser.slice(1).toLowerCase()
        );
    };

    const correctAnswer = checkCorrectAnswer(
        answer,
        listQuerstionAnswer[quest]
    );

    if (correctAnswer) {
        alert("Ответ верный");
    } else {
        alert("Ответ неверный");
    }
};

export const showSuccessMessage = (msg) => {
    console.log(msg);
};
export const showErrorMessage = (msg) => {
    console.error(msg);
};

const checkSymbol = (str, symbol) => {
    console.log(str.indexOf(symbol));
    return str.indexOf(symbol);
};

export const checkTextOnErrorSymbol = (
    text,
    errorSymbol,
    successCallback,
    errorCallback
) => {
    const checkSymbolInText = checkSymbol(text, errorSymbol);
    if (checkSymbolInText >= 0) {
        errorCallback(
            `Найден запрещенный символ "${errorSymbol}" под индексом ${checkSymbolInText}`
        );
    } else {
        successCallback(`В данном тексте нет запрещенных символов`);
    }
};
