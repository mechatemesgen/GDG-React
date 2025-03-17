import React from 'react'
import {Link} from 'react-router-dom'

function About() {
  return (
    <div>
        <h1 className='bg-gray-400 p-5'>About</h1>
        <Link to = '/'>Home</Link>
        <br />
        <Link to = '/contact'>Contact</Link>
        
        <p className='mt-10'>About Contents Goes here</p>

    </div>
  )
}

export default About