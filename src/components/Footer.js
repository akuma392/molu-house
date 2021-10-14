import { Link } from 'react-router-dom';

function Footer(props) {
  return (
    <>
      <footer class="footer bg-black bg-opacity-90 text-white text-center relative pt-1 border-b-2 border-blue-700">
        <div class="container mx-auto px-6">
          <div class="sm:flex sm:mt-8">
            <div class="mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-row justify-between items-center">
              <div class="flex flex-col">
                <div className="w-32 h-32">
                  <Link to="/">
                    <img
                      className="w-full"
                      src="media/molu house logo210802-01.png"
                      alt="logo"
                    />
                  </Link>
                </div>
                <span>Molu House</span>
              </div>
              <div class="flex flex-col">
                <span class="my-1">
                  <Link className="text-md font-bold">About us</Link>
                </span>
                <span class="my-1">
                  <Link className="text-md font-bold">Services</Link>
                </span>
                <span class="my-1">
                  <Link className="text-md font-bold">Contact us</Link>
                </span>
              </div>
              <div className="flex">
                <span className="">
                  <a
                    href="#"
                    className="text-white  text-md hover:text-blue-200"
                  >
                    <i className="fab fa-facebook-square text-2xl"></i>
                  </a>
                </span>
                <span className="mx-5">
                  <a
                    href="#"
                    className="text-white  text-md hover:text-blue-200"
                  >
                    <i className="fab fa-instagram-square text-2xl"></i>
                  </a>
                </span>
                <span className="">
                  <a
                    href="#"
                    className="text-white  text-md hover:text-blue-200"
                  >
                    <i className="fab fa-twitter-square text-2xl"></i>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-6">
          <div className="mt-16 border-t-2 border-gray-300 flex flex-col items-center">
            <div className="sm:w-2/3 text-center py-6">
              <p className="text-sm  font-bold mb-2">©2021 by Molu house</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
