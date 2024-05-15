import React from 'react';
import VendorProfileCard from '../components/VendorProfileCard';
import ServiceDetailsForm from '../components/ServiceDetailsForm';
import NavBar from '../components/navbar';
import Footer from '../components/Footer';
import VendorProfileInfo from '../components/VendorProfileInfo';

const dummyVendor = {
    name: "John Doe",
    email: "john@example.com",
    phoneNumber: "123-456-7890",
    password: "password123",
    profile: "https://picsum.photos/200",
    role: "vendor",
    businessName: "Example Business",
    typeOfBusiness: "Wedding Planning"
};

const dummyServiceDetails = {
    price: 100,
    portfolio: ["https://picsum.photos/200", "https://picsum.photos/200", "https://picsum.photos/200", "https://picsum.photos/200", "https://picsum.photos/200", "https://picsum.photos/200", "https://picsum.photos/200", "https://picsum.photos/200"],
    yearsOfExperience: 5,
    eventsCompleted: 10,
    willingToTravel: true,
    summary: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
    packages :[{
        name: "Basic Package",
        days: "1",
        price: "100",
        minAdvance: "50"
    },]
};

const VendorProfilePage = () => {
    return (
        <>
            <NavBar />
            <div className="flex justify-center text-white bg-[#110069] p-4">
                <div className="text-4xl font-semibold">PROFILE PAGE</div>
            </div>

            <div className="flex justify-start">
                <div className="w-1/2 lg:w-96">
                    <VendorProfileCard vendor={dummyVendor} />
                </div>
                <div className='w-full'>
                    <div className="max-w-full mx-auto px-4">
                        <VendorProfileInfo businessName={dummyVendor.businessName} typeOfBusiness={dummyVendor.typeOfBusiness} />
                    </div>
                    <div className="w-full lg:w-full p-4">
                        <ServiceDetailsForm serviceDetails={dummyServiceDetails} />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default VendorProfilePage;   
