import React from 'react'
import TextField from '../TextField'
import Button from '../Button'

function Email({handleNext,handleBack,setCurrentAnswer,currentAnswer}) {

  const handleChange=(e)=>{
    setCurrentAnswer(e.target.value)
  }

  
  return (
    <div>
        <p>Contact details</p>
        <label> YourEmail</label>
        <TextField inputType="email" changeInput={handleChange} inputValue={currentAnswer} inputId="email" />
        <Button content="Back" onClickFunction={handleBack} classname="next-button" />
        <Button content="Save & Next" onClickFunction={handleNext} classname="next-button" />
    </div>
  )
}

export default Email
