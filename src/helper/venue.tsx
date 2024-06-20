// VenueList.tsx

import { useState, useEffect } from 'react';
import VenueCard from '../components/VenueCard';
import NavBar from '../components/navbar';
import RelatedArticles from '../components/RelatedArticles';
import Footer from '../components/Footer';
import { Filter, Venue } from '../types/types';
import { useAllVenueQuery } from '../redux/api/venue';
import TopFilter from '../components/TopFilter';
import FilterBar from '../components/FilterBar';
import { mockVenues } from '../data';


function VenueList() {
  const [filters, setFilters] = useState({});
  const filtersString = JSON.stringify(filters); 
  console.log("filters" , filters);
  console.log("strign" , filtersString)
  const queryString = new URLSearchParams(filters).toString();
  console.log("url" , queryString)
  
  const { data, error, isLoading } = useAllVenueQuery(filtersString);
  const [allVenues, setAllVenues] = useState<Venue[]>([]);

  useEffect(() => {
    if (data) { 
      setAllVenues(data.data.venues);
    }
  }, [data]);

  const handleFilterChange = (newFilters:Filter) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      ...newFilters,
    }));
  };

  if (error) {
    return <h1>Error while loading data</h1>;
  }

  if (isLoading) {
    return <h1>Loading</h1>;
  }

  console.log("all venues", allVenues);
  

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <TopFilter onChange={handleFilterChange} />
      <div className="flex flex-grow container mx-auto">
        <div className="w-1/4 ">
          <FilterBar venues={mockVenues} onChange={handleFilterChange} />
        </div>
        <div className="w-3/4">
          <div className="grid grid-cols-1 gap-4">
            {allVenues.length > 0 ? (
              allVenues.map((venue, index) => (
                <VenueCard
                  key={index}
                  venue={{
                    name: venue?.businessName,
                    location: venue.city,
                    maxGuests: venue.guestCapacity,
                    contact: venue.phone,
                    description: venue.summary,
                    vegPrice: 20,
                    nonVegPrice: 30,
                    images: venue.images,
                    id: venue._id,
                  }}
                />
              ))
            ) : (
              <div>No Venue found</div>
            )}
          </div>
        </div>
      </div>
      <div className="mt-8">
        <RelatedArticles />


      </div>
      <Footer />
    </div>
  );
}

export default VenueList;





// FilterBar.tsx

import React, { useState } from 'react';
import { mockVenues, Venue } from './../data';

enum FilterCategories {
  Locality,
  Budget,
  VenueType,
  Facilities,
  MealPreferences,
}

interface FilterBarProps {
  
    onChange: (filters: { foodPackage: string; facilities: string; venueType: string }) => void; 
}

const FilterBar: React.FC<FilterBarProps> = ({ onChange }) => {
  const [selectedFilters, setSelectedFilters] = useState<{wha
    [key in FilterCategories]: string[];
  }>({
    [FilterCategories.Locality]: [],
    [FilterCategories.Budget]: [],
    [FilterCategories.VenueType]: ['Banquet Halls'],
    [FilterCategories.Facilities]: [],
    [FilterCategories.MealPreferences]: [],
  });

  const handleFilterChange = (category: FilterCategories, value: string) => {
    setSelectedFilters((prevFilters) => {
      const newFilters = {
        ...prevFilters,
        [category]: prevFilters[category].includes(value)
          ? prevFilters[category].filter((item) => item !== value)
          : [...prevFilters[category], value],
      };
      onChange(newFilters);
      return newFilters;
    });
  };

  const clearFilters = (category: FilterCategories) => {
    setSelectedFilters((prevFilters) => {
      const newFilters = {
        ...prevFilters,
        [category]: [],
      };
      onChange(newFilters);
      return newFilters;
    });
  };

  return (
    <div className="bg-gray-800 p-2 sticky top-0 left-[75%]">
      <div className="m-2">
        <h3 className="text-lg font-bold m-2 text-white">
          Applied Filters ({Object.values(selectedFilters).flatMap((filter) => filter).length})
        </h3>
        <button
          className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => {
            const newFilters = {
              [FilterCategories.Locality]: [],
              [FilterCategories.Budget]: [],
              [FilterCategories.VenueType]: [],
              [FilterCategories.Facilities]: [],
              [FilterCategories.MealPreferences]: [],
            };
            setSelectedFilters(newFilters);
            onChange(newFilters);
          }}
        >
          Clear
        </button>
      </div>
      <div className="h-[550px] overflow-y-auto snap-y">
        <div className="snap-start h-72 p-4">
          <h4 className="text-md font-bold mb-2 text-white">Locality ({selectedFilters[FilterCategories.Locality].length})</h4>
          <button
            className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-1 px-2 rounded mb-2"
            onClick={() => clearFilters(FilterCategories.Locality)}
          >
            Clear
          </button>
          <div className="max-h-48 overflow-y-auto">
            {Array.from(new Set(mockVenues.map((venue) => venue.locality))).map((locality) => (
              <div key={locality} className="p-2">
                <label className="text-white">
                  <input
                    type="checkbox"
                    checked={selectedFilters[FilterCategories.Locality].includes(locality)}
                    onChange={() => handleFilterChange(FilterCategories.Locality, locality)}
                    className="mr-2"
                  />
                  {locality}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="snap-start h-72 p-4">
          <h4 className="text-md font-bold mb-2 text-white">Budget ({selectedFilters[FilterCategories.Budget].length})</h4>
          <button
            className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-1 px-2 rounded mb-2"
            onClick={() => clearFilters(FilterCategories.Budget)}
          >
            Clear
          </button>
          <div className="max-h-48 overflow-y-auto">
            {Array.from(new Set(mockVenues.map((venue) => venue.budget))).map((budget) => (
              <div key={budget} className="p-2">
                <label className="text-white">
                  <input
                    type="checkbox"
                    checked={selectedFilters[FilterCategories.Budget].includes(budget)}
                    onChange={() => handleFilterChange(FilterCategories.Budget, budget)}
                    className="mr-2"
                  />
                  {budget}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="snap-start h-72 p-4">
          <h4 className="text-md font-bold mb-2 text-white">Venue Type ({selectedFilters[FilterCategories.VenueType].length})</h4>
          <button
            className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-1 px-2 rounded mb-2"
            onClick={() => clearFilters(FilterCategories.VenueType)}
          >
            Clear
          </button>
          <div className="max-h-48 overflow-y-auto">
            {Array.from(new Set(mockVenues.map((venue) => venue.venueType))).map((venueType) => (
              <div key={venueType} className="p-2">
                <label className="text-white">
                  <input
                    type="checkbox"
                    checked={selectedFilters[FilterCategories.VenueType].includes(venueType)}
                    onChange={() => handleFilterChange(FilterCategories.VenueType, venueType)}
                    className="mr-2"
                  />
                  {venueType}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="snap-start h-72 p-4">
          <h4 className="text-md font-bold mb-2 text-white">Facilities ({selectedFilters[FilterCategories.Facilities].length})</h4>
          <button
            className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-1 px-2 rounded mb-2"
            onClick={() => clearFilters(FilterCategories.Facilities)}
          >
            Clear
          </button>
          <div className="max-h-48 overflow-y-auto">
            {Array.from(new Set(mockVenues.flatMap((venue) => venue.facilities))).map((facility) => (
              <div key={facility} className="p-2">
                <label className="text-white">
                  <input
                    type="checkbox"
                    checked={selectedFilters[FilterCategories.Facilities].includes(facility)}
                    onChange={() => handleFilterChange(FilterCategories.Facilities, facility)}
                    className="mr-2"
                  />
                  {facility}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;


// TopFilter.tsx

import React, { useState  } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const localities = ['Mumbai', 'Pune', 'Delhi', 'Bangalore'];
const guestOptions = ['50-60 guests', '100-200 guests', '200-300 guests'];
const budgetOptions = ['₹5000-₹10000', '₹10000-₹20000', '₹20000-₹50000'];

interface Props {
  onChange: (filters: { city: string; guests: string; budget: string }) => void; // Define the type explicitly
}



const TopFilter: React.FC<Props>  = ({ onChange}) => {
  const [selectedLocality, setSelectedLocality] = useState('');
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedGuests, setSelectedGuests] = useState('');
  const [selectedBudget, setSelectedBudget] = useState('');

  const handleSearch = () => {
    const filters = {
      city: selectedLocality,
      guests: selectedGuests,
      budget: selectedBudget,
    };
    onChange(filters);
  };

  return (
    <div className="flex flex-wrap space-x-4 bg-gray-800 p-4 shadow-md">
      <div className="flex-grow">
        <input 
          type="text" 
          placeholder="Search for Venue, Locality" 
          className="w-full p-2 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none"
        />
      </div>
      <div>
        <select
          value={selectedLocality}
          onChange={(e) => setSelectedLocality(e.target.value)}
          className="p-2 rounded-md bg-gray-700 text-white focus:outline-none"
        >
          <option value="">Locality</option>
          {localities.map((locality) => (
            <option key={locality} value={locality}>{locality}</option>
          ))}
        </select>
      </div>
      <div>
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          placeholderText="Event Date"
          className="p-2 rounded-md bg-gray-700 text-white focus:outline-none"
        />
      </div>
      <div>
        <select
          value={selectedGuests}
          onChange={(e) => setSelectedGuests(e.target.value)}
          className="p-2 rounded-md bg-gray-700 text-white focus:outline-none"
        >
          <option value="">Guests</option>
          {guestOptions.map((option) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      </div>
      <div>
        <select
          value={selectedBudget}
          onChange={(e) => setSelectedBudget(e.target.value)}
          className="p-2 rounded-md bg-gray-700 text-white focus:outline-none"
        >
          <option value="">Budget</option>
          {budgetOptions.map((option) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      </div>
      <button
        onClick={handleSearch}
        className="bg-pink-600 p-2 rounded-md text-white focus:outline-none"
      >
        Search
      </button>
    </div>
  );
};

export default TopFilter;
