import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FaHeart } from "react-icons/fa"; // Import the heart icon from react-icons
import RatingStars from "./RatingStars";
import { useGetWishlistQuery } from "../../redux/api/wishlist";

const userId = "665d6d766063ea750000e096";

type VendorCardProps = {
  _id: string | undefined;
  image?: string | undefined;
  businessName?: string;
  rating?: number;
  packagePrice?: string;
  summary?: string;
  city?: string;
  h?: string;
  w?: string;
};

const VendorCard: React.FC<VendorCardProps> = ({
  _id,
  image,
  city,
  businessName,
  rating = 3,
  packagePrice,
  summary,
  h,
  w,
}) => {
  const { data: wishlistData, refetch } = useGetWishlistQuery(userId);
  const [isInWishlist, setIsInWishlist] = useState(false);
  const [isEnquirySelected, setIsEnquirySelected] = useState(false);
  const itemId = _id;

  useEffect(() => {
    if (wishlistData) {
      const isWishlisted = wishlistData?.wishlist?.items.some(item => item.itemId === itemId);
      setIsInWishlist(isWishlisted);
    }
  }, [wishlistData, itemId]);

  const type = useParams();

  return (
    <div className="flex justify-center">
      <div className="transform scale-75 sm:scale-100 h-[400px] w-[500px] rounded overflow-hidden shadow-xl flex flex-col">
        <Link to={`/vendor/${type.type}/${_id}`}>
          <div className="relative h-[200px]">
            <img src={image} alt={businessName} className="w-full h-[200px] object-cover" />
            <div
              className={`absolute top-2 right-2 ${
                isInWishlist ? "text-red-500 transform scale-125" : "text-white"
              }`}
            >
              <FaHeart size={25} />
            </div>
          </div>
        </Link>
        <div className="px-6 py-2 flex-grow flex flex-col justify-between">
          <div>
            <div className="font-bold text-lg mb-2 text-center">
              {businessName}, {city}
            </div>
            <div className="flex justify-between">
              <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                <RatingStars rating={rating} />
              </span>
              <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                Starting Package Price: Rs {packagePrice}
              </span>
            </div>
            <p className="text-gray-700 text-sm text-center mt-2">
              {summary}
            </p>
          </div>
          <div className="text-center mt-4">
            <button 
              className={`${
                isEnquirySelected
                  ? "bg-purple-500 text-white"
                  : "bg-gradient-to-r from-blue-500 to-blue-700 text-white"
              } py-2 px-4 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-300 mb-4 w-full`}
              onClick={() => setIsEnquirySelected(!isEnquirySelected)}
            >
              {isEnquirySelected ? "Enquiry Sent" : "Send Enquiry"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorCard;
