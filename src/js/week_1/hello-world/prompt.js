export const promptList = () => {
    const listQuest = ['Сколько будет 2 + 2?', 'Чему равен корень из 9?', 'Сколько будет 2 в 5-й степени?'];
    const listAnswers = ['Ответ: если ты ответил 4, то ты прав.', 'Ответ: если ты ответил 3, то ты прав.', 'Ответ: если ты ответил 32, то ты прав.']
    for(let i = 0; i < listQuest.length; i++) {
        prompt(`${listQuest[i]}`)
        alert(`${listAnswers[i]}`)
    }
}