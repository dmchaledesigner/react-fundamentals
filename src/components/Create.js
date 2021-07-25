import { useState } from 'react';
import { useHistory } from 'react-router-dom'
const Create = () => {

    const [title, setTitle] = useState(''); // the state for the post title
    const [body, setBody] = useState('') // the state for the body content
    const [author, setAuthor] = useState('mario'); // default state for the select value
    const [isPending, setIsPending] = useState(false) // state for the button when submitting form

    const history = useHistory(); // we use this var inside our submitHandler function to redirect after submission
    // console.log(history)

    const submitHandler = (e) => {
        e.preventDefault(); // stops form from submitting

        // create object with state data
        const postData = { title, body, author }
        //console.log(postData);

        setIsPending(true); // set the button state to true so its shows post is submitting

        fetch('http://localhost:8000/blogs', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(postData)
        })
            .then(() => {
                setIsPending(false); // then set the button to false once the post is sent
                // history
                history.push('/'); // this will redirect the form to the homepage
            })

    }



    return (
        <div className="create">
            <h2>Add a new Blog</h2>

            <form onSubmit={submitHandler}>
                <label htmlFor="Blog Title"></label>
                <input
                    type="text"
                    placeholder="Enter title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />

                <label htmlFor="Blog Body"></label>
                <textarea
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    cols="30"
                    rows="10"
                    required></textarea>

                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="Mario">Mario</option>
                    <option value="Yoshi">Yoshi</option>
                </select>

                {isPending ? <button>Submitting Post</button> : <button>Add Blog Post</button>}

            </form>

            {/* 
                    TEST FORM FIELDS
                    <p>{title}</p>
                    <p>{body}</p>
                    <p>{author}</p> 
            */}

        </div>
    )
}

export default Create
