import React, { useState, useEffect } from 'react';
import PortfolioCarousel from './PortfolioCarousel';
import VendorCarousel from './vendorCarousel';
import Caro from './Carousel3';
import { useAllVendorQuery } from '../redux/api/vendor';
import { string } from 'yup';
import { useUpdateVendorMutation } from '../redux/api/vendor';


interface Package {
    name: string;
    days: string;
    price: string;
    minAdvance: string;
}

interface Props {
    price?: string;
    portfolio?: string[] | undefined;
    experience?: string;
    event_completed?: number;
    willingToTravel?: boolean;
    summary?: string;
    packages: Package | undefined;
    id?: string |undefined
    
}

const ServiceDetailsForm: React.FC<Props> = ({ price, portfolio, experience, event_completed, willingToTravel, summary, packages, id }) => {
    const [updateVendor, { isLoading }] = useUpdateVendorMutation();

    console.log("packages", packages?.days)
    

    const [editing, setEditing] = useState(false);
    const [formData, setFormData] = useState<Props>({
        price: '',  // Initial value for 'price' property
        portfolio: undefined,
        experience: '',
        event_completed: undefined,
        willingToTravel: false,
        summary: '',
        packages: { name: '', days: '', price: '', minAdvance: '' },
        
    });
    // Function to handle input changes
   // Function to handle input changes
const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;

    // If the input name starts with "packages.", update the packages state
    if (name.startsWith("packages.")) {
        const packageName = name.split(".")[1]; // Extract the package property name
        setFormData((prevState: Props) => ({
            ...prevState,
            packages: {
                ...prevState.packages,
                name: prevState.packages?.name || '',
                days: prevState.packages?.days || '',
                price: prevState.packages?.price || '',
                minAdvance: prevState.packages?.minAdvance || '',
                [packageName]: value
            }
        }));
        
    } else {
        // If it's not a package property, update the top-level state properties
        if (type === 'checkbox') {
            const isChecked = (e.target as HTMLInputElement).checked;
            setFormData(prevState => ({
                ...prevState,
                [name]: isChecked
            }));
        } else {
            setFormData(prevState => ({
                ...prevState,
                [name]: value
            }));
        }
    }
};

    

    // Function to handle form submission
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Here you can submit the updated data (formData) to your backend or perform any other action
        console.log('Updated Data:', formData);
        if (!id) return; 
        const res = await updateVendor({id , vendor: formData   })
        // Exit editing mode
        console.log("here is res" , res);
        setEditing(false);
    };

    // Function to handle edit button click
    const handleEditClick = () => {
        // Populate the formData state with the current values
        setFormData({
            price: price || '',
            portfolio: portfolio || [],
            experience: experience || '',
            event_completed: event_completed || 0,
            willingToTravel: willingToTravel || false,
            summary: summary || '',
            packages: packages || { name: '', days: '', price: '', minAdvance: '' }
        });
    
        // Enter editing mode
        setEditing(true);
    };
    console.log("Pack", packages)

     return (
        <div className="bg-gray-200 rounded-lg p-8 mx-auto max-w-full mb-12">
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
                                    value={formData.price}
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
                                    id="experience"
                                    name="experience"
                                    value={formData.experience}
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
                                    id="event_completed"
                                    name="event_completed"
                                    value={formData.event_completed}
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
                                    checked={formData.willingToTravel}
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
                                    value={formData.summary}
                                    onChange={handleInputChange}
                                    className="w-3/4 h-32 rounded-md border-gray-300 px-3 py-2 text-lg bg-white text-[#110069]"
                                />
                            </div>

                            <div className="mb-10 border-b pb-8">
                                <label htmlFor="packages" className="block mb-4 font-bold text-2xl text-[#110069]">
                                    Packages:
                                </label>
                                
                                    <div  className="flex gap-4 mb-4">
                                        <input
                                            type="text"
                                            id="packages.name"
                                            name="packages.name"
                                            value={formData?.packages?.name}
                                            onChange={handleInputChange}
                                            placeholder="Package Name"
                                            className="w-1/4 rounded-md border-gray-300 px-3 py-2 text-lg bg-white text-[#110069]"
                                        />
                                        <input
                                            type="text"
                                            id="packages.days"
                                            name="packages.days"
                                            value={formData.packages?.days} 
                                            onChange={handleInputChange}
                                            placeholder="Days"
                                            className="w-1/4 rounded-md border-gray-300 px-3 py-2 text-lg bg-white text-[#110069]"
                                        />
                                        <input
                                            type="text"
                                            id="packages.price"
                                            name="packages.price"
                                            value={formData.packages?.price} // Use an empty string as a fallback value
                                            onChange={handleInputChange}
                                            placeholder="Price"
                                            className="w-1/4 rounded-md border-gray-300 px-3 py-2 text-lg bg-white text-[#110069]"
                                        />
                                        <input
                                            type="text"
                                            id="packages.minAdvance"
                                            name="packages.minAdvance"
                                            value={formData.packages?.minAdvance} // Use an empty string as a fallback value
                                            onChange={handleInputChange}
                                            placeholder="Minimum Advance"
                                            className="w-1/4 rounded-md border-gray-300 px-3 py-2 text-lg bg-white text-[#110069]"
                                        />
                                    </div>
                                
                                {/* <button
                                    type="button"
                                    //  onClick={() => }
                                    className="bg-white text-[#110069] px-4 py-2 rounded-md"
                                >
                                    Add Package
                                </button> */}
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
                                    ₹{price}
                                </p>
                            </div>
                            <div className="mb-8 border-b pb-4">
                                <p className="text-[#110069] text-xl font-bold">Years of Experience:</p>
                                <p className="text-lg bg-white text-[#110069] p-2 rounded-md text-center w-3/6 mx-auto">
                                    {experience}
                                </p>
                            </div>
                            <div className="mb-8 border-b pb-4">
                                <p className="text-[#110069] text-xl font-bold">Events Completed:</p>
                                <p className="text-lg bg-white text-[#110069] p-2 rounded-md text-center w-3/6 mx-auto">
                                    {event_completed}
                                </p>
                            </div>
                            <div className="mb-8 border-b pb-4">
                                <p className="text-[#110069] text-xl font-bold">Willing to Travel:</p>
                                <p className="text-lg bg-white text-[#110069] p-2 rounded-md text-center w-3/6 mx-auto">
                                    {willingToTravel ? 'Yes' : 'No'}
                                </p>
                            </div>
                            <div className="mb-8 border-b pb-4">
                                <p className="text-[#110069] text-xl font-bold">Summary:</p>
                                <p className="text-lg bg-white text-[#110069] p-2 rounded-md text-center h-auto w-3/6 mx-auto">
                                    {summary}
                                </p>
                            </div>
                            <div className="mb-8 border-b pb-4">
                                <p className="text-[#110069] text-xl font-bold">Packages:</p>
                               
    
        <div  className="flex gap-4 mb-4">
            <p className="text-lg bg-white text-[#110069] p-2 rounded-md">{packages?.name}</p>
            <p className="text-lg bg-white text-[#110069] p-2 rounded-md">{packages?.days}</p>
            <p className="text-lg bg-white text-[#110069] p-2 rounded-md">₹{packages?.price}</p>
            <p className="text-lg bg-white text-[#110069] p-2 rounded-md">{packages?.minAdvance}</p>
        </div>
    


                            </div>
                            <div className="flex flex-wrap justify-center">
                                <p className="text-[#110069] text-xl font-bold">Portfolio:</p>
                                {portfolio && portfolio.map((imageUrl, index) => (
                                    <img
                                        key={index}
                                        src={imageUrl}
                                        alt={`Portfolio ${index + 1}`}
                                        className="w-48 h-48 object-cover m-2 rounded-md"
                                    />
                                ))}
                            </div>
                            <div>
                                <Caro portfolio={portfolio}/>
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
