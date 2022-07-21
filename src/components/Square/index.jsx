import classes from "src/components/Square/Square.module.css";

export function Square(props) {
  return (
    <button className={classes.square} onClick={() => props.onClick(props.id)}>
      {props.value}
    </button>
  );
}
