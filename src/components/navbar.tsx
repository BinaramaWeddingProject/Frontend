import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";

const NavBar: React.FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);

  const toggleDropdown = (link: string) => {
    setDropdownOpen((prevLink) => (prevLink === link ? null : link));
  };

  return (
    <nav className="bg-[#110069] py-4 relative z-10">
      <div className="container mx-auto">
        <ul className="flex justify-start items-center">
          <li className="relative mx-4">
            <Link
              to="/"
              className="text-white cursor-pointer hover:text-gray-200"
            >
              Home
            </Link>
          </li>
          <li
            className="relative mx-4"
            onMouseEnter={() => toggleDropdown("venues")}
            onMouseLeave={() => setDropdownOpen(null)}
          >
            <Link
              to="/venuelist"
              className="text-white cursor-pointer hover:text-gray-200"
            >
              Venues
            </Link>
            {dropdownOpen === "venues" && (
              <ul
                className="absolute top-full left-0 bg-[#110069] text-white p-2 z-20 rounded-md shadow-md"
                onMouseEnter={() => setDropdownOpen("venues")}
                onMouseLeave={() => setDropdownOpen(null)}
              >
                <li>
                  <Link to="/venues/option1" className="hover:text-gray-200">
                    Option 1
                  </Link>
                </li>
                <li>
                  <Link to="/venues/option2" className="hover:text-gray-200">
                    Option 2
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li
            className="relative mx-4"
            onMouseEnter={() => toggleDropdown("vendors")}
            onMouseLeave={() => setDropdownOpen(null)}
          >
            <Link
              to={`/vendorslist/AllVendors`}
              className="text-white cursor-pointer hover:text-gray-200"
            >
              Vendors
            </Link>
            {dropdownOpen === "vendors" && (
              <ul
                className="absolute top-full left-0 bg-[#110069] text-white p-2 z-20 rounded-md shadow-md"
                onMouseEnter={() => setDropdownOpen("vendors")}
                onMouseLeave={() => setDropdownOpen(null)}
              >
                <li>
                  <Link to="/vendors/option1" className="hover:text-gray-200">
                    Option 1
                  </Link>
                </li>
                <li>
                  <Link to="/vendors/option2" className="hover:text-gray-200">
                    Option 2
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li
            className="relative mx-4"
            onMouseEnter={() => toggleDropdown("AboutUs")}
            onMouseLeave={() => setDropdownOpen(null)}
          >
            <Link
              to="/about"
              className="text-white cursor-pointer hover:text-gray-200"
            >
              About Us
            </Link>
            {dropdownOpen === "AboutUs" && (
              <ul
                className="absolute top-full left-0 bg-[#110069] text-white p-2 z-20 rounded-md shadow-md"
                onMouseEnter={() => setDropdownOpen("AboutUs")}
                onMouseLeave={() => setDropdownOpen(null)}
              >
                <li>
                  <Link to="/about/option1" className="hover:text-gray-200">
                    Option 1
                  </Link>
                </li>
                <li>
                  <Link to="/about/option2" className="hover:text-gray-200">
                    Option 2
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li className="ml-auto relative mx-4">
            <Link to="/login" className="text-white hover:text-gray-200">
              Login
            </Link>
          </li>
          <li className="relative mx-4">
            <Link
              to="/vendorProfilePage"
              className="text-white hover:text-gray-200"
            >
              <FaUser style={{ color: "white" }} />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
