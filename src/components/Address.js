function Address(props) {
  return (
    <>
      <ul className="w-5/12 bg-black text-white bg-opacity-90 p-12 rounded">
        <li className="flex mb-8 mt-8">
          <i class="fas fa-map-marker-alt text-yellow-600 text-5xl"></i>
          <div className="ml-8 ">
            <h5 className="font-bold text-sm text-white mb-3">Our location</h5>
            <p className="text-gray-300 text-sm ">Near AIIMS Patna Walmi</p>
          </div>
        </li>
        <li className="flex mb-8">
          <i class="fas fa-phone text-5xl text-yellow-600"></i>
          <div className="ml-8 ">
            <h5 className="font-bold text-sm text-white mb-3">Contact us</h5>
            <p className="text-gray-300 text-sm">+91 9876543210</p>
          </div>
        </li>
        <li className="flex mb-8">
          <i class="fas fa-envelope-open text-5xl text-yellow-600"></i>
          <div className="ml-8 ">
            <h5 className="font-bold text-sm text-white mb-3">Email Us</h5>
            <p className="text-gray-300 text-sm">moluhouse@gmail.com</p>
          </div>
        </li>
      </ul>
    </>
  );
}

export default Address;
