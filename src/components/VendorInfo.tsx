import React from "react";

interface VendorInfoProps {
  name?: string;
  location?: string;
}

const VendorInfo: React.FC<VendorInfoProps> = ({
  name = "AWESOME PHOTOGRAPHER",
  location = "DELHI",
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">{name}</h2>
      <p className="text-gray-600">{location}</p>
      <div className="mt-4 flex items-center">
        {/* <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                    </svg>
                </div> */}
        {/* <p className="ml-2 text-sm text-gray-500">View details</p> */}
      </div>
    </div>
  );
};

export default VendorInfo;
