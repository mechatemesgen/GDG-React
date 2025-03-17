import React from 'react'
import { Link } from 'react-router-dom'

function Home() {


    const users =[ {
        Name : "Tom",
        ID : 1,
    }
    ]
    const Ide = 2555
    return (
        <div>
            <h1 className='bg-gray-600 p-5'>Home</h1>

            <Link className='' to='/about-us'>About Us</Link>
            <br />
            <Link to='/week-6'>Week 6</Link>
            <br />
            <Link to={`/user/${Ide} `} >User Login</Link>
            <p className='mt-10'>Home Contents Goes here</p>
        </div>
    )
}

export default Home
