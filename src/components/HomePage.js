
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleLoginNavigation = () => {
    navigate('/login');
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-400 to-red-400">
      <div className="text-center p-8 bg-white rounded-lg shadow-lg max-w-md">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Welcome to Homepage!</h1>
        <p className="text-gray-600 mb-8">
          Click the button below to get started by logging in.<br />
          username: 'admin'<br />
          password: 'password'
        </p>
        <button
          onClick={handleLoginNavigation}
          className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition duration-300 ease-in-out"
        >
          Go to Login
        </button>
      </div>
    </div>
  );
};

export default Home;
