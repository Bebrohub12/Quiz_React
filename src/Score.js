import React, { useContext } from 'react'
import { scoreContext } from './App'
import {  useNavigate } from 'react-router-dom'

function Score() {
  const navigate = useNavigate()
  const { score , setScore , wronganswer , setWrongAnswer } = useContext(scoreContext)

  function replayHandler () {
    setScore(0)
    setWrongAnswer([])
    navigate("/question")
  }

  return (
    <div className='score'>
      <h1>Quiz completed</h1>
      <h1>Your score: {score} / 10</h1>
      {score === 0 &&
        <h1>what a poor performance 🥱</h1>
      }
       {score === 10 &&
        <h1>You are a star performer 😎 </h1>
      }
      {score !== 10 &&
        <h1>You have chosen wrong option of these questions</h1>
      }
       
      <div className='wrongquestions'>
        {wronganswer.map((element, index) => {
          return (
            <div className='wrong' key={index}>
              <h1>{element.question}</h1>
              <h4>a: {element.a}</h4>
              <h4>b: {element.b}</h4>
              <h4>c: {element.c}</h4>
              <h4>d: {element.d}</h4>
              <h2>Correct answer: {element.answer}</h2>
            </div>
          )
        })}
      </div>
        <button onClick={replayHandler}>Play again</button>
    </div>
  )
}

export default Score
