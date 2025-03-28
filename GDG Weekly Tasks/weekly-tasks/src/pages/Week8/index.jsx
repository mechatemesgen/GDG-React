import React from 'react'
import Note from "./Note";
import Task1 from "./Task1";
import Task2 from "./Task2";

function index() {
  return (
    <section>
        <Note />
        <Task1 />
        <Task2 />
    </section>
  )
}

export default index