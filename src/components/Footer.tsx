import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex flex-col lg:flex-row justify-center lg:justify-evenly items-center">
        <div className="text-center lg:text-left">
          <h2 className="text-lg font-bold">Stay Connected</h2>
          <div className="flex justify-center md:justify-start items-start space-x-4 mt-4">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-3xl hover:text-blue-500" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-3xl hover:text-blue-500" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-3xl hover:text-blue-500" />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-3xl hover:text-blue-500" />
            </a>
          </div>
        </div>
        <div className="text-center lg:text-left mt-8 lg:mt-0">
          <h2 className="text-lg font-bold">Contact Us</h2>
          <p className="mt-4">123 Street, City, Country</p>
          <p>Phone: +1234567890</p>
          <p>Email: info@example.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
