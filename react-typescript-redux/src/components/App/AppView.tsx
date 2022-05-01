import React, { ReactElement } from "react"

const appView = (props : AppProps) : ReactElement => {
  return (
    <div>
      <div>Welcome to react</div>
      <div>
        <p>Current counter: {props.current}</p>
        <button onClick={props.increment}>Increment</button>
        <button onClick={props.decrement}>Decrement</button>
        <button onClick={props.reset}>Reset</button>
      </div>
    </div>
  );
}

export default appView