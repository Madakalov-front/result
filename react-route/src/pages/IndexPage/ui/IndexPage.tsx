import { getTodos } from "@app/api";
import { Input } from "@entities/input";
import { Todo, type TodoProps } from "@entities/todo";
import { AddTodo } from "@features/add-todo";
import { useEffect, useState, useMemo } from "react";

export const IndexPage = () => {
    const [load, setLoad] = useState(true);
    const [todos, setTodos] = useState<TodoProps[]>([]);

    const [search, setSearch] = useState("");
    const [sortType, setSortType] = useState<"title" | "status">("title");

    useEffect(() => {
        const fetchTodos = async () => {
            const todos = await getTodos();
            if (todos) {
                setTodos(todos);
            }
            setLoad(false);
        };
        fetchTodos();
    }, []);


    const filteredTodos = useMemo(() => {
        let result = todos.filter((todo) =>
            todo.title.toLowerCase().includes(search.toLowerCase())
        );

        if (sortType === "title") {
            result = result.sort((a, b) => a.title.localeCompare(b.title));
        } else if (sortType === "status") {
            result = result.sort(
                (a, b) => Number(a.completed) - Number(b.completed)
            );
        }

        return result;
    }, [todos, search, sortType]);

    return (
        <>
            <div className="container">
                <AddTodo updateTodos={setTodos} />

                <div style={{ margin: "1rem 0" }}>
                    <Input
                        name="searchTodos"
                        placeholder="Поиск по заголовку..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />

                    <select
                        value={sortType}
                        onChange={(e) =>
                            setSortType(e.target.value as "title" | "status")
                        }
                        style={{ marginLeft: "1rem" }}
                    >
                        <option value="title">Сортировать по названию</option>
                        <option value="status">Сортировать по статусу</option>
                    </select>
                </div>

                {load ? (
                    <p>Загрузка...</p>
                ) : (
                    <ul>
                        {filteredTodos.map(({ title, completed, id }) => (
                            <li key={id}>
                                <Todo
                                    title={title}
                                    id={id}
                                    completed={completed}
                                />
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </>
    );
};
