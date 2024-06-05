import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const localities = ['Mumbai', 'Pune', 'Delhi', 'Bangalore'];
const guestOptions = ['50-60 guests', '100-200 guests', '200-300 guests'];
const budgetOptions = ['₹5000-₹10000', '₹10000-₹20000', '₹20000-₹50000'];

const TopFilter: React.FC = () => {
  const [selectedLocality, setSelectedLocality] = useState('');
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedGuests, setSelectedGuests] = useState('');
  const [selectedBudget, setSelectedBudget] = useState('');

  const handleSearch = () => {
    const filters = {
      locality: selectedLocality,
      date: selectedDate,
      guests: selectedGuests,
      budget: selectedBudget,
    };
    console.log('Applied Filters:', filters);
    // Implement the search functionality based on filters
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