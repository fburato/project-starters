import { createStore, applyMiddleware } from "redux";
import { AnyAction } from "@reduxjs/toolkit";
import thunk from 'redux-thunk'


const rootReducer = (state: State = { counter: 0, incrementAmount: 1 }, action: AnyAction): State => {
  switch (action.type) {
    case "counter/increment":
      return { ...state, counter: state.counter + state.incrementAmount }
    case "counter/decrement":
      return { ...state,  counter: state.counter - state.incrementAmount }
    case "counter/reset":
      return { ...state, counter: 0 }
    case "setIncrement":
      return {...state, incrementAmount: action.value as number}
    default:
      return state
  }
}

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store
