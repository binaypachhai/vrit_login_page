
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();


  const user = {
    username: 'admin',
    password: 'password',
  };


  const handleLogin = (e) => {
    e.preventDefault();

    if (username === user.username && password === user.password) {
      localStorage.setItem('isAuthenticated', 'true');
      navigate('/userpage');
    } else {
      setError('Invalid username or password');
    }
  };

  return (


    <div className="flex items-center justify-center min-h-screen bg-blue-400">

      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-sm">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Login</h2>
        {error && (
          <p className="text-red-500 text-sm mb-4 text-center border border-red-200 bg-red-50 p-2 rounded">
            {error}
          </p>
        )}
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out font-medium"
          >
            Login
          </button>
        </form>
      </div>
    </div>


  );
};

export default Login;





