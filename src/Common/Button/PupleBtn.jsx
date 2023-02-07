import React from 'react'
import { Link } from 'react-router-dom'

const PupleBtn = ({ text, link }) => {
  return (
    <Link to={link}>
      <button className='text-[16px] my-3 rounded-md text-white p-2 w-full bg-primary'>
          {text}
      </button>
    </Link>
  )
}

export default PupleBtn