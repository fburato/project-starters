import React, { Component, ReactNode } from "react";

class App extends Component<Record<string, never>, AppState> {

  constructor(props: Record<string, never>) {
    super(props);
    this.state = {
      isLoaded: false
    };
  }

  render(): ReactNode {
    return (
      <div>
        <div>Welcome to react</div>
      </div>
    );
  }
}

export default App;
