import React from "react";
import { Link } from "react-router-dom";
import { FaUser, FaBell } from "react-icons/fa";
// import { useGetAllNotificationQuery } from "../redux/api/notification";

const NavBar: React.FC = () => {
  return (
    <nav className="bg-[#110069] py-4 relative z-10">
      <div className="container mx-auto">
        <ul className="flex justify-start items-center">
          {/* Home */}
          <li className="relative mx-4">
            <Link
              to="/"
              className="text-white cursor-pointer hover:text-gray-200"
            >
              Home
            </Link>
          </li>

          {/* Venues */}
          <li className="relative mx-4">
            <Link
              to="/venuelist"
              className="text-white cursor-pointer hover:text-gray-200"
            >
              Venues
            </Link>
          </li>

          {/* Vendors */}
          <li className="relative mx-4">
            <Link
              to={`/vendor/AllVendors`}
              className="text-white cursor-pointer hover:text-gray-200"
            >
              Vendors
            </Link>
          </li>

          {/* About Us */}
          <li className="relative mx-4">
            <Link
              to="/about"
              className="text-white cursor-pointer hover:text-gray-200"
            >
              About Us
            </Link>
          </li>

          {/* Login */}
          <li className="ml-auto relative mx-4">
            <Link to="/login" className="text-white hover:text-gray-200">
              Login
            </Link>
          </li>

          {/* Notification */}
          <li className="ml-auto relative mx-4">
            <Link to="/notification" className="text-white hover:text-gray-200">
              <FaBell style={{ color: "white" }} />
            </Link>
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
