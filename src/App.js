import React,   { useState } from 'react';
import Person from "./Person/Person"
import './App.css';

const App = props => {

      const [ personsState ,setPersonsState ] = useState({

        persons : [
                   {name: "Abhay" , age:"28"} ,
                   {name: "vivan" , age:"29"},
                   {name :"dsena" , age:"26"}
        ],

        otherState : "something"
      });


      console.log(personsState)
      const switchNameHandler = () =>{

       setPersonsState({

         persons : [
                    {name: "niha" , age:"28"} ,
                    {name: "vivian" , age:"29"},
                   {name :"dsena" , age:"24"}
              ],
       otherState : personsState.otherState
    });
  };


  return (
    <div className="App">
      <h1>am a react app</h1>
      <p>Its working!!!</p>
      <button onClick={switchNameHandler}>switch name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>

      <Person name={personsState.persons[1].name} age={personsState.persons[1].age}/>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
    </div>
  );
}

export default App;
