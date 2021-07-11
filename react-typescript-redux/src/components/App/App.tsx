import { AppView } from "./AppView";
import { connect } from "react-redux";
import { Action, Dispatch } from "@reduxjs/toolkit";


const increment: () => Action =  () => ({
    type: "counter/increment"
})

const decrement: () => Action = () => ({
    type: "counter/decrement"
})

const reset: () => Action = () => ({
  type: "counter/reset"
})

const mapState = (state: State) => ({
  current: state.counter
})

const mapDispatch = (dispatch: Dispatch) => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement()),
  reset: () => dispatch(reset())
})

const app = connect(mapState, mapDispatch)(AppView)

export default app
