import React from 'react'
import TextField from '../TextField'
import Button from '../Button'

function Name({handleNext,setCurrentAnswer,currentAnswer}) {
   
  const changeInput=(e)=>{
    setCurrentAnswer(e.target.value)
  }
  
  return (
    <div>
        <p>Enter Your Name</p>
        <TextField inputType="text"  changeInput={changeInput} inputValue={currentAnswer} />
        <Button content="Back" disabled={true} classname={"default-button"} />
        <Button content="Save & Next" onClickFunction={handleNext} classname={"second-button"}  />
    </div>
  )
}

export default Name
