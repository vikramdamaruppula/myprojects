const [data1,setdata1] =useState([])
const [data2,setData2] =useState([])



const queryClient =useQueryClient()

const handleRadio =async (e)=>{
    // console.log(e.target.value)
    // setInputData(val)
    const data = await queryClient.fetchQuery({
        queryKey:['super-heros'],
        queryFn:fetchData1,
    })

    let keey = data.map((item)=>{
        Object.keys(item).map((eachKey)=>{
            delete Object.assign(item,{[`_${eachKey}`]:item[eachKey]})[eachKey]
        })
        // console.log(item)
        return item
    })
    console.log(keey)
    setdata1(keey)
    setdata1(data)


}

const handleradio2=async ()=>{
    const data=await queryClient.fetchQuery({
        queryKey:["friends"],
        queryFn:fetchData2,

    })
    setData2(data)
}
