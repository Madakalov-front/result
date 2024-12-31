export const changeStr = () => {
    const javaScriptDescription = `JavaScript — мультипарадигменный язык программирования. 
    Поддерживает объектно-ориентированный, императивный и функциональный стили. 
    Является реализацией спецификации ECMAScript. 
    JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений.`
    const update = javaScriptDescription.slice(0, Math.floor(javaScriptDescription.length / 2)).replaceAll('а', 'A').replaceAll('а', 'А').replaceAll(' ', '').repeat(3)
    console.log(update[Math.floor(update.length / 2)])
    console.log(update)
}