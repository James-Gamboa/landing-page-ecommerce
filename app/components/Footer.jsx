import Image from "next/image";

export default function Footer() {
  return (
    <>
      <div
        className="relative bg-cover bg-center py-10 px-4"
        style={{ backgroundImage: "url('/img/background-image.png')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="container mx-auto text-white relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-6 md:mb-0">
              <h2 className="text-2xl font-bold mb-2">
                Join our newsletter and get offers
              </h2>
              <p>Sign up for our newsletter</p>
            </div>

            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-3 text-lg border border-gray-300 rounded-l-lg focus:outline-none w-72 sm:w-96"
              />
              <button className="bg-[#FF5722] text-white p-3 px-8 text-lg rounded-r-lg hover:bg-red-600 transition duration-300">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-custom-high-gray text-white py-10">
        <div className="py-8">
          <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-center sm:text-left">
            <div>
              <h3 className="font-semibold mb-3">ABOUT US</h3>
              <p className="text-white text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                aliquet lacinia nulla ut laoreet.
              </p>
              <div className="flex justify-center sm:justify-start space-x-4 mt-4">
                <Image
                  src="/img/logo-facebook.png"
                  alt="Logo Facebook"
                  width={20}
                  height={20}
                />
                <Image
                  src="/img/logo-whatsapp.png"
                  alt="Logo Whatsapp"
                  width={20}
                  height={20}
                />
                <Image
                  src="/img/logo-instagram.png"
                  alt="Logo Instagram"
                  width={20}
                  height={20}
                />
                <Image
                  src="/img/logo-youtube.png"
                  alt="Logo Youtube"
                  width={20}
                  height={20}
                />
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-3">INFORMATION</h3>
              <ul className="text-white text-sm space-y-2">
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
              <ul className="text-white text-sm space-y-2">
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
              <ul className="text-white text-sm space-y-2">
                <li>Affiliate</li>
                <li>Discounts</li>
                <li>Sale</li>
                <li>Contact</li>
                <li>All Collections</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">CONTACT US</h3>
              <p className="text-white text-sm">
                If you have any query, please contact us
              </p>
              <p className="text-custom-light-orange">needus24@gmail.com</p>
              <div className="flex items-center space-x-2">
                <Image
                  src="/img/logo-location.png"
                  alt="Logo Location"
                  width={30}
                  height={30}
                />
                <p className="text-white text-sm mt-2">California, USA</p>
              </div>
              <div className="flex items-center space-x-2">
                <Image
                  src="/img/logo-mobile.png"
                  alt="Logo Mobile"
                  width={30}
                  height={30}
                />
                <p className="text-white text-sm">+12012987481</p>
              </div>
            </div>
          </div>
        </div>
        <div className="py-4 text-center text-gray-500">
          <p>&copy; 2023 All Right Reserved</p>
        </div>
      </footer>
    </>
  );
}
