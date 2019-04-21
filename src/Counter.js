import React from 'react';
import './App.scss';


class Counter extends React.Component {
    constructor() {
        super();

        this.state = { count : 0 }
    }
    
    increment = () => {
        this.setState({
            count : this.state.count + 1
        })
    }

    decrement = () => {
        this.setState({
            count : this.state.count - 1
        })
    }
    
    render() {
        console.log(this.state.count);

        return (
        <div>
            <h2>Counter</h2>
            <div>
                <button onClick={this.decrement}> - </button>
                <span className="counter">{this.state.count}</span>
                <button onClick={this.increment}> + </button>
            </div>
        </div> 
        )
    }
}

export default Counter;
