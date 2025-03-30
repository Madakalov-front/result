import { useRef, useState } from "react";

export const useCalc = () => {
	const [displayValue, setDisplayValue] = useState("");
	const [storedValue, setStoredValue] = useState(null);
	const [currentOperation, setCurrentOperation] = useState(null);
	const [wasEqualsPressed, setWasEqualsPressed] = useState(false);
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
        setWasEqualsPressed(false);
        return;
    }

    if (op === "=") {
        if (currentOperation && storedValue !== null) {
            calculateResult(null);
            setWasEqualsPressed(true);
        }
        return;
    }

    if (wasEqualsPressed) {
        setStoredValue(Number(displayValue));
        setDisplayValue("");
        setWasEqualsPressed(false);
    } else if (currentOperation && storedValue !== null) {
        calculateResult(op);
    } else {
        setStoredValue(Number(displayValue));
        setDisplayValue("");
    }

    setCurrentOperation(op);
    lastOperation.current = op;
};

	const calculateResult = (nextOperation = null) => {
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
		setCurrentOperation(nextOperation);
	};

	const onChangeInput = (e) => {
		setDisplayValue(e.target.value);
	};

	return {
		onChangeValue: onChangeInput,
		onNumValue: (e) => handleNumberInput(e.target.textContent),
		checkOperant: (e) => handleOperation(e.target.textContent),
		value: displayValue,
		wasEqualsPressed,
	};
};
