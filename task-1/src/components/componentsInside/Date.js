import React from 'react'
import TextField from '../TextField'
import Button from '../Button'

const Date = ({handleNext,handleBack,setCurrentAnswer,currentAnswer}) => {
    const handleChange=(e)=>{
        setCurrentAnswer(e.target.value)
      }
      
      return (
        <div>
            <p>Contact details</p>
            <label> Date Of Birth</label>
            <TextField inputType="date" changeInput={handleChange} inputValue={currentAnswer} inputId="email" />
            <Button content="Back" onClickFunction={handleBack} classname="next-button" />
            <Button content="Save & Next" onClickFunction={handleNext} classname="next-button" />
        </div>
      )
    }

export default Date
