import { useRef, useState } from "react";

export const useCalc = () => {
	const [displayValue, setDisplayValue] = useState("");
	const [storedValue, setStoredValue] = useState(null);
	const [currentOperation, setCurrentOperation] = useState(null);
	const lastOperation = useRef(null);

	const handleNumberInput = (num) => {
		setDisplayValue(prev => prev + num);
	};

	const handleOperation = (op) => {
		if (op === "c") {
			setDisplayValue("");
			setStoredValue(null);
			setCurrentOperation(null);
			lastOperation.current = null;
			return;
		}

		if (op === "=") {
			if (currentOperation && storedValue !== null) {
				calculateResult();
			}
			return;
		}


		if (currentOperation && storedValue !== null) {
			calculateResult();
		} else {
			setStoredValue(Number(displayValue));
			setDisplayValue("");
		}

		setCurrentOperation(op);
		lastOperation.current = op;
	};

	const calculateResult = () => {
		if (storedValue === null || !currentOperation) return;

		let result;
		const currentValue = Number(displayValue || "0");

		switch (currentOperation) {
			case "+":
				result = storedValue + currentValue;
				break;
			case "-":
				result = storedValue - currentValue;
				break;
			default:
				return;
		}

		setDisplayValue(result.toString());
		setStoredValue(result);
		setCurrentOperation(null);
	};

	const onChangeInput = (e) => {
		setDisplayValue(e.target.value);
	};

	return {
		onChangeValue: onChangeInput,
		onNumValue: (e) => handleNumberInput(e.target.textContent),
		checkOperant: (e) => handleOperation(e.target.textContent),
		value: displayValue,
	};
};
