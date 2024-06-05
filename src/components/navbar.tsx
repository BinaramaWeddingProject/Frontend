import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUser, FaBell } from "react-icons/fa";

const NavBar: React.FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const [notificationOpen, setNotificationOpen] = useState<boolean>(false);

  const toggleDropdown = (link: string) => {
    setDropdownOpen((prevLink) => (prevLink === link ? null : link));
  };

  const toggleNotification = () => {
    setNotificationOpen((prevNotification) => !prevNotification);
  };

  const closeNotification = () => {
    setNotificationOpen(false);
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
          {/* Venues Dropdown */}
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
          {/* Vendors Dropdown */}
          <li
            className="relative mx-4"
            onMouseEnter={() => toggleDropdown("vendors")}
            onMouseLeave={() => setDropdownOpen(null)}
          >
            <Link
              to={`/vendor/AllVendors`}
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
          {/* About Us Dropdown */}
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
          {/* Login */}
          <li className="ml-auto relative mx-4">
            <Link to="/login" className="text-white hover:text-gray-200">
              Login
            </Link>
          </li>

          {/* Notification */}
          <li className="nl-auto relative mx-4">
            <button
              className="text-white hover:text-gray-200"
              onClick={toggleNotification}
            >
              <FaBell style={{ color: "white" }} />
            </button>
            {notificationOpen && (
              <ul
                className="absolute top-full right-0 bg-[#110069] text-white p-2 z-20 rounded-md shadow-md"
                onClick={closeNotification}
              >
                {/* Notification Items */}
                <li>
                  <Link to="/notifications" className="hover:text-gray-200">
                    Notification 1
                  </Link>
                </li>
                <li>
                  <Link to="/notifications" className="hover:text-gray-200">
                    Notification 2
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* User Profile */}
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
