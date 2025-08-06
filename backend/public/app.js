console.log('Hello from app');

document.addEventListener('click', async event => {
    const target = event.target;
    const parent = target.closest('.list-group-item');
    const dataAttr = target.dataset
    if (dataAttr.type) {
        if (dataAttr.type === 'remove') {
            removeItemList(dataAttr.id).then(() => {
                parent.remove()
            })
        }
        if (dataAttr.type === 'edit') {
            const nodeText = parent.childNodes[0];
            const prevText = nodeText.textContent.trim()
            const newTitle = prompt('Редактировать название:', prevText) ?? prevText;
            if (prevText !== newTitle) {
                editItemList(dataAttr.id, newTitle).then(() => {
                    nodeText.textContent = newTitle;
                })
            }
        }
    }
})



const removeItemList = async (id) => {
    await fetch(`/${id}`, { method: "DELETE" })
}

const editItemList = async (id, title) => {
    await fetch(`/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json", // Добавляем заголовок
        },
        body: JSON.stringify({ title })
    });
}