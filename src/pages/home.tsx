
import NavBar from "../components/navbar";
import InformationBanner from "../components/InformationBanner";
import Footer from "../components/Footer";
import { useRankedVenuesQuery } from "../redux/api/venue";
import VenueCard from "../components/VenueCard"; // Adjust the import path as needed
import { AllVenuesResponse } from "../types/api-types";

const imageUrl = "/wv_homepage-min.gif";

const Home = () => {
  // Fetch ranked venues using useRankedVenuesQuery hook
  const { data: venuesData, isLoading, error } = useRankedVenuesQuery();

  // Type assertion to specify the shape of venuesData
  const venues = venuesData?.data?.venues as AllVenuesResponse['data']['venues'] || [];

  // Handle error appropriately based on its type
  const errorMessage = error 
    ? 'status' in error 
      ? `Error: ${error.status} - ${JSON.stringify(error.data)}` 
      : error.message
    : null;

  return (
    <div>
      <NavBar />
      <div className="relative">
        <div
          className="bg-cover bg-center h-screen"
          style={{
            backgroundImage: `url(${imageUrl})`,
          }}
        >
          <div className="bg-black bg-opacity-50 h-full flex flex-col justify-center items-center">
            {/* Additional content or components */}
          </div>
        </div>
      </div>
      <div className="py-12 ">
        <h2 className="text-3xl text-gray-900 font-bold text-center mb-8">Top Rated Venues</h2>
        {isLoading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>{errorMessage}</div>
        ) : (
          <div className="flex justify-center items-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 scale-90 -mt-16">
              {/* Map over venues and render VenueCard for each venue */}
              {venues.map((venue: any, index: number) => (
                // Ensure only top 5 ranked venues are rendered
                  <VenueCard
                    key={index}
                    venue={{
                      name: venue.businessName,
                      location: venue.city,
                      maxGuests: venue.guestCapacity,
                      contact: venue.phone,
                      description: venue.summary,
                      vegPrice: venue.foodPackages,
                      // nonVegPrice: 30, // Example, adjust as per your data structure
                      
                      images: venue.images,
                      id: venue._id,
                    }}
                  />
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="py-12 bg-white">
        <InformationBanner />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
