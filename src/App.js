import React, {Component} from 'react';
import Person from "./Person/Person"
import './App.css';

class App extends Component {
state = {
  persons : [
    
     {name: "Abhay" , age:"28"} ,
     {name: "vivan" , age:"29"},
      {name :"dsena" , age:"26"}
    
  ]
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
    {name :"dsena" , age:"24"}
  
 ]})
}





  render() {
    return (
      <div className="App">
        <h1>am a react app</h1>
        <p>Its working!!!</p>
        <button onClick={() =>this.switchNameHandler("megha!!!!!")}>switch name</button>
        <Person 
        name={this.state.persons[0].name}
         age={this.state.persons[0].age}/>
        <Person 
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age}
        click={this.switchNameHandler.bind(this,"ayan")}
        changed ={this.nameChangedHandler}> my hobbies</Person>
        <Person
        name={this.state.persons[2].name}
         age={this.state.persons[2].age} click={this.switchNameHandler.bind(this,"aryn")}/>
      </div>
    );
  }
}
 // return React.createElement('div',{className:'App'}, React.createElement('h1',null,'Hi, I am Rea!!'));  


export default App;