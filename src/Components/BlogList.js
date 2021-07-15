import React from 'react';
import Button from './Button';

const BlogList = ({ blogsItems, title, deletePost }) => {


    return (
        <div className="blog-list">
            <h2>{title}</h2>

            {
                blogsItems.map((blog) => (
                    <div className="blog-preview" key={blog.id}>
                        <h2>{blog.title}</h2>
                        <p>written by: {blog.author}</p>

                        <Button>
                            {/* onClick={() => deletePost(blog.id)}> delete function but from state */}
                            Delete Post
                        </Button>

                    </div>
                ))
            }

        </div>
    )
}

BlogList.defaultProps = {
    title: 'Add title here',
}

export default BlogList
