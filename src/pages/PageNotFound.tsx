import { useNavigate } from "react-router";

function PageNotFound() {
  const router = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-3xl md:text-6xl font-bold text-red-500">404</h1>
      <p className="text-sm md:text-xl mt-4">
        Oops! The page you’re looking for doesn’t exist.
      </p>
      <button
        onClick={() => router("/")}
        className="mt-6 px-6 py-2 text-sm md:text-lg font-medium bg-blue-500 hover:bg-blue-600 rounded-md transition duration-300"
      >
        Go Home
      </button>
    </div>
  );
}

export default PageNotFound;
