import { useState } from 'react';
import './App.css';
import GroupList from "./components/GroupList"
import CounterApk from "./components/CounterApk";


function App() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">
        React Task 1
      </h1>
      <div className="flex justify-center">
        <GroupList />
      </div>

      <br />
      <h1 className="text-3xl font-bold mb-4 text-center">
        React Task 2
      </h1>
      <div className="flex justify-center">
        <CounterApk />
      </div>
      
    </div>
  );
}

export default App;
