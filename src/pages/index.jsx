import { Game } from "src/components/Game";
import classes from "src/styles/Home.module.css";

export default function Home() {
  return (
    <div className={classes.container}>
      <Game />
      <footer className={classes.footer}></footer>
    </div>
  );
}
