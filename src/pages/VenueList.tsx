import React, { useState, useEffect } from 'react';
import VenueCard from '../components/VenueCard';
import NavBar from '../components/navbar';
import RelatedArticles from '../components/RelatedArticles';
import Footer from '../components/Footer';
import { Venue } from '../types/types';
import { useAllVenueQuery } from '../redux/api/venue';
import TopFilter from '../components/TopFilter';
import FilterBar from '../components/FilterBar';
import { mockVenues } from '../data';

function VenueList() {
  const { data, error, isLoading } = useAllVenueQuery("");
  const [allvenue, setAllVenues] = useState<Venue[]>([]);

  useEffect(() => {
    if (data) {
      setAllVenues(data.data.venues);
    }
  }, [data]);

  if (error) {
    return <h1>Error while loading data</h1>;
  }

  if (isLoading) {
    return <h1>Loading</h1>;
  }

  console.log("all venues", allvenue);

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <TopFilter />
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/4">
          <FilterBar venues={mockVenues} />
        </div>
        <div className="w-full md:w-3/4">
          <div className="grid grid-cols-1 gap-4">
            {allvenue.length > 0 ? (
              allvenue.map((venue, index) => (
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
