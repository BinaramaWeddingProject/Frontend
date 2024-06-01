import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar, faHome, faPhoneAlt, faImages, faBoxOpen, faStar as regularStar } from '@fortawesome/free-solid-svg-icons';

const dummyPackages = [
    {
      name: "Basic History",
      days: "1 day",
      price: "$100",
      minAdvance: "$20",
    },
    {
      name: "Standard History",
      days: "3 days",
      price: "$250",
      minAdvance: "$50",
    },
    {
      name: "Premium History",
      days: "5 days",
      price: "$500",
      minAdvance: "$100",
    },
  ];
  

const UserTabView = () => {
    const [activeTab, setActiveTab] = useState('Profile');

    const handleTabClick = (tabName: string) => {
        setActiveTab(tabName);
    };

    return (
        <div className="border p-2 border-white h-full">
            <nav className="flex max-w-full">
                <button
                    className={`${
                        activeTab === 'Profile' ? 'bg-gray-200 border-b-2 border-blue-500' : 'bg-white'
                    } py-4 px-6 text-gray-700 font-semibold focus:outline-none hover:bg-gray-100 transition duration-300 ease-in-out flex items-center justify-center font-roboto w-1/4`}
                    onClick={() => handleTabClick('Profile')}
                >
                    <FontAwesomeIcon icon={faHome} className="mr-2" />
                    Profile
                </button>
                <button
                    className={`${
                        activeTab === 'Wishlist' ? 'bg-gray-200 border-b-2 border-blue-500' : 'bg-white'
                    } py-4 px-6 text-gray-700 font-semibold focus:outline-none hover:bg-gray-100 transition duration-300 ease-in-out flex items-center justify-center font-roboto w-1/4`}
                    onClick={() => handleTabClick('Wishlist')}
                >
                    <FontAwesomeIcon icon={faPhoneAlt} className="mr-2" />
                    Wishlist
                </button>
                <button
                    className={`${
                        activeTab === 'Bookings' ? 'bg-gray-200 border-b-2 border-blue-500' : 'bg-white'
                    } py-4 px-6 text-gray-700 font-semibold focus:outline-none hover:bg-gray-100 transition duration-300 ease-in-out flex items-center justify-center font-roboto w-1/4`}
                    onClick={() => handleTabClick('Bookings')}
                >
                    <FontAwesomeIcon icon={faImages} className="mr-2" />
                    Bookings
                </button>
                <button
                    className={`${
                        activeTab === 'History' ? 'bg-gray-200 border-b-2 border-blue-500' : 'bg-white'
                    } py-4 px-6 text-gray-700 font-semibold focus:outline-none hover:bg-gray-100 transition duration-300 ease-in-out flex items-center justify-center font-roboto w-1/4`}
                    onClick={() => handleTabClick('History')}
                >
                    <FontAwesomeIcon icon={faBoxOpen} className="mr-2" />
                    History
                </button>
            </nav>
            <div className="mt-4">
                {activeTab === 'Profile' && <OverviewTab />}
                {activeTab === 'Wishlist' && <ContactTab />}
                {activeTab === 'Bookings' && <PortfolioTab />}
                {activeTab === 'History' && <PackageTab packages={dummyPackages} />}
                {activeTab === 'Ratings' && <RatingsTab />}
            </div>
        </div>
    );
};

const OverviewTab = () => {
    const willingToTravel = true; // This value should be fetched from data

    return (
        <div className="flex flex-col items-center my-4">
            <h2 className="text-2xl font-semibold mb-4 font-roboto">Profile</h2>
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <h3 className="font-semibold font-roboto">History Price:</h3>
                    <p className="font-roboto">Enter package price here</p>
                </div>
                <div>
                    <h3 className="font-semibold font-roboto">Phone Number:</h3>
                    <p className="font-roboto">Enter phone number here</p>
                </div>
                <div>
                    <h3 className="font-semibold font-roboto">Address:</h3>
                    <p className="font-roboto">Enter address here</p>
                </div>
                <div>
                    <h3 className="font-semibold font-roboto">Willing to Travel:</h3>
                    {willingToTravel ? (
                        <img src="\icons8-tick.svg" alt="Tick" className="w-6 h-6" />
                    ) : (
                        <img src="\icons8-cross.svg" alt="Cross" className="w-6 h-6" />
                    )}
                </div>
            </div>
        </div>
    );
};


const ContactTab = () => {
    const phoneNumber = "123-456-7890"; // Replace with actual phone number from your data
    const address = "123 Street, City, Country"; // Replace with actual address from your data

    return (
        <div className="flex flex-col items-center">
            <h2 className="text-2xl font-semibold mb-4 font-roboto">Wishlist</h2>
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <h3 className="font-semibold font-roboto">Phone Number:</h3>
                    <p className="font-roboto">{phoneNumber}</p>
                </div>
                <div>
                    <h3 className="font-semibold font-roboto">Address:</h3>
                    <p className="font-roboto">{address}</p>
                </div>
            </div>
        </div>
    );
};

const PortfolioTab = () => {
    return (
        <div className="flex flex-col items-center">
            <h2 className="text-2xl font-semibold mb-4 font-roboto">Bookings</h2>
            <div className="grid grid-cols-4 gap-4">
                <img
                    src="https://picsum.photos/200"
                    alt="Bookings Image 1"
                    className="w-full h-auto rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
                />
                <img
                    src="https://picsum.photos/200"
                    alt="Bookings Image 2"
                    className="w-full h-auto rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
                />
                <img
                    src="https://picsum.photos/200"
                    alt="Bookings Image 3"
                    className="w-full h-auto rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
                />
                <img
                    src="https://picsum.photos/200"
                    alt="Bookings Image 4"
                    className="w-full h-auto rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
                />
            </div>
        </div>
    );
};

const PackageTab = ({ packages }: { packages: { name: string; days: string; price: string; minAdvance: string; }[] }) => {
    return (
        <div className="flex flex-col items-center">
            <h2 className="text-2xl font-semibold mb-4 font-roboto">Packages</h2>
            <div className="grid grid-cols-2 gap-8">
                {packages.map((pkg, index) => (
                    <div
                        key={index}
                        className="border rounded-lg p-6 shadow-md transition duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-lg"
                    >
                        <h3 className="font-semibold text-lg font-roboto">{pkg.name}</h3>
                        <p className="font-roboto">Price: {pkg.price}</p>
                        <p className="font-roboto">Duration: {pkg.days}</p>
                        <p className="font-roboto">Minimum Advance: {pkg.minAdvance}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

const RatingsTab = () => {
    // Dummy ratings data
    const ratings = [
        { stars: 5, review: "Excellent service!" },
        { stars: 4, review: "Very good experience." },
        { stars: 3, review: "Average service." },
        { stars: 2, review: "Needs improvement." },
        { stars: 1, review: "Poor service." },
    ];

    // Function to render stars based on rating
    const renderStars = (rating: number) => {
        const starArray = [];
        for (let i = 0; i < 5; i++) {
            if (i < rating) {
                starArray.push(<FontAwesomeIcon key={i} icon={solidStar} className="text-yellow-400" />);
            } else {
                starArray.push(<FontAwesomeIcon key={i} icon={regularStar} className="text-gray-400" />);
            }
        }
        return starArray;
    };

    return (
        <div>

            <h2 className="text-2xl font-semibold mb-4 font-roboto text-center">Ratings</h2>
        <div className='flex flex-row justify-center items-center'>
            {ratings.map((rating, index) => (
                <div key={index} className="mb-4 p-4 mx-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
                    <div className="flex items-center mb-2">
                        <div className="mr-2">{renderStars(rating.stars)}</div>
                        <span className="text-gray-600 font-roboto">{rating.stars} stars</span>
                    </div>
                    <p className="text-gray-800 font-roboto">{rating.review}</p>
                </div>
            ))}
        </div>
            </div>
    );
};

export default UserTabView;