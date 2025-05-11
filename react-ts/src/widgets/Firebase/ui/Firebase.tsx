import { useState } from "react";
import { CardProps } from "@/widgets/JSONServer/types";
import { useFirebaseGetTodos } from "../hooks/useFetchGetTodos";
import { useFirebasePostTodos } from "../hooks/useFetchPostTodos";
import { useFirebaseDeleteTodos } from "../hooks/useFetchDeleteTodos";
import { useFirebasePutTodos } from "../hooks/useFetchPutTodos";

export const Firebase = () => {
    const [todos, setTodos] = useState<CardProps[]>([]);

    const { data, load, err } = useFirebaseGetTodos();
    const { value, handleChange, handleAddTodos } =
        useFirebasePostTodos(setTodos);
    const { handleDeleteTodos } = useFirebaseDeleteTodos(setTodos);
    const {
        valueRed,
        editingId,
        handleChangeRed,
        handleRedaction,
        handleUpdateChange,
    } = useFirebasePutTodos(setTodos);

    useState(() => {
        setTodos(data);
    });

    if (load) return <p>Загрузка...</p>;
    if (err) return <p>Ошибка: {err}</p>;

    return (
        <div style={{ maxWidth: "500px", margin: "0 auto" }}>
            <h2>📋 Мой Todo-лист</h2>

            <div style={{ marginBottom: "1rem" }}>
                <input
                    type="text"
                    value={value}
                    onChange={handleChange}
                    placeholder="Добавить задачу"
                />
                <button onClick={handleAddTodos}>Добавить</button>
            </div>

            <ul>
                {todos.map((todo) => (
                    <li key={todo.id} style={{ marginBottom: "10px" }}>
                        {editingId === todo.id ? (
                            <>
                                <input
                                    type="text"
                                    value={valueRed}
                                    onChange={handleChangeRed}
                                    placeholder="Редактировать"
                                />
                                <button
                                    onClick={() => handleUpdateChange(todo.id)}
                                >
                                    Сохранить
                                </button>
                            </>
                        ) : (
                            <>
                                <span>{todo.title}</span>
                                <button
                                    onClick={() => handleRedaction(todo.id)}
                                >
                                    ✏️
                                </button>
                                <button
                                    onClick={() => handleDeleteTodos(todo.id)}
                                >
                                    🗑️
                                </button>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};
