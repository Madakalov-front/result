import { Button } from "@/shared/Button";
import { CardProps } from "../types";
import {
    useFetchDeleteTodos,
    useFetchGetTodos,
    useFetchPostTodos,
    useFetchPutTodos,
} from "../model/fetchApi";
import { useEffect, useMemo, useState } from "react";
import styles from "../style/JSONserver.module.scss";

export const JSONServer = () => {
    const [dataTodos, setDataTodos] = useState<CardProps[]>([]);

    const [search, setSearch] = useState<string>("");

    const { data, load, err } = useFetchGetTodos();

    const { value, handleChange, handleAddTodos } =
        useFetchPostTodos(setDataTodos);

    const { handleDeleteTodos } = useFetchDeleteTodos(setDataTodos);

    const {
        valueRed,
        editingId,
        handleChangeRed,
        handleRedaction,
        handleUpdateChange,
    } = useFetchPutTodos(setDataTodos);

    const filteredTodos = useMemo(() => {
        return dataTodos.filter((todo) =>
            todo.title.toLowerCase().includes(search.toLowerCase())
        );
    }, [dataTodos, search]);

    useEffect(() => {
        setDataTodos(data);
    }, [data]);

    return (
        <div className="JSONServer">
            <h1>JSONServer - задание 2</h1>
            <form>
                <input
                    type="search"
                    value={search}
                    onChange={({ target }) => setSearch(target.value)}
                    placeholder="Поиск... начните ввод"
                />
            </form>
            <form className={styles.formAdd}>
                <input
                    type="text"
                    value={value}
                    onChange={handleChange}
                    placeholder="Приготовить React..."
                />
                <Button text="Создать" onClick={handleAddTodos} />
            </form>
            {load ? (
                "...load"
            ) : (
                <ul className={styles["todo-list"]}>
                    {filteredTodos &&
                        filteredTodos.map((todo: CardProps) => (
                            <li
                                key={todo.id}
                                className={styles["todo-list__item"]}
                            >
                                <div className={styles["card-todo"]}>
                                    <div className={styles["card-todo__desc"]}>
                                        {editingId === todo.id ? (
                                            <input
                                                type="text"
                                                value={valueRed}
                                                onChange={handleChangeRed}
                                            />
                                        ) : (
                                            <p>{todo.title}</p>
                                        )}
                                    </div>
                                    <div
                                        className={styles["card-todo__actions"]}
                                    >
                                        {editingId === todo.id ? (
                                            <Button
                                                text="сохранить"
                                                onClick={() =>
                                                    handleUpdateChange(todo.id)
                                                }
                                            />
                                        ) : (
                                            <Button
                                                text="редактировать"
                                                onClick={() =>
                                                    handleRedaction(todo.id)
                                                }
                                            />
                                        )}

                                        <Button
                                            text="удалить"
                                            onClick={() =>
                                                handleDeleteTodos(todo.id)
                                            }
                                        />
                                    </div>
                                </div>
                            </li>
                        ))}
                </ul>
            )}
            {err && <p>{err}</p>}
        </div>
    );
};
