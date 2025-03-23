import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SubNav from '../SubNav';

function Home() {
  const navigate = useNavigate();
  const [inputID, setInputID] = useState('');
  const [error, setError] = useState('');

  const users = [
    { ID: 1, Name: "Mecha" },
    { ID: 2, Name: "Eba" },
    { ID: 3, Name: "Amo" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = users.find((u) => u.ID === parseInt(inputID, 10));
    if (user) {
      navigate(`/user/${user.ID}`);
    } else {
      setError('User not found. Please enter a valid ID.');
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <header className="mt-12 w-full text-center shadow-md">
        <SubNav />
      </header>

      <main className="flex flex-col items-center mt-8">
        <h1 className="text-2xl font-bold">Welcome to the Home Page</h1>
        <p className="text-gray-700 text-lg mb-4">
          This is the home page for Week 4 tasks. Explore and enjoy!
        </p>

        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-white shadow-md rounded-lg p-6"
        >
          <div className="mb-4">
            <label htmlFor="id" className="block text-gray-700 font-medium mb-2">
              Enter your ID
            </label>
            <input
              type="text"
              id="id"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your ID"
              value={inputID}
              onChange={(e) => setInputID(e.target.value)}
            />
          </div>
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Login
          </button>
        </form>
      </main>

      <footer className="bg-gray-800 text-white w-full py-4 text-center mt-auto">
        <p className="text-sm">© {currentYear} GDG Weekly Tasks. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
