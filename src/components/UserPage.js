
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const UserPage = () => {
  const navigate = useNavigate();


  useEffect(() => {
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [navigate]);


  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">

      <header className="bg-gray-800 text-white py-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center px-4">
          <h1 className="text-2xl font-bold">User Page</h1>
          <button
            onClick={handleLogout}
            className="bg-red-700 px-4 py-2 rounded-full hover:bg-red-500 transition duration-300 ease-in-out"
          >
            Logout
          </button>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">

        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Welcome to Your Page.
        </h2>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum libero voluptate sed voluptates. Consectetur explicabo possimus ad accusantium? Id labore ut ad eaque dolore quo voluptas est, molestias ex repudiandae quia facere beatae nemo nihil. Eum consequuntur, repellendus, quam incidunt, cum harum aliquam tenetur voluptatem dolores sequi nihil esse? Est doloribus sequi pariatur maxime, quidem, laboriosam magnam voluptates, vitae vero illum eveniet excepturi? Nobis fugit quisquam, molestias quam minima alias esse aliquid animi dignissimos earum sunt voluptate, vero veritatis, iusto autem? Incidunt fuga optio ullam autem delectus hic, labore accusamus fugiat eum obcaecati modi dolor soluta voluptas id aliquid cumque.
        </p>

      </main>


      <footer className="bg-gray-800 text-white py-4 text-center">
        <p className="text-sm">© 2024 UserApp. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default UserPage;
