import  { useState, useEffect, FormEvent} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkLoginStatus } from '../redux/reducer/auth';

import { RootState } from '../redux/store'; 
import { useSubmitEnquiryMutation } from '../redux/api/enquiry';
import {Enquiry} from "../types/types"

const PopUp = () => {
  const [formData, setFormData] = useState<Enquiry>({
    name: '',
    contact: '',
    location: '',
    guests: "",
    date: "",
    address: '',
    message: '',
    typeOfEvent: ''
  });
  const [submit] = useSubmitEnquiryMutation()
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [seconds, setSeconds] = useState(10); // Adjusted back to 60 seconds
  // const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  // Check login status on component mount
  useEffect(() => {
    dispatch(checkLoginStatus());
  }, [dispatch]);

  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds - 1);
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(timer);
  }, []);

  // Open login popup after 60 seconds if not already logged in
  useEffect(() => {
    if (seconds === 0 && !isLoggedIn) {
      setShowLoginPopup(true);
    }
  }, [seconds, isLoggedIn]);

  // Close popup after successful login
  useEffect(() => {
    if (isLoggedIn) {
      setShowLoginPopup(false);
      // Reset timer when logged in
      setSeconds(10);
    }
  }, [isLoggedIn]);

  // Prevent scrolling on the background content when the popup is open
  useEffect(() => {
    if (showLoginPopup) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [showLoginPopup]);

   const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    console.log("from" , formData)
    try {
      await submit( formData ).unwrap();
      setFormData(
        {
          name: '',
         contact: '',
    location: '',
    guests: "",
    date: "",
    address: '',
    message: '',
    typeOfEvent: ''
        }
      )
      setShowLoginPopup(false);
      // Reset timer when logged in
     
    } catch (error) {
      console.error('Error:', error);
    }
  };


  return (
<>
  {/* Login popup */}
  {showLoginPopup && (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg relative z-50 w-full max-w-4xl">
        <h1 className='text-2xl font-bold text-[#173445] mb-6 text-center'>Weclome to WeddingzVenue.in</h1>
        <h1 className='text-xl font-bold text-[#173445] mb-6 text-center'>Please fill the enquiry form</h1>

       


        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="contact" className="block text-sm font-medium text-gray-700 mb-1">Contact</label>
            <input
              type="text"
              id="contact"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">Location</label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-1">Number of Guests</label>
            <input
              type="number"
              id="guests"
              name="guests"
              value={formData.guests}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">Date</label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">Address</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="typeOfEvent" className="block text-sm font-medium text-gray-700 mb-1">Type of Event</label>
            <input
              type="text"
              id="typeOfEvent"
              name="typeOfEvent"
              value={formData.typeOfEvent}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="md:col-span-2">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <div className="md:col-span-2">
            <button type="submit" className="w-full px-4 py-2 bg-[#000000] text-white rounded-md hover:bg-[#111111] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-300">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )}
</>
  );
};

export default PopUp;
