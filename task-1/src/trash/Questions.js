import React, { useState ,useEffect} from 'react'
import UserDetails from './UserDetails'
// import TextField from './TextField'

import Button from '../components/Button'

import { quizData } from '../QuizData'


const Questions = () => {
  
  const [user,setUser] =useState(false)

  const[currentQuestion,setCurrentQuestion] =useState(0)

  const[score,setScore] =useState(0)
   
  const[clickedOption,setClickedOption] =useState(0)

  const[values,setValues]= useState([])

  const [resultValues,setResultValues] =useState([])

  const[pre,setPre] =useState(null)

  console.log(values)
//   console.log(resultValues)
  // console.log(score,"----------",currentQuestion)


  const handleNextQuestion =()=>{
    if(currentQuestion <= quizData.length){
     const data2 =  quizData[currentQuestion].options[clickedOption-1]
     const temp =[...values,data2]
      setValues(temp)
      setCurrentQuestion(currentQuestion+1)
      setPre(clickedOption)
      setClickedOption(0)
    }
  }

  const handlePreviousQuestion=()=>{
    if(currentQuestion <= quizData.length){
      setCurrentQuestion(currentQuestion-1)
      // setPre(pre)
      setClickedOption(pre)
    }
    }


  const handleSubmit=()=>{
    handleNextQuestion()
    setUser(true)

  }

  console.log("clickedOptions------",clickedOption)

  useEffect(()=>{
    handleScore()
  },[currentQuestion])


  const handleScore =()=>{
    if(currentQuestion===0){
      // console.log(currentQuestion)
      if(values[currentQuestion] ===quizData[currentQuestion].options[quizData[currentQuestion].answer - 1]){
        setScore(score +1)
        const temp =[...resultValues]
        temp.push({"Qno":currentQuestion,"selectedAnswer":values[currentQuestion],"correctAnswer":quizData[currentQuestion].options[quizData[currentQuestion].answer - 1]})
        setResultValues(temp)
      }
    }else{
      // console.log(currentQuestion)
      if(values[currentQuestion-1] ===quizData[currentQuestion-1].options[quizData[currentQuestion-1].answer-1]){
        setScore(score+1)
        // console.log(resultValues)
     
      }
        const temp =[...resultValues]
        temp.push({"Qno":currentQuestion,"selectedAnswer":values[currentQuestion-1],"correctAnswer":quizData[currentQuestion-1].options[quizData[currentQuestion-1].answer - 1]})
        setResultValues(temp)

    }
   
  }

  const removeAll = ()=>{
    setUser(false)
    setScore(0)
    setClickedOption(0)
    setCurrentQuestion(0)
    setResultValues([])
  }


{/* <Result yourScore={score} totalScore={quizData.length} resultAnswer={resultValues} tryAgain={removeAll} selected={values} /> */}

  return (
    <div className=''>
      <p className='title'>Lets QuiZ </p>
      <div className='container'>
        {user ? (<UserDetails yourScore={score} totalScore={quizData.length} resultAnswer={resultValues} selected={values} tryAgain={removeAll}  />) 
        :( 
         <>
          <div className='question'>
            <span className='q-no'>Q{currentQuestion +1}. </span>
            {console.log(quizData[currentQuestion].question)}
            {/* <TextField inputValue={`${quizData[currentQuestion].question}`} /> */}
            <span className='q-text'> {quizData[currentQuestion].question} </span>
          </div>
        <div className='option-container'>
          {quizData[currentQuestion].options.map((option,i)=>{
            return(
              <Button
              key={i}
              content={option} 
              onClickFunction={()=>setClickedOption(i+1)}
              classname={clickedOption === i+1 ? "checked":"btn-option"}
               />
            )
          })}
        </div>

      {currentQuestion === 0 ?  
            (<div>
              <Button content={"Back"} disabled={true} classname="next-button" />
              <Button content={"Next"} onClickFunction={handleNextQuestion} classname={"next-button"} />
            </div>)
            : currentQuestion ===quizData.length-1 ? (
              <div> 
                <Button content={"Back"} onClickFunction={handlePreviousQuestion} classname={"next-button"} />
                  <p className='submit'> Hit submit to submit your answers</p>
                <Button content={"Submit Answers"} onClickFunction={handleSubmit}classname={"next-button"} />
              </div>

            ) :
            (<div>
                <Button content={"Back"} onClickFunction={handlePreviousQuestion} classname={"next-button"} />
                <Button content={"Next"} onClickFunction={handleNextQuestion} classname={"next-button"} />
            </div>)
            
      }
        </>) }
      </div>
    </div>
  )
}

export default Questions
