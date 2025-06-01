// app/xo/model/useXOStore.ts
import { useEffect, useState } from "react";
import {
	setCellArray,
	setCurrentSymbol,
	setWin,
	resetGame as resetGameAction,
} from "@/xo/app/store/xo/actions";
import { XOState } from "@/xo/app/store/xo/types";
import { store } from "@/xo/app/store/xo";

export const useXOStore = () => {
	const [state, setState] = useState<XOState>(store.getState());

	useEffect(() => {
		const unsubscribe = store.subscribe(() => {
			setState(store.getState());
		});
		return unsubscribe;
	}, []);

	const { currentSymbol, cellArray, winCheck } = state;

	const checkWin = (array: string[][], symbol: "X" | "O") => {
		const isRowWin = array.some((row) => row.every((cell) => cell === symbol));
		const isColWin = [0, 1, 2].some(
			(col) =>
				array[0][col] === symbol &&
				array[1][col] === symbol &&
				array[2][col] === symbol
		);
		const isDiagWin =
			(array[0][0] === symbol &&
				array[1][1] === symbol &&
				array[2][2] === symbol) ||
			(array[0][2] === symbol &&
				array[1][1] === symbol &&
				array[2][0] === symbol);

		if (isRowWin || isColWin || isDiagWin) {
			store.dispatch(setWin(symbol));
			return;
		}

		const isDraw = array.flat().every((cell) => cell !== "");
		if (isDraw) {
			store.dispatch(setWin("draw"));
		}
	};

	const handleCurrentSymbol = (i: number, j: number) => {
		if (winCheck || cellArray[i][j]) return;

		const newArray = cellArray.map((row) => [...row]);
		newArray[i][j] = currentSymbol;
		store.dispatch(setCellArray(newArray));
		checkWin(newArray, currentSymbol);
		store.dispatch(setCurrentSymbol(currentSymbol === "X" ? "O" : "X"));
	};

	const resetGame = () => {
		store.dispatch(resetGameAction());
	};

	return {
		currentSymbol,
		cellArray,
		win: winCheck,
		handleCurrentSymbol,
		resetGame,
	};
};
