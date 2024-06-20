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

const AdminDashboard = () => {
  const navigate = useNavigate();
  const section = useParams();

  // console.log("hello buddy", section);
  const [selectedSection, setSelectedSection] = useState<string | undefined>(
    ""
  ); // Provide a default value of an empty string

  // Ensure section exists before setting it

  useEffect(() => {
    if (section) {
      setSelectedSection(section.page);
      renderSection();
    }
  }, [section]);
  // Function to handle button click and update selected section
  const handleButtonClick = (sectionName: string) => {
    setSelectedSection(sectionName);
    if (sectionName === "Profile") {
      navigate("/adminDashboard");
    }
  };

  const renderSection = () => {
    // console.log("welcome", selectedSection);
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
      //     return <BookingManagement/>
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
        <button className="mt-auto bg-red-600 hover:bg-red-500 py-2 px-4 rounded">
          Logout
        </button>
      </div>
      <div className="flex-1 p-8 bg-gray-100">
        {/* <h2 className="text-3xl font-semibold mb-4">{selectedSection || "Profile"}</h2> */}
        {renderSection()}
      </div>
    </div>
  );
};

export default AdminDashboard;
