import React, { Suspense } from "react";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { FaEye } from "react-icons/fa";
import Loader from "@/components/Loader";
import Upvote from "@/components/Upvote";

async function Page({ params }: { params: { id: string } }) {
  const response = await fetch(`https://dummyjson.com/posts/${params.id}`);
  await  new Promise((resolve)=> setTimeout(resolve,1000))

  const post = await response.json();
  return (
    <main className="flex justify-center items-center min-h-screen bg-gray-100">
        

                  <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full">
                   
        <h1 className="text-3xl font-semibold mb-4">{post.title}</h1>
        <p className="text-gray-700 mb-4">{post.body}</p>
        <div className="flex justify-between items-center text-gray-600">
          <div className="flex items-center space-x-2">
            <AiFillLike className="text-black"  />
            <span>{post.reactions.likes}</span>
          </div>
          <div className="flex items-center space-x-2">
          <AiFillDislike className="text-black" />
            <span>{post.reactions.dislikes}</span>
          </div>
          <div className="flex items-center  space-x-2">
          <FaEye className="text-black"/>
            <span>{post.views}</span>
          </div>
        </div>
         
         <Upvote/>
      </div>
       

    </main>
  );
}

export default Page;
