export default function Footer() {
  return (
    <>
      <div
        className="bg-cover bg-center py-10 px-4"
        style={{
          backgroundImage: "url('/img/background-image.png')",
        }}
      >
        <div className="container mx-auto text-center mb-6">
          <h2 className="text-2xl font-bold mb-2">Join our newsletter and get offers</h2>
          <p className="mb-4">Sign up our newsletter</p>
          <div className="flex justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded-l-lg focus:outline-none w-64 sm:w-80"
            />
            <button className="bg-red-500 text-white p-2 rounded-r-lg hover:bg-red-600 transition duration-300">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>
      <footer className="bg-gray-800 text-white py-10">
        <div className="bg-gray-900 py-8">
          <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-center sm:text-left">
            <div>
              <h3 className="font-semibold mb-3">ABOUT US</h3>
              <p className="text-gray-400 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquet lacinia nulla ut laoreet.
              </p>
              <div className="flex justify-center sm:justify-start space-x-4 mt-4">
                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-whatsapp"></i>
                <i className="fab fa-instagram"></i>
                <i className="fab fa-youtube"></i>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-3">INFORMATION</h3>
              <ul className="text-gray-400 text-sm space-y-2">
                <li>About</li>
                <li>Delivery Information</li>
                <li>Privacy Policy</li>
                <li>Sales</li>
                <li>Terms & Conditions</li>
                <li>EMI Payment</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">ACCOUNT</h3>
              <ul className="text-gray-400 text-sm space-y-2">
                <li>My Account</li>
                <li>My Orders</li>
                <li>Returns</li>
                <li>Shipping</li>
                <li>Wishlist</li>
                <li>Account Details</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">STORE</h3>
              <ul className="text-gray-400 text-sm space-y-2">
                <li>Affiliate</li>
                <li>Discounts</li>
                <li>Sale</li>
                <li>Contact</li>
                <li>All Collections</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">CONTACT US</h3>
              <p className="text-gray-400 text-sm">If you have any query, please contact us</p>
              <p className="text-red-400">needus24@gmail.com</p>
              <p className="text-gray-400 text-sm mt-2">California, USA</p>
              <p className="text-gray-400 text-sm">+12012987481</p>
            </div>
          </div>
        </div>
        <div className="bg-gray-800 py-4 text-center text-gray-500">
          <p>&copy; 2023 All Right Reserved</p>
        </div>
      </footer>
    </>
  );
}