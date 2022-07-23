import { Game } from "src/components/Game";
import { Header } from "src/components/Header";
import classes from "src/styles/Home.module.css";

export default function Home() {
  return (
    <div className={classes.container}>
      <Header />
      <Game />
      <footer className={classes.footer}></footer>
    </div>
  );
}
