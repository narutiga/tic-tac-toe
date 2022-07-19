import { useCallback, useState } from "react";
import { Square } from "src/components/Square";
// import classes from "src/styles/Home.modle.css";

export function Board() {
  // state
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  //
  const winner = calculateWinner(squares);
  let status = calculateStatus(winner);

  // function
  const handleClick = useCallback(
    (i) => {
      setSquares((prevSquares) => {
        const newSquare = [...prevSquares];
        newSquare[i] = xIsNext ? "×" : "○";
        return newSquare;
      });
      setXIsNext((prevXIsNext) => !prevXIsNext);
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
      <p>{status}</p>
      <div>
        <Square id={0} value={squares[0]} onClick={handleClick} />
        <Square id={1} value={squares[1]} onClick={handleClick} />
        <Square id={2} value={squares[2]} onClick={handleClick} />
      </div>
      <div>
        <Square id={3} value={squares[3]} onClick={handleClick} />
        <Square id={4} value={squares[4]} onClick={handleClick} />
        <Square id={5} value={squares[5]} onClick={handleClick} />
      </div>
      <div>
        <Square id={6} value={squares[6]} onClick={handleClick} />
        <Square id={7} value={squares[7]} onClick={handleClick} />
        <Square id={8} value={squares[8]} onClick={handleClick} />
      </div>
    </div>
  );
}
