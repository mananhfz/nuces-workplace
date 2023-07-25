import React, { Component } from 'react';

class Counter extends React.Component {
    /*renderTags(){
        if(this.props.counter.tags.length === 0)
            return <p>There are no tags!</p>;
        {this.props.counter.tags.map(tag => <li key={tag}> {tag} </li>)}
    }*/

    /*handleIncrement = product => {
        this.setState({value: this.props.counter.value + 1}, ()=>{console.log(product)});
    }

    handleDecrement = product => {
        this.setState({value: this.props.counter.value - 1}, ()=>{console.log(product)});
    }*/
    
    render() { 
        let classes = this.getBadgeClasses();
        let product = this.props.counter.value+1;
        return (
            <React.Fragment>
                <br/>
                <button  onClick={() => this.props.onDecrement(this.props.counter)} className="btn btn-danger btn-sm">-</button>
                <span style={{fontSize: 100, WebkitTextFillColor:'white'/*, position:'relative', top: 30*/}} className={classes}>{this.formatCount()}</span>
                <button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-success btn-sm">+</button>
                <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-success btn-sm">+</button>
            </React.Fragment>
             );
    }
    getBadgeClasses() {
       let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const { value } = this.props.counter;
        return value === 0 ? "Zero" : value;
    }
}
 
export default Counter;