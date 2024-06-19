'use client'
import React, { useState } from 'react'
import { BiSolidUpvote } from "react-icons/bi";
function Upvote() {
    const [count,setCount] = useState(0);
  return (
    <div className='bg-black w-32 py-3 justify-center mx-40 my-5 rounded-lg shadow-md px-3 flex gap-3 items-center text-white' >
        <BiSolidUpvote/>
        <button onClick={()=>{
            setCount(count+1);
        }}  > Upvote {count}</button>
    </div>
  )
}

export default Upvote