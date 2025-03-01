import { buttonComponent } from "./components";
import { getRandomColor } from "./utils";


export default function initApp() {
    const $button = buttonComponent();
    document.body.append($button);    
    
    $button.addEventListener('click', () => {
        document.body.style.backgroundColor = getRandomColor();
    })
}