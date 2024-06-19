import Loader from '@/components/Loader'
import React from 'react'

function loading() {
  return (
    <div className='flex items-center justify-center flex-col my-96'><Loader/></div>
  )
}

export default loading