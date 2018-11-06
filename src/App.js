import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person';

export default class App extends Component {
  smartId = 100;
  state = {
    persons: [
        {name: "Max", age: 28, id: this.smartId++},
        {name: "Manu", age: 29, id: this.smartId++},
        {name: "Stephanie", age: 26, id: this.smartId++}
        ],
      showPersons: false
  };


  togglePersonHandler =() => {
    this.setState({
        showPersons: !this.state.showPersons
    });

  }

  changeNameHandler = (event, id) => {
      const newPersons = [...this.state.persons];
      const index = newPersons.findIndex((el)=> el.id === id);
      newPersons[index].name = event.target.value;
        this.setState(
            {
             persons: newPersons

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
      persons = this.state.persons.map(({name, age, id}, index) => {
        return (
          <Person key = {id}
              click = {() => this.deletePersonHandler(index)}
              name = {name}
              age = {age}
              change = {(event) => this.changeNameHandler(event, id)}/>
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


