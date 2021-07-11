import { createStore, applyMiddleware } from "redux";
import { AnyAction } from "@reduxjs/toolkit";
import thunk from 'redux-thunk'


const rootReducer = (state: State = { counter: 0 }, action: AnyAction): State => {
  switch (action.type) {
    case "counter/increment":
      return { counter: state.counter + 1 }
    case "counter/decrement":
      return { counter: state.counter - 1 }
    case "counter/reset":
      return { counter: 0 }
    default:
      return state
  }
}

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store
