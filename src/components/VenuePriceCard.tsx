import React, { useEffect, useState } from 'react';
import { FaCarrot, FaDrumstickBite } from 'react-icons/fa';
import { useAddWishlistMutation, useDeleteWishlistMutation, useGetWishlistQuery } from '../redux/api/wishlist';
import { useParams } from 'react-router-dom';

const userId = "665d6d766063ea750000e096"

interface VenuePriceCardProps {
  name: string;
  vegPrice: number;
  nonVegPrice: number;
  contact: string;
  onContactClick: () => void;
}

const VenuePriceCard: React.FC<VenuePriceCardProps> = ({ name, vegPrice, nonVegPrice, contact, onContactClick }) => {

  const venueId =useParams();
  console.log("thorha sa texttt", venueId.id);

  const [isWishlistSelected, setIsWishlistSelected] = useState(false);

  const [addWishlist] = useAddWishlistMutation();
  const [deleteWishlist] = useDeleteWishlistMutation();

  const { data: wishlistData, refetch} = useGetWishlistQuery(userId)

  const itemId = venueId.id

  const itemType="venue";
  
  console.log("kisi msg ke sath rkh diya",wishlistData);

  // const handleDateChange = (date: Date | null) => {
  //   if (date) {
  //     setSelectedDate(date);
  //     const availability = checkAvailability(date);
  //     setIsAvailable(availability);
  //   }
  // };

  useEffect(() => {
    if (wishlistData) {
      const isWishlisted = wishlistData?.wishlist?.items.some(item => item.itemId === itemId);
      setIsWishlistSelected(isWishlisted);
    }
  }, [wishlistData, itemId]);

  const handleWishlistClick = async () => {
    console.log("function started");
    try {
      if (isWishlistSelected) {
        await deleteWishlist({ userId, itemId, itemType }).unwrap();
        console.log("Item removed from wishlist");
      } else {
        console.log("add to wishlist");
        await addWishlist({ userId, itemId, itemType }).unwrap();
        console.log("Item added to wishlist");
      }
      refetch(); // Refetch the wishlist status to update the state
      setIsWishlistSelected(!isWishlistSelected);
    } catch (error) {
      console.error("Failed to update wishlist:", error);
    }
  };

  return (
    <div className="w-full h-72 rounded-lg shadow-lg overflow-hidden flex flex-col justify-between p-4 bg-gradient-to-r from-[#110069] to-indigo-600 text-white">
      <div>
        <h2 className="text-3xl font-bold mb-4">{name}</h2>
        <div className="mb-4 flex flex-col justify-between">
          <div className="flex items-center mb-2">
            <FaCarrot className="mr-2 text-xl" />
            <span className="mr-2 text-xl">Veg:</span>
            <span className="font-extrabold text-2xl">₹{vegPrice}</span>
          </div>
          <div className="flex items-center">
            <FaDrumstickBite className="mr-2 text-xl" />
            <span className="mr-2 text-xl">Non-Veg:</span>
            <span className="font-extrabold text-2xl">₹{nonVegPrice}</span>
          </div>
        </div>
      </div>
      <button
          className={`${isWishlistSelected
              ? "bg-green-500 text-white"
              : "bg-gray-200 text-gray-700"
            } py-3 px-6 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-300 mb-4 w-full`}
          onClick={handleWishlistClick}
        >
          {isWishlistSelected ? "Added to Wishlist" : "Add to Wishlist"}
        </button>
      <button
        onClick={onContactClick}
        className="bg-white text-indigo-600 hover:text-indigo-800 font-extrabold py-2 px-4 rounded transition duration-300 ease-in-out focus:outline-none"
      >
        Contact
      </button>
    </div>
  );
};

export default VenuePriceCard;
