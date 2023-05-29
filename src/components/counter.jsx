import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0
    }
    constructor() {
        super();
        this.handleInc = this.handleInc.bind(this);
    } 

    handleInc(){
        this.setState( {count : this.state.count + 1});
    }
    render() { 
        return (
        <button onClick={this.handleInc}>{this.state.count}</button>
        );
    }
}
 
export default Counter;