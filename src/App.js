import React from 'react';
import Person from "./Person/Person"
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>am a react app</h1>
      <Person />
    </div>
  );
 // return React.createElement('div',{className:'App'}, React.createElement('h1',null,'Hi, I am Rea!!'));  
}

export default App;
