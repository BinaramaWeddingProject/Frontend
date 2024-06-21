// VenueList.tsx

import { useState, useEffect } from 'react';
import VenueCard from '../components/VenueCard';
import NavBar from '../components/navbar';
import RelatedArticles from '../components/RelatedArticles';
import Footer from '../components/Footer';
import { Venue } from '../types/types';
import { useAllVenueQuery } from '../redux/api/venue';
import Universal from '../components/skeleton/Universal';
// import TopFilter from '../components/TopFilter';
// import FilterBar from '../components/FilterBar';


function VenueList() {
  const [filters] = useState({});
  const filtersString = JSON.stringify(filters);
  const { data, error, isLoading } = useAllVenueQuery(filtersString);
  const [allVenues, setAllVenues] = useState<Venue[]>([]);

  useEffect(() => {
    if (data) {
      setAllVenues(data.data.venues);
    }
  }, [data]);

  // const handleFilterChange = (newFilters: Filter) => {
  //   setFilters((prevFilters) => ({
  //     ...prevFilters,
  //     ...newFilters,
  //   }));
  // };

  if (error) {
    return <h1>Error while loading data</h1>;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      {/* <TopFilter onChange={handleFilterChange} /> */}
      <div className="flex flex-grow container mx-auto">
        <div className="w-1/4 ">
          {/* <FilterBar  onChange={handleFilterChange} /> */}
        </div>
        <div className="w-full md:w-3/4">
          <div className="grid grid-cols-1 gap-4">
            {isLoading ? (
              Array.from({ length: 4 }).map((_, index) => (
                <Universal key={index} />
              ))
            ) : allVenues.length > 0 ? (
              allVenues.map((venue, index) =>
                venue.isVerified === "Approved" ? (
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
                ) : null
              )
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
