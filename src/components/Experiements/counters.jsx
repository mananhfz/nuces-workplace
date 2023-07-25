import React, { Component } from 'react';
import Counter from './counter'

class Counters extends React.Component {
    render() { 
        // Children
        //<h1>Counter #{counter.id}</h1>
        return (
            <div>
                <button onClick={this.props.onReset} className="btn btn-primary btn-lg"> Something </button>
                {this.props.counters.map(counter=>(
                <Counter key={counter.id} onDecrement={this.props.onDecrement} onIncrement={this.props.onIncrement} onDelete={this.props.onDelete} counter={counter} >
                </Counter>
                ))}
            </div>
        );
    }
}
 
export default Counters;