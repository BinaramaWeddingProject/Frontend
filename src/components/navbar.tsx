// import React from "react";
// import { Link } from "react-router-dom";
// import { FaUser, FaBell } from "react-icons/fa";

// const NavBar: React.FC = () => {
//   return (
//     <nav className="bg-gradient-to-r from-purple-700 to-indigo-900 py-4 shadow-lg fixed w-full z-10">
//       <div className="container mx-auto flex justify-between items-center px-4">
//         {/* Logo */}
//         <div className="text-white font-bold text-2xl">
//           <Link to="/" className="flex items-center space-x-2">
//             <img
//               src="https://via.placeholder.com/40"
//               alt="Logo"
//               className="w-10 h-10 rounded-full"
//             />
//             <span>WeddingZ</span>
//           </Link>
//         </div>

//         {/* Navigation Links */}
//         <ul className="flex items-center space-x-8">
//           <li>
//             <Link
//               to="/"
//               className="text-white text-lg hover:text-gray-200 transition duration-200"
//             >
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="/venuelist"
//               className="text-white text-lg hover:text-gray-200 transition duration-200"
//             >
//               Venues
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="/vendor/AllVendors"
//               className="text-white text-lg hover:text-gray-200 transition duration-200"
//             >
//               Vendors
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="/about"
//               className="text-white text-lg hover:text-gray-200 transition duration-200"
//             >
//               About Us
//             </Link>
//           </li>
//         </ul>

//         {/* Right-side Icons */}
//         <div className="flex items-center space-x-6">
//           <Link
//             to="/login"
//             className="text-white text-lg hover:text-gray-200 transition duration-200"
//           >
//             Login
//           </Link>
//           <Link
//             to="/notification"
//             className="text-white hover:text-gray-200 transition duration-200"
//           >
//             <FaBell className="w-6 h-6" />
//           </Link>
//           <Link
//             to="/vendorProfilePage"
//             className="text-white hover:text-gray-200 transition duration-200"
//           >
//             <FaUser className="w-6 h-6" />
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default NavBar;

// *****************************************************************

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaBell, FaBars, FaTimes } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';


const NavBar: React.FC = () => {
 
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);

  const role =  useSelector((state: RootState) => state?.auth?.user?.role) ;
  console.log("role" , role)
  
  let url =  "/"; 
  if(role === "vendor") url = '/vendorProfilePage'
  if(role === "venue") url = '/venueProfilePage'
  if(role === "user") url = 'userProfilePage'
  
  console.log(url)


 
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="bg-[#A31F24] py-3 px-6 relative z-10">
      <div className="container mx-auto flex md:justify-between justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold">Logo</Link>

        <div className="options">
          <ul className="hidden md:flex justify-center items-center space-x-8 flex-grow">
            <li className="relative">
              <Link to="/" className="text-white hover:text-gray-200">Home</Link>
            </li>
            {/* Venues Dropdown */}
            <li
              className="relative"
             
            >
              <Link to="/venuelist" className="text-white hover:text-gray-200">Venues</Link>
              
            </li>
            {/* Vendors Dropdown */}
            <li
              className="relative"
             
            >
              <Link to="/vendor/AllVendors" className="text-white hover:text-gray-200">Vendors</Link>
             
            </li>
            <li>
              <Link to="/blogs  " className="text-white hover:text-gray-200">Blogs</Link>
            </li>
            
            <li>
              <Link to="/realWeddings  " className="text-white hover:text-gray-200">Real Weddings</Link>
            </li>

            <li>
              <Link to="/aboutus1" className="text-white hover:text-gray-200">Why Us</Link>
            </li>
          </ul>
        </div>

        <div className="icons flex space-x-4">
          <ul className="space-x-4 hidden md:block">
            {isLoggedIn && (
              <li className="relative">
                <button className="text-white hover:text-gray-200">
                  <FaBell />
                </button>
              </li>
            )}
          </ul>

          <ul className="flex items-center space-x-4">
            {!isLoggedIn && (
              <li className="relative hidden md:block">
                <Link to="/login" className="text-white hover:text-gray-200">Login</Link>
              </li>
            )}
            {isLoggedIn && (
              <li className="relative hidden md:block">
                <Link to= {url} className="text-white hover:text-gray-200">
                  <FaUser />
                </Link>
              </li>
            )}
          </ul>
        </div>

        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-white">
            {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-[#173445] text-white flex flex-col items-center justify-center space-y-4 z-10 transition-transform duration-300">
          <button onClick={toggleMobileMenu} className="absolute top-4 right-4 text-white">
            <FaTimes size={24} />
          </button>
          <ul className="flex flex-col items-center space-y-4">
            <li>
              <Link to="/" className="text-2xl" onClick={toggleMobileMenu}>Home</Link>
            </li>
            <li>
              <Link to="/venuelist" className="text-2xl" onClick={toggleMobileMenu}>Venues</Link>
            </li>
            <li>
              <Link to="/vendor/AllVendors" className="text-2xl" onClick={toggleMobileMenu}>Vendors</Link>
            </li>
            <li>
              <Link to="/about" className="text-2xl" onClick={toggleMobileMenu}>About Us</Link>
            </li>
            {!isLoggedIn && (
              <li>
                <Link to="/login" className="text-2xl" onClick={toggleMobileMenu}>Login</Link>
              </li>
            )}
            {isLoggedIn && (
              <li>
                <Link to="/vendorProfilePage" className="text-2xl" onClick={toggleMobileMenu}><FaUser /></Link>
              </li>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;