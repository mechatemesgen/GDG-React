import React from 'react';
import { Link, useParams } from 'react-router-dom';
import SubNav from '../SubNav';

function UserProfile() {
  const { userId } = useParams();

  const users = [
    { ID: 1, Name: "Mecha" },
    { ID: 2, Name: "Eba" },
    { ID: 3, Name: "Amo" },
  ];

  const user = users.find((u) => u.ID === parseInt(userId, 10));

  React.useEffect(() => {
    if (!user) {
      window.location.href = "/home";
    }
  }, [user]);

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <header className="mt-12 w-full text-center shadow-md">
        <SubNav />
      </header>

      <main className="flex flex-col mt-8">
        <h1 className="text-2xl font-bold p-5 rounded-md text-center">
          User Profile Page
        </h1>
        <div className="mt-6 text-lg">
          {user ? (
            <>
              <p className="mb-4">
                User ID: <span className="font-semibold">{user.ID}</span>
              </p>
              <p className="mb-4">
                User Name: <span className="font-semibold">{user.Name}</span>
              </p>
            </>
          ) : (
            <p className="text-red-500">User not found.</p>
          )}
          <Link to="/home" className="text-blue-500 hover:underline">
            Logout
          </Link>
        </div>
      </main>

      <footer className="bg-gray-800 text-white w-full py-4 text-center mt-auto">
        <p className="text-sm">© {new Date().getFullYear()} GDG Weekly Tasks. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default UserProfile;