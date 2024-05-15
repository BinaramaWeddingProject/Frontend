import React from 'react';
import { FaSearch } from 'react-icons/fa';
import AllVendors from '../components/card/AllVendors';
import ArticleCard from '../components/card/ArticleCard';
import NavBar from '../components/navbar';
import Footer from '../components/Footer';

import { useState, useEffect } from "react";
import { useAllVendorQuery } from "../redux/api/vendor";
import type { Vendor } from "../types/types";
import VendorCard from '../components/card/Vendorcard';


interface VendorsListProps {
  NumberOfCards?: number;
  Title?: string;
  Description?: string;
  Search?: string;
  Img?: string;
  packagePrice?:string;
  ImgTitle2?: string;
}

const VendorsList: React.FC<VendorsListProps> = ({ Title = "bridal mehndi", Description = "showing 27 bridal mehndi artists in Delhi", Search = "Search Bridal Mehndi Artists By Name", Img = "/public/mumbai.jpg", ImgTitle2 = "mumbai" }) => {
  const { data, error, isLoading } = useAllVendorQuery("");
  const [allvendors, setAllVendors] = useState<Vendor[]>([]);

  useEffect(() => {
    if (data) {
      setAllVendors(data.data.vendors);
    }
  }, [data])

  if (error) {
    return <h1>Error while loading data</h1>;
  }

  if (isLoading) {
    return <h1>Loading</h1>;
  }

  return (
    <>
      <NavBar />
      <div className="flex">
        {/* First section (4/5 of the screen) */}
        <div className="justify-start p-4 w-3/4">
          <p className='text-xl font-bold'>{Title}</p>
          <p className='text-l font-semibold'>{Description}</p>
          <hr className='h-2 bg-cyan-400 my-2'></hr>
          <div className="bg-slate-500 flex flex-wrap py-4 justify-center">
            {/* Render VendorCard components */}
            {allvendors.length > 0 ? allvendors.map((vendor, index) => (

                console.log("vendors :" ,vendor),
                console.log(vendor?.packages?.price),
              <VendorCard
                key={index}
                businessName={vendor?.businessName}
                city={vendor?.city}
                packagePrice={vendor?.packages?.price}
                summary={vendor?.summary}
                image = {vendor?.portfolio[0]}
              />
            )) : <h1>No vendors available</h1>}
          </div>
        </div>
        {/* Second section (1/5 of the screen) */}
        <div className="w-1/4 bg-pink-500">
          <div className="justify-end p-4" >
            <p className='text-xl font-bold'>{Search}</p>
            <hr className='h-1 bg-cyan-400 my-2'></hr>
            {/* Search bar */}
            <div className="flex">
              <input
                type="text"
                placeholder="Enter artist name..."
                className="w-full px-3 py-2 border rounded-l-md outline-none"
              />
              <button className="bg-blue-500 text-white px-4 py-2 rounded-r-md">
                <FaSearch />
              </button>
            </div>
            <hr className='h-1 bg-cyan-400 my-2'></hr>
            <AllVendors />
            <img src={Img} alt={ImgTitle2} className="w-full h-[250px]" />
            <p className='text-xl font-semibold py-2'>Related Article</p>
            <ArticleCard />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default VendorsList;
