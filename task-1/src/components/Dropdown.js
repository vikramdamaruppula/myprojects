import {useState} from 'react'
import "../Main.css"

const Dropdown = ({sendData,inputChange,inputData}) => {

  
  return (
    <div style={{margin:"10px"}}>
      <select className="input-select" onChange={inputChange} value={inputData} >
        {sendData.map((eachData)=>(
            <option id={eachData.value} key={eachData.label} value={eachData.label}>
              {eachData.label} 
            </option>
        ))}
      </select>
    </div>
  )
}

export default Dropdown

