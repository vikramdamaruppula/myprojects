import React, { useState } from 'react'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import axios from "axios"
import "../App.css"

const fetchData1 =async()=>{
    return await axios.get(`http://localhost:4000/superheros`).then((res)=>{
        // console.log(res.data)
        return res.data 
    })
}

const fetchData2= async ()=>{
    return await axios.get("http://localhost:4000/friends").then((res2)=>{
        return res2.data 
    })
}


const RadioButtons = () => {
    const[enable,setEnable] = useState(false) 
    const[enable2,setEnable2] =  useState(false)

    const handle1=()=>{
        setEnable(!enable)
        // const keeys = data1?.map((item)=>{
        //     Object.keys(item).map((eachkey)=>{
        //         delete Object.assign(item,{[`_${eachkey}`]:item[eachkey]})[eachkey]
        //     })
        // })
       // console.log(keeys)
    }
    const handle2=()=>{
        setEnable2(!enable2) 
    }

    const {data:data1,isError,isLoading,isFetching,error} = useQuery({
        queryKey:["super-heros"],
        queryFn:fetchData1,
        enabled:enable,
    })

    console.log(data1)
    const firstId = data1?.[0].id 
    console.log(firstId)

    const {data:data2, error:error2, isFetching:isFetchin2,isLoading:isLoading2,isError:isError2}=
     useQuery({
        queryKey:["friends"],
        queryFn:()=>fetchData2(),
        enabled: !!firstId && enable2
    })

    
    if(isLoading && isFetching){
        return <h3>Loading ...</h3>
    }

    if(isError){
        return <h3> {error.message} </h3>
    }


    if(isLoading2 && isFetchin2){
        return <h3> loading for friends </h3>
    }

    if(isError2){
        return <h3> {error2.message} </h3>
    }

    console.log(data1)
    console.log(data2)



  return (
    <div>
        {/* <input type="radio" id="person1" name="persons" value="person1"  onClick={handleRadio} checked={inputData==="person1"}  /> */}
        <input type="radio" id="person1" name="persons" value="person1"  onClick={handle1}  />
        
        <label htmlFor="person1">click to view </label><br />

        {/* {console.log(data1)} */}
        {data1?.length ?
        ( <>
            <input type="radio" id="person2" name="persons" value="person2" onClick={handle2} />
            <label htmlFor="person2">person2</label><br /> 
          </>
        ):null}

            <div>
                {/* {data1?.length!==0 &&  <p className='para'> Heros Data </p>} */}


            
            {data1?.map((eachHero)=>{
                return(
                    <div key={eachHero.id} className='container-2'>
                        <p>{eachHero.name} </p>
                    </div>
                )

                // console.log(keeys)
                // const oldKeys = eachHero
                // // console.log(oldKeys)
                // const updateKeys ={}

                // for(const key in oldKeys){
                //     if(oldKeys.hasOwnProperty(key)){
                //         const modifyKey = "_"+ key
                //         updateKeys[modifyKey] = oldKeys[key] 
                //     }
                // }
                // console.log(updateKeys)                
           
           })}
            </div>
 
        <div>
               {data2?.length!==0 && <p className='para'>Friends Data</p>}
            {data2?.map((friend)=>{
                return(
                    <div key={`Vs${friend.name}`} className='container-2'>
                        {friend.name}
                    </div>
                )
            })}   
        </div>  

    </div>
  )
}

export default RadioButtons
