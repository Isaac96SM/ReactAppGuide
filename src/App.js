import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
  state = {
    persons: [
      { name: 'Isaac', age: Math.floor(Math.random() * 30), flag: true }, 
      { name: 'David', age: Math.floor(Math.random() * 30), flag2: true },
      { name: 'Diana', age: Math.floor(Math.random() * 30) }
    ],
    otherState: 'some other value'
  }

  switchNameHandler = (newName) => {
    this.setState( {
      persons: [
        { name: newName, age: Math.floor(Math.random() * 30), flag: true }, 
        { name: 'David', age: Math.floor(Math.random() * 30), flag2: true },
        { name: 'Diana', age: Math.floor(Math.random() * 30) }
      ]
    } );
  }

  nameChangedHandler = (event) => {
    this.setState( {
      persons: [
        { name: 'Max', age: Math.floor(Math.random() * 30), flag: true }, 
        { name: event.target.value, age: Math.floor(Math.random() * 30), flag2: true },
        { name: 'Diana', age: Math.floor(Math.random() * 30) }
      ]
    } );
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    };

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button
          style={style}  
          onClick={() => {this.switchNameHandler('Caracola')}} >Switch Name</button>
        {this.state.persons.map((element, index) => {
          return (
            <Person 
              name={element.name} 
              age={element.age} 
              click={element.flag ? this.switchNameHandler.bind(this, 'Caracola'): null} 
              changed={element.flag2 ? this.nameChangedHandler: null} />);
        })}

      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;