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
        }

        createLabel(data) {
            const label = document.createElement('label');
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
            document.querySelector('.tasks-list').innerHTML = ''
            document.querySelector('.tasks-list').append(...this.generatedListTasks(this.tasks))
        }


        getValueInput() {
            return document.querySelector('.create-task-block__input').value
        }

        getID() {
            return Date.now()
        }

        updateTasksList() {
            const newTask = {
                id: this.getID(),
                text: this.getValueInput(),
                completed: false,
            }
            this.tasks.push(newTask)
            this.insertTasksContainer();
        }

        deleteTask() {
            const container = document.querySelector('.tasks-list');

            if (!container) throw new Error('Container undefined!')

            container.addEventListener('click', (e) => {
                const label = e.target.closest('label');
                const removeBtn = e.target.closest('button');
                const inputElem = label.querySelector('input');

                if(inputElem.checked) {
                    label.classList.add('delete')
                } else {
                    label.classList.remove('delete')
                }

                if (removeBtn) {
                    const idTasks = label.querySelector('input').dataset.taskId
                    this.tasks = this.tasks.filter(task => task.id !== idTasks)
                    label.remove()
                }
            })
        }

        render() {
            this.deleteTask();
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
