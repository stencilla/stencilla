import { h } from "preact";
import { Counter } from "./components/counter";
import "./styles.css";

export default function App() {
  return (
    <div>
      <h2>Preact Component</h2>
      <Counter start="1" />
      <h2>Custom Element</h2>
      <my-counter start="1" />
    </div>
  );
}
