import { useCallback, useState } from "react";
import { Board } from "src/components/Board";
import classes from "src/components/Game/Game.module.css";

export function Game() {
  // State
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [xIsNext, setXIsNext] = useState(true);
  const [stepNumber, setStepNumber] = useState(0);

  const current = history[stepNumber];
  const squares = [...current];

  // マス目クリック時
  const handleClick = useCallback(
    (id) => {
      squares[id] = xIsNext ? "×" : "○";

      setHistory((prevHistory) => {
        const newHistory = prevHistory.slice(0, stepNumber + 1);
        return [...newHistory, squares];
      });
      setXIsNext((prevXIsNext) => !prevXIsNext);
      setStepNumber((prevSetNunmer) => prevSetNunmer + 1);
    },
    [stepNumber]
  );

  // 履歴ボタンクリック時
  const handleStep = useCallback((move) => {
    setStepNumber(move);
    setXIsNext(move % 2 === 0);
  }, []);

  // 勝敗判定
  const calculateWinner = (current) => {
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
      if (
        current[a] &&
        current[a] === current[b] &&
        current[a] === current[c]
      ) {
        return current[a];
      }
    }
    return null;
  };

  // 状況判定
  const calculateStatus = (winner) => {
    if (winner) {
      return "Winner: " + winner;
    } else {
      return xIsNext ? "Next player: ×" : "Next player: ○";
    }
  };

  const winner = calculateWinner(current);
  const status = calculateStatus(winner);

  return (
    <div className={classes.game}>
      <div className={classes.gameBoard}>
        <Board squares={current} handleClick={handleClick} status={status} />
      </div>
      <div className={classes.gameInfo}>
        <div>{status}</div>
        <ol>
          {history.map((step, move) => {
            return (
              <li key={move}>
                <button
                  className={classes.button}
                  onClick={() => handleStep(move)}
                >
                  {move ? "Go to move #" + move : "Go to game start"}
                </button>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}
