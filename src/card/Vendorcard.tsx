import React from 'react';

interface VendorCardProps {
  image?: string;
  title?: string;
  rating?: number;
  packagePrice?: number;
  description?: string;
}

const VendorCard: React.FC<VendorCardProps> = ({ image='/public/delhi.jpg', title='sajdjn', rating=3, packagePrice=23, description='asf' }) => {
  return (
    <div className='flex justify-center'>
      <div className="h-[350px] w-[500px] rounded overflow-hidden shadow-xl flex flex-col"> {/* Fixed size */}
        <div className="relative h-[250px] w-[500px]">
          <img src={image} alt={title} className="w-full h-[200px]" />
        </div>
        <div className="px-6 py-3">
          <div className="font-bold text-xl mb-2 text-center">{title}</div>
          <div className="flex justify-between">
            <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
              Rating: {rating}
            </span>
            <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
              Package Price: ${packagePrice}
            </span>
          </div>
          <p className="text-gray-700 text-base text-center mt-2">{description}</p>
        </div>
        <div className="px-6 py-4 text-center">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Send Inquiry
          </button>
        </div>
      </div>
    </div>
  );
};

export default VendorCard;
