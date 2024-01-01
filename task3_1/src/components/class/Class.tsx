import { Component, ReactNode } from "react";


type CounterProps = {
    message: string
}
type CounterState = {
    count: number
}
export class Counter extends Component<CounterProps, CounterState>{
    state = {
        count: 0,
    }

    onIncrement = () =>{
        this.setState((prevState) => ({ count: prevState.count + 1 }))
    }
    onDecrement = () => {
        this.setState((prevState) => ({ count: prevState.count - 1 }))
    }
    render() {
        return(
            <div className="container">
                <p className="text"> {this.props.message} {this.state.count} </p>
                <div className="btn-wrap">
                    <button className="btn" onClick={this.onIncrement}>Increment</button>
                    <button className="btn" onClick={this.onDecrement}>Decrement</button>
                </div>
            </div>
        )
    }
}