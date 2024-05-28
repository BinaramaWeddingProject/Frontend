import React from 'react';
import RatingStars from './RatingStars'; 
import { Link } from 'react-router-dom';

type VendorCardProps  = {
  _id: string | undefined
  image?: string;
  businessName?: string;
  rating?: number;
  packagePrice?: string;
  summary?: string;
  city?:string
}


const VendorCard: React.FC<VendorCardProps> = ({ _id , image,city , businessName, rating=3, packagePrice, summary }) => {
  console.log("Received props:", { image, city, businessName, rating, packagePrice, summary  , _id});


 



  return (
    <div className='flex justify-center'>
      <div className="h-[400px] w-[500px] rounded overflow-hidden shadow-xl flex flex-col"> {/* Fixed size */}

      <Link to={`/vendors/${_id}`}>
       
        <div className="relative h-[200px]">
          <img src={image} alt={businessName} className="w-full h-[200px]" />
        </div>
      </Link>
        


        <div className="px-6 py-2 overflow-hidden">
          <div className="font-bold text-xl mb-1 text-center h-[30px]">{businessName} , {city}</div>
          <div className="flex justify-between">
            <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
              <RatingStars rating= {rating}/>
            </span>
            <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
              Starting Package Price: Rs {packagePrice}
            </span>
          </div>
          <p className="text-gray-700 text-[12px] text-center mt-1 h-[60px]">{summary}</p>
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