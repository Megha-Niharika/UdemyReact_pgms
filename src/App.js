import React from 'react';
import Person from "./Person/Person"
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>am a react app</h1>
      <Person name="Abhay" age="28"/>
        <Person name="vivian" age="26">My Everything</Person>
        <Person name="dsena" age="29" />
    </div>
  );
 // return React.createElement('div',{className:'App'}, React.createElement('h1',null,'Hi, I am Rea!!'));  
}

export default App;
