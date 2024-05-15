import React from 'react';
import VendorCard from '../components/card/Vendorcard';
import { FaSearch } from 'react-icons/fa';
import AllVendors from '../components/card/AllVendors';
import ArticleCard from '../components/card/ArticleCard';

interface VendorsListProps {
  NumberOfCards?: number;
  Title?: string;
  Description?: string;
  Search?:string;
  Img?: string;
  ImgTitle2?: string;
  NumberOfArticaleCards?: number;
}

const VendorsList: React.FC<VendorsListProps> = ({ NumberOfCards=20,NumberOfArticaleCards=10, Title="bridal mehndi", Description="showinf 27 bridal mehndi artists in delhi", Search="Search Bridal Mehndi Artists By Name", Img="/public/mumbai.jpg", ImgTitle2="mumbai" }) => {
  // Create an array of length equal to numberOfCards
  const cardsArray = Array.from({ length: NumberOfCards });
  const ArticleCardsArray = Array.from({ length: NumberOfArticaleCards });

  return (
    <div className="flex bg-blue-100">
      {/* First section (4/5 of the screen) */}
      <div className="justify-start p-4 w-3/4">
        <div className='bg-slate-100'>
        <p className='text-xl font-bold mx-2'>{Title}</p>
        <p className='text-l font-semibold mx-2'>{Description}</p>
        </div>
        <hr className='h-1 bg-white my-2'></hr>
        
      <div className=" bg-slate-100 flex flex-wrap py-4 justify-center">
        {/* Render VendorCard components */}
        {cardsArray.map((_, index) => (
          <div key={index} className="mx-4 mb-4">
          <VendorCard />
        </div>
        ))}
        </div>
      </div>

      {/* Second section (1/5 of the screen) */}
      <div className="w-1/4 bg-pink-100">
        <div className="justify-end p-4">
            <p className='text-xl font-bold'>{Search}</p>
            <hr className='h-1 bg-gray-200 my-2'></hr>
                {/* Search bar */}
                <div className="flex">
            <input
              type="text"
              placeholder="Enter artist name..."
              className="w-full px-3 py-2 border rounded-l-md outline-none"
            />
            <button className="bg-blue-400 text-white px-4 py-2 rounded-r-md">
            <FaSearch />
            </button>
          </div>
          <hr className='h-1 bg-gray-200 my-2'></hr>
          <div className='shadow-xl'>
          <AllVendors />
          </div>

          <img src={Img} alt={ImgTitle2} className="w-full h-[250px] p-3 shadow-xl"/>
          <p className='text-xl font-semibold pt-3 pb-2 shadow'>Related Article</p>
          
          <div className="  flex flex-wrap justify-center shadow">
        {/* Render VendorCard components */}
        {ArticleCardsArray.map((_, index) => (
          <div key={index} className="mx-2 mb-4 shadow-xl">
          <ArticleCard/>
        </div>
        ))}
        </div>
        </div>
        {/* Content for the second section */}
        {/* You can add content for the second section here */}
      </div>
    </div>
  );
};

export default VendorsList;
