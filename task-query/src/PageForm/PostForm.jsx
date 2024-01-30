import { useState } from "react"

const PostForm = ({handleAddPost,initialValues}) => {
    console.log(initialValues)
    const [posts, setPosts] = useState({ title:initialValues.title ||  "", body:initialValues.body || "" })

    // console.log(posts)
    
    const handleChange = (e) => {
        setPosts({
            ...posts,
            [e.target.name]: e.target.value
        })
    }

    const handleForm=(e)=>{
        e.preventDefault()
        console.log(posts)
        handleAddPost(posts)
        setPosts({
            title:"",
            body:""
        })
    }

    const renderField = (labelText) => {
    // console.log(posts[labelText.toLowerCase()])

        return (
            <div>
                <label> {labelText} </label>
                <input
                    type="text"
                    name={labelText.toLowerCase()}
                    onChange={handleChange}
                    value={posts[labelText.toLowerCase()]}
                    // value={labelText.toLowerCase() === 'title' ? posts.title : posts.body} 
                    />
            </div>
        )
    }

    return (
        <form onSubmit={handleForm}>
            {renderField("Title")}
            {renderField("Body")}
            <button type="submit">Submit </button>
        </form>
    )
}

export default PostForm
