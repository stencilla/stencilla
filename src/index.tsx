import { h, render } from "preact";
import * as React from "preact/compat";
import App from "./app";

window.React = React;
render(<App />, document.getElementById("root") as Element);
