import React from 'react'
import "../App.css"
const Result = ({userName,gender,optionsSelected,resultAnswer,yourScore,totalScore,tryAgain}) => {

  return (
    <div>
      <p className='para'>name:{userName}</p>
      <p className='para'>gender:{gender}</p>
      <p className='para'>the selected technologoies are : </p>
      {optionsSelected.map((eachOpt)=>{
        return(
          <p key={eachOpt.label}>  {eachOpt.value} </p>
        )
      })}

     <p className='para'> yourScore is : {yourScore} </p>
     <p className='para'> The Total Score is:{totalScore} </p>
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
