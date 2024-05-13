import React, { useState } from 'react';

const LocationSelector: React.FC = () => {
  const [selectedLocation, setSelectedLocation] = useState<string>(''); // State to store the selected location

  const handleLocationChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedLocation(event.target.value); // To Update the selected location when user changes it
  };

  return (
    <div className="mt-4 text-center">
      <label htmlFor="location" className="block text-white text-2xl font-bold mb-2">Select Location:</label>
      <select
        id="location"
        className="appearance-none border rounded  w-64 md:w-[550px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        value={selectedLocation}
        onChange={handleLocationChange}
      >
        <option value="">Select a location...</option>
        <option value="delhi">Delhi</option>
        <option value="ghaziabad">Ghaziabad</option>
        {/* Add more locations as needed */}
      </select>
    </div>
  );
};

export default LocationSelector;
