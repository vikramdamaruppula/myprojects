import React, { useState } from 'react'
import DummyMultiple from '../DummyMultiple'
import data from "./MOCK_DATA (tech).json"
import Button from '../Button'


function SelectAnswers({handleBack,handleNext,setCurrentAnswer,selectedItems, setSelectedItems }) {


    return (
        <div>
            <DummyMultiple selectedItems={selectedItems} setSelectedItems={setSelectedItems}  option={data} setCurrentAnswer={setCurrentAnswer} />
            {/* <DummyMultiple /> */}
            <Button content="Back" onClickFunction={handleBack} classname="next-button" />
            <Button content="Save & Next" onClickFunction={handleNext} classname="next-button" />
        </div>)
}

export default SelectAnswers
