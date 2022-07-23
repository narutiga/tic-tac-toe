import classes from "src/components/Header/Header.module.css";

export function Header(props) {
  return (
    <div>
      <h1 className={classes.header}>tic-tac-toe</h1>
    </div>
  );
}
