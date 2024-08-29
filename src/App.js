import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './components/HomePage';
import UserPage from './components/UserPage';

const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/userpage',
      element: (

        <ProtectedRoute>
          <UserPage />
        </ProtectedRoute>
      ),
    },
    {

      path: '*',
      element: <Home />,
    },
  ]);


  return <RouterProvider router={router} />
}

export default App;
