import { useQuery } from "@tanstack/react-query"
import { fetchSinglePost } from "../Apis/FetchData"
import { useNavigate, useParams } from "react-router-dom"

const Post = () => {
  const {id} =useParams()
  const navigate =useNavigate()

  const {data:post,isError,isLoading,error} = useQuery({
    queryKey:["singlePost",id],
    queryFn:()=>fetchSinglePost(id)
   })

console.log(post)

if(isLoading) return "is Loading ..."
if(isError) return `Error: ${error.message}`


  return (
    <div>
      <h1> Item details </h1>
      <h4> {post.title} </h4>
      <h4> {post.body} </h4>
      <button onClick={()=>navigate("/")} > Back to posts </button>

    </div>
  )
}

export default Post
