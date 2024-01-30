import React, { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
// import DataTable from '../PageForm/Table';
// import CustomizedTables from '../PageForm/Paginate2';
import axios from "axios"
import CustomPaginationActionsTable from '../PageForm/Table';
import ComboBox from '../PageForm/MultiSelect';
// import TablePaginationActions from "../PageForm/Table"


import Tab from '@mui/material/Tab';
import "../App.css"
import { Tabs } from '@mui/material';



const fetchData = async (api,page) => {
    return await axios.get(`http://localhost:4000/${api}`).then((res) => {
        return res.data
        // ?_limit=2&_page=${page}
    })
}


const Radios2 = () => {

    const [selectedApi,setSelectedApi] =useState('')
    const [value, setValue] = useState(""); //for Tab values 

    const handleChange = (event, newValue ) => {
      setValue(newValue);
    };

    const handle1 = (apis) => {
        setSelectedApi(apis)
    }
    
    const { data: data1, isError, isLoading, isFetching, error } = useQuery({
        queryKey: ["super-heros",selectedApi], //page
        queryFn:()=> fetchData(selectedApi), //page
        enabled: !!selectedApi,
        keepPreviousData:true
    })

    

    if (isLoading && isFetching) {
        return <h3>Loading ...</h3>
    }

    if (isError) {
        return <h3> {error.message} </h3>
    }


    return (
        <div>
            <ComboBox />
        <Tabs
            value={value}
            onChange={handleChange}   
            centered
            textColor="secondary"
            indicatorColor="secondary"
            aria-label="secondary tabs example"
        >
        <Tab  onClick={()=>handle1("superheros")} value= "person1" label="Person1" />
        <Tab  onClick={()=>handle1("friends")}    value= "person2" label="Person2" />

        </Tabs>
            {
            data1?.length >0 ?
            (<CustomPaginationActionsTable info={data1} />) : null 
            }
            
        </div>
    )
}

export default Radios2
