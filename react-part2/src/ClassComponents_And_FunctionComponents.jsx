import React, { Component } from 'react';

class ClassCounter extends Component {
    state = { count: 0 };

    increment = () => {
        this.setState({ count: this.state.count + 1 });
    };

    render() {
        return (
            <div>
                <p>Count: {this.state.count}</p>
                <button onClick={this.increment}>Increment</button>
            </div>
        );
    }
}


//  U cant use the hooks in the class based components it was just based on the function based component 
//  Class based components are now not used it is depriciated. 



import React, { useState } from 'react';

const FunctionalCounter = () => {
    const [count, setCount] = useState(0);
    
    function increment() {
	    setCount(count => count + 1)
    }

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
        </div>
    );
};