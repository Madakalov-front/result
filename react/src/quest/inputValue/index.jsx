import React from "react";
import { InputValueHeader } from "./ui/InputValueHeader";
import { InputValueDesc } from "./ui/InputValueDesc";
import styles from "./style/style.module.css";
import { InputValueButtons } from "./ui/InputValueButtons";
import { InputValueListContainer } from "./ui/InputValueListContainer";
import { useInputValue } from "./hooks/useInputValue";

export const InputValue = () => {
	const {
		errorStatus,
		value,
		statusDisable,
		arrList,
		handlePrompt,
		handleAddItem,
	} = useInputValue();

	return (
		<>
			<InputValueHeader title="Ввод значения" />
			<InputValueDesc value={value} />
			{errorStatus ? (
				<div className={styles["error"]}>
					Введенное значение должно содержать минимум 3 символа
				</div>
			) : null}
			<InputValueButtons
				handlePrompt={handlePrompt}
				handleAddItem={handleAddItem}
				statusDisable={statusDisable}
			/>
			<InputValueListContainer arrList={arrList} />
		</>
	);
};
