import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
  } from "react-icons/fa";
  import { MdLocationOn, MdPhone, MdEmail } from "react-icons/md";
  
  const Footer = () => {
    return (
      <footer className="bg-[#3F181C] text-gray-300 py-10">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* About Section */}
          <div>
            <h2 className="text-xl font-bold mb-4 text-orange-400">About Us</h2>
            <p className="text-sm">
              We are committed to delivering high-quality solutions and services
              to meet your needs. Our mission is to empower your digital presence.
            </p>
          </div>
  
          {/* Links Section */}
          <div>
            <h2 className="text-xl font-bold mb-4 text-orange-400">Quick Links</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="hover:text-indigo-500">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-indigo-500">
                  About
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-indigo-500">
                  Services
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-indigo-500">
                  Contact
                </a>
              </li>
            </ul>
          </div>
  
          {/* Contact Section */}
          <div>
            <h2 className="text-xl font-bold mb-4 text-orange-400">Contact Us</h2>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-2">
                <MdLocationOn className="text-lg text-orange-500" />
                123 Street Name, City, Country
              </li>
              <li className="flex items-center gap-2">
                <MdPhone className="text-lg text-orange-500" />
                +123 456 7890
              </li>
              <li className="flex items-center gap-2">
                <MdEmail className="text-lg text-orange-500" />
                support@example.com
              </li>
            </ul>
          </div>
        </div>
  
        {/* Social Media and Copyright */}
        <div className="mt-10 border-t border-gray-700 pt-6">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=100009024259143"
                className="p-2 rounded-full bg-orange-800 hover:bg-orange-400 transition duration-500"
              >
                <FaFacebookF className="text-white" />
              </a>
              <a
                href="https://x.com/Mo_Fayez751?t=chriHp9qfW5agoYTDxK99g&s=09"
                className="p-2 rounded-full bg-orange-800 hover:bg-orange-400 transition duration-500"
              >
                <FaTwitter className="text-white" />
              </a>
              <a
                href="https://www.instagram.com/mo_fayez_10/"
                className="p-2 rounded-full bg-orange-800 hover:bg-orange-400 transition duration-500"
              >
                <FaInstagram className="text-white" />
              </a>
              <a
                href="www.linkedin.com/in/mohamed-fayez-59156a252"
                className="p-2 rounded-full bg-orange-800 hover:bg-orange-400 transition duration-500"
              >
                <FaLinkedinIn className="text-white" />
              </a>
            </div>
            <p className="text-sm mt-4 md:mt-0">
              &copy; 2024 Mohamed fayez. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  