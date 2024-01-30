import React, { useEffect, useState } from 'react'
import TextField from '../TextField'
import Button from '../Button'
import "../../Main.css"

function Check({handleNext,handleBack,selectedItems,setSelectedItems}) {

  const[checked,setChecked]=useState([false,false])

  useEffect(() =>{
    if(selectedItems){
      selectedItems.map((item)=>{
        if(item === "Java"){
          const temp=[...checked]
          temp[0]= !temp[0]
          setChecked(temp)
        }
        if(item === "Javascript"){
          const temp=[...checked]
          temp[1]= !temp[1]
          setChecked(temp)
        }
      })
    }
  },[])


  const handleCheckBox=(e)=>{
    // setCurrentAnswer(e.target.value)
    // if(e.target.value === "Java"){
    //   setChecked(true,...checked)
    // }
    // if(e.target.value === "Javascript"){
    //   setChecked(...checked,true)
    // }
    
    const temp=[...selectedItems]
    temp.push(e.target.value)
    // temp[i]= !temp[i]
    setSelectedItems(temp)
  }


  return (
    <div>
      <div>
      <TextField inputType="checkbox" inputId="Java" inputName="Java" inputValue="Java" check={checked[0] ? checked[0] :null}   changeInput={handleCheckBox}  />
      {/* <label className='label-item' htmlFor='java'> Java</label> */}
      Java
      </div>

      <div>
      <TextField inputType="checkbox" inputId="JavaScript" inputName="JavaScript" inputValue="Javascript" check={checked[1] ? checked[1] : null}  changeInput={handleCheckBox} />
      {/* <label className='label-item'>JavaScript</label> */}
      JavaScript
      </div>

      <Button content="Back" onClickFunction={handleBack} classname="next-button" />
      <Button content="Save & Next" onClickFunction={handleNext} classname="next-button" /> 
    </div>
  )
}

export default Check
