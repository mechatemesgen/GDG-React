import React from 'react'
import {Link} from 'react-router-dom'

function Contact() {
  return (
    <div>
         <h1 className='bg-gray-400 p-5'>Contact</h1>
        <Link to = '/'>Home</Link>
        <br />
        <Link to = '/about-us'>About</Link>
        
        <p className='mt-10'>About Contents Goes here</p>

    </div>
  )
}

export default Contact