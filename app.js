import React from 'react';
import { render } from 'react-dom';

class App extends React.Component {
    state = {
        name: "Hazem",
        age: 30
    }
    render() {

        return (
            <div>
                <h1>Hey Ninjas</h1>
                <p>My name is {this.state.name} and i'm {this.state.age} years old</p>
            </div>
        );

    }

}

render(<App />, document.getElementById('app'));