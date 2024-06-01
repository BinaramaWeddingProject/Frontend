import NavBar from '../components/navbar';
import Footer from '../components/Footer';
// import { useUpdateVendorMutation } from '../redux/api/vendor';
import { useGetVenueByIdQuery } from '../redux/api/venue';
import UserSidebar from '../components/UserSidebar';
import UserTabView from '../components/UserTabView';

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
            <div className='flex '>
            <div className=" flex-col-1 justify-start border-2 border-white">
                    <div className="w-80">
                        <UserSidebar
                            yourName={venueData?.yourName}
                            phone={venueData?.phone}
                            email={venueData?.email}
                            id={vendorid}
                        />
                    </div>
                </div>

                <div className="flex-col-1 justify-center text-white bg-blue-900 p-4 w-full border-2 border-white ">
                    <UserTabView />
                </div>

            </div>
            <Footer />
        </>
    );
};

export default VenueProfilePage;
