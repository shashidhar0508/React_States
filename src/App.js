import './App.css';
import { Component } from 'react';
import Person from './Persons/Person';


class App extends Component{

//   Only class-based components can define and use state . You
// can of course pass the state down to functional
// components, but these then can't directly edit it.
  state = {
    persons : [
      {name: 'shashi1', course: 'react1'},
      {name: 'shashi2', course: 'dockers'},
      {name: 'shashi3', course: 'python'}
    ],
    otherObject: 'Java'
  }

  switchOnButtonClickFunction = () => {
    // We should not directly change attributes or objects directly like below 
    // this.state.persons[0].name="shashidhar1"

    // Instead, we need to use "setState" like below

    this.setState( {
      persons : [
      {name: 'shashidhar1', course: 'react1'},
      {name: 'shashidhar2', course: 'dockers'},
      {name: 'shashi3', course: 'python'}
    ]
    })
  }

  render(){
    return(
      <div className="App">
        <h1>
          Hi React
        </h1>
        <button onClick={this.switchOnButtonClickFunction}>Switch Names</button>

        {/* If we add parantheses like below, it will automatically load while page loads */}
        {/* <button onClick={this.switchOnButtonClickFunction()}>Switch Names</button> */}

        <Person name="shashi" course="react">My Hobbies : Playing cricket</Person>
        <Person name={this.state.persons[0].name} course={this.state.persons[0].course}></Person>
        <Person name={this.state.persons[1].name} course={this.state.persons[1].course}></Person>
        <Person name={this.state.persons[2].name} course={this.state.persons[2].course}></Person>
      </div>
    );
  }
}

export default App;
