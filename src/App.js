import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
  state = {
    persons: [
      { name: 'Isaac', age: Math.floor(Math.random() * 30) }, 
      { name: 'David', age: Math.floor(Math.random() * 30) },
      { name: 'Diana', age: Math.floor(Math.random() * 30) }
    ],
    otherState: 'some other value'
  }

  switchNameHandler = () => {
    this.setState( {
      persons: [
        { name: 'Caracola', age: Math.floor(Math.random() * 30) }, 
        { name: 'David', age: Math.floor(Math.random() * 30) },
        { name: 'Diana', age: Math.floor(Math.random() * 30) }
      ]
    } );
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler} >Switch Name</button>
        {this.state.persons.map((element, index) => {
          return <Person name={element.name} age={element.age} click={this.switchNameHandler} />
        })}

      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;