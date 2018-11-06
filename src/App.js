import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person';

export default class App extends Component {
  state = {
    persons: [
        {name: "Max", age: 28},
        {name: "Manu", age: 29},
        {name: "Stephanie", age: 26}
        ],
      showPersons: false
  };


  togglePersonHandler =() => {
    this.setState({
        showPersons: !this.state.showPersons
    });

  }

  changeNameHandler = (event) => {
        this.setState(
            {
                persons: [
                    {name: event.target.value, age: 28},
                    {name: "Manu", age: 29},
                    {name: "Stephanie", age: 26}
                ]
            })
    };

    deletePersonHandler = (ind) => {
      const newPersons = [...this.state.persons];
      newPersons.splice(ind, 1);
      this.setState({
          persons: newPersons
      });
    };


  render() {

    let persons = null;
    if (this.state.showPersons) {
      persons = this.state.persons.map(({name, age}, index) => {
        return (
          <Person
              click = {() => this.deletePersonHandler(index)}
              name = {name}
              age = {age} />
        );
      });
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button type="button" onClick= {this.togglePersonHandler}>Toggle Persons</button>
            <div>
              {persons}
            </div>
      </div>
    );
  };
}


