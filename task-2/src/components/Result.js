// import {Link} from "react-router-dom"
import React from 'react'
import "../App.css"

const Result = ({yourScore,totalScore,tryAgain,resultAnswer,selected}) => {

  return (
    <div>
     <p> yourScore is : {yourScore} </p>
     <p> The Total Score is:{totalScore} </p>
     <div>
        {resultAnswer.map((e)=>{
            return(
              <ul className='each-question' key={e.Qno}>
                <li className='selected'> {e.Qno}. selected: {e.selectedAnswer} </li>
                <li className='correct'> correct: {e.correctAnswer} </li>
              </ul>                
            )
        })}
     </div>
     <button onClick={tryAgain} className='try-again'> Try Again </button>
    </div>
  )
}

export default Result
