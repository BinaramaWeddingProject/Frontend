import React, { useState, useEffect, useCallback } from 'react';
import VenueCard from '../components/VenueCard';
import NavBar from '../components/navbar';
import RelatedArticles from '../components/RelatedArticles';
import Footer from '../components/Footer';
import { Venue } from '../types/types';
import { useAllVenueQuery } from '../redux/api/venue';
import Universal from '../components/skeleton/Universal';
import FilterBar from '../components/FilterBar';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

function VenueList() {
  const [filters, setFilters] = useState<Record<string, string>>({}); // Ensure filters state type
  const [allVenues, setAllVenues] = useState<Venue[]>([]);

  const city = useSelector((state: RootState) => state?.auth?.city);

  const handleFilterChange = useCallback((newFilters: Record<string, string>) => {
    // Remove empty string values from filters
    const cleanFilters = Object.fromEntries(
      Object.entries(newFilters).filter(([, v]) => v !== '')
    );
    setFilters(cleanFilters);
  }, []);

  // const queryString = Object.keys(filters).length > 0
  //   ? new URLSearchParams(filters as Record<string, string>).toString()
  //   : '';

  const filterParams = Object.keys(filters).length > 0 ? filters : undefined;
const { data, error, isLoading } = useAllVenueQuery(filterParams);

  useEffect(() => {
    if (data && Array.isArray(data.data)) {
      setAllVenues(data.data);
    }
  }, [data]);

  const allowedVenues = allVenues.filter(
    (venue) => venue.isVerified === 'Approved'
  );

  if (error) {
    return <h1>Error while loading data</h1>;
  }

  if (isLoading) {
    return <Universal />;
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#fffdd0]">
      <NavBar />
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/4">
            <FilterBar onFilterChange={handleFilterChange} />
          </div>
          <div className="w-full md:w-3/4">
            <div className="grid grid-cols-1 gap-4">
              {allowedVenues.length > 0 ? (
                allowedVenues.map((venue, index) => (
                  <VenueCard
                    key={index}
                    venue={{
                      name: venue?.businessName,
                      location: venue.city,
                      maxGuests: venue.guestCapacity,
                      contact: venue.phone,
                      description: venue.summary,
                      vegPrice: venue.foodPackages,
                      nonVegPrice: 30, // Adjust this according to your data structure
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
      </div>
      <div className="mt-8">
        <RelatedArticles />
      </div>
      <Footer />
    </div>
  );
}

export default VenueList;
