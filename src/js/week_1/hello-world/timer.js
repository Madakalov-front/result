export const timer = (count) => {
    console.log("Запускаем таймер");
    for (let i = 1; i <= count; i++) {
      alert(i);
    }
    console.log("Обратный отсчет закончен");
  };