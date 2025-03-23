import React from 'react';
import DarkLight from '../../components/Week5/DarkLight/DarkLight';

function Task1() {
  return (
      <section className="p-4">
       <h2 className="text-2xl font-bold mb-4">Task 1(Class Task): Dark and Light Mode</h2>
       <p className="mb-4">
       Implement a ThemeContext that allows users to toggle
       between light and dark mode.
        </p>
        <DarkLight />
      </section>
  );
}

export default Task1;