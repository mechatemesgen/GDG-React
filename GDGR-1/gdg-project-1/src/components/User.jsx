import React from 'react'
import {Link} from 'react-router-dom'
import { useParams } from 'react-router-dom';

function User() {
  const { userId } = useParams();
  return (
    <div>
        <h1 className='bg-gray-400 p-5'>User profile page</h1>
      <h1>User ID: {userId}</h1>
      <br />
      <Link to = '/'>Logout</Link>
    </div>
  );
}

export default User;
