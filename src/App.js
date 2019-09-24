import React, {Component} from 'react';
import Person from "./Person/Person"
import './App.css';
import './Person/Person.css';

class App extends Component {
state = {
  persons : [
    
     {name: "Abhay" , age:"28"} ,
     {name: "vivan" , age:"29"},
      {name :"dsena" , age:"26"}
    
  ],
  otherState: "some other value",
  showPersons: false
}

switchNameHandler = (newName) =>
{
 this.setState({
   persons : [
    
  {name: newName , age:"28"} ,
  {name: "vivan" , age:"29"},
   {name :"dsena" , age:"24"}
 
]})
}

nameChangedHandler =(event) =>
{
  this.setState({
    persons : [
     
   {name: "mac" , age:"28"} ,
   {name: event.target.value, age:"29"},
    {name :"megha", age:"24"}
  
 ]})
}



togglePersonsHandler =() =>
{
const doesShow = this.state.showPersons;
this.setState({showPersons: ! doesShow});

}
  render() {
 const style ={
  backgroundColor :"white",
  font: "inherit",
  border: "1px solid blue",
  padding: "8px",
  cursor :"pointer"
 };


    return (
      <div className="App">
        <h1>am a react app</h1>
        <p>Its working!!!</p>
        <button
        
        style ={style}
      onClick={this.togglePersonsHandler}>Switch Name</button>
         { this.state.showPersons === true ?  
          <div>

         <Person 
        name={this.state.persons[0].name}
         age={this.state.persons[0].age}/>
        <Person 
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age}
        click={this.switchNameHandler.bind(this,"ayan")}

        changed ={this.nameChangedHandler}> my hobbies 
        </Person>
        <Person
        name={this.state.persons[2].name}
         age={this.state.persons[2].age}
         click={this.switchNameHandler.bind(this,"aryn")}
        />
      </div> : null
         }
            </div>

        
    );
  }
}
 // return React.createElement('div',{className:'App'}, React.createElement('h1',null,'Hi, I am Rea!!'));  


export default App;