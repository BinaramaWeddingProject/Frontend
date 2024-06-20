import NavBar from "../components/navbar";
import Footer from "../components/Footer";
import Caro from "../components/Carousel3";
import PriceCard from "../components/PriceCard";
import TabView from "../components/TabView";
import VendorInfo from "../components/VendorInfo";
import DescriptionCard from "../components/DescriptionCard";
import TermsAndPolicyCard from "../components/Terms";
import RelatedArticles from "../components/RelatedArticles";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGetVendorByIdQuery } from "../redux/api/vendor";
import AllVendors from "../components/card/AllVendors";

interface Params {
  [key: string]: string | undefined;
}

const dummyData = {
  rating: 4,
};

function VendorServicePage() {
  const { _id } = useParams<Params>();
  const id = _id;

  const {
    data: vendor,
    error,
    isLoading,
  } = useGetVendorByIdQuery(id ? id : "");

  const vendorData = vendor?.data.vendor;
  console.log("vendor:", vendor);

  if (!id) {
    return <div>No ID provided.</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    if ("message" in error) {
      // Handle SerializedError
      return <div>Error: {error.message}</div>;
    }
  }

  return (
    <div>
      <NavBar />
      <div className="container mx-auto shadow-md bg-slate-100 p-4">
        <div className="flex flex-col lg:flex-row justify-between mb-6">
          <div className="lg:w-full mb-4 lg:mb-0 flex ">

            <VendorInfo
              name={vendorData?.name}
              location={vendorData?.city}
              businessName={vendorData?.businessName}
              typeOfBusiness={vendorData?.type_Of_Business}
            />
                      <div className="w-1/4 scale-90 -mt-8">
            <AllVendors />
          </div>
          </div>

        </div>

        <div className="flex flex-col lg:flex-row max-w-full">
          <div className="lg:w-3/4 mb-4 lg:mb-0">
            <Caro portfolio={vendorData?.portfolio} />
            <div className="max-w-full">
              <TabView vendorData={vendorData} />
            </div>
          </div>
          <div className="lg:ml-8 mt-2 lg:mt-0 lg:w-1/4">
            <PriceCard
              price={vendorData?.packages?.price}
              rating={dummyData.rating}
              vendorId={id}
            />
          </div>
        </div>
        <div className="my-4">
          <DescriptionCard
            title={vendorData?.packages?.name}
            description={vendorData?.summary}
          />
        </div>
        <div className="my-4">
          <TermsAndPolicyCard />
        </div>
        <div className="bg-[#110069] text-white">
          <div className="text-2xl flex justify-center my-2">
            RELATED ARTICLES
          </div>
          <RelatedArticles />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default VendorServicePage;
