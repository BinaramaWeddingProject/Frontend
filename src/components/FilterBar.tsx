import React, { useState } from 'react';

interface FilterBarProps {
  onFilterChange: (filters: any) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({ onFilterChange }) => {
  const [businessName, setBusinessName] = useState('');
  const [city, setCity] = useState('');
  const [minGuests, setMinGuests] = useState('');
  const [maxGuests, setMaxGuests] = useState('');
  const [foodPackage, setFoodPackage] = useState('');
  const [facilities, setFacilities] = useState('');
  const [venueTypes, setVenueTypes] = useState('');

  const handleFilterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const filters = {
      businessName: businessName || undefined,
      city: city || undefined,
      minGuests: minGuests || undefined,
      maxGuests: maxGuests || undefined,
      foodPackage: foodPackage || undefined,
      facilities: facilities || undefined,
      venueTypes: venueTypes || undefined,
    };
    onFilterChange(filters);
  };

  return (
    <form onSubmit={handleFilterSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="mb-4">
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Venue Name"
          value={businessName}
          onChange={(e) => setBusinessName(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="number"
          placeholder="Min Guests"
          value={minGuests}
          onChange={(e) => setMinGuests(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="number"
          placeholder="Max Guests"
          value={maxGuests}
          onChange={(e) => setMaxGuests(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Food Package"
          value={foodPackage}
          onChange={(e) => setFoodPackage(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Facilities (comma-separated)"
          value={facilities}
          onChange={(e) => setFacilities(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Venue Types (comma-separated)"
          value={venueTypes}
          onChange={(e) => setVenueTypes(e.target.value)}
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Apply Filters
        </button>
      </div>
    </form>
  );
};

export default FilterBar;