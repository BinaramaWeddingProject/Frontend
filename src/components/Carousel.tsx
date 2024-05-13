import React, { useState, useEffect } from 'react';

const Carousel: React.FC<{ images: string[] }> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(intervalId);
  }, [images]);

  const handleBulletClick = (index: number) => {
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    setCurrentIndex(prevIndex => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex(prevIndex => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <div className="relative w-full h-96"> {/* Set a fixed height for the carousel */}
      <div className="w-full h-full flex">
        {images.map((image, index) => (
          <div
            key={index} // Use index as the key
            className={`flex-shrink-0 w-40 h-40 transition-opacity duration-500 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              className="w-auto h-full mx-auto object-contain" 
              src={image}
              alt={`Slide ${index}`}
            />
          </div>
        ))}
      </div>
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((__, index) => (
          <button
            key={index}
            className={`h-4 w-4 rounded-full bg-gray-500 focus:outline-none ${
              index === currentIndex ? 'bg-white' : ''
            }`}
            onClick={() => handleBulletClick(index)}
          />
        ))}
      </div>
      <button
        className="absolute top-1/2 transform -translate-y-1/2 left-0 bg-gray-500 text-white py-2 px-4 rounded-l-md focus:outline-none"
        onClick={prevSlide}
      >
        Prev
      </button>
      <button
        className="absolute top-1/2 transform -translate-y-1/2 right-0 bg-gray-500 text-white py-2 px-4 rounded-r-md focus:outline-none"
        onClick={nextSlide}
      >
        Next
      </button>
    </div>
  )
}

export default Carousel;