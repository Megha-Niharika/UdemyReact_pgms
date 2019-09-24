import React from "react"
 import "./Person.css"
 import Radium from "radium"
const person = (props) => {
     return (

        <div className="Person">
     <p onClick={props.click}>{props.name} is {props.age}  old{props.children} </p>
             <input type ="text" onChange= {props.changed}/>

     </div>
     )
};

export default Radium(person);