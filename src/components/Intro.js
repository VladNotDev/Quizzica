import React from "react"


export default function Intro(props){
    return (
        <div className="intro"> 
            <h1> Quizzica </h1>
            <p> Some descriptions if needed </p>
            <button onClick={props.clicked}> Start Quiz </button>
        </div>
    )
}