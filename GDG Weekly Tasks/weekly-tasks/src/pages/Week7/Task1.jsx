import React from 'react'
import CharacterCounter from '../../components/Week7/CharacterCounter'

function Task1() {
  return (
    <section className="p-4">
        <h2 className="text-2xl font-bold mb-4">Task 1: Real-Time Character Counter</h2>
        <p className="mb-4">
            Build a React app where users type in a text area, and the app
        </p>
        <CharacterCounter />
    </section>
  )
}

export default Task1