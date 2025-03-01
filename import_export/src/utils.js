export const getRandomColor = () => {
    let randomColor = '#';
    for (let i = 0; i < 3; i++) {
        randomColor += (Math.floor(Math.random() * 255)).toString(16).padStart(2, '0');        
    }

     return randomColor;
}