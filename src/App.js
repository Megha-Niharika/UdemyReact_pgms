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

switchNameHandler = () =>
{
 this.setState({
   persons : [
    
  {name: "niha" , age:"28"} ,
  {name: "vivan" , age:"29"},
   {name :"dsena" , age:"24"}
 
]})
}
  render() {
    return (
      <div className="App">
        <h1>am a react app</h1>
        <p>Its working!!!</p>
        <button onClick={this.switchNameHandler}>switch name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
  }
}
 // return React.createElement('div',{className:'App'}, React.createElement('h1',null,'Hi, I am Rea!!'));  


export default App;
