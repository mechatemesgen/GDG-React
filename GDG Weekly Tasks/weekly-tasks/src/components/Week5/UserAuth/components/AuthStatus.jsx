import { useUserAuth } from '../context/UserAuthContext';

const AuthStatus = () => {
  const { isLoggedIn } = useUserAuth();

  return (
    <p className={`text-lg font-semibold ${isLoggedIn ? 'text-green-500' : 'text-red-500'}`}>
      {isLoggedIn ? 'You are logged in!' : 'You are logged out!'}
    </p>
  );
};

export default AuthStatus;
