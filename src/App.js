import React, { Component } from 'react';
import Person from "./Person/Person"
import './App.css';
import './Person/Person.css';
import Radium,{StyleRoot} from "radium"

class App extends Component {
  state = {
    persons: [
      { name: "Abhay", age: "28" },
      { name: "vivan", age: "29" },
      { name: "dsena", age: "26" }

    ],
    otherState: "some other value",
    showPersons: false
  }

  // switchNameHandler = (newName) => {
  //   this.setState({
  //     persons: [

  //       { name: newName, age: "28" },
  //       { name: "vivan", age: "29" },
  //       { name: "dsena", age: "24" }

  //     ]
  //   })
  // }


  deletePersonHandler = (personIndex) =>
  {
    // const persons = this.state.persons.slice(); 
    const persons = [...this.state.persons]//fetch all persons
    persons.splice(personIndex, 1) //delete element 1
    this.setState({persons :persons}) //updated one adding
  }

  nameChangedHandler = (event, id) => {

    const personIndex = this.state.persons.findIndex(p =>{
      return p.id === id;
    })


    const person = 
    {...this.state.persons[personIndex]
    };

     person.name = event.target.value;

     const persons =[...this.state.persons]
     persons[personIndex] = person;

    //const person = Object.assign({},this.state.persons[personIndex])
    this.setState({
      persons: persons
    })
  }
                                                                                       
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });

  }
  render () {
    const style = {
      backgroundColor: "green",
      color:"white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
      ':hover'
      :{
        backgroundColor:'lightgreen',
        color:'black'
      }
    };



      let persons = null;

      if ( this.state.showPersons) {
        persons = (

        <div>
          {this.state.persons.map((person, index) => {
            return <Person
            click= {() =>
            this.deletePersonHandler(index)}
             name={person.name}
             age = {person.age}
             key ={person.id}
             changed={ (event) => this.nameChangedHandler(event , person.id)}
             />

          })}


        {/* <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age} />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, "ayan")}

          changed={this.nameChangedHandler}> my hobbies
    </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
          click={this.switchNameHandler.bind(this, "aryn")}
        /> */}
      </div> 
        );
        style.backgroundColor="red"
        style[':hover'] = {
        backgroundColor:'salmon',
        color: 'black'
      }
      }
        const classes = [];
        if(this.state.persons.length <=2)
        {
          classes.push('red')
        }
    if(this.state.persons.length <=1)
    {
      classes.push('bold')
    }
     
    return (
      <StyleRoot>
      <div className="App">
        <h1>React App</h1>
        <p className={classes.join(' ')}>Its working correctly!!!</p>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Switch Name</button>
          {persons}
      </div>
      </StyleRoot>
    );
  }
}
export default Radium(App);