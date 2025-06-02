
import { Component } from "react";
import PropTypes from "prop-types";


class SelectedCellDisplay extends Component {
  render() {
    const { cellArray, setCurrentSymbol } = this.props;

    return (
      <div className="grid grid-cols-3 gap-2 mb-4">
        {cellArray.map((rowArray, rowIdx) =>
          rowArray.map((cellValue, colIdx) => {
           
            let classes =
              "w-16 h-16 border border-gray-400 flex items-center justify-center cursor-pointer";

            
            if (cellValue === "X") {
              classes += " text-red-500";
            } else if (cellValue === "O") {
              classes += " text-blue-500";
            }

            return (
              <div
                key={`${rowIdx}-${colIdx}`}
                className={classes}
                onClick={() => setCurrentSymbol(rowIdx, colIdx)}
              >
                {cellValue}
              </div>
            );
          })
        )}
      </div>
    );
  }
}

SelectedCellDisplay.propTypes = {
  cellArray: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
  setCurrentSymbol: PropTypes.func.isRequired,
};

export default SelectedCellDisplay;
