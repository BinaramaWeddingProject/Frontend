import React from 'react';
import RatingStars from './RatingStars';

interface VendorCardProps {
  image?: string;
  title?: string;
  rating?: number;
  packagePrice?: number;
  description?: string;
}

const VendorCard: React.FC<VendorCardProps> = ({ image='/public/delhi.jpg', title='Kundan Mehandi Art, Delhi', rating=3, packagePrice=13000, description='How about hiring a guy with 27 years of experience just in bridal mehandi art? yes that true!' }) => {
  return (
    <div className='flex justify-center'>
      <div className="h-[360px] w-[500px] rounded overflow-hidden shadow-xl flex flex-col"> {/* Fixed size */}
        <div className="relative h-[200px]">
          <img src={image} alt={title} className="w-full h-[200px]" />
        </div>
        <div className="px-6 py-2">
          <div className="font-bold text-xl mb-1 text-center h-[30px]">{title}</div>
          <div className="flex justify-between">
            <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
              <RatingStars rating= {rating}/>
            </span>
            <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
              Starting Package Price: Rs {packagePrice}
            </span>
          </div>
          <p className="text-gray-700 text-[12px] text-center mt-1 h-[30px]">{description}</p>
        </div>
        <div className="px-6 py-0 text-center">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Send Inquiry
          </button>
        </div>
      </div>
    </div>
  );
};

export default VendorCard;
