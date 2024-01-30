import React from 'react'
import "../Main.css"

const TextField = ({ changeInput, placeHolderText, inputValue,inputType,inputName,inputId,check }) => {
  return (

    <input
      className='input-select'
      type={inputType}
      onChange={changeInput} 
      placeholder={placeHolderText} 
      value={inputValue}
      name={inputName}
      id={inputId}
      checked={inputType === "checkbox" ? check : [] }
      // {inputType === check ? }
    />


  )
}

export default TextField
