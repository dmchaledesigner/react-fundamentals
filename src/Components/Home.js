import React, { useState, useEffect } from 'react'
import BlogList from './BlogList';

const Home = () => {

    const [blogs, setBlogs] = useState(null);


    // delete blog post from state
    // const handleDelete = (id) => {
    //     const deleteBlog = blogs.filter(item => item.id !== id)
    //     setBlogs(deleteBlog)

    // }




    // using useEffect to get the data from JSON server - see your notes for tutorial
    // NOTE 'async' and 'await' CANNOT be run on useEffect hook. We can use a separate function to do this and then evoke the function inside useEffect
    useEffect(() => {
        // the url we get inside the termainal that is watching our json data
        const url = "http://localhost:8000/blogs";
        fetch(url)
            .then((res) => res.json())
            .then((data) => setBlogs(data))


    }, [])


    // console.log(blogs) - make sure the blogs state is getting in the data from the fetch request

    return (
        <div className="home">

            {   // if blogs exist then show the blogs =. 
                //fixed the null issue where when then page loads its initial value is null, therefore we get the errors

                // if blogs evaluates to true then show the component
                // we could use ternary operator but using && shows we dont need to use a false option
                blogs && <BlogList
                    // deletePost={handleDelete}
                    setBlogs={setBlogs}
                    blogsItems={blogs}
                    title="All Blogs"
                />
            }


            {/* <BlogList
                deletePost={handleDelete}
                setBlogs={setBlogs}
                blogsItems={blogs.filter(others => others.author === 'mario')}
                title="Other Blogs"
            /> */}


        </div>
    )
}

export default Home
