// import classes from "../styles/Home.module.css";
import { useState } from "react";

export function Square(props) {
  return <button onClick={() => props.onClick(props.id)}>{props.value}</button>;
}
