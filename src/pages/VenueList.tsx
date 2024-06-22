import  { useState, useEffect, useCallback } from 'react';
import VenueCard from '../components/VenueCard';
import NavBar from '../components/navbar';
import RelatedArticles from '../components/RelatedArticles';
import Footer from '../components/Footer';
import { Venue } from '../types/types';
import { useAllVenueQuery } from '../redux/api/venue';
import Universal from '../components/skeleton/Universal';
import FilterBar from '../components/FilterBar';

function VenueList() {
  const [filters, setFilters] = useState({});
  const queryString = new URLSearchParams(
    Object.entries(filters).filter(([, v]) => v !== undefined) as [string, string][]
  ).toString();
  const { data, error, isLoading } = useAllVenueQuery(queryString);
  const [allVenues, setAllVenues] = useState<Venue[]>([]);

  const updateVenues = useCallback(() => {
    if (data && Array.isArray(data.data)) {
      setAllVenues(data.data);
    }
  }, [data]);

  useEffect(() => {
    updateVenues();
  }, [updateVenues]);

  const allowedVenues = allVenues.filter(
    (venue) => venue.isVerified === "Approved"
  );

  const handleFilterChange = (newFilters: any) => {
    // Remove undefined values from filters
    const cleanFilters = Object.fromEntries(
      Object.entries(newFilters).filter(([, v]) => v != null && v !== '')
    );
    setFilters(cleanFilters);
  };

  if (error) {
    return <h1>Error while loading data</h1>;
  }

  if (isLoading) {
    return <Universal />;
  }

  console.log("venue" , allVenues  , allowedVenues)
  return (
    <div className="flex flex-col min-h-screen  bg-[#fffdd0]">
      <NavBar />
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/4">
            <FilterBar onFilterChange={handleFilterChange} />
          </div>
          <div className="w-full md:w-3/4">
            <div className="grid grid-cols-1 gap-4">
              {allVenues.length > 0 ? (
                allVenues.map((venue) => (
                  <VenueCard
                    key={venue._id}
                    venue={{
                      name: venue?.businessName,
                      location: venue.city,
                      maxGuests: venue.guestCapacity,
                      contact: venue.phone,
                      description: venue.summary,
                      vegPrice: venue.foodPackages,
                      nonVegPrice: 30,
                      images: venue?.images,
                      id: venue._id,
                    }}
                  />
                ))
              ) : (
                <div>No Venues found</div>
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