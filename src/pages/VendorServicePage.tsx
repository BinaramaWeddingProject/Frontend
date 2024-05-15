import NavBar from '../components/navbar'
import Footer from '../components/Footer'
import Caro from '../components/Carousel3'
import PriceCard from '../components/PriceCard'
import TabView from '../components/TabView';
import VendorInfo from '../components/VendorInfo';
import DescriptionCard from '../components/DescriptionCard';
import TermsAndPolicyCard from '../components/Terms';
import RelatedArticles from '../components/RelatedArticles';

const dummyData = {
    price: 1500,
    rating: 4.5
};

const dummyServiceDetails = {
    price: 100,
    portfolio: ["https://picsum.photos/200", "https://picsum.photos/200", "https://picsum.photos/200", "https://picsum.photos/200", "https://picsum.photos/200", "https://picsum.photos/200", "https://picsum.photos/200", "https://picsum.photos/200"],
    yearsOfExperience: 5,
    eventsCompleted: 10,
    willingToTravel: true,
    summary: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
    packages :[{
        name: "Basic Package",
        days: "1",
        price: "100",
        minAdvance: "50"
    },]
};

const vendorData = {
    name: "Awesome Photography",
    location: "123 Main Street, City, Country",
};

const dummyDescription = {
    title: "Service Description",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque mi vitae sapien tempor, non luctus turpis ultrices. Integer ut lorem magna. Vestibulum bibendum quam eu urna iaculis, nec vehicula velit vehicula. Nam id est a odio vulputate bibendum. Nunc porttitor interdum nunc, a dapibus quam. Suspendisse aliquam risus quis metus fermentum, vel tempor urna sodales. Sed non risus in sapien sollicitudin viverra et sit amet lorem. Sed vitae interdum lorem, nec vestibulum dolor. Sed congue efficitur justo, eget egestas ante semper in. Phasellus ultricies justo non lorem dapibus lobortis. Vivamus tempus purus in enim faucibus convallis. Sed dictum augue ligula, sed vehicula arcu auctor eget. Morbi tincidunt risus eget erat eleifend, non pharetra orci varius. Ut et pulvinar quam."
  };
  



function VendorServicePage() {
    return (
        <div>
            <NavBar />
            <div>
            <div className="container mx-auto">
            {/* <h1 className="text-3xl font-semibold mb-4">Vendor Information</h1> */}
            <VendorInfo name={vendorData.name} location={vendorData.location} />
        </div>
                <div className='flex max-w-full'>
                    <div className='w-3/4'>
                        <Caro />
                        <div className='max-w-full'>
                            <TabView />
                        </div>
                    </div>
                    <div className='mx-8 w-1/4'>
                        <PriceCard price={dummyData.price} rating={dummyData.rating} />
                    </div>
                </div>
                <div className='my-4'>
                <DescriptionCard title={dummyDescription.title} description={dummyDescription.description} />
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