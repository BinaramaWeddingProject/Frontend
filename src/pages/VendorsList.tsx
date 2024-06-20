import React from "react";
import { FaSearch } from "react-icons/fa";
import AllVendors from "../components/card/AllVendors";
import ArticleCard from "../components/card/ArticleCard";
import NavBar from "../components/navbar";
import Footer from "../components/Footer";

import { useState, useEffect } from "react";
import { useAllVendorQuery } from "../redux/api/vendor";
import type { Vendor } from "../types/types";
import VendorCard from "../components/card/Vendorcard";
import { useParams } from "react-router-dom";

import { LuArrowLeft } from "react-icons/lu";
import { LuArrowRight } from "react-icons/lu";

interface VendorsListProps {
  NumberOfCards?: number;

  Description?: string;
  Search?: string;
  Img?: string;
  ImgTitle2?: string;
  NumberOfArticaleCards?: number;
}

const VendorsList: React.FC<VendorsListProps> = ({
  NumberOfArticaleCards = 10,
  Search = "Search Bridal Mehndi Artists By Name",
  Img = "/public/mumbai.jpg",
  ImgTitle2 = "mumbai",
}) => {
  // Create an array of length equal to numberOfCards
  //const cardsArray = Array.from({ length: NumberOfCards });
  const ArticleCardsArray = Array.from({ length: NumberOfArticaleCards });
  const { data, error, isLoading } = useAllVendorQuery("");
  const [allvendors, setAllVendors] = useState<Vendor[]>([]);

  const [currentPage, setCurrentPage] = useState(1);
  const vendorsPerPage = 10; // Number of vendors to show per page

  const type = useParams();
  console.log("param value", type.type);
  const Title = type.type;

  useEffect(() => {
    if (data) {
      setAllVendors(data.data.vendors);
    }
  }, [data]);

  if (error) {
    return <h1>Error while loading data</h1>;
  }

  if (isLoading) {
    return <h1>Loading</h1>;
  }


  // Calculate the vendors to display on the current page
  const indexOfLastVendor = currentPage * vendorsPerPage;
  const indexOfFirstVendor = indexOfLastVendor - vendorsPerPage;
  const currentVendors = allvendors.slice(indexOfFirstVendor, indexOfLastVendor);

  // Calculate the total number of pages
  const totalPages = Math.ceil(allvendors.length / vendorsPerPage);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return (
    <>
      <NavBar />
      <div className="flex bg-blue-100">
        {/* First section (4/5 of the screen) */}
        <div className="justify-start p-4 w-3/4">
          <div className="bg-slate-100 rounded-md ">
            <p className="text-xl font-bold mx-3 pt-1">
              {Title === "AllVendors"
                ? "All Vendors"
                : Title === "Photographers"
                ? "Photographers"
                : Title === "MakeupArtist"
                ? "Makeup Artists"
                : Title === "MehendiArtist"
                ? "Mehendi Artists"
                : Title === "Decorators"
                ? "Decorators"
                : Title === "Caterers"
                ? "Caterers"
                : Title}
            </p>
            <p className="text-l font-semibold mx-3 pb-2">
              Showing result of {allvendors.length}{" "}
              {Title === "AllVendors" ? "Vendors" : Title}
            </p>
          </div>

          <hr className="h-1 bg-white my-2"></hr>

          <div className=" bg-slate-100 flex flex-wrap py-5 gap-24 justify-center rounded-md">
            {/* Render VendorCard components */}
            {currentVendors.length > 0 ? (
              currentVendors.map((vendor, index) => (
                <VendorCard
                  _id={vendor._id}
                  key={index}
                  businessName={vendor?.name}
                  city={vendor?.city}
                  packagePrice={vendor?.packages?.price}
                  summary={vendor?.summary}
                  image={vendor?.portfolio[4]}
                />
              ))
            ) : (
              <h1>No vendors available</h1>
            )}
          </div>

         {/* Pagination Controls */}
         <div className="flex justify-center mt-4">
            <button
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
              className="flex items-center px-4 py-2 mx-2 bg-[#A31F24] text-white rounded"
            >
              <LuArrowLeft  />
            </button>
            <span className="px-4 py-2 mx-2 bg-gray-200 text-black rounded">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="flex items-center px-4 py-2 mx-2 bg-[#A31F24] text-white rounded"
            >
             <LuArrowRight />
            </button>
          </div>

          

        </div>



        {/* Second section (1/5 of the screen) */}
        <div className="w-1/4 bg-[#fffdd0]">#F3CC3A   #E4C041
          <div className="justify-end p-4">
            <p className="text-xl font-bold">{Search}</p>
            <hr className="h-1 bg-gray-200 my-2"></hr>
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
            <hr className="h-1 bg-gray-200 my-2"></hr>
            <div className="shadow-xl bg-white">
              <AllVendors />
            </div>

            <img
              src={Img}
              alt={ImgTitle2}
              className="w-full h-[250px] p-3 shadow-xl"
            />
            <p className="text-xl font-semibold pt-3 pb-2 shadow">
              Related Article
            </p>

            <div className="  flex flex-wrap justify-center shadow">
              {/* Render VendorCard components */}
              {ArticleCardsArray.map((_, index) => (
                <div key={index} className="mx-2 mb-4 shadow-xl">
                  <ArticleCard />
                </div>
              ))}
            </div>
          </div>
          {/* Content for the second section */}
          {/* You can add content for the second section here */}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default VendorsList;