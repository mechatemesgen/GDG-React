import React from 'react';

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-6">Oops! The page you're looking for doesn't exist.</p>
      <a
        href="/home"
        className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition duration-300"
      >
        Go Back Home
      </a>
    </div>
  );
}

export default NotFound;