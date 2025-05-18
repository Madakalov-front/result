import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import axios from "axios";
import { deleteTodo, getTodoById, toggleTodo } from "@app/api";
import type { TodoProps } from "@entities/todo";
import { Input } from "@entities/input";

export const TodoPage = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    const [todo, setTodo] = useState<TodoProps | null>(null);
    const [isEditing, setIsEditing] = useState(false);
    const [title, setTitle] = useState("");

    useEffect(() => {
        if (id) {
            getTodoById(id).then((data) => {
                if (data) {
                    setTodo(data);
                    setTitle(data.title);
                }
            });
        }
    }, [id]);

    const handleDelete = async () => {
        if (id) {
            await deleteTodo(id);
            navigate("/");
        }
    };

    const handleEdit = () => setIsEditing(true);

    const handleSave = async () => {
        if (todo) {
            await toggleTodo(todo.id, todo.completed);
            await axios.patch(`/api/todos/${todo.id}`, { title });
            setIsEditing(false);
            setTodo((prev) => (prev ? { ...prev, title } : prev));
        }
    };

    if (!todo) return <div>Загрузка...</div>;

    return (
        <div>
            <button onClick={() => navigate(-1)}>Назад</button>
            <h2>Карточка задачи #{todo.id}</h2>

            {isEditing ? (
                <Input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder=""
                    name="editTitle"
                />
            ) : (
                <h3>{todo.title}</h3>
            )}

            <p>Статус: {todo.completed ? "Выполнено" : "Не выполнено"}</p>

            {isEditing ? (
                <button onClick={handleSave}>сохранить</button>
            ) : (
                <button onClick={handleEdit}>редактировать</button>
            )}
            <button onClick={handleDelete}>удалить</button>
        </div>
    );
};
