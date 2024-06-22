import { useState, useEffect } from 'react';
import VenueCard from '../components/VenueCard';
import NavBar from '../components/navbar';
import RelatedArticles from '../components/RelatedArticles';
import Footer from '../components/Footer';
import { Venue } from '../types/types';
import { useAllVenueQuery } from '../redux/api/venue';
import Universal from '../components/skeleton/Universal'; // Assuming this is a loading skeleton component

function VenueList() {
  const [filters] = useState({}); // State for filters (currently unused)
  const filtersString = JSON.stringify(filters); // Stringified version of filters (currently unused)
  const {  data, error, isLoading } = useAllVenueQuery(filtersString); // Fetching venues using custom hook
  const [allVenues, setAllVenues] = useState<Venue[]>([]);


  // console.log("data", venue?.data);
  
  // // Effect to update allVenues when data changes
  useEffect(() => {
    if (data && data.data && data.data.venues) {
      setAllVenues(data.data.venues);
    }
  }, [data]);

  useEffect(() => {
    if (data && data.data && data.data.venues) {
      console.log("bsdk" ,allVenues);
    }
  }, [data]);
 

  // Error handling: render an error message if data fetching fails
  if (error) {
    return <h1>Error while loading data</h1>;
  }

  // Loading state: render a loading skeleton if data is still being fetched
  if (isLoading) {
    return <Universal />;
  }


  // Render the VenueList component
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar /> {/* Render the NavBar component */}
      <div className="flex flex-grow container mx-auto">
        {/* FilterBar and TopFilter components are currently commented out */}
        {/* <div className="w-1/4 ">
          <FilterBar onChange={handleFilterChange} />
        </div> */}
        <div className="w-full md:w-3/4">
          <div className="grid grid-cols-1 gap-4">
            {isLoading ? ( // Render loading skeleton if isLoading is true
              Array.from({ length: 4 }).map((_, index) => (
                <Universal key={index} />
              ))
            ) : allVenues.length > 0 ? ( // Render VenueCard components if allVenues has data
              allVenues?.map((venue, index) =>
                venue.isVerified === "Approved" ? ( // Check if venue is approved
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
                ) : <div key={index}>Vendor error</div> // Render an error message if vendor is not approved
              )
            ) : (
              <div>No Venues found</div> // Render a message if no venues are found
            )}
          </div>
        </div>
      </div>
      <div className="mt-8">
        <RelatedArticles /> {/* Render RelatedArticles component */}
      </div>
      <Footer /> {/* Render Footer component */}
    </div>
  );
}

export default VenueList;
