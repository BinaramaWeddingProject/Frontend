import NavBar from '../components/navbar'
import Footer from '../components/Footer'
import Caro from '../components/Carousel3'
import PriceCard from '../components/PriceCard'
import TabView from '../components/TabView';
import VendorInfo from '../components/VendorInfo';
import DescriptionCard from '../components/DescriptionCard';
import TermsAndPolicyCard from '../components/Terms';
import RelatedArticles from '../components/RelatedArticles';


import  { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useGetVendorByIdQuery } from '../redux/api/vendor'; 
import { Vendor } from '../types/types';


interface Params {
    [key: string]: string | undefined;
  }
  
const dummyData = {
  rating : 4,
}


function VendorServicePage () {

    const { _id } = useParams<Params>();
    const id = _id ;
    
    // const id = '6647077ca07a6f12501a2b6c';   


    const { data: vendor, error, isLoading } = useGetVendorByIdQuery(id ? id : "");
    
   const vendorData  = vendor?.data.vendor
   console.log("vendor:" ,vendor )
 
   console.log("the use vendor:",vendor?.data.vendor)

   

  if (!id) {
      return <div>No ID provided.</div>;
  }

  if (isLoading) {
      return <div>Loading...</div>;
  }

  if (error) {
      return <div>Error: {error.message}</div>;
  }

  
    console.log("Vendor data outside:" , vendorData)
    //console.log("detail", VendorData?.packages?.price)
    return (
        <div>
            <NavBar />
            <div>
            <div className="container mx-auto">
            <h1 className="text-3xl font-semibold m-6">Vendor Information</h1>
            {/* <VendorInfo name={vendorData?.name} location={vendorData?.location} /> */}
            <VendorInfo />
        </div>
                <div className='flex max-w-full'>
                    <div className='w-3/4'>
                        <Caro portfolio={vendorData?.portfolio}/>
                        <div className='max-w-full'>
                            <TabView vendorData =  {vendorData} />
                        </div>
                    </div>
                    <div className='mx-8 w-1/4'>
                        <PriceCard price={vendorData?.packages?.price} rating={dummyData.rating} />
                    </div>
                </div>
                <div className='my-4'>
                <DescriptionCard title={vendorData?.packages?.name} description={vendorData?.summary} />
                </div>
                <div>
                    <TermsAndPolicyCard/>
                </div>
                <div className='bg-[#110069] text-white'>
                    <div className='text-2xl flex justify-center my-2 '>RELATED ARTICLES</div>
                    <RelatedArticles/>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default VendorServicePage