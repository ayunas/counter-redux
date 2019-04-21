import React from 'react';
import './App.scss';
import {connect} from 'react-redux';
import {increment,decrement} from './actions';



class Counter extends React.Component {
    // constructor() {
    //     super();

    //     this.state = { count : 0 }
    // }
    
    increment = () => {
        // this.setState({
        //     count : this.state.count + 1
        // })
        this.props.dispatch(increment());
    }

    decrement = () => {
        // this.setState({
        //     count : this.state.count - 1
        // })
        this.props.dispatch(decrement());
    }
    
    render() {
        console.log(this.props);
        return (
        <div className = 'counter'>
            <h2>Counter</h2>
            <div>
                <button onClick={this.decrement}> - </button>
                <span>{this.props.count}</span>
                <button onClick={this.increment}> + </button>
            </div>
        </div> 
        )
    }
}

function mapStatetoProps(state) {
    return {
        count: state.count
    }
}

export default connect(mapStatetoProps)(Counter);
