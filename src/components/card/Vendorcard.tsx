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
 
};

const VendorCard: React.FC<VendorCardProps> = ({
  _id,
  image,
  city,
  businessName,
  rating = 3,
  packagePrice,
  summary,
 
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
      <div className="transform scale-72 sm:scale-100 h-[400px] w-[425px]  rounded  shadow-xl flex flex-col">
        <Link to={`/vendor/${type.type}/${_id}`}>
          <div className="relative h-[200px]">
            <img src={image} alt={businessName} className="w-full h-[200px] object-cover rounded-lg" />
            <div
              className={`absolute top-4 right-4 ${
                isInWishlist ? "text-red-600 transform scale-125" : "text-white"
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
                  ? "bg-[#ea4f54] text-white"
                  : "bg-[#A31F24] text-white"
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