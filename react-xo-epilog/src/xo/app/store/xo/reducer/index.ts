import {
	XOState,
	XOActions,
	CURRENT_SYMBOL,
	CELL_ARRAY,
	CHECK_WIN,
	RESET_GAME,
} from "../types";
import { initialState, resetState } from "../state";

export function xoReducer(
	state: XOState = initialState,
	action: XOActions
): XOState {
	switch (action.type) {
		case CURRENT_SYMBOL:
			return { ...state, currentSymbol: action.payload.symbol };
		case CELL_ARRAY:
			return { ...state, cellArray: action.payload.cellArray };
		case CHECK_WIN:
			return { ...state, winCheck: action.payload.win };
		case RESET_GAME:
			return { ...resetState };
		default:
			return state;
	}
}
