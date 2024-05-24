import React from 'react';
import { FaCarrot, FaDrumstickBite } from 'react-icons/fa';

interface VenuePriceCardProps {
  name: string;
  vegPrice: number;
  nonVegPrice: number;
  contact: string;
  onContactClick: () => void;
}

const VenuePriceCard: React.FC<VenuePriceCardProps> = ({ name, vegPrice, nonVegPrice, contact, onContactClick }) => {
  return (
    <div className="w-full h-72 rounded-lg shadow-lg overflow-hidden flex flex-col justify-between p-4 bg-gradient-to-r from-[#110069] to-indigo-600 text-white">
      <div>
        <h2 className="text-3xl font-bold mb-4">{name}</h2>
        <div className="mb-4 flex flex-col justify-between">
          <div className="flex items-center mb-2">
            <FaCarrot className="mr-2 text-xl" />
            <span className="mr-2 text-xl">Veg:</span>
            <span className="font-extrabold text-2xl">₹{vegPrice}</span>
          </div>
          <div className="flex items-center">
            <FaDrumstickBite className="mr-2 text-xl" />
            <span className="mr-2 text-xl">Non-Veg:</span>
            <span className="font-extrabold text-2xl">₹{nonVegPrice}</span>
          </div>
        </div>
      </div>
      <button
        onClick={onContactClick}
        className="bg-white text-indigo-600 hover:text-indigo-800 font-extrabold py-2 px-4 rounded transition duration-300 ease-in-out focus:outline-none"
      >
        Contact
      </button>
    </div>
  );
};

export default VenuePriceCard;
