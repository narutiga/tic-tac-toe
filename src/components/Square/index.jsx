// import classes from "../styles/Home.module.css";

export function Square(props) {
  return <button onClick={() => props.onClick(props.id)}>{props.value}</button>;
}
