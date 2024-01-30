import React from 'react'
import TextField from '../TextField'
import Button from '../Button'

const Phone = ({handleNext,handleBack,setCurrentAnswer,currentAnswer}) => {

const handleChange=(e)=>{
    setCurrentAnswer(e.target.value) 
}

  return (
    <div>
        <label> Your Phone No </label>
        <TextField inputType="number" changeInput={handleChange} inputValue={currentAnswer} inputId="phone" />
        <Button content="Back" onClickFunction={handleBack} classname="next-button" />
        <Button content="Save & Next" onClickFunction={handleNext} classname="next-button" />
    </div>
  )
}

export default Phone
