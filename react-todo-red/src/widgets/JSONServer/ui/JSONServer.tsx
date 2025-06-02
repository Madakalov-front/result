import { Button } from "@/shared/Button";
import { CardProps } from "../types";
import { ChangeEvent, useEffect, useMemo, useState } from "react";
import styles from "../style/JSONserver.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/widgets/JSONServer/model/store";
import {
  addTodo,
  deleteTodo,
  fetchTodos,
  redactionTodo,
} from "@/widgets/JSONServer/model/actions";
import { v4 as uuidv4 } from "uuid";

export const JSONServer = () => {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector(
    (state: RootState) => state.todos
  );
  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const [search, setSearch] = useState<string>("");
  const [value, setValue] = useState<string>("");
  const [valueRed, setValueRed] = useState<string>("");
  const [editingId, setEditingId] = useState<string | null>(null);

  const handleAddTodos = () => {
    if (value.trim() === "") return;
    const newTodo: CardProps = {
      id: uuidv4(),
      title: value || "empty",
      completed: false,
    };
    setValue("");
    dispatch(addTodo(newTodo));
  };

  const handleChangeRed = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setValueRed(target.value);
  };

  const handleRedaction = (id: string | null) => {
    setEditingId(id);
  };

  const handleUpdateChange = (id: string, title: string) => {
    dispatch(redactionTodo({ id, title }));
    setEditingId(null);
    setValueRed("");
  };

  const filteredTodos = useMemo(() => {
    return items.filter((todo: CardProps) =>
      todo.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [items, search]);

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
          onChange={({ target }) => setValue(target.value)}
          placeholder="Приготовить React..."
        />
        <Button text="Создать" onClick={handleAddTodos} />
      </form>
      {loading ? (
        "...loading"
      ) : (
        <ul className={styles["todo-list"]}>
          {filteredTodos.length ? (
            filteredTodos.map((todo: CardProps) => (
              <li key={todo.id} className={styles["todo-list__item"]}>
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
                  <div className={styles["card-todo__actions"]}>
                    {editingId === todo.id ? (
                      <Button
                        text="сохранить"
                        onClick={() => handleUpdateChange(todo.id, valueRed)}
                      />
                    ) : (
                      <Button
                        text="редактировать"
                        onClick={() => handleRedaction(todo.id)}
                      />
                    )}

                    <Button
                      text="удалить"
                      onClick={() => dispatch(deleteTodo(todo.id))}
                    />
                  </div>
                </div>
              </li>
            ))
          ) : (
            <p>Соответсвий не найдено</p>
          )}
        </ul>
      )}
      {error && <p>{error}</p>}
    </div>
  );
};
