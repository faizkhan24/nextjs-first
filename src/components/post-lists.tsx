import Link from 'next/link';
import React, { Suspense } from 'react'
interface Posts{
    id: number,
    title: string,
    
}
async function PostsList() {
    const response = await fetch("https://dummyjson.com/posts?limit=10");
    // await  new Promise((resolve)=> setTimeout(resolve,1000))
  const data = await response.json();

  return (
  <div>
   <ul>

      {data.posts.map((post:Posts) => (
          

           <li key={post.id} className="mb-3 py-3  border cursor-pointer shadow-md  rounded-md   max-w-4xl mx-auto ">
          <Link href={`/posts/${post.id}`}>{post.title}</Link>
          
        </li>   
      
        
      ))}
        
    </ul>
  </div>
 
  )
}

export default PostsList;