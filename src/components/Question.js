import React from "react"


function Choice(props){

    const isCorrectChoice = props.question.correctAnswer === props.text
    const chosenButNotCorrect = props.chosen === props.text && props.text !== props.question.correctAnswer

    var style = {}

    if (props.finished === true){
        if (chosenButNotCorrect === true){
            style = {
                backgroundColor:"#F8BCBC",
                border: "none"
            }
        }

        if (isCorrectChoice === true){
            style = {
                border:"none", 
                backgroundColor:"#94D7A2"
            }
        }

    }


    return (
        <button style={style} 
        onClick={props.finished === false ? () => props.choose(props.question, props.text) : {}} className={props.chosen === props.text ? "choice chosen":"choice"} >{props.text}</button>
    )
}

export default function Question(props){
    const multipleChoices = props.question.choices.map(choice => <Choice 
        finished={props.finished} choose={props.choose} question={props.question} chosen={props.question.chosen} text={choice}/>)

    return (
        <div className="question--template"> 
            <h3 className="question">{props.question.question}</h3>
            <div className="choices">{multipleChoices}</div>
            <div className="underline"></div>
        </div>
    )
}