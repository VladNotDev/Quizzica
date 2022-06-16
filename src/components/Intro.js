import React from "react"


export default function Intro(props){
    return (
        <div className="intro"> 
            <h1> Quizzical </h1>
            <p> Some descriptions if needed </p>
            <button onClick={props.clicked}> Start Quiz </button>
        </div>
    )
}