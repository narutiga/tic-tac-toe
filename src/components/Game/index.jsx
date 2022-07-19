import { useCallback, useState } from "react";
import { Board } from "src/components/Board";
// import styles from "../styles/Home.module.css";

export function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const current = history[history.length - 1];
  const winner = calculateWinner(squares);
  let status = calculateStatus(winner);

  // 今ここ。historyに入るものがひとつズレる。。。
  const handleClick = useCallback(
    (i) => {
      setSquares((prevSquares) => {
        const newSquares = [...prevSquares];
        newSquares[i] = xIsNext ? "×" : "○";
        return newSquares;
      });
      setXIsNext((prevXIsNext) => !prevXIsNext);

      setHistory((prevHistory) => {
        return [...prevHistory, squares];
      });
    },
    [xIsNext]
  );

  function calculateWinner(squares) {
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
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }

  function calculateStatus(winner) {
    if (winner) {
      return "Winner: " + winner;
    } else {
      return xIsNext ? "Next player: ×" : "Next player: ○";
    }
  }

  return (
    <div>
      <Board squares={current} handleClick={handleClick} status={status} />
    </div>
  );
}
