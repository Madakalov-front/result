import { useState } from "react";
import { PlayerTurn } from "@/quest/xo/app/shared/types/types";

export const useXO = () => {
	const getRandomSymbolStart = (): "X" | "O" =>
		Math.random() > 0.5 ? "X" : "O";

	const startSymbol = getRandomSymbolStart();
	const startCellArray: string[][] = [
		["", "", ""],
		["", "", ""],
		["", "", ""],
	];

	const [currentSymbol, setCurrentSymbol] = useState<PlayerTurn>(startSymbol);
	const [cellArray, setCellArray] = useState<string[][]>(startCellArray);
	const [win, setWin] = useState<string>("");

	const checkWinPlayer = (array: string[][], currentSymbol: PlayerTurn) => {
		for (let row of array) {
			if (row.every((cell) => cell === currentSymbol)) {
				setWin(currentSymbol);
				return;
			}
		}

		for (let col = 0; col < 3; col++) {
			if (
				array[0][col] === currentSymbol &&
				array[1][col] === currentSymbol &&
				array[2][col] === currentSymbol
			) {
				setWin(currentSymbol);
				return;
			}
		}


		if (
			(array[0][0] === currentSymbol &&
				array[1][1] === currentSymbol &&
				array[2][2] === currentSymbol) ||
			(array[0][2] === currentSymbol &&
				array[1][1] === currentSymbol &&
				array[2][0] === currentSymbol)
		) {
			setWin(currentSymbol);
			return;
		}


		const isDraw = array.flat().every((cell) => cell !== "");
		if (isDraw) {
			setWin("draw");
		}
	};

	const handleCurrentSymbol = (idx_sub: number, idx_item: number) => {
		const newCellArray = cellArray.map((row) => [...row]);

		if (win) {
			return
		}
		if (newCellArray[idx_sub][idx_item]) {
			return;
		}

		const newSymbol = currentSymbol === "X" ? "O" : "X";

		if (!newCellArray[idx_sub][idx_item]) {
			newCellArray[idx_sub][idx_item] = currentSymbol;
			checkWinPlayer(newCellArray, currentSymbol);
		}

		setCellArray(newCellArray);

		setCurrentSymbol(newSymbol);
	};

	const resetGame = () => {
		setCurrentSymbol(startSymbol);
		setCellArray(startCellArray);
		setWin('')
	}

	return {
		currentSymbol,
		win,
		cellArray,
		handleCurrentSymbol,
		resetGame
	};
};
