import React from 'react'
import "../Main.css"

const Radio = ({changeGender,inputValue, handleChange}) => {
  return (
    <div>
              {/* <TextField inputType="radio" changeInput={handleChange} inputId="email" /> */}

        <input onChange={changeGender} type="radio" value="male" checked={inputValue === "male"}  name="gender" id="male" className='radio-btn'  /> Male
        <input onChange={changeGender} type="radio" value="Female" checked={inputValue === "Female"}   name="gender" id="Female" className='radio-btn'  /> Female
        <input onChange={changeGender} type="radio" value="Others" checked={inputValue === "Others"}   name="gender" id="others" className='radio-btn'  /> Others
    </div>
  )
}

export default Radio

