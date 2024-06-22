import React, { useEffect, useState } from 'react';

// import {  useDeleteWishlistMutation, useGetWishlistQuery } from '../redux/api/wishlist';
import { useParams } from 'react-router-dom';
import {useDeleteWishlistMutation, useGetWishlistQuery , useAddWishlistMutation } from '../redux/api/wishlist';
import EnquiryFormModal from './EnquiryFormModal'; // Import the modal component
import { useAddBookingEnquiryMutation, useGetBookingByUserAndVenueQuery  } from '../redux/api/booking';
import { MdDinnerDining } from "react-icons/md";


import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';



// const userId = "665d6d766063ea750000e096";

interface VenuePriceCardProps {
  name?: string;
  vegPrice?: string  | undefined;
  nonVegPrice?: number;
  contact?: string;
}

const VenuePriceCard: React.FC<VenuePriceCardProps> = ({ name, vegPrice, }) => {

  const userId = useSelector((state: RootState) => state?.auth?.user?._id);
  const { id: venueId } = useParams<{ id: string }>();
  const [isWishlistSelected, setIsWishlistSelected] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // State to handle modal visibility
  const [hasSentEnquiry, setHasSentEnquiry] = useState(false); // State to track if enquiry is sent

   const [addWishlist] = useAddWishlistMutation();
  const [deleteWishlist] = useDeleteWishlistMutation();
  
  const [sendEnquiry] = useAddBookingEnquiryMutation();
  
  const { data: wishlistData, refetch } = useGetWishlistQuery(userId ?? "");
  const { data: bookingData } = useGetBookingByUserAndVenueQuery({ uId: userId ?? "", vId: venueId as string}); // Query to check booking
  // const status = !!bookingData;
  console.log("gett data",bookingData?.message);


  const itemId = venueId;
  const itemType = "venue";
  
  useEffect(() => {
    if (wishlistData) {
      const isWishlisted = wishlistData?.wishlist?.items?.some(item => item.itemId === itemId) ?? false;
      setIsWishlistSelected(isWishlisted);
    }
  }, [wishlistData, itemId]);

  useEffect(() => {
    if (bookingData && bookingData.message==="True") {
      setHasSentEnquiry(true);
    }
  }, [bookingData]);

  // const handleWishlistClick = async () => {
  //   try {
  //     if (isWishlistSelected) {
  //       if (userId && itemId && itemType) {
  //         await deleteWishlist({ userId, itemId, itemType }).unwrap();
  //       } else {
  //         console.error('userId, itemId, or itemType is undefined!');
  //       }
  //       console.log("Item removed from wishlist");
  //     } else {
  //       console.log("add to wishlist");
  //       if (userId && itemId && itemType) {
  //         await deleteWishlist({ userId, itemId, itemType }).unwrap();
  //       } else {
  //         console.error('userId, itemId, or itemType is undefined!');
  //       }
  //       console.log("Item added to wishlist");
  //     }
  //     refetch(); // Refetch the wishlist status to update the state
  //     setIsWishlistSelected(!isWishlistSelected);
  //   } catch (error) {
  //     console.error("Failed to update wishlist:", error);
  //   }
  // };

  const handleWishlistClick = async () => {
    try {
      if (isWishlistSelected) {
        if (userId && itemId && itemType) {
                 await deleteWishlist({ userId, itemId, itemType }).unwrap();
        } else
        {
                  console.error('userId, itemId, or itemType is undefined!');
        }
                console.log("Item removed from wishlist");
      }
      
      else {

        if (userId && itemId && itemType) {
         await addWishlist({ userId, itemId, itemType }).unwrap();
         } // Replace with addWishlist function
         else
        {
                  console.error('userId, itemId, or itemType is undefined!');
        }

        console.log("Item added to wishlist");
      }
      refetch();
      setIsWishlistSelected(!isWishlistSelected);
    } catch (error) {
      console.error("Failed to update wishlist:", error);
    }
  };

  const handleEnquirySubmit = async (formData: any) => {
    try {
      const res = await sendEnquiry({ ...formData, vId: itemId, uId: userId }).unwrap();
      console.log("status of the request", res);

      // Assuming res is an object with a property like 'message' indicating success
      if (res.message === "True") {
        setHasSentEnquiry(true); // Update the state to reflect the enquiry has been sent
      }
    } catch (error) {
      console.error("Failed to send enquiry:", error);
    }
  };

  useEffect(() => {
    if (bookingData && bookingData.message==="True") {
      setHasSentEnquiry(true); // Update the state to reflect the enquiry has been sent
    }
  }, [bookingData]);

  return (
    <div className="w-full h-fit rounded-lg shadow-lg overflow-hidden flex flex-col justify-between p-4 bg-gradient-to-r from-[#110069] to-indigo-600 text-white">
      <div>
        <h2 className="text-3xl font-bold mb-4">{name}</h2>
        <div className="mb-4 flex flex-col justify-between">
          <div className="flex items-center mb-2">
            <MdDinnerDining className="mr-2 text-xl" />
            <span className="mr-2 text-xl">Pacakge / Plate:</span>
            <span className="font-extrabold text-2xl">₹{vegPrice}</span>
          </div>
          {/* <div className="flex items-center">
            <FaDrumstickBite className="mr-2 text-xl" />
            <span className="mr-2 text-xl">Non-Veg:</span>
            <span className="font-extrabold text-2xl">₹{nonVegPrice}</span>
          </div> */}
        </div>
      </div>
      <button
        className={`${isWishlistSelected ? "bg-green-500 text-white" : "bg-gray-200 text-gray-700"} py-3 px-6 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-300 mb-4 w-full`}
        onClick={handleWishlistClick}
      >
        {isWishlistSelected ? "Added to Wishlist" : "Add to Wishlist"}
      </button>
      <button
        onClick={() => setIsModalOpen(true)} // Open the modal on button click
        className="bg-white text-indigo-600 hover:text-indigo-800 font-extrabold py-2 px-4 rounded transition duration-300 ease-in-out focus:outline-none"
      >
        {hasSentEnquiry ? "Enquiry Sent" : "Send Enquiry"}
      </button>
      {hasSentEnquiry? null:
      <EnquiryFormModal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        onSubmit={handleEnquirySubmit}
      />}
    </div>
  );
};

export default VenuePriceCard;
