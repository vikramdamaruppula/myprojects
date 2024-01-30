import { useMutation, useQueryClient } from "@tanstack/react-query"
import PostForm from "./PostForm"
import { addPost } from "../Apis/FetchData"

import {v4 as uuidv4} from "uuid"

const AddPost = () => {

    const queryClient =  useQueryClient()

    const addPostMutation  = useMutation({
        mutationFn:addPost,
        onSuccess:()=>{
            queryClient.invalidateQueries(["posts"])
            console.log("succeess raa")
        }
    })

    const handleAddPost = (post)=>{
        addPostMutation.mutate({
            id:uuidv4(),
            ...post
        })
    }

  return (
    <div>

      <h3>Add New Post </h3>
      <PostForm handleAddPost={handleAddPost} initialValues={{}} />

    </div>
  )
}

export default AddPost
           

