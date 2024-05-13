import React from 'react';
import { Link } from 'react-router-dom';

interface LocationCardProps {
  locationName: string;
  imageUrl: string;
  venuesLink: string;
  vendorsLink: string;
}

const LocationCard: React.FC<LocationCardProps> = ({ locationName, imageUrl, venuesLink, vendorsLink }) => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg m-12"> {/* Increased margin to 'm-6' for more spacing */}
      <img className="w-full" src={imageUrl} alt={locationName} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{locationName}</div>
        <div className="flex justify-between">
          <Link to={venuesLink} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Venues</Link>
          <Link to={vendorsLink} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Vendors</Link>
        </div>
      </div>
    </div>
  );
};

export default LocationCard;
