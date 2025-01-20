const getDateFormat = (date, seporator = '.') => {
    const day = String(date.getDate()).padStart(2, '0')
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const year = date.getFullYear();
    console.log(`${day}${seporator}${month}${seporator}${year}`)
}
// getDateFormat(new Date(), '--')

const getDaysBeforeBirthday = (nextBirthdayDate) => {
    const nowDate = Date.now();
    const nextDate = nextBirthdayDate.getTime();
    const difference = nextDate - nowDate;
    const convertMsToDays = (ms) => Math.round(ms / 1000 / 60 / 60 / 24);
    return `Дней осталось - ${convertMsToDays(difference)}`
}
// console.log(getDaysBeforeBirthday(new Date(2025, 4, 15)))

const addDays = (date, days) => {
    const nowDate = date.getTime()
    const nextDate = days * 86_400_000
    return new Date(nowDate + nextDate);
}
// console.log(addDays(new Date(), 12))