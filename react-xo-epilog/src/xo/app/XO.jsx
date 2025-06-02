import { Component } from "react";
import { connect } from "react-redux";


import {
  setCellArray,
  setCurrentSymbol,
  setWin,
  resetGameAction,
} from "@/xo/app/store/xo/actions";

import PlayerTurnDisplay  from "../entities/PlayerTurnDisplay/ui/PlayerTurnDisplay";
import SelectedCellDisplay from "../entities/SelectedCellDisplay/ui/SelectedCellDisplay";


class XO extends Component {
 
  checkWin = (array, symbol) => {
    const isRowWin = array.some((row) => row.every((cell) => cell === symbol));
    const isColWin = [0, 1, 2].some(
      (col) =>
        array[0][col] === symbol &&
        array[1][col] === symbol &&
        array[2][col] === symbol
    );
    const isDiagWin =
      (array[0][0] === symbol && array[1][1] === symbol && array[2][2] === symbol) ||
      (array[0][2] === symbol && array[1][1] === symbol && array[2][0] === symbol);

    if (isRowWin || isColWin || isDiagWin) {
      this.props.dispatchSetWin(symbol);
      return true;
    }

    const isDraw = array.flat().every((cell) => cell !== "");
    if (isDraw) {
      this.props.dispatchSetWin("draw");
      return true;
    }

    return false;
  };

  
  handleCellClick = (i, j) => {
    const { cellArray, currentSymbol, win } = this.props;
    
    if (win || cellArray[i][j] !== "") {
      return;
    }

    
    const newArray = cellArray.map((row) => [...row]);
    newArray[i][j] = currentSymbol;

    
    this.props.dispatchSetCellArray(newArray);

    
    const gameFinished = this.checkWin(newArray, currentSymbol);
    if (!gameFinished) {
      
      const nextSymbol = currentSymbol === "X" ? "O" : "X";
      this.props.dispatchSetCurrentSymbol(nextSymbol);
    }
  };

 
  handleReset = () => {
    this.props.dispatchResetGame();
  };

  render() {
    const { currentSymbol, cellArray, win } = this.props;

    return (
      <div className="p-6 max-w-md mx-auto">
        
        <PlayerTurnDisplay currentTurn={currentSymbol} />

       
        {win && (
          <div className="mb-4 text-center text-xl font-medium">
            {win === "draw" ? "Ничья!" : `Победил: ${win}`}
          </div>
        )}

       
        <SelectedCellDisplay
          cellArray={cellArray}
          setCurrentSymbol={this.handleCellClick}
        />

        <button
          className="w-full py-2 bg-gray-800 text-white font-semibold rounded hover:bg-gray-700 transition-colors"
          onClick={this.handleReset}
        >
          Начать заново
        </button>
      </div>
    );
  }
}


const mapStateToProps = (state) => ({
  cellArray: state.cellArray,
  currentSymbol: state.currentSymbol,
  win: state.winCheck,
});


const mapDispatchToProps = (dispatch) => ({
  dispatchSetCellArray: (newArray) => dispatch(setCellArray(newArray)),
  dispatchSetCurrentSymbol: (symbol) => dispatch(setCurrentSymbol(symbol)),
  dispatchSetWin: (winValue) => dispatch(setWin(winValue)),
  dispatchResetGame: () => dispatch(resetGameAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(XO);
