import React, { useState } from 'react';

interface Props {
  price: string | undefined ;
  rating: number;
}

const PriceCard: React.FC<Props> = ({ price, rating }) => {
  const [isWishlistSelected, setIsWishlistSelected] = useState(false);
  const [isEnquirySelected, setIsEnquirySelected] = useState(false);
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
          className={`${
            isEnquirySelected
              ? "bg-purple-500 text-white"
              : "bg-gradient-to-r from-blue-500 to-blue-700 text-white"
          } py-3 px-6 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-300 mb-4 w-full`}
          onClick={() => setIsEnquirySelected(!isEnquirySelected)}
        >
          {isEnquirySelected ? "Enquiry Sent" : "Send Enquiry"}
        </button>
        <button 
          className={`${
            isWishlistSelected
              ? "bg-green-500 text-white"
              : "bg-gray-200 text-gray-700"
          } py-3 px-6 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-300 mb-4 w-full`}
          onClick={() => setIsWishlistSelected(!isWishlistSelected)}
        >
          {isWishlistSelected ? "Added to Wishlist" : "Add to Wishlist"}
        </button>
      </div>
    </div>
  );
};

export default PriceCard;