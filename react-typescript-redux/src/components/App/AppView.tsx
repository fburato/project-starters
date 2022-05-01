import React, { ReactElement } from "react"

const appView = (props : AppProps) : ReactElement => {
  return (
    <div>
      <div>Welcome to react</div>
      <div>
        <p>Current counter: {props.current}</p>
        <input onChange={(change) => props.setIncrement(parseInt(change.target.value, 10))} type="text" value={props.incrementAmount}/>
        <button onClick={props.increment}>Increment</button>
        <button onClick={props.decrement}>Decrement</button>
        <button onClick={props.reset}>Reset</button>
      </div>
    </div>
  );
}

export default appView