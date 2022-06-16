import React from "react";

import Intro from "./components/Intro"
import Quiz from "./components/Quiz"



function App() {

  const [quizStarted, setQuizStarted] = React.useState(false)
  const [quizFinished, setQuizFinished] = React.useState(false)
  const [score, setScore] = React.useState(0)
  const [quiz, setQuiz] = React.useState([])

  const apiURL = "https://the-trivia-api.com/api/questions?limit=5"

  function getQuiz(){
    fetch(apiURL)
      .then(res => res.json())
      .then(data => setQuiz(data.map(question => {
        return {  
          "correctAnswer": question.correctAnswer,
          "question": question.question,
          "choices": [...question.incorrectAnswers, question.correctAnswer],
          "chosen": "",
          "isCorrect": false,
        }
      })))
    
  }

  function choose(q, choice){
    setQuiz(quiz.map(question => {
      return q === question ? {  
        ...question,
        "chosen": choice,
      } : question
    }))
  }

  function checkAnswers(){
    let s = 0

    for (let i = 0; i < quiz.length; i++){
      let question = quiz[i];

      if (question.chosen === question.correctAnswer){
        s++
        setQuiz(quiz.map(q => {
          return q === question ? {  
            ...q,
            "isCorrect": true
          } : q
        }))
      }
    }

    setQuizFinished(true)

    setScore(s)
  }


  function startQuiz(){
    setQuizStarted(true)
    getQuiz()
  }

  function playAgain(){
    getQuiz()
    setQuizFinished(false)
  }

  console.log(quiz)

  return (
    <div style={quizStarted===true? {height: "100%", margin: "6rem 0 2rem 0"} : {height: "100vh"}} className="app">
      <object alt="blue blob" data="./assets/blueblob.svg" className="blob blue"> </object>
      <object alt="yellow blob" data="./assets/yellowblob.svg" className="blob yellow"> </object>
      {quizStarted===false && <Intro clicked={startQuiz}/>}
      {quizStarted && <Quiz score={score} playAgain={playAgain} finished={quizFinished} choose={choose} checkAnswers={checkAnswers} quiz={quiz}/>}
    </div>
  );
}

export default App;
