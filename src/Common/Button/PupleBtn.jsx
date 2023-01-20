import React from 'react'
import { Link } from 'react-router-dom'

const PupleBtn = ({ text, link }) => {
  return (
    <Link to={link}>
      <button className='text-[20px] my-3 rounded-lg text-white p-3 w-full bg-primary'>
          {text}
      </button>
    </Link>
  )
}

export default PupleBtn