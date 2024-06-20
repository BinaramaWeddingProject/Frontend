import NavBar from "../components/navbar";
import LocationSelector from "../components/Locationselector";
import LocationCardHolder from "../components/LocationCardHolder";
import { dummyLocations } from "./dummyLocations";
import InformationBanner from "../components/InformationBanner";
import Footer from "../components/Footer";
import Caro from "../components/Carousel3";


const imageUrl = "public/wv_homepage-min.gif";

const Home = () => {
  return (
    <div>
      <NavBar />
      <div className="relative">
        <div
          className="bg-cover bg-center h-screen"
          style={{
            backgroundImage: `url(${imageUrl})`,
          }}
        >
          <div className="bg-black bg-opacity-50 h-full flex flex-col justify-center items-center">
            {/* <LocationSelector /> */}
          </div>
        </div>
      </div>
      <div className="py-12 bg-gray-100">
        <h2 className="text-3xl text-gray-900 font-bold text-center mb-8">Popular Locations</h2>
        <div className="flex justify-center items-center">
          <LocationCardHolder locations={dummyLocations} />
        </div>
      </div>
      <div className="py-12 bg-white">
        <InformationBanner />
      </div>
      <Footer />
    </div>
  );
};

export default Home;










