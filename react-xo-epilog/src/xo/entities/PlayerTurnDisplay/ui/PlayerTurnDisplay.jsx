import { Component } from "react";

class PlayerTurnDisplay extends Component {
  render() {
    const { currentTurn } = this.props;
    const currentClass =
       currentTurn === "X"
    ? "text-red-600 text-3xl font-bold"
    : "text-blue-600 text-3xl font-bold";

    return (
      <div className="text-center text-2xl mb-6">
        Текущий ход игрока{" "}
        <span className={currentClass}>{currentTurn}</span>
      </div>
    );
  }
}

export default PlayerTurnDisplay;
