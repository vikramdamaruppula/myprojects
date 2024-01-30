import React, { useState, useEffect } from 'react'
import Result from './Result'
import { quizData } from '../QuizData'
import { useSelector, useDispatch } from "react-redux"
import { addValuesToResult, updateValues } from '../redux/QuestionSlice'

const Questions = () => {

  const [currentQuestion, setCurrentQuestion] = useState(0) // for next and back questions 

  const [score, setScore] = useState(0) // to display score  refer =>handleScore

  const [clickedOption, setClickedOption] = useState(0) //the user clicked option 0,1,2,3

  const [result, setResult] = useState(false) // to display result component  used in handle submit 

  const [values, setValues] = useState([])  // stores what user cicked out of four options =>refer handleNext

  const dispatch = useDispatch()
  const resultList = useSelector((state) => state.QuestionSlice.resultValues)
  console.log(resultList)

  const handleNextQuestion = () => {
    if (currentQuestion <= quizData.length) {
      const data2 = quizData[currentQuestion ].options[clickedOption - 1]
      const temp = [...values, data2]
      setValues(temp)
      setCurrentQuestion(currentQuestion + 1)
      setClickedOption(0)
    }
  }
  console.log(values)


  const handlePreviousQuestion = () => {
    if (currentQuestion <= quizData.length) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }


  const handleSubmit = () => {
    // console.log(currentQuestion)
    handleNextQuestion()
    setResult(true)

  }



  // console.log("clickedOptions------", clickedOption)

  useEffect(() => {
    // const correct = quizData[currentQuestion - 1].options[quizData[currentQuestion - 1].answer - 1]
    // console.log(object)
    const check = resultList.findIndex((i)=>{
      // return (console.log(i.Qno,currentQuestion))
      return(i.Qno === currentQuestion)
    })


    // if(check !== -1){
      
    //   const data2 = quizData[currentQuestion ].options[clickedOption - 1]
    //   const temp = [...values.splice(check,1), data2]
    //   setValues(temp)
    // }

    handleScore()
    console.log("use-effect")

  }, [currentQuestion])

  console.log(resultList, currentQuestion)



  const handleScore = () => {
    // if(currentQuestion===0){
    //   // console.log(currentQuestion)
    //   if(values[currentQuestion] ===quizData[currentQuestion].options[quizData[currentQuestion].answer - 1]){
    //     setScore(score +1)
    //     const correct = quizData[currentQuestion].options[quizData[currentQuestion].answer - 1] //correct answer
    //     console.log("iffffffff")
    //     dispatch(addValuesToResult({"Qno":currentQuestion,"selectedAnswer":values[currentQuestion],"correctAnswer":correct}))
    //   }
    // }
    // else{
      console.log(currentQuestion,values,"handlescore")

    if (values.length && values.length <= currentQuestion) {
      const correct = quizData[currentQuestion - 1].options[quizData[currentQuestion - 1].answer - 1]
      
      console.log("correct answer",correct)
      // console.log(currentQuestion,values)
      if (values[currentQuestion - 1] === correct) {
        setScore(score + 1)
        // console.log(resultValues)
      }
      const index = resultList.findIndex((i)=>i.Qno===currentQuestion) 
      if(index!==-1){
         dispatch(updateValues([{ "Qno": currentQuestion, "selectedAnswer": values[currentQuestion - 1], "correctAnswer":correct },index]))
      } else{
        dispatch(addValuesToResult({ "Qno": currentQuestion, "selectedAnswer": values[currentQuestion - 1], "correctAnswer":correct }))

      }  

      console.log("else ---else")
    }


    // }

  }

  const removeAll = () => {
    setResult(false)
    setScore(0)
    setClickedOption(0)
    setCurrentQuestion(0)
    resultList([])
  }

  return (
    <div className=''>
      <p className='title'>Lets QuiZ </p>
      <div className='container'>
        {result ? (<Result yourScore={score} totalScore={quizData.length} resultAnswer={resultList} tryAgain={removeAll} selected={values} />)
          : (
            <>
              <div className='question'>
                <span className='q-no'>Q{currentQuestion+1}. </span>
                <span className='q-text'> {quizData[currentQuestion ].question} </span>
              </div>
              <div className='option-container'>
                {quizData[currentQuestion ].options.map((option, i) => {
                  return (
                    <button
                      key={i}
                      className={` ${clickedOption === i + 1 ? "checked" : "btn-option"}`}
                      onClick={() => setClickedOption(i + 1)} >{option} </button>
                  )
                })}
              </div>

              {currentQuestion === 0 ?
                (<div>
                  <button className='next-button' disabled={true}> Back  </button>
                  <button className='next-button' onClick={handleNextQuestion}> Next  </button>
                </div>)
                : currentQuestion === quizData.length - 1 ? (
                  <div>
                    <button className='next-button' onClick={handlePreviousQuestion} > BACK  </button>
                    <p className='submit'>Hit submit to submit your answers</p>
                    <button className='next-button' onClick={handleSubmit} > submit  </button>
                  </div>

                ) :
                  (<div>
                    <button className='next-button' onClick={handlePreviousQuestion} > BACK  </button>
                    <button className='next-button' onClick={handleNextQuestion}> Next  </button>
                  </div>)

              }

            </>)}
      </div>
    </div>
  )
}

export default Questions
