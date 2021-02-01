import './App.css';
import { Component } from 'react';
import Person from './Persons/Person';


class App extends Component{


//   Only class-based components can define and use state . You
// can of course pass the state down to functional
// components, but these then can't directly edit it.
  state = {
    persons : [
      {id: 'abc1', name: 'shashi1', course: 'react1'},
      {id: 'abc2', name: 'shashi2', course: 'dockers'},
      {id: 'abc3', name: 'shashi3', course: 'python'}
    ],
    otherObject: 'Java',
    showPersons: false
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


  togglePersonHandler = () => {
      const doesShow = this.state.showPersons;
      this.setState({showPersons: !doesShow});
      console.log("showPersons : ",this.state.showPersons);
  }


  deletePerson = (personIndex) => {
    console.log("personIndex : ",personIndex);

    // slice() without any arguments creates a new array
    // const persons = this.state.persons.slice();

    //Instead of using above slice() for creating new array we can use "spread" operator like below
    //spread operator is the most modern one for adding old array data to new array by creating another array.
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }


  render(){
    const style = {
      backgroundColor : 'green',
      color : 'white',
      font : 'inherit',
      border : '1x solid blue',
      padding : '8px',
      cursor : 'pointer'
    };

    let persons = null;
    console.log("persons :",this.state.persons);
    if(this.state.showPersons){
      persons = (
        <div>
          <button 
          style = {style}
          onClick={this.switchOnButtonClickFunction}>Switch Names</button>
          {
            this.state.persons.map((person, index) => {
              return <Person 
                    click={() => this.deletePerson(index)}
                    name = {person.name} 
                    course = {person.course}
                    key= {person.id}/>
            })
          }
        <Person name="shashi" course="react">My Hobbies : Playing cricket</Person>
        <Person name={this.state.persons[0].name} course={this.state.persons[0].course}></Person>
        <Person name={this.state.persons[1].name} course={this.state.persons[1].course}></Person>
        <Person name={this.state.persons[2].name} course={this.state.persons[2].course}></Person>
        </div>
      );
      style.backgroundColor = "red";
    }
 
    return( 
      <div className="App">
        <h1>
          Hi Reacts1
        </h1>
        
        <button 
          style = {style}
          onClick={this.togglePersonHandler}>Toggle Persons</button>

        {/* If we add parantheses like below, it will automatically load while page loads */}
        {/* <button onClick={this.switchOnButtonClickFunction()}>Switch Names</button> */}


          {persons}

        {/* <div>
        <Person name="shashi" course="react">My Hobbies : Playing cricket</Person>
        <Person name={this.state.persons[0].name} course={this.state.persons[0].course}></Person>
        <Person name={this.state.persons[1].name} course={this.state.persons[1].course}></Person>
        <Person name={this.state.persons[2].name} course={this.state.persons[2].course}></Person>
        </div> */}
      </div>
    );
  }
}

export default App;
