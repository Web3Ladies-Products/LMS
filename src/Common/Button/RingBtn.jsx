import React from 'react'
import { Link } from 'react-router-dom'

const RingBtn = ({ text, link }) => {
  return (
    <Link to={link}>
    <button className='ring-offset-2 ring-primary text-primary ring-2 my-8 mx-[-5px] rounded-[2px] p-2  w-fit '>
        {text}
    </button>
  </Link>
  )
}

export default RingBtn