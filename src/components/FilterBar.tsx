// // FilterBar.tsx

// import React, { useState } from 'react';
// import { mockVenues, Venue } from './../data';

// enum FilterCategories {
//   Locality,
//   Budget,
//   VenueType,
//   Facilities,
//   MealPreferences,
// }

// interface FilterBarProps {
  
//     onChange: (filters: { foodPackage: string; facilities: string; venueType: string }) => void; 
// }

// const FilterBar: React.FC<FilterBarProps> = ({ onChange }) => {
//   const [selectedFilters, setSelectedFilters] = useState<{wha
//     [key in FilterCategories]: string[];
//   }>({
//     [FilterCategories.Locality]: [],
//     [FilterCategories.Budget]: [],
//     [FilterCategories.VenueType]: ['Banquet Halls'],
//     [FilterCategories.Facilities]: [],
//     [FilterCategories.MealPreferences]: [],
//   });

//   const handleFilterChange = (category: FilterCategories, value: string) => {
//     setSelectedFilters((prevFilters) => {
//       const newFilters = {
//         ...prevFilters,
//         [category]: prevFilters[category].includes(value)
//           ? prevFilters[category].filter((item) => item !== value)
//           : [...prevFilters[category], value],
//       };
//       onChange(newFilters);
//       return newFilters;
//     });
//   };

//   const clearFilters = (category: FilterCategories) => {
//     setSelectedFilters((prevFilters) => {
//       const newFilters = {
//         ...prevFilters,
//         [category]: [],
//       };
//       onChange(newFilters);
//       return newFilters;
//     });
//   };

//   return (
//     <div className="bg-gray-800 p-2 sticky top-0 left-[75%]">
//       <div className="m-2">
//         <h3 className="text-lg font-bold m-2 text-white">
//           Applied Filters ({Object.values(selectedFilters).flatMap((filter) => filter).length})
//         </h3>
//         <button
//           className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded"
//           onClick={() => {
//             const newFilters = {
//               [FilterCategories.Locality]: [],
//               [FilterCategories.Budget]: [],
//               [FilterCategories.VenueType]: [],
//               [FilterCategories.Facilities]: [],
//               [FilterCategories.MealPreferences]: [],
//             };
//             setSelectedFilters(newFilters);
//             onChange(newFilters);
//           }}
//         >
//           Clear
//         </button>
//       </div>
//       <div className="h-[550px] overflow-y-auto snap-y">
//         <div className="snap-start h-72 p-4">
//           <h4 className="text-md font-bold mb-2 text-white">Locality ({selectedFilters[FilterCategories.Locality].length})</h4>
//           <button
//             className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-1 px-2 rounded mb-2"
//             onClick={() => clearFilters(FilterCategories.Locality)}
//           >
//             Clear
//           </button>
//           <div className="max-h-48 overflow-y-auto">
//             {Array.from(new Set(mockVenues.map((venue) => venue.locality))).map((locality) => (
//               <div key={locality} className="p-2">
//                 <label className="text-white">
//                   <input
//                     type="checkbox"
//                     checked={selectedFilters[FilterCategories.Locality].includes(locality)}
//                     onChange={() => handleFilterChange(FilterCategories.Locality, locality)}
//                     className="mr-2"
//                   />
//                   {locality}
//                 </label>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="snap-start h-72 p-4">
//           <h4 className="text-md font-bold mb-2 text-white">Budget ({selectedFilters[FilterCategories.Budget].length})</h4>
//           <button
//             className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-1 px-2 rounded mb-2"
//             onClick={() => clearFilters(FilterCategories.Budget)}
//           >
//             Clear
//           </button>
//           <div className="max-h-48 overflow-y-auto">
//             {Array.from(new Set(mockVenues.map((venue) => venue.budget))).map((budget) => (
//               <div key={budget} className="p-2">
//                 <label className="text-white">
//                   <input
//                     type="checkbox"
//                     checked={selectedFilters[FilterCategories.Budget].includes(budget)}
//                     onChange={() => handleFilterChange(FilterCategories.Budget, budget)}
//                     className="mr-2"
//                   />
//                   {budget}
//                 </label>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="snap-start h-72 p-4">
//           <h4 className="text-md font-bold mb-2 text-white">Venue Type ({selectedFilters[FilterCategories.VenueType].length})</h4>
//           <button
//             className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-1 px-2 rounded mb-2"
//             onClick={() => clearFilters(FilterCategories.VenueType)}
//           >
//             Clear
//           </button>
//           <div className="max-h-48 overflow-y-auto">
//             {Array.from(new Set(mockVenues.map((venue) => venue.venueType))).map((venueType) => (
//               <div key={venueType} className="p-2">
//                 <label className="text-white">
//                   <input
//                     type="checkbox"
//                     checked={selectedFilters[FilterCategories.VenueType].includes(venueType)}
//                     onChange={() => handleFilterChange(FilterCategories.VenueType, venueType)}
//                     className="mr-2"
//                   />
//                   {venueType}
//                 </label>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="snap-start h-72 p-4">
//           <h4 className="text-md font-bold mb-2 text-white">Facilities ({selectedFilters[FilterCategories.Facilities].length})</h4>
//           <button
//             className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-1 px-2 rounded mb-2"
//             onClick={() => clearFilters(FilterCategories.Facilities)}
//           >
//             Clear
//           </button>
//           <div className="max-h-48 overflow-y-auto">
//             {Array.from(new Set(mockVenues.flatMap((venue) => venue.facilities))).map((facility) => (
//               <div key={facility} className="p-2">
//                 <label className="text-white">
//                   <input
//                     type="checkbox"
//                     checked={selectedFilters[FilterCategories.Facilities].includes(facility)}
//                     onChange={() => handleFilterChange(FilterCategories.Facilities, facility)}
//                     className="mr-2"
//                   />
//                   {facility}
//                 </label>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FilterBar;
