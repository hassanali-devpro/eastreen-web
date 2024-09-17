import { useNavigate } from 'react-router-dom'; // assuming you're using react-router

const NotFoundPage = () => {
  const navigate = useNavigate(); // Hook to navigate between routes

  const handleGoBack = () => {
    navigate('/'); // Navigates to the home page
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <p className="text-2xl text-gray-600 mb-8">Oops! The page you are looking for does not exist.</p>
      <button
        onClick={handleGoBack}
        className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
      >
        Go Back to Home
      </button>
    </div>
  );
};

export default NotFoundPage;
