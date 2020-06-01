import "preact";

declare module "preact/src/jsx" {
  namespace JSXInternal {
    interface IntrinsicElements {
      "my-counter": any;
    }
  }
}
export {};
