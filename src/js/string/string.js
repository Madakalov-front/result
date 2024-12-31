export const concatStr = () => {
    const myName = "Egor";
    const programmingLanguage = "JS";
    const courseCreatorName = "Maksim";
    const reasonText = "money";
    const numberOfMonth = "2";

    let myInfoText = `«Всем привет! Меня зовут ${myName}.
     Сейчас я изучаю язык программирования ${programmingLanguage} на курсе по ${programmingLanguage} у ${courseCreatorName}.
      Я хочу стать веб-разработчиком, потому что ${reasonText}. 
      До этого я изучал ${programmingLanguage} ${numberOfMonth} месяцa. 
      Я уверен, что пройду данный курс до конца!»`;
    myInfoText = myInfoText.replaceAll("JS", "js");
    console.log(myInfoText);
    console.log(myInfoText.length, myInfoText[0], myInfoText.at(-1));
};

export const promptUser = () => {
    const userName = prompt("Как вас зовут?").toLowerCase().trim();
    const userAge = Number(prompt("Сколько вам лет?").trim());
    alert(`Вас зовут ${userName} и вам ${userAge} лет`);
};

export const strSlice = () => {
    const userString = prompt("Введите текст для обрезки").trim();
    const startSliceIndex = Number(
        prompt("Введите индекс, с которого нужно начать обрезку строки")
    );
    const endSliceIndex = Number(
        prompt("Введите индекс, которым нужно закончить обрезку строки")
    );
    alert(`Результат: ${userString.slice(startSliceIndex, endSliceIndex)}`);
};
export const wordSlice = () => {
    const userText = prompt(`Введите текст`).trim();
    const wordFromText = prompt(`Введите текст`).trim();
    const indexOfWord = userText.indexOf(wordFromText);
    alert(`Результат: ${userText.slice(0, indexOfWord)}`);
};
