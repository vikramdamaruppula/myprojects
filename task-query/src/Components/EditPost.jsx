import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import PostForm from "../PageForm/PostForm"
import { fetchSinglePost, updatePost } from "../Apis/FetchData"
import { useNavigate, useParams } from "react-router-dom"

const EditPost = () => {
    const {id}= useParams()
    const navigate =useNavigate()
    const queryClient =  useQueryClient()

    const {data:postData,isError,error,isLoading} = useQuery({
        queryKey:["editPosts",id],
        queryFn:()=>fetchSinglePost(id)
    })

    const updatePostMutation = useMutation({
        mutationFn:updatePost,
        onSuccess:()=>{
          queryClient.invalidateQueries({queryKey:["posts"]})
          navigate("/")
        }
      })
    



    console.log(postData)

    if(isLoading) return "loading ..."
    if(isError) return `Error : ${error.message}`

    const handleSubmit =(updated)=>{
        updatePostMutation.mutate({id,...updated})
    }

  return (
    <div>
      <h1> EditPosts  </h1>
      <PostForm handleAddPost={handleSubmit} initialValues={postData} />
    </div>
  )
}

export default EditPost
