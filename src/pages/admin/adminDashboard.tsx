import { useEffect, useState } from "react";
import Profile from "./components/profile/profile"; // Assuming 'profile' is the name of the file containing the Profile component
import AdminManagement from "./components/management/adminManagement";
import VendorManagement from "./components/management/vendorManagement";
import VenueManagement from "./components/management/venueManagement";
import UserManagement from "./components/management/userManagement";
import { useNavigate, useParams } from "react-router-dom";
import BlogManagement from "./components/management/blogManagement";
import RealWeddingManagement from "./components/management/realWeddingManagement";
// import BookingManagement from './components/bookingManagement';

import { useDispatch } from 'react-redux';
import { AppDispatch } from "../../redux/store";
import { logout } from "../../redux/reducer/auth";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const { page } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const [selectedSection, setSelectedSection] = useState<string | undefined>("");

  useEffect(() => {
    if (page) {
      setSelectedSection(page);
    }
  }, [page]);

  const handleButtonClick = (sectionName: string) => {
    setSelectedSection(sectionName);
    navigate(`/adminDashboard/${sectionName}`);
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  const renderSection = () => {
    switch (selectedSection) {
      case "Admin Management":
        return <AdminManagement />;
      case "Vendor Management":
        return <VendorManagement />;
      case "Venue Management":
        return <VenueManagement />;
      case "User Management":
        return <UserManagement />;
      case "Blog Management":
        return <BlogManagement />;
      case "Real Wedding Management":
        return <RealWeddingManagement />;
      // case "Booking Management":
      //   return <BookingManagement />;
      default:
        return <Profile />; // Render Profile by default
    }
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/5 bg-gray-800 text-white p-4 flex flex-col items-center">
        <div className="flex items-center mb-4">
          <img src="/path/to/your/logo.png" alt="Logo" className="w-12 h-12 mr-2" />
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        </div>
        <ul className="mt-4 w-full">
          <li
            className={`py-2 px-4 rounded-lg mb-2 hover:bg-gray-700 cursor-pointer ${
              selectedSection === "Profile" ? "bg-gray-700" : ""
            }`}
            onClick={() => handleButtonClick("Profile")}
          >
            Profile
          </li>
          <li
            className={`py-2 px-4 rounded-lg mb-2 hover:bg-gray-700 cursor-pointer ${
              selectedSection === "Admin Management" ? "bg-gray-700" : ""
            }`}
            onClick={() => handleButtonClick("Admin Management")}
          >
            Admin Management
          </li>
          <li
            className={`py-2 px-4 rounded-lg mb-2 hover:bg-gray-700 cursor-pointer ${
              selectedSection === "Vendor Management" ? "bg-gray-700" : ""
            }`}
            onClick={() => handleButtonClick("Vendor Management")}
          >
            Vendor Management
          </li>
          <li
            className={`py-2 px-4 rounded-lg mb-2 hover:bg-gray-700 cursor-pointer ${
              selectedSection === "Venue Management" ? "bg-gray-700" : ""
            }`}
            onClick={() => handleButtonClick("Venue Management")}
          >
            Venue Management
          </li>
          <li
            className={`py-2 px-4 rounded-lg mb-2 hover:bg-gray-700 cursor-pointer ${
              selectedSection === "User Management" ? "bg-gray-700" : ""
            }`}
            onClick={() => handleButtonClick("User Management")}
          >
            User Management
          </li>
          <li
            className={`py-2 px-4 rounded-lg mb-2 hover:bg-gray-700 cursor-pointer ${
              selectedSection === "Blog Management" ? "bg-gray-700" : ""
            }`}
            onClick={() => handleButtonClick("Blog Management")}
          >
            Blog Management
          </li>
          <li
            className={`py-2 px-4 rounded-lg mb-2 hover:bg-gray-700 cursor-pointer ${
              selectedSection === "Real Wedding Management" ? "bg-gray-700" : ""
            }`}
            onClick={() => handleButtonClick("Real Wedding Management")}
          >
            Real Wedding Management
          </li>
          {/* <li className={`py-2 px-4 bg-gray-700 hover:bg-gray-600 cursor-pointer ${selectedSection === "Booking Management" ? 'bg-gray-600' : ''}`} onClick={() => handleButtonClick("Booking Management")}>Booking Management</li> */}
        </ul>
        <button onClick={handleLogout} className="mt-auto bg-red-600 hover:bg-red-500 py-2 px-4 rounded">
          Logout
        </button>
      </div>
      <div className="flex-1 p-8 bg-gray-100">
        {renderSection()}
      </div>
    </div>
  );
};

export default AdminDashboard;
