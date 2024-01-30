import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import AddPost from "../PageForm/AddPost"
import { FetchPosts, deletePost } from "../Apis/FetchData"
import { useNavigate } from "react-router-dom"
import "../App.css"
// import PostForm from "../PageForm/PostForm"



const PostLists = () => {

  const navigate = useNavigate()
  const queryClient =useQueryClient()

  const {data:posts,isError,error,isLoading} = useQuery({
    queryKey:["posts"],
    queryFn: FetchPosts,
    // enabled:false,
  })

  const deletePostMutation = useMutation({
    mutationFn:deletePost,
    onSuccess:()=>{
      queryClient.invalidateQueries({queryKey:["posts"]})
    }
  })

  const handleDelete=(id)=>{
    deletePostMutation.mutate(id)
  }

  if (isLoading) return   "loading ... "
  if(isError) return `Error: ${error.message}`

 console.log(posts)

  return (
    <div>
      <h3 style={{cursor:"pointer",color:"grey"}} onClick={()=>navigate("/radioButtons")}>Go to previous assignment </h3>
      <h3 style={{cursor:"pointer",color:"grey"}} onClick={()=>navigate("/radios2")}>Go to previous assignment -2 </h3>
      
      <AddPost />
      <h1> PostLists  </h1>
      {posts.map((item)=>{
        return(
          <div className="card-parent" key={item.id} style={{background:"#777"}} >
             <h3 style={{cursor:"pointer"}} onClick={()=>navigate(`post/${item.id}`)}> {item.title} </h3>

             {/* <div className="card">
                <h3>  {item.title} </h3>
                <h3>  {item.body} </h3>
             </div> */}

             <button style={{cursor:"pointer"}}  onClick={()=>navigate(`post/${item.id}/edit`)}> Edit </button>
             <button onClick={()=>handleDelete(item.id)}> Delete </button>

          </div>
        )
      })}
    </div>
  )
}

export default PostLists
