/**
 * @jest-environment jsdom
 */
import React from "react";
import App from "../../../src/components/App/App";
import {render, RenderResult} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { Action, applyMiddleware, createStore, Store } from "redux";

const makeAccumulatingReducer = (initialState: State = {counter: 0, incrementAmount: 1}) => {
  const actions : Action<string>[] = []
  return {
    reducer: (state: State = initialState, action: Action<string>) => {
      if(!action.type.startsWith("@@redux")) {
        actions.push(action)
      }
      return state
    }, actions
  }
}

describe("<App />", () => {
  let firedActions: Action<string>[]
  let store: Store<State, Action<string>>
  let app: RenderResult

  beforeEach(() => {
    const {actions, reducer} = makeAccumulatingReducer()
    store = createStore(reducer, applyMiddleware(thunk))
    firedActions = actions
    app = render(<Provider store={store}>
      <App />
    </Provider>)
  })

  it("should render the state counter", () => {
    const counterValue = 42

    app = render(<Provider store={createStore(makeAccumulatingReducer({counter: counterValue, incrementAmount: 1}).reducer)}>
      <App />
    </Provider>)

    expect(app.getByText(`Current counter: ${counterValue}`)).toBeInTheDocument()
  })

  it("should dispatch the expected action on increment button click", () => {
    userEvent.click(app.getByText("Increment"))

    expect(firedActions).toHaveLength(1)
    expect(firedActions[0]).toEqual({type: "counter/increment"})
  })

  it("should dispatch the expected action on decrement button click", () => {
    userEvent.click(app.getByText("Decrement"))

    expect(firedActions).toHaveLength(1)
    expect(firedActions[0]).toEqual({type: "counter/decrement"})
  })

  it("should dispatch the expected action on reset button click", () => {
    userEvent.click(app.getByText("Reset"))

    expect(firedActions).toHaveLength(1)
    expect(firedActions[0]).toEqual({type: "counter/reset"})
  })
})
