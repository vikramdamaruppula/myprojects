import React from 'react'
import Radio from '../Radio'
import Button from '../Button'

function Male({handleNext,handleBack,currentAnswer, setCurrentAnswer}) {

  const handleGender=(e)=>{
    setCurrentAnswer(e.target.value)
  }

  return (
    <div>
      <p> Enter Your Gender : </p>
      <Radio  changeGender={handleGender}  inputValue={currentAnswer} />
      <Button content="Back" classname="next-button" onClickFunction={handleBack} />
      <Button content="Save & Next" classname="next-button"  onClickFunction={handleNext} />
    </div>
  )
}

export default Male
