import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'
import Spinner from "./Spinner"
import "./Blogs.css"


const Blogs = () => {
  // consuming
  const {posts, loading}=useContext(AppContext);

  return (
    <div className='flex flex-col gap-y-10 my-24'>
    {
      loading ? (<Spinner className='flex justify-center items-center w-[1080px] h-screen'/>) :
       (
        posts.length === 0 ?
        (
          <div> <p className='min-h-[80vh] w-full flex justify-center items-center'> NO POST FOUND</p></div>
        ) 
        : 
        (
          posts.map((post)=>(
            <div key={post.id} className='w-11/12 max-w-2xl mx-auto'>
                <p className='font-bold text-xl '>{post.title}</p>
                <p className='text-sm my-1'>By <span className="italic"> {post.author}</span> on{" "} <span className="font-semibold underline cursor-pointer">{post.category}</span></p>
                <p className="text-sm">Posted on {post.date}</p>
                <p className="mt-4 mb-2">{post.content}</p>
                <div>
                  {post.tags.map((tag, index)=>{
                      return <span className="text-xs font-semibold underline text-blue-700 cursor-pointer" key={index}>{` #${tag}`}</span>
               })}
                </div>
            </div>
          ))
        )
      )
    }
      
    </div>
  )
}

export default Blogs
