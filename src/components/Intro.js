import React from "react"


export default function Intro(props){
    return (
        <div className="intro"> 
            <h1> Quizzica </h1>
            <p> Answer questions lmao </p>
            <button onClick={props.clicked}> Start Quiz </button>
        </div>
    )
}
