import React from "react"
import Question from "./Question"
import { uuid } from 'uuidv4';

export default function Quiz(props){
    const questions = props.quiz.map(q => 
    <Question key={uuid()} finished={props.finished} question={q} choose={props.choose}/>
    
    )
    return (
        <div className="quiz"> 
            {questions}
            <div className="bottom">
                {props.finished && <p className="score--indicator">You scored {props.score}/5 correct answers</p>}
                <button onClick={props.finished===false ? props.checkAnswers : props.playAgain} className="check--answers">{props.finished === false ? "Check Answers":"Play again"}</button>
            </div>

        </div>
    )
}