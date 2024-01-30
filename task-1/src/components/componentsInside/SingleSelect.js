import React from 'react'
import Dropdown from '../Dropdown'
import Button from '../Button'
import data from "./MOCK_DATA (tech).json"

function SingleSelect({handleNext,handleBack,currentAnswer,setCurrentAnswer}) {

  const handleChange=(e)=>{
    setCurrentAnswer(e.target.value)
  }


  return (
      <div>
        <p> Select on of the mentioned technologies</p>
        <Dropdown sendData={data} inputChange={handleChange} inputData={currentAnswer}  />
        <Button content="Back" classname="next-button" onClickFunction={handleBack} />
        <Button content="Save & Next" classname="next-button" onClickFunction={handleNext} />
      </div>
      )
    
    }

export default SingleSelect
