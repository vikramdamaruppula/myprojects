import { useState } from "react"
import TextField from "../components/TextField"
import Radio from "../components/Radio"
import DummyMultiple from "../components/DummyMultiple"
import Dropdown from "../components/Dropdown"
import Result from "./Result"
import data from "../MOCK_DATA (tech).json"
import "../Main.css"

function UserDetails({yourScore,totalScore,resultAnswer,selected,tryAgain}) {
    const[userName,setUserName] =useState("")
    const[gender,setGender] =useState("")
    const[result,setResult] =useState(false)
    const[selectValue,setSelectValue] =useState(null)

    const handleGender=(e)=>{
        setGender(e.target.value)
    }

    const handleUserName=(e)=>{
        setUserName(e.target.value)
    }

    const handleUser=()=>{
        setResult(true)
    }

    
  return (
    <div className="user-details">
 
      {result ? (<Result userName={userName} gender={gender} optionsSelected={selectValue} yourScore={yourScore} totalScore={totalScore} resultAnswer={resultAnswer} selected={selected} tryAgain={tryAgain} />)
      
      :(
        <div >
        <p className="para">Enter your name:</p>
        <TextField changeInput={handleUserName} placeHolderText ="Enter your name here" inputValue={userName} />
        
        <p className="para" >Enter you gender: </p>
        <Radio changeGender={handleGender}  />
        
        <p className="para">Add your Skills:  </p>
        <DummyMultiple option={data}  handleMultiSelect={setSelectValue} />

        <p className="para">Select your option:  </p>
        <Dropdown sendData={data} />

        
        {userName&&gender&&selectValue ?
        <button type="button" className="next-button" onClick={handleUser}>Submit details  </button>:"please fill the above details"}
        </div>
      )}
    </div>
  )
}

export default UserDetails
