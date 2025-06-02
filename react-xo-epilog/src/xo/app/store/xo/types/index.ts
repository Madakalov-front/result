export type PlayerTurn = "X" | "O";

export interface XOState {
	currentSymbol: PlayerTurn;
	cellArray: string[][];
	winCheck: string;
}

export interface XOActions {
	type: string;
	payload?: any;
}

export const CURRENT_SYMBOL = "CURRENT_SYMBOL";
export const CELL_ARRAY = "CELL_ARRAY";
export const CHECK_WIN = "CHECK_WIN";
export const RESET_GAME = "RESET_GAME";
