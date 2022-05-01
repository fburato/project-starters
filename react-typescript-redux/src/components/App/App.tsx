import AppView  from "./AppView";
import { connect } from "react-redux";
import { Action, Dispatch } from "@reduxjs/toolkit";


const increment: () => Action =  () => ({
    type: "counter/increment"
})

const decrement: () => Action = () => ({
    type: "counter/decrement"
})

const setIncrementState: (n: number) => Action = n => ({
  type: "setIncrement",
  value: n
})

const reset: () => Action = () => ({
  type: "counter/reset"
})

const mapState = (state: State) => ({
  current: state.counter,
  incrementAmount: state.incrementAmount
})

const mapDispatch = (dispatch: Dispatch) => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement()),
  reset: () => dispatch(reset()),
  setIncrement: (n: number) => dispatch(setIncrementState(n))
})

const app = connect(mapState, mapDispatch)(AppView)

export default app
