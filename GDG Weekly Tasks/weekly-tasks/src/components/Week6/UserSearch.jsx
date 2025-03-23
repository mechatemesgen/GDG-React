import { useState, useEffect, useMemo, useCallback } from 'react';

const UserSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const filteredUsers = useMemo(() => {
    return users.filter(user =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [users, searchTerm]);

  const fetchUsers = useCallback(async (signal) => {
    try {
      setIsLoading(true);
      setError(null);
      
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users?q=${searchTerm}`,
        { signal }
      );
      
      if (!response.ok) throw new Error('Failed to fetch');
      const data = await response.json();
      
      setUsers(data);
    } catch (err) {
      if (err.name !== 'AbortError') {
        setError(err.message);
      }
    } finally {
      setIsLoading(false);
    }
  }, [searchTerm]);

  useEffect(() => {
    const controller = new AbortController();
    const timerId = setTimeout(() => {
      if (searchTerm.trim()) {
        fetchUsers(controller.signal);
      }
    }, 300);

    return () => {
      controller.abort();
      clearTimeout(timerId);
    };
  }, [searchTerm, fetchUsers]);

  const handleSearchChange = useCallback((e) => {
    setSearchTerm(e.target.value);
  }, []);

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">
        Student Search
      </h1>
      
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Search students..."
        className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4"
      />
      
      {isLoading && (
        <div className="text-center text-blue-500">Loading...</div>
      )}
      
      {error && (
        <div className="text-center text-red-500">{error}</div>
      )}
      
      {!isLoading && !error && (
        <ul className="space-y-2">
          {filteredUsers.map(user => (
            <li
              key={user.id}
              className="p-3 hover:bg-gray-50 rounded-md transition-colors"
            >
              <div className="font-semibold">{user.name}</div>
              <div className="text-gray-600">{user.email}</div>
            </li>
          ))}
        </ul>
      )}
      
      {!isLoading && !error && filteredUsers.length === 0 && (
        <div className="text-center text-gray-500">
          No students found
        </div>
      )}
    </div>
  );
};

export default UserSearch;