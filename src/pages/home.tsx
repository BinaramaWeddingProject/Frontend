import React from 'react';
import NavBar from '../components/navbar';
import LocationSelector from '../components/Locationselector';
import LocationCardHolder from '../components/LocationCardHolder';
import { dummyLocations } from './dummyLocations';
import Carousel from '../components/Carousel';
import InformationBanner from '../components/InformationBanner';
import Footer from '../components/Footer';

function Home() {
  const imageUrl = "/60828931ff7a8ce3e24b6c19052a21ee.jpg";

  const dummyImages = [
    'https://picsum.photos/200',
    'https://picsum.photos/200',
    'https://picsum.photos/200',
  ];

  return (
    <div>
      <NavBar />
      <div className="relative">
        <div
          className="bg-cover bg-center h-screen"
          style={{ backgroundImage: `url(${imageUrl})`, backgroundSize: 'cover' }}
        >
          <div className="bg-black bg-opacity-30 h-full flex flex-col justify-center items-center">
            <h1 className="text-white text-4xl font-bold text-center mb-4">WELCOME TO WEDDINGZ VENUE</h1>
            <LocationSelector />
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0">
          <div className="h-screen"></div> {/* Add space after the image */}
        </div>
      </div>
      <div className="flex justify-center items-center"> {/* Flex container to center LocationCardHolder */}
        <LocationCardHolder locations={dummyLocations} />
      </div>
      <div>
        <Carousel images={dummyImages} />
      </div>
      <div className="mx-auto  w-screen">
        <InformationBanner />
      </div>
      <Footer/>
    </div>
  );
}

export default Home;
