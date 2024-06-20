import React, { useState } from 'react';
import { VenueRegistrationForm, VendorRegistrationForm } from './businessRegistration';
import { styles } from "../styles/style";

const Business: React.FC = () => {
  const [showVendorForm, setShowVendorForm] = useState(true);

  const handleToggleForm = () => {
    setShowVendorForm(prevState => !prevState);
  };

  return (
    <div className="w-fit mx-auto p-6 bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold text-center mb-6">Business Registration</h2>
      <div className="flex justify-center mb-6">
        <button
          className={`py-2 px-4 rounded-md ${showVendorForm ? 'bg-[#173445] text-white' : 'bg-gray-300 text-gray-700'}`}
          onClick={handleToggleForm}
        >
          Vendor Registration
        </button>
        <button
          className={`ml-4 py-2 px-4 rounded-md ${!showVendorForm ? 'bg-[#173445] text-white' : 'bg-gray-300 text-gray-700'}`}
          onClick={handleToggleForm}
        >
          Venue Registration
        </button>
      </div>
      <div className="p-6 bg-gray-100 rounded-md">
        {showVendorForm ? <VendorRegistrationForm /> : <VenueRegistrationForm />}
      </div>
    </div>
  );
};

export default Business;
