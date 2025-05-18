import { Input } from "@entities/input";
import styles from "../style/add-todo.module.css";
import {
    useEffect,
    useState,
    type Dispatch,
    type FormEvent,
    type SetStateAction,
} from "react";
import { addTodo, getTodos } from "@app/api";
import type { TodoProps } from "@entities/todo";

interface AddTodoProps {
    updateTodos: Dispatch<SetStateAction<TodoProps[]>>;
}

export const AddTodo = ({ updateTodos }: AddTodoProps) => {
    const [value, setValue] = useState<string>("");

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        await addTodo({ title: value, completed: false });
        const todos = await getTodos();
        updateTodos(todos);
        setValue("");
    };

    useEffect(() => {}, []);

    return (
        <div className={styles["create-todo"]}>
            <h1>Создать задачу</h1>
            <form action="" onSubmit={handleSubmit}>
                <Input
                    onChange={({ target }) => {
                        setValue(target.value);
                    }}
                    placeholder="Название задачи..."
                    name="user_todo_create"
                    value={value}
                />
                <button type="submit">Добавить</button>
            </form>
        </div>
    );
};
