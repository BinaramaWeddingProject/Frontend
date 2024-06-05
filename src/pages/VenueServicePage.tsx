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
import ScheduleVisit from '../components/ScheduleVisit';
import VenueImageCarousel from '../components/VenueImageCarousel';
import VenuePolicies from '../components/VenuePolicies';
import RelatedArticles from '../components/RelatedArticles';
import ContactForm from '../components/ContactForm';
import VenueSummary from '../components/VenueSummary';
import FAQSection from '../components/FaqSection';

import { useGetVenueByIdQuery } from '../redux/api/venue';
import { useParams } from 'react-router-dom';

  const VenueServicePage = () => {
    const {id} = useParams();
    // const id = "6654342528aa54d4db41612f";
    console.log("your data is here",id)

    const {data: venue ,error,isLoading} = useGetVenueByIdQuery(id ? id:"");
    const venueData = venue?.data.venue;

console.log("hello", venue?.data.venue  )


    const handleContactFormSubmit = (phoneNumber: string) => {
        // Add your logic here to submit the phone number to the database
        console.log('Phone number submitted:', phoneNumber);
      };

    const venuePolicies = {
        timings: "11:00 PM",
        morningSlot: "8:00 AM - 11:00 PM",
        changingRoom: {
            count: 2,
            isAc: true,
        },
        advance: {
            amount: 118000,
            adjustmentPolicy: "6 months",
        },
        taxes: {
            fnb: "18.00%",
        },
        parking: {
            valet: false,
            space: 100,
        },
        cancellation: "Non cancellable",
        lodging: "No rooms available",
        alcohol: {
            allowed: true,
            outsideAllowed: true,
            corkageCost: true,
        },
        otherPolicies: [
            "No Music allowed late",
            "Halls are air conditioned",
            "No ample parking",
            "Baarat allowed",
            "No fire crackers allowed",
            "Hawan allowed",
            "No overnight wedding allowed"
        ],
        food: [
            "Food provided by the venue",
            "No outside food/caterer allowed at the venue",
            "Non-Veg allowed at the venue"
        ],
        decoration: [
            "No Outside decorators allowed",
            "Decor provided by the venue"
        ]
    };

    const handleContactClick = () => {
        alert('Contact button clicked!');
    };

    // Dummy function to simulate availability check
    const checkAvailability = (date: Date): boolean => {
        // Replace with actual logic to check availability
        return date.getDay() % 2 === 0; // Example: available on even days
    };

    const handleScheduleVisit = (date: Date, time: string) => {
        // Replace with actual API call to check availability and schedule visit
        alert(`Scheduled visit on ${date.toDateString()} at ${time}`);
    };

    // const dummyImages = [
    //     'https://picsum.photos/id/200/800/400',
    //     'https://picsum.photos/800/400',
    //     'https://picsum.photos/id/210/800/400',
    //     'https://picsum.photos/id/200/800/400',
    //     'https://picsum.photos/800/400',
    //     'https://picsum.photos/id/210/800/400',



    // ];

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
        <div className=" bg-gray-100">
            <NavBar />
            <div className="mb-8">
                <Carousel images={venueData?.images} />
            </div>
            <div className="w-full flex flex-col lg:flex-row lg:space-x-4">
                <div className="w-3/4 space-y-4">
                    <div className="bg-white p-4 rounded-lg shadow-lg">
                        <SlimVenueCard name={venueData?.yourName} address={venueData?.address} />
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-lg">
                        <VenueAboutCard about={venueData?.about} contactNumber={venueData?.phone} />
                    </div>
                    <div className="flex flex-col lg:flex-row lg:space-x-4">
                        <div className="w-full lg:w-1/2">
                            <VenueBooking checkAvailability={checkAvailability} />
                            <VenueSummary summary={venueData?.summary}/>
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
            <div className='flex w-full justify-end'>
                <div className='w-2/3 m-12'>
                    <VenueLocation latitude={12.9716} longitude={77.5946} venueName="My Venue" />
                </div>
                <div className='1/3 mt-20'>
                    <ScheduleVisit onScheduleVisit={handleScheduleVisit} />
                </div>
            </div>
            <div className="mt-8 bg-white p-4 rounded-lg shadow-lg">
                <VenueImageCarousel images={venueData?.images} /> {/* Add the new component here */}
            </div>
            <div className="mt-8 bg-white p-4 rounded-lg shadow-lg">
                <VenuePolicies policies={venuePolicies} /> {/* Add the new component here */}
            </div>
            <div className='flex flex-col justify-center'>
                <h2 className="text-2xl font-thin mb-4 tracking-widest flex justify-center m-4">RELATED ARTICLES</h2>

                <RelatedArticles />
            </div>
            <div>
            <ContactForm onSubmit={handleContactFormSubmit} />
            </div>
            <div>
                <FAQSection/>
            </div>
            <Footer />
        </div>
    );
}

export default VenueServicePage;
