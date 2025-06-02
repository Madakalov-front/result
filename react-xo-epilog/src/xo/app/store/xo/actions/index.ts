import { CELL_ARRAY, CHECK_WIN, CURRENT_SYMBOL, RESET_GAME } from "../types";

export const setCurrentSymbol = (symbol: "X" | "O") => ({
	type: CURRENT_SYMBOL,
	payload: { symbol },
});

export const setCellArray = (cellArray: string[][]) => ({
	type: CELL_ARRAY,
	payload: { cellArray },
});

export const setWin = (win: string) => ({
	type: CHECK_WIN,
	payload: { win },
});

export const resetGameAction = () => ({
	type: RESET_GAME,
});

export const handleCurrentSymbol = (row: number, col: number) => ({
	type: "XO/SET_CURRENT_SYMBOL",
	payload: { row, col },
});
