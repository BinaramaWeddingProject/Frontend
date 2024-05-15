import React from 'react';

interface VendorInfoProps {
    name: string;
    location: string;
}

const VendorInfo: React.FC<VendorInfoProps> = ({ name, location }) => {
    return (
        <div className="border border-gray-200 rounded p-4 ">
            <h2 className="text-xl font-semibold mb-2 mx-4">{name}</h2>
            <p className="text-gray-600 mx-4">{location}</p>
        </div>
    );
};

export default VendorInfo;
