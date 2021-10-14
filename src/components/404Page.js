import { Link } from 'react-router-dom';

function PageNotFound() {
  return (
    <div className="flex justify-center items-center md:h-screen bg-black bg-opacity-80 flex-col">
      <h1 className="text-white text-3xl font-bold my-4">WHOOPS!!</h1>
      <h2 className="text-white text-xl font-bold mb-5">404 page not found</h2>
      <p className="text-white text-sm ">
        The page you're looking for could have been deleted or never have
        existed*
      </p>
      <Link to="/">
        <button className="bg-yellow-600 hover:bg-black hover:bg-opacity-70 text-white font-bold py-2 px-4 rounded my-5">
          go back to home page
        </button>
      </Link>
    </div>
  );
}

export default PageNotFound;
