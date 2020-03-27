import React from 'react';
import { render } from 'react-dom';

class App extends React.Component {

    state = {
        name: "Hazem",
        age: 30
    }

    handleChange = (e) => {
        this.setState({
            name: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(`form submitted! ${this.state.name}`);
    }

    render() {

        return (
            <div>
                <h1>My name is { this.state.name }</h1>
                <form onSubmit = { this.handleSubmit } >
                    <input type="text" onChange = { this.handleChange } />
                    <button>Submit</button>
                </form>
            </div>
        );

    }

}

render(<App />, document.getElementById('app'));