import { UserAuthProvider } from './context/UserAuthContext';
import AuthButton from './components/AuthButton';
import AuthStatus from './components/AuthStatus';

const MainUser = () => {
  return (
    <UserAuthProvider>
      <div className="flex flex-col items-center justify-center  bg-gray-100">
        <h1 className="text-3xl font-bold text-blue-600 mb-6">
          Welcome to User Authentication
        </h1>
        <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
          <AuthStatus />
          <div className="mt-4">
            <AuthButton />
          </div>
        </div>
      </div>
    </UserAuthProvider>
  );
};

export default MainUser;
