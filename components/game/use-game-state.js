import { useState } from "react";
import { SYMBOL_O, SYMBOL_X } from "./constants";

function useGameState() {
  const [cells, setCells] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);
  const [currentStep, setCurrentStep] = useState(SYMBOL_O);
  const [winnerSeq, setWinnerSeq] = useState();

  const computeWinner = (cells) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
        return [a, b, c];
      }
    }
  };

  const handleCellClick = (index) => {
    if (cells[index] || winnerSeq) {
      return;
    }

    const copyCells = cells.slice();
    copyCells[index] = currentStep;
    const winner = computeWinner(copyCells);

    setCells(copyCells);
    setCurrentStep(currentStep === SYMBOL_O ? SYMBOL_X : SYMBOL_O);
    setWinnerSeq(winner);
  };

  const handleResetClick = () => {
    setCells(Array.from({ length: 9 }, () => null));
    setCurrentStep(SYMBOL_X);
    setWinnerSeq(null);
  };

  const winnerSymbol = winnerSeq ? cells[winnerSeq[0]] : undefined;
  const isDraw = !winnerSeq && cells.filter((value) => value).length === 9;

  return {
    cells,
    currentStep,
    winnerSeq,
    handleCellClick,
    handleResetClick,
    winnerSymbol,
    isDraw,
  };
}

export default useGameState;
