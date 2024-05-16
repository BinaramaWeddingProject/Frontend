import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar, faHome, faPhoneAlt, faImages, faBoxOpen, faStar as regularStar } from '@fortawesome/free-solid-svg-icons';

const dummyPackages = [
    {
      name: "Basic Package",
      days: "1 day",
      price: "$100",
      minAdvance: "$20",
    },
    {
      name: "Standard Package",
      days: "3 days",
      price: "$250",
      minAdvance: "$50",
    },
    {
      name: "Premium Package",
      days: "5 days",
      price: "$500",
      minAdvance: "$100",
    },
  ];
  

const TabView = () => {
    const [activeTab, setActiveTab] = useState('Overview');

    const handleTabClick = (tabName: string) => {
        setActiveTab(tabName);
    };

    return (
        <div className="border-b border-gray-200">
            <nav className="flex justify-center max-w-full">
                <button
                    className={`${
                        activeTab === 'Overview' ? 'bg-gray-200 border-b-2 border-blue-500' : 'bg-white'
                    } py-4 px-6 text-gray-700 font-semibold focus:outline-none hover:bg-gray-100 transition duration-300 ease-in-out flex items-center justify-center font-roboto`}
                    onClick={() => handleTabClick('Overview')}
                >
                    <FontAwesomeIcon icon={faHome} className="mr-2" />
                    Overview
                </button>
                <button
                    className={`${
                        activeTab === 'Contact' ? 'bg-gray-200 border-b-2 border-blue-500' : 'bg-white'
                    } py-4 px-6 text-gray-700 font-semibold focus:outline-none hover:bg-gray-100 transition duration-300 ease-in-out flex items-center justify-center font-roboto`}
                    onClick={() => handleTabClick('Contact')}
                >
                    <FontAwesomeIcon icon={faPhoneAlt} className="mr-2" />
                    Contact
                </button>
                <button
                    className={`${
                        activeTab === 'Portfolio' ? 'bg-gray-200 border-b-2 border-blue-500' : 'bg-white'
                    } py-4 px-6 text-gray-700 font-semibold focus:outline-none hover:bg-gray-100 transition duration-300 ease-in-out flex items-center justify-center font-roboto`}
                    onClick={() => handleTabClick('Portfolio')}
                >
                    <FontAwesomeIcon icon={faImages} className="mr-2" />
                    Portfolio
                </button>
                <button
                    className={`${
                        activeTab === 'Package' ? 'bg-gray-200 border-b-2 border-blue-500' : 'bg-white'
                    } py-4 px-6 text-gray-700 font-semibold focus:outline-none hover:bg-gray-100 transition duration-300 ease-in-out flex items-center justify-center font-roboto`}
                    onClick={() => handleTabClick('Package')}
                >
                    <FontAwesomeIcon icon={faBoxOpen} className="mr-2" />
                    Package
                </button>
                <button
                    className={`${
                        activeTab === 'Ratings' ? 'bg-gray-200 border-b-2 border-blue-500' : 'bg-white'
                    } py-4 px-6 text-gray-700 font-semibold focus:outline-none hover:bg-gray-100 transition duration-300 ease-in-out flex items-center justify-center font-roboto`}
                    onClick={() => handleTabClick('Ratings')}
                >
                    <FontAwesomeIcon icon={solidStar} className="mr-2" />
                    Ratings
                </button>
            </nav>
            <div className="mt-4">
                {activeTab === 'Overview' && <OverviewTab />}
                {activeTab === 'Contact' && <ContactTab />}
                {activeTab === 'Portfolio' && <PortfolioTab />}
                {activeTab === 'Package' && <PackageTab packages={dummyPackages} />}
                {activeTab === 'Ratings' && <RatingsTab />}
            </div>
        </div>
    );
};

const OverviewTab = () => {
    const willingToTravel = true; // This value should be fetched from data

    return (
        <div className="flex flex-col items-center my-4">
            <h2 className="text-2xl font-semibold mb-4 font-roboto">Overview</h2>
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <h3 className="font-semibold font-roboto">Package Price:</h3>
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
                        <img src="public\icons8-tick.svg" alt="Tick" className="w-6 h-6" />
                    ) : (
                        <img src="public\icons8-cross.svg" alt="Cross" className="w-6 h-6" />
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
            <h2 className="text-2xl font-semibold mb-4 font-roboto">Contact</h2>
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
            <h2 className="text-2xl font-semibold mb-4 font-roboto">Portfolio</h2>
            <div className="grid grid-cols-4 gap-4">
                <img
                    src="https://picsum.photos/200"
                    alt="Portfolio Image 1"
                    className="w-full h-auto rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
                />
                <img
                    src="https://picsum.photos/200"
                    alt="Portfolio Image 2"
                    className="w-full h-auto rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
                />
                <img
                    src="https://picsum.photos/200"
                    alt="Portfolio Image 3"
                    className="w-full h-auto rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
                />
                <img
                    src="https://picsum.photos/200"
                    alt="Portfolio Image 4"
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

export default TabView;