import React from 'react'
import MainUser from '../../components/Week5/UserAuth/MainUser'

function Task2() {
  return (
    <section className="p-4">
        <h2 className="text-2xl font-bold mb-4">Task 2: UserAuth</h2>
        <p className="mb-4">
        Create a UserAuthContext that manages user authentication
        status (logged in/logged out).
        </p>
        <MainUser />
    </section>
  )
}

export default Task2