import { useParams, useHistory } from 'react-router-dom'
import useFetch from './useFetch'

const BlogDetails = () => {


    //use the useParams hook to get the iD of the url /blogs/whateverID
    const { id } = useParams();
    // console.log(id) // {id: "123"} ...test the result in the render below 

    //whatever we named the Route will be in the Router will be watch is passed


    // bring in the useFetch hook and pass in the ID from the UseParams id
    const { data, isPending } = useFetch(`http://localhost:8000/blogs/${id}`)

    const history = useHistory();


    const deleteHandler = () => {

        fetch(`http://localhost:8000/blogs/${id}`, {
            method: 'DELETE'
        }).then(() => {
            history.push('/')
        })
    }


    return (
        <div className="blog-details">
            <h2>Blog Details</h2>


            {isPending && <div>Loading....</div>}


            {data && (
                <article>
                    <h2>{data.title}</h2>
                    <p>Written by {data.author}</p>
                    <div>{data.body}</div>
                    <button onClick={deleteHandler}>delete</button>
                </article>
            )}

        </div>
    )
}

export default BlogDetails;