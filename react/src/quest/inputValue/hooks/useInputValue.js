import { useState } from "react"

export const useInputValue = () => {

	const [value, setValue] = useState('');
	const [errorStatus, setErrorStatus] = useState(false);
	const [arrList, setArrList] = useState([]);
	const [statusDisable, setStatusDisable] = useState(true)

	const handlePrompt = () => {
		const promptValue = prompt('Введите значение, от 3-х символов');

		if (promptValue && promptValue.length >= 3) {

			setValue(promptValue);
			setErrorStatus(false)
			setStatusDisable(false)

		} else {
			setErrorStatus(true)
			setStatusDisable(true)

			setValue('');
		}

	}

	const handleAddItem = () => {
		setArrList([...arrList, value])
		setValue('');
		setStatusDisable(true)
	}

	return {
		handlePrompt,
		handleAddItem,
		errorStatus,
		value,
		statusDisable,
		arrList
	}
}
