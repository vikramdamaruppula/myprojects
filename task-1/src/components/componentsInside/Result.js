import React from 'react'
import "../../Main.css"
function Result({resultValues, curQno}) {


    // const dt =[
    // {qno: 1, selectedAns: 'jdjkd'},
    // {qno: 2, selectedAns: 'Female'},
  
    // {qno: 3, selectedAns: 'NODEJS'},
 
    // {qno: 4, selectedAns: 'vfdhvb@gmail.com'},
  
    // {qno: 5, selectedAns: ''},
 
    // {qno: 6, selectedAns: [{label:'JAVASCRIPT', value: "javascript"}]
    // }]


    // const arr1 = dt.map((i)=>{
    //     if(i.qno===6){
    //         let arr2=[]
    //         const arr1 = i.map((item)=>(item.label))
    //         arr2.push(arr1)
    //     }
    // })
    
    // console.log(arr1)



    // const dt =[
    //     {qno: 1, selectedAns: 'jdjkd'},
    //     {qno: 2, selectedAns: 'Female'},
      
    //     {qno: 3, selectedAns: 'NODEJS'},
     
    //     {qno: 4, selectedAns: 'vfdhvb@gmail.com'},
      
    //     {qno: 5, selectedAns: ''},
     
    //     {qno: 6, selectedAns: ['JAVASCRIPT',  'CSS',  'HTML']
    //     }]
   


    // const display= (data) =>{
    //     console.log("666666666666666")
    //     data.map((item,i) =>{
    //         console.log(item)
    //         return(
    //             <p key={`as${i}`}>{item}</p>
    //         )
    //     })
    // }

  return (
    <div>
      <p>results are here </p>
      {resultValues.map((eachItem)=>{
       return( <div key={eachItem.qno}>
            <span>Q {eachItem.qno}:</span>
           <span>
            { eachItem.qno === 8 ? <span> {eachItem.selectedAns.toString()} </span> : <span>{eachItem.selectedAns}</span>} 
           </span>
        </div>)
      })}
    </div>
  )
}
// display(eachItem.selectedAns)

// eachItem.selectedAns.toString() 

 
export default Result
