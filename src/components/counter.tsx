import { h } from "preact";
import { useState } from "preact/hooks";
// @ts-ignore
import register from "preact-custom-element";

interface CounterProps {
  start: string;
}

export const Counter: React.FC<CounterProps> = props => {
  const [state, setState] = useState(Number(props.start));
  return (
    <p>
      <button onClick={() => setState(n => n - 1)}>-</button> {state}{" "}
      <button onClick={() => setState(n => n + 1)}>+</button>
    </p>
  );
};

register(Counter, "my-counter", ["name"]);
