import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import AllVendors from "../components/card/AllVendors";
import ArticleCard from "../components/card/ArticleCard";
import NavBar from "../components/navbar";
import Footer from "../components/Footer";
import { useAllVendorQuery } from "../redux/api/vendor";
import type { Vendor } from "../types/types";
import VendorCard from "../components/card/Vendorcard";
import { useParams } from "react-router-dom";

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
  const ArticleCardsArray = Array.from({ length: NumberOfArticaleCards });
  const { data, error, isLoading } = useAllVendorQuery("");
  const [allvendors, setAllVendors] = useState<Vendor[]>([]);
  const [filteredVendors, setFilteredVendors] = useState<Vendor[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  const type = useParams();
  const Title = type.type;

  useEffect(() => {
    if (data) {
      setAllVendors(data.data.vendors);
    }
  }, [data]);

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredVendors(allvendors);
    } else {
      const filtered = allvendors.filter((vendor) =>
        vendor?.name?.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredVendors(filtered);
    }
  }, [searchQuery, allvendors]);

  const handleSearch = () => {
    // Perform search based on searchQuery
  };

  if (error) {
    return <h1 className="text-red-500">Error while loading data</h1>;
  }

  if (isLoading) {
    return <h1 className="text-blue-500">Loading...</h1>;
  }

  return (
    <>
      <NavBar />
      <div className="flex flex-col md:flex-row  min-h-screen p-4">
        {/* First section */}
        <div className="w-full md:w-3/4 p-4">
          <div className="bg-white p-4 rounded shadow-md">
            <p className="text-3xl font-bold text-gray-800">
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
            <p className="text-md font-semibold text-gray-600">
              Showing result of {allvendors.length}{" "}
              {Title === "AllVendors" ? "Vendors" : Title}
            </p>
          </div>

          <div className="bg-white p-6 rounded  mt-4 flex flex-wrap gap-2 justify-center sm:shadow-md">
            {/* Render VendorCard components */}
            {filteredVendors.length > 0 ? (
              filteredVendors.map((vendor, index) => (
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
              <h1 className="text-gray-500">No vendors available</h1>
            )}
          </div>
        </div>

        {/* Second section */}
        <div className="w-full md:w-1/4 bg-white p-4 md:p-6 rounded shadow-md mt-4 md:mt-0">
          <div>
            <p className="text-2xl font-bold text-gray-800">{Search}</p>
            <div className="flex mt-4">
              <input
                type="text"
                placeholder="Enter artist name..."
                className="w-full px-3 py-2 border rounded-l-md outline-none focus:ring-2 focus:ring-blue-400"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600"
                onClick={handleSearch}
              >
                <FaSearch />
              </button>
            </div>
            <div className="shadow-xl mt-8">
              <AllVendors />
            </div>
            <img
              src={Img}
              alt={ImgTitle2}
              className="w-full h-[250px] p-3 shadow-xl rounded-md mt-6"
            />
            <p className="text-xl font-semibold pt-3 pb-2 shadow">
              Related Articles
            </p>
            <div className="flex flex-wrap justify-center shadow">
              {/* Render ArticleCard components */}
              {ArticleCardsArray.map((_, index) => (
                <div key={index} className="mx-2 mb-4 shadow-xl">
                  <ArticleCard />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default VendorsList;
