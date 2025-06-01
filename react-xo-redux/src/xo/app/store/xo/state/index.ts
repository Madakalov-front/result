import { PlayerTurn, XOState } from "../types";

const getRandomSymbolStart = (): PlayerTurn =>
	Math.random() > 0.5 ? "X" : "O";

export const initialState: XOState = {
	currentSymbol: getRandomSymbolStart(),
	cellArray: [
		["", "", ""],
		["", "", ""],
		["", "", ""],
	],
	winCheck: "",
};

export const resetState = {
	...initialState,
	currentSymbol: getRandomSymbolStart(), // при сбросе — новый рандом
};
