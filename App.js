import React, { useState } from 'react'
import "./App.css";
function App()
{

  const questions=[
    {questionText:'What does HTML stand for?',
      answerOptions:[
        {answerText:'Hyperlinks and Text Markup Language',isCorrect:false},
        {answerText:'Hyper Text Markup Language',isCorrect:true},
        {answerText:'Home Tool Markup Language',isCorrect:false}
      ]
    },
    {questionText:'Who is making the Web standards?',
      answerOptions:[
        {answerText:'Microsoft',isCorrect:false},
        {answerText:'Google',isCorrect:false},
        {answerText:'The World Wide Web Consortium',isCorrect:true}
      ]
    },
    {questionText:'Choose the correct HTML element for the largest heading:',
      answerOptions:[
        {answerText:'<h1>',isCorrect:true},
        {answerText:'<h6>',isCorrect:false},
        {answerText:'heading',isCorrect:false}
      ]
    },
    {questionText:'What is the correct HTML element for inserting a line break?',
      answerOptions:[
        {answerText:'<lb>',isCorrect:false},
        {answerText:'<break>',isCorrect:false},
        {answerText:'<br>',isCorrect:true}
      ]
    },
    {questionText:'What is the correct HTML for adding a background color?',
      answerOptions:[
        {answerText:'<body style="background-color:yellow;"> ',isCorrect:true},
        {answerText:'<background>yellow</background>',isCorrect:false},
        {answerText:'<body bg="yellow">',isCorrect:false}
      ]
    },
    {questionText:'Choose the correct HTML element to define important text',
      answerOptions:[
        {answerText:'<strong>  ',isCorrect:true},
        {answerText:'<important> ',isCorrect:false},
        {answerText:'<b>',isCorrect:false}
      ]},
    {questionText:'Choose the correct HTML element to define emphasized text',
      answerOptions:[
        {answerText:'<i>',isCorrect:false},
        {answerText:'<em>  ',isCorrect:true},
        {answerText:'<italic>',isCorrect:false}
      ]},
    {questionText:'What is the correct HTML for creating a hyperlink?',
      answerOptions:[
        {answerText:'<a href="http://www.w3schools.com">W3Schools</a>',isCorrect:true},
        {answerText:'<a url="http://www.w3schools.com">W3Schools.com</a>',isCorrect:false},
        {answerText:'<a>http://www.w3schools.com</a>',isCorrect:false}
      ]},
    {questionText:'Which character is used to indicate an end tag?',
      answerOptions:[
        {answerText:'*',isCorrect:false},
        {answerText:'<',isCorrect:false},
        {answerText:'/  ',isCorrect:true}
      ]},
    {questionText:'How can you open a link in a new tab/browser window?',
      answerOptions:[
        {answerText:'<a href="url" target="new">',isCorrect:false},
        {answerText:'<a href="url" target="_blank">  ',isCorrect:true},
        {answerText:'<a href="url" new>',isCorrect:false}
      ]}

  ]
  const[currentquestion,setCurrentquestion]=useState(0);
  const[score,setScore]=useState(0);
  const[showscore,setShowscore]=useState(false);
const handlesubmit=(isCorrect)=>
{
  if(isCorrect===true)
  {
    setScore(score+1)
  }
  if(isCorrect===false)
  {
    setScore(score-0.25)
  }
  const nextQuestion=currentquestion +1;
  if(nextQuestion<questions.length)
  {
    setCurrentquestion(nextQuestion )
  }
  else
  {
    setShowscore(true);
  }
}

  return(
    <>
    <div className='app'>
    <h1 className='title'>Quiz Program</h1>
    {
        showscore?
    (<div className='score-section'>
  <h4>You score is {score} out of {questions.length}</h4>
  <p>0.25 marks have been deducted for incorrect answer</p>

    </div>)
    :
  (
    <>
  <div className='Question-section'>
  <h1>Questions{currentquestion + 1} / {questions.length} </h1>
  
  <div className='Question-text'>
  {questions[currentquestion].questionText}
  </div>
  </div>
  
  <div className='Answer-section'>
  {
    questions[currentquestion].answerOptions.map((answerOptions)=>
    (
      <button onClick={()=> handlesubmit(answerOptions.isCorrect)}>
        {answerOptions.answerText}</button>
      
    ))
  }
  </div>
    </>
  )
  }
  </div>
  
  </>
  )
}

export default App