import React, { useEffect, useState } from 'react';
import { useAddWishlistMutation, useDeleteWishlistMutation, useGetWishlistQuery } from '../redux/api/wishlist';
import { constants } from 'buffer';

const userId = "665d6d766063ea750000e096"
// const wishId = "665d7190834e8e5cce64a97c"


interface Props {
  price: string | undefined;
  rating: number;
  vendorId: string;
  itemType?: string;
}

const PriceCard: React.FC<Props> = ({ price, rating, vendorId, itemType = "vendor", }) => {
  const [isWishlistSelected, setIsWishlistSelected] = useState(false);
  const [isEnquirySelected, setIsEnquirySelected] = useState(false);
  const [addWishlist] = useAddWishlistMutation();
  const [deleteWishlist] = useDeleteWishlistMutation();
  // console.log("kisi msg ");
  const { data: wishlistData, refetch} = useGetWishlistQuery(userId)
  const itemId = vendorId;
  // console.log("kisi msg ke sath rkh diya",wishlistData?.wishlist?.items);

  useEffect(() => {
    if (wishlistData) {
      const isWishlisted = wishlistData?.wishlist?.items.some(item => item.itemId === itemId);
      setIsWishlistSelected(isWishlisted);
    }
  }, [wishlistData, itemId]);

  const handleWishlistClick = async () => {
    try {
      if (isWishlistSelected) {
        await deleteWishlist({ userId, itemId, itemType }).unwrap();
        console.log("Item removed from wishlist");
      } else {
        await addWishlist({ userId, itemId, itemType }).unwrap();
        console.log("Item added to wishlist");
      }
      refetch(); // Refetch the wishlist status to update the state
      setIsWishlistSelected(!isWishlistSelected);
    } catch (error) {
      console.error("Failed to update wishlist:", error);
    }
  };

  

  console.log("new dataa", vendorId, itemType);

  // Function to render star ratings
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<span key={i} className="text-yellow-500 scale-150 mx-1">&#9733;</span>);
      } else {
        stars.push(<span key={i} className="text-gray-400 scale-150 mx-1">&#9733;</span>);
      }
    }
    return stars;
  };

  return (
    <div className="flex flex-col justify-center bg-white rounded-lg shadow-xl p-8 max-w-full transition-all duration-300 transform hover:scale-105">
      <h2 className="text-gray-800 text-4xl font-bold text-center mb-4">Package Price</h2>
      <p className="text-gray-600 text-3xl font-semibold text-center mb-8">₹{price}</p>
      <div className="flex justify-center items-center mb-8">
        {renderStars(rating)}
      </div>
      <div className="flex flex-col justify-center items-center">
        <button
          className={`${isEnquirySelected
              ? "bg-purple-500 text-white"
              : "bg-gradient-to-r from-blue-500 to-blue-700 text-white"
            } py-3 px-6 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-300 mb-4 w-full`}
          onClick={() => setIsEnquirySelected(!isEnquirySelected)}
        >
          {isEnquirySelected ? "Enquiry Sent" : "Send Enquiry"}
        </button>
        <button
          className={`${isWishlistSelected
              ? "bg-green-500 text-white"
              : "bg-gray-200 text-gray-700"
            } py-3 px-6 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-300 mb-4 w-full`}
          onClick={handleWishlistClick}
        >
          {isWishlistSelected ? "Added to Wishlist" : "Add to Wishlist"}
        </button>
      </div>
    </div>
  );
};

export default PriceCard;
