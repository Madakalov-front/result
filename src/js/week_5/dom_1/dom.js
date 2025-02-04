const createForm = () => {
    document.body.innerHTML = `
    <form class="create-user-form">
        <label>
            Имя
            <input type="text" name="userName" placeholder="Введите ваше имя">
        </label>
        <label>
            Пароль
            <input type="password" name="password" placeholder="Придумайте Пароль">
        </label>
        <button type="submit">
            Подтвердить
        </button>
    </form>`;

    const dataForm = [
        {
            label: " Имя ",
            input: {
                type: "text",
                name: "userName",
                placeholder: "Введите ваше имя",
            },
        },
        {
            label: " Пароль ",
            input: {
                type: "password",
                name: "password",
                placeholder: "Придумайте Пароль",
            },
        },
    ];

    class Form {
        constructor(data) {
            this.data = data;
        }
        renderSubmit() {
            const submit = document.createElement('button')
            submit.type = 'submit';
            submit.textContent = 'Подтвердить'
            return submit;
        }
        renderForm(className) {
            const form = document.createElement('form');
            form.classList.add(className);
            return form
        }
        renderLabel(data) {
            if (!data) return;
            const label = document.createElement('label');
            label.textContent = data.label ?? 'Пусто';
            return label
        }
        renderInput(data) {
            if (!data) return;
            console.log(data)
            const input = document.createElement('input');
            input.type = data.input.type ?? 'Пусто';
            input.name = data.input.name ?? 'Пусто';
            input.placeholder = data.input.placeholder ?? 'Пусто';
            return input
        }
        render() {
            const form = this.renderForm('create-user-form')
            const submit = this.renderSubmit();
            for(const item of this.data) {
                const label  = this.renderLabel(item);
                const input = this.renderInput(item);
                label.appendChild(input)
                form.appendChild(label)
            }
            form.appendChild(submit)
            document.body.appendChild(form)
        }
    }

    const form = new Form(dataForm);
    form.render()
};

const todoList = () => {
    class TodoList {
        static defaultTasks() {
            return [
                {
                    id: '1138465078061',
                    completed: false,
                    text: 'Посмотреть новый урок по JavaScript',
                },
                {
                    id: '1138465078062',
                    completed: false,
                    text: 'Выполнить тест после урока',
                },
                {
                    id: '1138465078063',
                    completed: false,
                    text: 'Выполнить ДЗ после урока',
                },
            ];
        }
        constructor(tasks) {
            this.tasks = tasks || TodoList.defaultTasks()
            this.addTask = document.querySelector('.create-task-block__button');
            this.taskBlock = document.querySelector('.create-task-block');
            this.modal = document.querySelector('.modal-overlay');
        }

        createLabel(data) {
            const label = document.createElement('label');
            label.className = 'task-item';
            label.htmlFor = data.id;
            return label;
        }
        createInput(data) {
            const input = document.createElement('input');
            input.id = data.id
            input.type = 'checkbox'
            input.dataset.taskId = data.id
            input.checked = data.completed
            return input
        }

        createSpan(data) {
            const span = document.createElement('span')
            span.textContent = data.text
            span.classList.add('task-item__text')
            return span
        }

        createSpanError(text) {
            const span = document.createElement('span')
            span.textContent = text
            span.classList.add('error-message-block')
            return span
        }

        createBtnDelete() {
            const button = document.createElement('button')
            button.textContent = ' Х ';
            return button
        }

        generatedListTasks(data) {
            const listTask = [];
            for (const item of data) {
                const label = this.createLabel(item)
                const input = this.createInput(item)
                const span = this.createSpan(item)
                const button = this.createBtnDelete()
                label.append(input, span, button)
                listTask.push(label)
            }
            return listTask;
        }

        insertTasksContainer() {
            this.taskBlock.querySelector('.error-message-block')?.remove()
            document.querySelector('.tasks-list').innerHTML = ''
            document.querySelector('.tasks-list').append(...this.generatedListTasks(this.tasks))
        }


        getValueInput() {
            return document.querySelector('.create-task-block__input').value
        }

        getID() {
            return Date.now()
        }

        setErrorMessage(message) {
            const errorSpan = this.createSpanError(message)
            this.taskBlock.querySelector('.error-message-block')?.remove()
            this.taskBlock.append(errorSpan)
        }

        updateTasksList() {
            const text = this.getValueInput();
            if (!text.trim()) {
                const message = 'Название задачи не должно быть пустым';
                this.setErrorMessage(message)
                return;
            }
            const checkedValue = this.checkIncludeTask(text)
            if (checkedValue) {
                const message = 'Задача с таким названием уже существует.';
                this.setErrorMessage(message)
                return
            }
            const newTask = {
                id: this.getID(),
                text: text,
                completed: false,
            }
            this.tasks.push(newTask)
            this.insertTasksContainer();
        }

        deleteTask(idTasks) {
            c
            document.querySelector(`label[for="${idTasks}"]`)?.remove()
            this.tasks = this.tasks.filter(task => task.id !== idTasks)
        }

        confirmDelete(idTasks) {
            this.modal.classList.remove('modal-overlay_hidden')
            this.modal.addEventListener('click', (e) => {
                const cancel = e.target.closest('.delete-modal__cancel-button');
                const confirm = e.target.closest('.delete-modal__confirm-button');
                const overlay = e.target.closest('.modal-overlay');
                if (confirm) {
                    console.log(confirm)
                    this.modal.classList.add('modal-overlay_hidden')
                    this.deleteTask(idTasks)
                    return
                }
                if (cancel) {
                    this.modal.classList.add('modal-overlay_hidden')
                    return
                }
                if (overlay) {
                    this.modal.classList.add('modal-overlay_hidden')
                    return
                }
            })
        }


        checkIncludeTask(value) {
            return this.tasks.find(task => task.text === value)
        }

        completedTask() {
            const container = document.querySelector('.tasks-list');

            if (!container) throw new Error('Container undefined!')

            container.addEventListener('click', (e) => {

                const label = e.target.closest('label');
                if (!label) {
                    return
                }

                const removeBtn = e.target.closest('button');
                const inputElem = label.querySelector('input');

                if (inputElem.checked) {
                    label.classList.add('delete')
                } else {
                    label.classList.remove('delete')
                }

                if (removeBtn) {
                    const idTasks = label.querySelector('input').dataset.taskId
                    this.confirmDelete(idTasks)
                }
            })
        }

        render() {
            this.completedTask();
            this.insertTasksContainer();
            this.addTask.addEventListener('click', (e) => {
                e.preventDefault();
                this.updateTasksList();
            });
        }

    }

    const todoList = new TodoList()
    todoList.render()
}

const tab = () => {
    class Theme {
        constructor() {
            this.theme = 'light';
            this.tab = document.querySelector('#tab');
            this.bodyBG = '#24292E';
            this.fontColor = '#ffffff';
            this.initialStyle = 'initial';
            this.borderStyle = '1px solid #ffffff';
        }

        checkNodeList(nodeList) {
            const isArray = Array.from(nodeList)
            return isArray.length
        }

        addStyledForNodeList(nodeList, styleName, styleValue) {
            const checkedNodeList = this.checkNodeList(nodeList)
            const isArray = Array.from(nodeList)
            if (!checkedNodeList) return false;
            console.log(isArray)
            for (const node of isArray) {
                node.style[styleName] = styleValue;
            }
            return nodeList;
        }

        clickTab() {
            this.tab.addEventListener('click', () => {
                this.theme = 'dark'
                if (this.theme === 'dark') {
                    document.body.style.backgroundColor = this.bodyBG;
                    const taskItems = document.querySelectorAll('.task-item');
                    this.addStyledForNodeList(taskItems, 'color', this.fontColor);
                    const btns = document.querySelectorAll('button');
                    this.addStyledForNodeList(btns, 'border', this.borderStyle)
                } else {
                    document.body.style.backgroundColor = this.initialStyle
                }
            })
        }
    }
    const theme = new Theme()
    theme.clickTab()
}