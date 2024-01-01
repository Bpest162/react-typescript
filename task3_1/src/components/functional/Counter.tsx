import { useReducer } from "react";

type CounterState = {
    count: number
}
type UpdateAction = {
    type: 'increment' | 'decrement'
    payload: number
}
type ResetAction = {
    type: 'reset'
}
type CounterAction = UpdateAction | ResetAction

const initialState = { count: 0 }

function reduser(state: CounterState, action: CounterAction) {

    switch(action.type){
        case 'increment': 
            return { count: state.count + action.payload}
        case 'decrement':
            return { count: state.count - action.payload}
        case 'reset':
            return initialState
        default:
            return state
    }
}

export const CounterApp = () => {

    const [state, dispatch] = useReducer(reduser, initialState)

    return (
        <div className="counterApp">
            <p className="text">Count: {state.count}</p>
            <div className="btn-wrap">
                <button className="btn" onClick={() => dispatch({type: "increment", payload: 1})}>Increment</button>
                <button className="btn" onClick={() => dispatch({type: "decrement", payload: 1})}>Decrement</button>
                <button className="btn" onClick={() => dispatch({type: "reset"})}>Reset</button>
            </div>
        </div>
    )
} 