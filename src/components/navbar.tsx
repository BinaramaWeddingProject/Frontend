import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUser, FaBell } from "react-icons/fa";
// import { useGetAllNotificationQuery } from "../redux/api/notification";

const NavBar: React.FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const [notificationOpen, setNotificationOpen] = useState<boolean>(false);
  const [clickedNotification, setClickedNotification] = useState<string | null>(null);

  // const { data: notifications } = useGetAllNotificationQuery();
  // const notification= notifications?.notifications;

  // console.log("notidfications", notification);

  const toggleDropdown = (link: string) => {
    setDropdownOpen((prevLink) => (prevLink === link ? null : link));
  };

  const toggleNotification = () => {
    setNotificationOpen((prevNotification) => !prevNotification);
  };

  const closeNotification = () => {
    setNotificationOpen(false);
  };

  const handleNotificationClick = (id: string) => {
    // Toggle clicked state of notification
    setClickedNotification((prevClickedNotification) =>
      prevClickedNotification === id ? null : id
    );
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
            // onMouseEnter={() => toggleDropdown("venues")}
            // onMouseLeave={() => setDropdownOpen(null)}
          >
            <Link
              to="/venuelist"
              className="text-white cursor-pointer hover:text-gray-200"
            >
              Venues
            </Link>
            {/* {dropdownOpen === "venues" && (
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
            )} */}
          </li>
          {/* Vendors Dropdown */}
          <li
            className="relative mx-4"
            // onMouseEnter={() => toggleDropdown("vendors")}
            // onMouseLeave={() => setDropdownOpen(null)}
          >
            <Link
              to={`/vendor/AllVendors`}
              className="text-white cursor-pointer hover:text-gray-200"
            >
              Vendors
            </Link>
            {/* {dropdownOpen === "vendors" && (
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
              </ul> */}
            {/* )} */}
          </li>
          {/* About Us Dropdown */}
          <li
            className="relative mx-4"
            // onMouseEnter={() => toggleDropdown("AboutUs")}
            // onMouseLeave={() => setDropdownOpen(null)}
          >
            <Link
              to="/about"
              className="text-white cursor-pointer hover:text-gray-200"
            >
              About Us
            </Link>
            {/* {dropdownOpen === "AboutUs" && (
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
            )} */}
          </li>
          {/* Login */}
          <li className="ml-auto relative mx-4">
            <Link to="/login" className="text-white hover:text-gray-200">
              Login
            </Link>
          </li>

          {/* Notification */}
          <li className="ml-auto relative mx-4">
            <button
              className="text-white hover:text-gray-200"
              onClick={toggleNotification}
            >
              <FaBell style={{ color: "white" }} />
            </button>
            {notificationOpen && (
              <ul
                className="absolute right-0 bg-blue-200 text-white p-2 m-2 w-48 rounded-md shadow-md"
                onClick={closeNotification}
              >
                {/* Render notifications dynamically */}
                {/* {notification?.map((notification: any) => (
                  <li key={notification.id}> */}
                  {/* <Link
                    to={`/notifications/${notification._id}`}
                    className={`hover:text-gray-200 m-4 border-b border-white ${clickedNotification === notification._id ? 'bg-gray-400' : ''}`}
                    onClick={() => handleNotificationClick(notification._id)}
                  >
                    New User Available
                  </Link> */}
                {/* </li> */}
                {/* ))} */}
                {/* {!notification?.length && <li>No notifications</li>} */}
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
