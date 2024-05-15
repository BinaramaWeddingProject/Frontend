import React, { useState, useEffect } from 'react';
import PortfolioCarousel from './PortfolioCarousel';
import VendorCarousel from './vendorCarousel';
import Caro from './Carousel3';


interface ServiceDetails {
    price: number;
    portfolio: string[];
    yearsOfExperience: number;
    eventsCompleted: number;
    willingToTravel: boolean;
    summary: string;
    packages: { name: string; days: string; price: string; minAdvance: string; }[];
}
interface Props {
    serviceDetails: ServiceDetails;
}

const ServiceDetailsForm: React.FC<Props> = ({ serviceDetails: initialServiceDetails }) => {
    const [editing, setEditing] = useState(false);
    const [serviceDetails, setServiceDetails] = useState<ServiceDetails>({
        ...initialServiceDetails,
        packages: [],
    });
    const [currentImages, setCurrentImages] = useState<string[]>([]);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            const nextIndex = (index + 1) % (serviceDetails.portfolio.length - 2);
            setIndex(nextIndex);
        }, 3000);

        return () => clearInterval(interval);
    }, [index, serviceDetails.portfolio]);

    useEffect(() => {
        setCurrentImages(serviceDetails.portfolio.slice(index, index + 3));
    }, [index, serviceDetails.portfolio]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;

        if (type === 'checkbox') {
            const newValue = (e.target as HTMLInputElement).checked;
            setServiceDetails(prevState => ({
                ...prevState,
                [name]: newValue
            }));
        } else if (name === 'portfolio') {
            const newValue = Array.from((e.target as HTMLInputElement).files || []).map(file => file.name);
            setServiceDetails(prevState => ({
                ...prevState,
                [name]: newValue
            }));
        } else if (name.startsWith('packages')) {
            const [, index, field] = name.split(/\[(.*?)\]/);
            const updatedPackages = [...serviceDetails.packages];
            updatedPackages[parseInt(index)][field as keyof typeof updatedPackages[0]] = value; // Update the specific field of the package at the specified index
            setServiceDetails(prevState => ({
                ...prevState,
                packages: updatedPackages
            }));
        } else {
            setServiceDetails(prevState => ({
                ...prevState,
                [name]: value
            }));
        }
    };


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Logic to update the service details
        console.log("Updated service details:", serviceDetails);
        setEditing(false);
    };

    const handleEditClick = () => {
        setEditing(true);
    };
    return (
        <div className="bg-gray-200 rounded-lg p-8 mx-auto max-w-full  mb-12">
            <div className="flex items-center justify-center">
                <div className="flex-grow">
                    {editing ? (
                        <form onSubmit={handleSubmit}>
                            <div className="mb-10 border-b pb-8">
                                <label htmlFor="price" className="block mb-4 font-bold text-2xl text-[#110069]">
                                    Price:
                                </label>
                                <input
                                    type="text"
                                    id="price"
                                    name="price"
                                    value={serviceDetails.price}
                                    onChange={handleInputChange}
                                    className="w-3/4 rounded-md border-gray-300 px-3 py-2 text-lg bg-white text-[#110069]"
                                />
                            </div>
                            <div className="mb-10 border-b pb-8">
                                <label htmlFor="portfolio" className="block mb-4 font-bold text-2xl text-[#110069]">
                                    Portfolio:
                                </label>
                                <input
                                    type="file"
                                    id="portfolio"
                                    name="portfolio"
                                    onChange={handleInputChange}
                                    multiple
                                    className="w-3/4 rounded-md border-gray-300 px-3 py-2 text-lg bg-white text-[#110069]"
                                />
                            </div>
                            <div className="mb-10 border-b pb-8">
                                <label htmlFor="yearsOfExperience" className="block mb-4 font-bold text-2xl text-[#110069]">
                                    Years of Experience:
                                </label>
                                <input
                                    type="text"
                                    id="yearsOfExperience"
                                    name="yearsOfExperience"
                                    value={serviceDetails.yearsOfExperience}
                                    onChange={handleInputChange}
                                    className="w-3/4 rounded-md border-gray-300 px-3 py-2 text-lg bg-white text-[#110069]"
                                />
                            </div>
                            <div className="mb-10 border-b pb-8">
                                <label htmlFor="eventsCompleted" className="block mb-4 font-bold text-2xl text-[#110069]">
                                    Events Completed:
                                </label>
                                <input
                                    type="text"
                                    id="eventsCompleted"
                                    name="eventsCompleted"
                                    value={serviceDetails.eventsCompleted}
                                    onChange={handleInputChange}
                                    className="w-3/4 rounded-md border-gray-300 px-3 py-2 text-lg bg-white text-[#110069]"
                                />
                            </div>
                            <div className="mb-10 border-b pb-8">
                                <label htmlFor="willingToTravel" className="block mb-4 font-bold text-2xl text-[#110069]">
                                    Willing to Travel:
                                </label>
                                <input
                                    type="checkbox"
                                    id="willingToTravel"
                                    name="willingToTravel"
                                    checked={serviceDetails.willingToTravel}
                                    onChange={handleInputChange}
                                    className="mr-2 bg-white text-[#110069]"
                                />
                            </div>
                            <div className="mb-10 border-b pb-8">
                                <label htmlFor="summary" className="block mb-4 font-bold text-2xl text-[#110069]">
                                    Summary:
                                </label>
                                <textarea
                                    id="summary"
                                    name="summary"
                                    value={serviceDetails.summary}
                                    onChange={handleInputChange}
                                    className="w-3/4 h-32 rounded-md border-gray-300 px-3 py-2 text-lg bg-white text-[#110069]"
                                />
                            </div>

                            <div className="mb-10 border-b pb-8">
                                <label htmlFor="packages" className="block mb-4 font-bold text-2xl text-[#110069]">
                                    Packages:
                                </label>
                                {serviceDetails.packages.map((pkg, index) => (
                                    <div key={index} className="flex gap-4 mb-4">
                                        <input
                                            type="text"
                                            name={`packages[${index}].name`}
                                            value={pkg.name}
                                            onChange={handleInputChange}
                                            placeholder="Package Name"
                                            className="w-1/4 rounded-md border-gray-300 px-3 py-2 text-lg bg-white text-[#110069]"
                                        />
                                        <input
                                            type="text"
                                            name={`packages[${index}].days`}
                                            value={pkg.days}
                                            onChange={handleInputChange}
                                            placeholder="Days"
                                            className="w-1/4 rounded-md border-gray-300 px-3 py-2 text-lg bg-white text-[#110069]"
                                        />
                                        <input
                                            type="text"
                                            name={`packages[${index}].price`}
                                            value={pkg.price}
                                            onChange={handleInputChange}
                                            placeholder="Price"
                                            className="w-1/4 rounded-md border-gray-300 px-3 py-2 text-lg bg-white text-[#110069]"
                                        />
                                        <input
                                            type="text"
                                            name={`packages[${index}].minAdvance`}
                                            value={pkg.minAdvance}
                                            onChange={handleInputChange}
                                            placeholder="Minimum Advance"
                                            className="w-1/4 rounded-md border-gray-300 px-3 py-2 text-lg bg-white text-[#110069]"
                                        />
                                    </div>
                                ))}
                                <button
                                    type="button"
                                    onClick={() => setServiceDetails({ ...serviceDetails, packages: [...serviceDetails.packages, { name: '', days: '', price: '', minAdvance: '' }] })}
                                    className="bg-white text-[#110069] px-4 py-2 rounded-md"
                                >
                                    Add Package
                                </button>
                            </div>
                            <button type="submit" className="bg-white text-[#110069] px-8 py-4 rounded-md text-xl">
                                Update
                            </button>
                        </form>
                    ) : (
                        <>
                            <div className="mb-8 border-b pb-4">
                                <p className="text-[#110069] text-xl font-bold">Price:</p>
                                <p className="text-lg bg-white text-[#110069] p-2 rounded-md text-center w-3/6 mx-auto">
                                    ₹{serviceDetails.price}
                                </p>
                            </div>
                            <div className="mb-8 border-b pb-4">
                                <p className="text-[#110069] text-xl font-bold">Years of Experience:</p>
                                <p className="text-lg bg-white text-[#110069] p-2 rounded-md text-center  w-3/6  mx-auto">
                                    {serviceDetails.yearsOfExperience}
                                </p>
                            </div>
                            <div className="mb-8 border-b pb-4">
                                <p className="text-[#110069] text-xl font-bold">Events Completed:</p>
                                <p className="text-lg bg-white text-[#110069] p-2 rounded-md text-center  w-3/6  mx-auto">
                                    {serviceDetails.eventsCompleted}
                                </p>
                            </div>
                            <div className="mb-8 border-b pb-4">
                                <p className="text-[#110069] text-xl font-bold">Willing to Travel:</p>
                                <p className="text-lg bg-white text-[#110069] p-2 rounded-md text-center  w-3/6  mx-auto">
                                    {serviceDetails.willingToTravel ? 'Yes' : 'No'}
                                </p>
                            </div>
                            <div className="mb-8 border-b pb-4">
                                <p className="text-[#110069] text-xl font-bold">Summary:</p>
                                <p className="text-lg bg-white text-[#110069] p-2 rounded-md text-center h-auto  w-3/6  mx-auto">
                                    {serviceDetails.summary}
                                </p>
                            </div>
                            <div className="mb-8 border-b pb-4">
                                <p className="text-[#110069] text-xl font-bold">Packages:</p>
                                {serviceDetails.packages.map((pkg, index) => (
                                    <div key={index} className="flex gap-4 mb-4">
                                        <p className="text-lg bg-white text-[#110069] p-2 rounded-md">{pkg.name}</p>
                                        <p className="text-lg bg-white text-[#110069] p-2 rounded-md">{pkg.days}</p>
                                        <p className="text-lg bg-white text-[#110069] p-2 rounded-md">₹{pkg.price}</p>
                                        <p className="text-lg bg-white text-[#110069] p-2 rounded-md">{pkg.minAdvance}</p>
                                    </div>
                                ))}
                            </div>
                            {/* <div className="flex flex-wrap justify-center">
                                <p className="text-[#110069] text-xl font-bold">Portfolio:</p>
                                {currentImages.map((imageUrl, index) => (
                                    <img
                                        key={index}
                                        src={imageUrl}
                                        alt={`Portfolio ${index + 1}`}
                                        className="w-48 h-48 object-cover m-2 rounded-md"
                                    />
                                ))}
                            </div> */}
                            {/* <div className="flex flex-wrap justify-center">

                            <PortfolioCarousel portfolio={serviceDetails.portfolio} />

                                </div> */}

                            <div>
                                <Caro />
                            </div>
                            <button
                                onClick={handleEditClick}
                                className="bg-white text-[#110069] px-8 py-4 rounded-md mt-2 text-xl"
                            >
                                Edit
                            </button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};
export default ServiceDetailsForm;
