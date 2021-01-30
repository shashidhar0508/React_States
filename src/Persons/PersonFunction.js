import React, {useState} from 'react'
import Person from './Person';

const PersonFunction = props => {
    const [personState, setPersonState] = useState({
        persons : [
      {name: 'shashi1', course: 'react1'},
      {name: 'shashi2', course: 'dockers'},
      {name: 'shashi3', course: 'python'}
    ],
    otherObject: 'Java'
    })

    // Here if we console personState "otherObject" in personState will be gone because we are
    // not updating it in our setPersonState
    console.log("personState : ",personState)

    // here we writing a function inside a function
    const switchOnButtonClickFunction = () => {
    setPersonState( {
      persons : [
      {name: 'shashidhar1 From Function', course: 'react1'},
      {name: 'shashidhar2 From Function', course: 'dockers'},
      {name: 'shashi3', course: 'python'}
    ]
    })
  }

    // Here instead of using "this" we directly call functions with out "this" because it is a function not class

    return(
        <div className="App">
        <h1>
          Hi React
        </h1>
        <button onClick={switchOnButtonClickFunction}>Switch Names</button>

        {/* If we add parantheses like below, it will automatically load while page loads */}
        {/* <button onClick={this.switchOnButtonClickFunction()}>Switch Names</button> */}

        <Person name="shashi" course="react">My Hobbies : Playing cricket</Person>
        <Person 
            name={personState.persons[0].name} 
            course={personState.persons[0].course}>
        </Person>
        <Person 
            name={personState.persons[1].name} 
            course={personState.persons[1].course}>
        </Person>

        {/* Here passing switchOnButtonClickFunction method to person component */}
        <Person 
            name={personState.persons[2].name} 
            course={personState.persons[2].course}
            click={switchOnButtonClickFunction}>
            </Person>
      </div>
    );
};


export default PersonFunction;