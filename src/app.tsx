import { h } from "preact";
import { Counter } from "./components/counter";
import "./styles.css";

export default function App() {
  return (
    <div>
      <Counter start="5" />
      <my-counter start="10" />
    </div>
  );
}
