import React, { useReducer } from 'react'

type Props = {}

type CounterState = {
    count: number
}

type UpdateAction = {
    type: 'increment' | 'decrement',
    payload: number
}

type ResetAction = {
    type: 'reset'
}

type CounterAction = UpdateAction | ResetAction

const initialState = { count: 0 }

function reducer(state: CounterState, action: CounterAction) {
    switch (action.type) {
        case 'increment':
            return {...state, count: state.count + action.payload};
        case 'decrement':
            return {...state, count: state.count - action.payload};
        case 'reset':
            return {...initialState};
        default:
            return {...state};
    }
}

const Couter = (props: Props) => {
    const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
        <p>Count: {state.count}</p>
        <button onClick={() => dispatch({ type: 'increment', payload: 10 })}>
            Increment 10
        </button>
        <button onClick={() => dispatch({ type: 'decrement', payload: 10 })}>
            Decrement 10
        </button>
        <button onClick={() => dispatch({ type: 'reset' })}>
            Reset
        </button>
    </div>
  )
}

export default Couter