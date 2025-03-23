import { useUserAuth } from '../context/UserAuthContext';

const AuthButton = () => {
  const { isLoggedIn, toggleAuth } = useUserAuth();

  return (
    <button
      onClick={toggleAuth}
      className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
    >
      {isLoggedIn ? 'Logout' : 'Login'}
    </button>
  );
};

export default AuthButton;
