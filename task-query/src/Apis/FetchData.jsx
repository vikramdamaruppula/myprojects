import  axios from "axios"


export const FetchPosts = async ()=>{
    return await axios.get("http://localhost:4000/posts").then((res)=>{
        console.log(res)
        return res.data
    })
}


export const fetchSinglePost =async (id)=>{
    return await axios.get(`http://localhost:4000/posts/${id}`).then((res)=>{
        return res.data
    })
}


export const addPost= async (data1)=>{
    return await axios.post('http://localhost:4000/posts',data1,{
        headers:{
            "Content-Type":"application/json"
        }
    });

}


export const updatePost =async (updatedPost)=>{
    return await axios.put(`http://localhost:4000/posts/${updatedPost.id}`,updatedPost,{
        headers:{
            "Content-Type":"application/json"
         }
    })
}


export const deletePost = async(id)=>{
    return await axios.delete(`http://localhost:4000/posts/${id}`,{
        headers:{
            "Content-Type":"application/json"
         }
    }).then((res)=>{
        return res.data
    })
}


// export async function FetchPost(){
//     const res = await fetch("http://localhost:4000/posts")
//     return res.json()
// }
