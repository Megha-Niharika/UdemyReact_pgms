import React from "react"
 import "./Person.css"
 
const person = (props) => {

        const style = {
                ' @media (min-width:500px)':
                {
              
                        width:"450px"
                    }
        }



     return (

        <div className="Person" style={style}>
     <p onClick={props.click}>{props.name} is {props.age}  old{props.children} </p>
             <input type ="text" onChange= {props.changed}/>

     </div>
     )
};

export default person;