import React,{useContext} from 'react';
import BlogContext from '../Context/Context';

let blogs = null;

function Bloglist() {
   
    const {data,deletePost} = useContext(BlogContext)
    
    blogs = data;
  return (
    <div className='blog-details'>
        <h2 className='title'>Posts</h2>
        {
          blogs.map((blog)=>{
            return(
              <div className='blog-preview'>
              <p><span className='blog-title'>Blog Title:</span> {blog.blogTitle}</p>
              <p><span className='blog-title'>Blog Description:</span> {blog.blogDescription} </p>
              <p><span className='blog-title'>Blog Author :</span> {blog.author}</p>
              <button className='delete-btn' onClick={()=>deletePost(blog.id)}>Delete Post</button>
              </div>
            )})
        }
    </div>
  )
}

export default Bloglist;