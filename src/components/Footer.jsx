import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <section
      id="contact"
    >
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 px-6">
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* About */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">
            About Kenwick Remedies Private Limited
          </h3>
          <p className="text-sm leading-relaxed">
            KenWick is committed to delivering genuine medicines and
            healthcare products with trust, safety, and fast service.
            Your health is our priority.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">
            Quick Links
          </h3>
          <ul className="space-y-3 text-sm">
            <li>
              <a href="#about" className="hover:text-sky-400 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#products" className="hover:text-sky-400 transition">
                Products
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-sky-400 transition">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-sky-400 transition">
                About Us
              </a>
            </li>
          </ul>
        </div>

        {/* Corporate Office */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">
            Corporate Office
          </h3>
          <div className="text-sm space-y-2">
            <p>+91 7903263072</p>
            <p>+91 8619336778</p>
            <p>kenwickremedies@gmail.com</p>
          </div>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">
            Follow Us
          </h3>

          <div className="flex gap-4 mt-2">
            <a
              href="#"
              className="bg-gray-800 p-3 rounded-full hover:bg-sky-500 transition duration-300"
            >
              <FaFacebookF />
            </a>

            <a
              href="#"
              className="bg-gray-800 p-3 rounded-full hover:bg-pink-500 transition duration-300"
            >
              <FaInstagram />
            </a>

            <a
              href="#"
              className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 transition duration-300"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="#"
              className="bg-gray-800 p-3 rounded-full hover:bg-sky-400 transition duration-300"
            >
              <FaTwitter />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Strip */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-400">
        © 2026 All Rights Reserved 
      </div>

    </footer>

    </section>
  );
}