export const buttonComponent = () => {
    const $button = document.createElement('button');
    $button.className = 'button';
    $button.textContent = 'Изменить цвет страницы';
    return $button;
}