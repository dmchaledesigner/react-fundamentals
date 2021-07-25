import React from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';



const HomePage = () => {

    const { data, isPending } = useFetch('http://localhost:8000/blogs');



    return (
        <div className="home">
            {isPending && <div>Loading...</div>}

            {data && <BlogList blogs={data} title="All Blogs" />}


            {/* <BlogList blogs={blogs.filter(item => item.author === 'Mario')} title="Marios Blog" /> */}

        </div>
    )
}

export default HomePage
