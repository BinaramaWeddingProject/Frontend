import React from 'react';
import Carousel from '../components/Carousel';
import VenuePriceCard from '../components/VenuePriceCard';
import SlimVenueCard from '../components/SlimVenueCard';
import VenueAboutCard from '../components/VenueAboutCard';
import VenueBooking from '../components/VenueBookings';
import RatingsAndReviews from '../components/RatingsAndReviews';
import NavBar from '../components/navbar';
import Footer from '../components/Footer';
import MenuCard from '../components/MenuCard';
import VenueLocation from '../components/VenueLocation';

function VenueServicePage() {
    const handleContactClick = () => {
        alert('Contact button clicked!');
    };

    // Dummy function to simulate availability check
    const checkAvailability = (date: Date): boolean => {
        // Replace with actual logic to check availability
        return date.getDay() % 2 === 0; // Example: available on even days
    };

    const venue = {
        name: "Elegant Banquet Hall",
        address: "1234 Elm Street, Springfield, IL 62704"
    };

    const dummyImages = [
        'https://picsum.photos/id/200/800/400',
        'https://picsum.photos/800/400',
        'https://picsum.photos/id/210/800/400',
        // Add more image URLs here
    ];

    const aboutVenue = {
        about: "Our venue offers a beautiful and spacious area perfect for any type of event. With top-notch amenities and a dedicated staff, we ensure your event is a memorable one.",
        contactNumber: "+1 (234) 567-890"
    };

    const vegItems = [
        { name: 'Chaat Counter', quantity: 1 },
        { name: 'Live Counter', quantity: 1 },
        { name: 'Welcome Drinks', quantity: 1 },
        { name: 'Veg Starter', quantity: 2 },
        { name: 'Veg Main Courses', quantity: 2 },
        { name: 'Salads', quantity: 2 },
        { name: 'Raita', quantity: 1 },
        { name: 'Dal', quantity: 1 },
        { name: 'Rice/Biryani', quantity: 1 },
        { name: 'Assorted Breads/Rotis', quantity: 2 },
        { name: 'Desserts', quantity: 1 },
    ];

    const nonVegItems = [
        { name: 'Chaat Counter', quantity: 1 },
        { name: 'Fruit Counter', quantity: 1 },
        { name: 'Live Counter', quantity: 1 },
        { name: 'Welcome Drinks', quantity: 2 },
        { name: 'Soups', quantity: 1 },
        { name: 'Veg Starter', quantity: 2 },
        { name: 'Non-Veg Starter', quantity: 2 },
        { name: 'Veg Main Courses', quantity: 2 },
        { name: 'Salads', quantity: 2 },
        { name: 'Non-Veg Main Courses', quantity: 2 },
        { name: 'Raita', quantity: 1 },
        { name: 'Dal', quantity: 1 },
        { name: 'Rice/Biryani', quantity: 1 },
        { name: 'Assorted Breads/Rotis', quantity: 2 },
        { name: 'Desserts', quantity: 1 },
    ];
    return (
        <div className="p-4 bg-gray-100">
            <NavBar />
            <div className="mb-8">
                <Carousel images={dummyImages} />
            </div>
            <div className="w-full flex flex-col lg:flex-row lg:space-x-4">
                <div className="w-3/4 space-y-4">
                    <div className="bg-white p-4 rounded-lg shadow-lg">
                        <SlimVenueCard name={venue.name} address={venue.address} />
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-lg">
                        <VenueAboutCard about={aboutVenue.about} contactNumber={aboutVenue.contactNumber} />
                    </div>
                    <div className="flex flex-col lg:flex-row lg:space-x-4">
                        <div className="w-full lg:w-1/2">
                            <VenueBooking checkAvailability={checkAvailability} />
                        </div>
                        <div className="w-full lg:w-1/2">
                            <RatingsAndReviews
                                overallRating={4.5}
                                reviews={[
                                    { rating: 5, comment: "Great venue!" },
                                    { rating: 4, comment: "Nice ambiance." },
                                    { rating: 4, comment: "Good service." },
                                    { rating: 3, comment: "Could be better." },
                                ]}
                            />
                        </div>
                    </div>
                    <div className="mt-8">
                        <MenuCard
                            vegPrice={1200}
                            nonVegPrice={1300}
                            vegItems={vegItems}
                            nonVegItems={nonVegItems}
                        />
                    </div>
                </div>
                <div className="w-1/4 h-80 lg:w-1/4 flex justify-center items-center bg-white p-4 rounded-lg shadow-lg sticky left-[75%] top-0">
                    <VenuePriceCard
                        name="Grand Venue"
                        vegPrice={500}
                        nonVegPrice={700}
                        contact="+91 1234567890"
                        onContactClick={handleContactClick}
                    />
                </div>
            </div>
                <VenueLocation latitude={12.9716} longitude={77.5946} venueName="My Venue" />
            <Footer />
        </div>
    );
}

export default VenueServicePage;
