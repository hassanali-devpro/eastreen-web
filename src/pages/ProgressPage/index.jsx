import { useNavigate } from 'react-router-dom'; // assuming you're using react-router

const PageInProgress = () => {
  const navigate = useNavigate(); // Hook to navigate between routes

  const handleGoBack = () => {
    navigate('/'); // Navigates to the home page
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Page Under Construction</h1>
      <p className="text-lg text-gray-600 mb-8">This page is currently in progress. Please check back later.</p>
      <button
        onClick={handleGoBack}
        className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        Go Back to Home
      </button>
    </div>
  );
};

export default PageInProgress;
