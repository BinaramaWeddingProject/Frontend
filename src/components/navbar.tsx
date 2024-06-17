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
    <nav className="bg-[#173445] py-4 px-6 relative z-10">
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
              <Link to="/blog" className="text-white hover:text-gray-200">Blogs</Link>
            </li>
            <li>
              <Link to="/about" className="text-white hover:text-gray-200">Why Us</Link>
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
