import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { scoreContext } from './App';

function Question() {
  const [count, setCount] = useState(0);
  const { score, setScore } = useContext(scoreContext);
  const { wronganswer, setWrongAnswer } = useContext(scoreContext);
  const [selectedOption, setSelectedOption] = useState("");

  const navigate = useNavigate();

  const questions = [
    {
      question: "Q1:What is the capital city of France?",
      a: "Madrid",
      b: "Paris",
      c: "Rome",
      d: "Berlin",
      answer: "b"
    },
    {
      question: "Q2:Which planet is closest to the Sun?",
      a: "Venus",
      b: "Mars",
      c: "Mercury",
      d: "Jupiter",
      answer: "c"
    },
    {
      question: "Q3:Who invented the telephone?",
      a: "Alexander Graham Bell",
      b: "Thomas Edison",
      c: "Nikola Tesla",
      d: "Albert Einstein",
      answer: "a"
    },
    {
      question: "Q4:What is the largest animal in the world?",
      a: "Giraffe",
      b: "Elephant",
      c: "Blue whale",
      d: "Hippopotamus",
      answer: "c"
    },
    {
      question: "Q5:What is the capital city of Australia?",
      a: "Sydney",
      b: "Melbourne",
      c: "Canberra",
      d: "Brisbane",
      answer: "c"
    },
    {
      question: "Q6:Who painted the Mona Lisa?",
      a: "Pablo Picasso",
      b: "Leonardo da Vinci",
      c: "Vincent van Gogh",
      d: "Michelangelo",
      answer: "b"
    },
    {
      question: "Q7:What is the largest country in the world?",
      a: "Canada",
      b: "United States",
      c: "Russia",
      d: "China",
      answer: "c"
    },
    {
      question: "Q8:Which is the tallest mammal?",
      a: "Elephant",
      b: "Giraffe",
      c: "Hippopotamus",
      d: "Rhino",
      answer: "b"
    },
    {
      question: "Q9:What is the smallest continent?",
      a: "Europe",
      b: "Africa",
      c: "Australia",
      d: "Asia",
      answer: "c"
    },
    {
      question: "Q10:Who wrote the play 'Hamlet'?",
      a: "William Shakespeare",
      b: "George Bernard Shaw",
      c: "Oscar Wilde",
      d: "Samuel Beckett",
      answer: "a"
    }
  ]

  function handleAnswerSelect(e) {
    setSelectedOption(e.target.value);
  }

  function answer() {
    const correctAnswer = questions[count].answer;
    if (selectedOption === correctAnswer) {
      setScore(score + 1);
    } else {
      setWrongAnswer([...wronganswer, { ...questions[count] }]);
    }
  }

  function handleNextQuestion() {
    answer();
    setSelectedOption("");
    if (count < questions.length - 1) {
      setCount(count + 1);
    } else {
      navigate("/Score");
    }
  }

  return (
    <div className='question'>
      <div className='content'>
        <h1>{questions[count].question}</h1>
        <ul>
          <li>
            <input
              type="radio"
              name="answer"
              id="ans1"
              value="a"
              onChange={handleAnswerSelect}
              checked={selectedOption === "a"}
            />
            <label htmlFor="ans1" id="option1">{questions[count].a}</label>
          </li>
          <li>
            <input
              type="radio"
              name="answer"
              id="ans2"
              value="b"
              onChange={handleAnswerSelect}
              checked={selectedOption === "b"}
            />
            <label htmlFor="ans2" id="option2">{questions[count].b}</label>
          </li>
          <li>
            <input
              type="radio"
              name="answer"
              id="ans3"
              value="c"
              onChange={handleAnswerSelect}
              checked={selectedOption === "c"}
            />
            <label htmlFor="ans3" id="option3">{questions[count].c}</label>
          </li>
          <li>
            <input
              type="radio"
              name="answer"
              id="ans4"
              value="d"
              onChange={handleAnswerSelect}
              checked={selectedOption === "d"}
            />
            <label htmlFor="ans4" id="option4">{questions[count].d}</label>
          </li>
        </ul>
        <button onClick={handleNextQuestion}>Next</button>
      </div>
    </div>
  );
}

export default Question;
