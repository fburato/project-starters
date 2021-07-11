import React, { Component, ReactNode } from "react"

export class AppView extends Component<AppProps> {

  constructor(props: AppProps) {
    super(props);
  }

  render(): ReactNode {
    return (
      <div>
        <div>Welcome to react</div>
        <div>
          <p>Current counter: {this.props.current}</p>
          <button onClick={this.props.increment}>Increment</button>
          <button onClick={this.props.decrement}>Decrement</button>
          <button onClick={this.props.reset}>Reset</button>
        </div>
      </div>
    );
  }
}
