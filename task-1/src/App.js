import { useEffect, useState } from "react";
import Name from "./components/componentsInside/Name"
import Male from "./components/componentsInside/Male";
import SelectAnswers from "./components/componentsInside/SelectAnswers";
import SingleSelect from "./components/componentsInside/SingleSelect";
import Check from "./components/componentsInside/Check";
import Email from "./components/componentsInside/Email";
import Phone from "./components/componentsInside/Phone";
import Date from "./components/componentsInside/Date";
import Result from "./components/componentsInside/Result";

import {useSelector} from "react-redux"
import { useDispatch } from "react-redux";

import './Main.css';
import { storeResultValues, updatedValues } from "./redux/ResultSlice";



function App() {

  const dispatch=useDispatch()
  const resultList = useSelector((state)=>state.resultReducer.resultValues)

  const [currentAnswer, setCurrentAnswer] = useState('')

  const[selectedItems,setSelectedItems] = useState([]) //for multiselect

  const [curQno, setCurQno] = useState(1)


  
  console.log(resultList)
  console.log(currentAnswer)


  useEffect(()=>{
    // when i go back, then it will set the current answer to the answer stored
    // let check=resultValues.findIndex((item)=>{return item.qno === curQno})
    let check=resultList.findIndex((item)=>{return item.qno === curQno})
    
    if(curQno === 5){
      check !== -1 ? setSelectedItems(resultList[check].selectedAns) : setSelectedItems([])
      // console.log(resultList[check].selectedAns)
    } else{
    {check !== -1 ? setCurrentAnswer(resultList[check].selectedAns) : setCurrentAnswer('')}
    }
    
    console.log("inside --useEffect",currentAnswer)
  },[curQno])


  const handleNext = () => {

    console.log("currentAnswer-1st-next--btn",currentAnswer) 
    let check=resultList.findIndex((item)=>{return item.qno === curQno}) // returns index num of current question
    console.log(check)

    if(check !== -1){
      // answer updating process
        // resultList.splice(check,1,{ "qno": curQno, "selectedAns": currentAnswer})
        dispatch(updatedValues([{"qno": curQno, "selectedAns": currentAnswer},check]))

    }else{
      // new answer created for 1st time
      if(curQno === 8 || curQno === 5){
        // resultValues.push({ "qno": curQno, "selectedAns": selectedItems })
        dispatch(storeResultValues({"qno": curQno, "selectedAns": selectedItems}))
      }else{
        // resultValues.push({ "qno": curQno, "selectedAns": currentAnswer })
        // console.log("okkklkkkkkkkkkk")
        dispatch(storeResultValues({ "qno": curQno, "selectedAns": currentAnswer }))
      }
    }

    setCurQno(curQno + 1)

    console.log("curQno---in--next--btn",curQno)
    console.log("currentAnswer---in--next--btn",currentAnswer)
}



  const handleBack = () => {
    setCurQno(curQno - 1)
    console.log("currentAnswer---in--back--btn",currentAnswer)
  }

  // console.log("curQno---outside",curQno)
  // console.log("currentAnswer---outside",currentAnswer)
  console.log("resultvalues---outside", resultList)


  const displayQuestion = () => {
    switch (curQno) {
      
      case 1: return <Name handleNext={handleNext} currentAnswer={currentAnswer} setCurrentAnswer={setCurrentAnswer} />
      case 2: return <Male handleNext={handleNext} handleBack={handleBack} currentAnswer={currentAnswer} setCurrentAnswer={setCurrentAnswer} />
      case 3: return <SingleSelect handleNext={handleNext} handleBack={handleBack} currentAnswer={currentAnswer} setCurrentAnswer={setCurrentAnswer} />
      case 4: return <Email handleNext={handleNext} handleBack={handleBack} currentAnswer={currentAnswer} setCurrentAnswer={setCurrentAnswer} />
      case 5: return <Check handleNext={handleNext} handleBack={handleBack}  selectedItems={selectedItems} setSelectedItems={setSelectedItems} />
      case 6: return <Phone handleNext={handleNext} handleBack={handleBack}  currentAnswer={currentAnswer} setCurrentAnswer={setCurrentAnswer} />
      case 7: return <Date handleNext={handleNext} handleBack={handleBack} currentAnswer={currentAnswer} setCurrentAnswer={setCurrentAnswer} />
      case 8: return <SelectAnswers selectedItems={selectedItems} setSelectedItems={setSelectedItems} handleNext={handleNext} handleBack={handleBack} currentAnswer={currentAnswer} setCurrentAnswer={setCurrentAnswer} />     
      case 9: return <Result resultValues={resultList} curQno={curQno} />
      default: return null
    }
  }

  return (
    <div className="App">

      {curQno ? displayQuestion() : null}

    </div>
  );
}

export default App;


//

// console.log("in--back--btn", resultValues)
    // console.log("curQno---in--back--btn",curQno)
    // console.log("resultValues---in--back--btn",resultValues[curQno-2])
    // console.log(resultValues[curQno-2])

    
    // resultValues.map((item) => {
    //   if(resultValues[curQno-2].qno === curQno-1){
    //      setCurrentAnswer(resultValues[curQno-2].selectedAns)
        
    //   }
    // })