import React, { useState } from "react";
// import Select from "react-select"
import "../Main.css"

const DummyMultiple = ({ option, checked, selectedItems,setSelectedItems }) => {

  const[input,setInput] =useState("")


  const handleMultipleSelect =(e) =>{
    e.stopPropagation();
    console.log("111")
    console.log(selectedItems)
    const temp = [...selectedItems]
    temp.push(e.target.innerText)
    // setCurrentAnswer(temp)
    setSelectedItems(temp)
    // console.log(currentAnswer)
  }

  const handleDelete=(event,i)=>{
    const temp = [...selectedItems]
    temp.splice(i,1)
    setSelectedItems(temp)
    // selectedItems(temp)
    // console.log(currentAnswer)
  }

  console.log(selectedItems)

    const filteredItems = option.filter((item)=>{
      const searchItem = item.label.toLocaleLowerCase()
      const carName = input.toLowerCase()
      if(searchItem.includes(carName)){
        return item
      }
    }).map((eachCar)=>{
      return(
          <div key={eachCar.value} 
              className="list-items"
              onClick={handleMultipleSelect}
          >
             {eachCar.label} 
          </div>
      )
    })

    return(
      <div >
     <div className="Multiselect-container">
     {selectedItems ?
        selectedItems.map((item,i) => {
          return(
            <span key={`sd${i}`} >{item} <button className="delete-btn" onClick={(e) => handleDelete(e,i)}>❌</button></span>
          )
        })
      :
      null
      }
        <input 
          type="search" 
          placeholder="type to search"
          value={input}
          onChange={(e)=>setInput(e.target.value)} 
          className="input-select input-item"
        />
     </div>

        {input ?  
        <div>
          {filteredItems.length!==0 ?filteredItems: <span>no items</span> } 
        </div> 
        :null }

      </div>
    )
};

export default DummyMultiple;


  // return (
  //   <Select
  //     options={option}
  //     isMulti
  //     checked={checked}
  //     className="react-select"
  //     onChange={setCurrentAnswer}
  //     // value={inputValue}
  //   />

  // )/