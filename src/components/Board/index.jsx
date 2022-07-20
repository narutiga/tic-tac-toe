import { Square } from "src/components/Square";
import classes from "src/components/Board/Board.module.css";

export function Board(props) {
  return (
    <div>
      <div className="board-row">
        <Square id={0} value={props.squares[0]} onClick={props.handleClick} />
        <Square id={1} value={props.squares[1]} onClick={props.handleClick} />
        <Square id={2} value={props.squares[2]} onClick={props.handleClick} />
      </div>
      <div className="board-row">
        <Square id={3} value={props.squares[3]} onClick={props.handleClick} />
        <Square id={4} value={props.squares[4]} onClick={props.handleClick} />
        <Square id={5} value={props.squares[5]} onClick={props.handleClick} />
      </div>
      <div className="board-row">
        <Square id={6} value={props.squares[6]} onClick={props.handleClick} />
        <Square id={7} value={props.squares[7]} onClick={props.handleClick} />
        <Square id={8} value={props.squares[8]} onClick={props.handleClick} />
      </div>
    </div>
  );
}
