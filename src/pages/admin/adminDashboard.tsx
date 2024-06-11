import { useEffect, useState } from "react";
import Profile from "./components/profile"; // Assuming 'profile' is the name of the file containing the Profile component
import AdminManagement from "./components/management/adminManagement";
import VendorManagement from "./components/management/vendorManagement";
import VenueManagement from "./components/management/venueManagement";
import UserManagement from "./components/management/userManagement";
import { useNavigate, useParams } from "react-router-dom";
// import BookingManagement from './components/bookingManagement';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const section = useParams();

  console.log("hello buddy", section);
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
    console.log("welcome", selectedSection);
    switch (selectedSection) {
      case "Admin Management":
        return <AdminManagement />;
      case "Vendor Management":
        return <VendorManagement />;
      case "Venue Management":
        return <VenueManagement />;
      case "User Management":
        return <UserManagement />;
      // case "Booking Management":
      //     return <BookingManagement/>
      default:
        return <Profile />; // Render nothing by default or for other sections
    }
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/5 bg-gray-800 text-white p-4">
        {/* <h2 className="text-lg font-semibold">Sidebar</h2> */}
        <ul className="mt-4">
          <li
            className={`py-2 px-4 bg-gray-700 hover:bg-gray-600 cursor-pointer ${
              selectedSection === "Profile" ? "bg-gray-600" : ""
            }`}
            onClick={() => handleButtonClick("Profile")}
          >
            Profile
          </li>
          <li
            className={`py-2 px-4 bg-gray-700 hover:bg-gray-600 cursor-pointer ${
              selectedSection === "Admin Management" ? "bg-gray-600" : ""
            }`}
            onClick={() => handleButtonClick("Admin Management")}
          >
            Admin Management
          </li>
          <li
            className={`py-2 px-4 bg-gray-700 hover:bg-gray-600 cursor-pointer ${
              selectedSection === "Vendor Management" ? "bg-gray-600" : ""
            }`}
            onClick={() => handleButtonClick("Vendor Management")}
          >
            Vendor Management
          </li>
          <li
            className={`py-2 px-4 bg-gray-700 hover:bg-gray-600 cursor-pointer ${
              selectedSection === "Venue Management" ? "bg-gray-600" : ""
            }`}
            onClick={() => handleButtonClick("Venue Management")}
          >
            Venue Management
          </li>
          <li
            className={`py-2 px-4 bg-gray-700 hover:bg-gray-600 cursor-pointer ${
              selectedSection === "User Management" ? "bg-gray-600" : ""
            }`}
            onClick={() => handleButtonClick("User Management")}
          >
            User Management
          </li>
          {/* <li className={`py-2 px-4 bg-gray-700 hover:bg-gray-600 cursor-pointer ${selectedSection === "Booking Management" ? 'bg-gray-600' : ''}`} onClick={() => handleButtonClick("Booking Management")}>Booking Management</li> */}
        </ul>
        <button className="mt-4 bg-red-600 hover:bg-red-500 py-2 px-4 rounded">
          Logout
        </button>
      </div>
      <div className="flex-1 p-4">
        {/* <h1 className="text-2xl font-semibold">Admin Dashboard</h1> */}
        {renderSection()}
      </div>
      {/* <div className="w-1/4 bg-gray-700 text-white p-4">
                <h2 className="text-lg font-semibold">Topbar</h2>
                {/* Your topbar content goes here */}
      {/* </div> */}
    </div>
  );
};

export default AdminDashboard;
