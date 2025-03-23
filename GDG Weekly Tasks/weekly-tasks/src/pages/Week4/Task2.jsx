import React from 'react'
import SubNav from '../../components/Week4/SubNav'
function Task2() {
  return (
    <section className="p-4">
        <h2 className="text-2xl font-bold mb-4">Task 2: React router Navigation Bar </h2>
        <p className="mb-4">
        Create a simple app with 3 pages: Home, About, and
        Contact. Add a 404 page for unknown routes 
        </p>
        <SubNav />
    </section>
  )
}

export default Task2