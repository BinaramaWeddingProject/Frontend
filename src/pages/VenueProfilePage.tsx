import NavBar from '../components/navbar';
import Footer from '../components/Footer';
import { useGetVendorByIdQuery } from '../redux/api/vendor';
// import { useUpdateVendorMutation } from '../redux/api/vendor';
import VenueProfileInfo from '../components/VenueProfileInfo';
import VenueProfileCard from '../components/VenueProfileCard';
import ServiceDetailsFormVenue from '../components/ServiceDetailsFormVenue';
import { useGetVenueByIdQuery } from '../redux/api/venue';
import { useAllVenueQuery } from '../redux/api/venue';

const vendorid = '6654342528aa54d4db41612a';

// Corrected function declaration
const VenueProfilePage = () => {
    console.log('hello')
    const { data: venue, error, isLoading: isFetching } = useGetVenueByIdQuery(vendorid);
    // const { data: venues, error, isLoading } = useAllVenueQuery('');
   
    // console.log("updatevendor", updatevendor)
    const venueData = venue?.data?.venue;
    console.log("vendue data", venueData);

    

    return (
        <>
            <NavBar />
            <div className="flex justify-center text-white bg-blue-900 p-4">
                <div className="text-4xl font-semibold">PROFILE PAGE</div>
            </div>

            <div className="flex justify-start">
                <div className="w-1/2 lg:w-96">
                    <VenueProfileCard 
                        yourName={venueData?.yourName} 
                        phone={venueData?.phone} 
                        email={venueData?.email} 
                        id={vendorid}
                    /> 
                </div>
                <div className='w-full'>
                    <div className="max-w-full mx-auto px-4">
                        <VenueProfileInfo businessName={venueData?.businessName}  address={venueData?.address}/>
                    </div>
                    <div className="w-full lg:w-full p-4">
                      
                        <ServiceDetailsFormVenue 
                        phone={venueData?.phone} 
                        images={venueData?.images} 
                        featuresOfVenue={venueData?.featuresOfVenue} 
                        guestCapacity={venueData?.guestCapacity} 
                        howToReach={venueData?.howToReach} 
                        summary={venueData?.summary} 
                        venuePolicies={venueData?.venuePolicies} 
                        id={vendorid}
                        />
                    </div>
                </div>
             </div> 
            <Footer />
        </>
    );
};

export default VenueProfilePage;
