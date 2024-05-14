import React, { useState } from 'react';
import { Link } from 'react-router-dom';



const NavBar: React.FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);

  const toggleDropdown = (link: string) => {
    setDropdownOpen(prevLink => (prevLink === link ? null : link));
  };

  return (
    <nav className="bg-[#110069] py-4 relative z-10"> {/* Added relative positioning and higher z-index */}
      <ul className="flex justify-start">
        <li className="relative mx-4" onMouseEnter={() => toggleDropdown('home')} onMouseLeave={() => toggleDropdown('home')}>
          <span className="text-white cursor-pointer">Home</span>
          {dropdownOpen === 'home' && (
            <ul className="absolute top-full left-0 bg-[#110069] text-white p-2 z-20"> {/* Added higher z-index */}
              <li>
                <Link to="/home/option1" className="border-white hover:text-gray-200">Option 1</Link>
              </li>
              <li>
                <Link to="/home/option2" className="hover:text-gray-200">Option 2</Link>
              </li>
            </ul>
          )}
        </li>
        <li className="relative mx-4" onMouseEnter={() => toggleDropdown('venues')} onMouseLeave={() => toggleDropdown('venues')}>
          <span className="text-white cursor-pointer">Venues</span>
          {dropdownOpen === 'venues' && (
            <ul className="absolute top-full left-0 bg-[#110069] text-white p-2 z-20"> {/* Added higher z-index */}
              <li>
                <Link to="/venues/option1" className="hover:text-gray-200">Option 1</Link>
              </li>
              <li>
                <Link to="/venues/option2" className="hover:text-gray-200">Option 2</Link>
              </li>
            </ul>
          )}
        </li>
        <li className="relative mx-4" onMouseEnter={() => toggleDropdown('Vendors')} onMouseLeave={() => toggleDropdown('Vendors')}>
          <span className="text-white cursor-pointer">Vendors</span>
          {dropdownOpen === 'Vendors' && (
            <ul className="absolute top-full left-0 bg-[#110069] text-white p-2 z-20"> {/* Added higher z-index */}
              <li>
                <Link to="/vendors/option1" className="hover:text-gray-200">Option 1</Link>
              </li>
              <li>
                <Link to="/vendors/option2" className="hover:text-gray-200">Option 2</Link>
              </li>
            </ul>
          )}
        </li>
        <li className="relative mx-4" onMouseEnter={() => toggleDropdown('AboutUs')} onMouseLeave={() => toggleDropdown('AboutUs')}>
          <span className="text-white cursor-pointer">About Us</span>
          {dropdownOpen === 'AboutUs' && (
            <ul className="absolute top-full left-0 bg-[#110069] text-white p-2 z-20"> {/* Added higher z-index */}
              <li>
                <Link to="/about/option1" className="hover:text-gray-200">Option 1</Link>
              </li>
              <li>
                <Link to="/about/option2" className="hover:text-gray-200">Option 2</Link>
              </li>
            </ul>
          )}
        </li>

       
      

        <ul className='ml-auto relative mx-4'>
          <li>
            <Link to="/login" className="text-white hover:text-gray-200">Login</Link>
          </li>
          <li>
            <Link to="/vendorcard" className="text-white hover:text-gray-200">Vendor</Link>
          </li>
        </ul>

      </ul>
      
    </nav>


  );
};

export default NavBar;
