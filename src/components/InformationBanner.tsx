
import { FaPhoneAlt } from 'react-icons/fa'; // Import phone icon from react-icons

const InformationBanner = () => {
  return (
    <div className="bg-gradient-to-r from-purple-600 to-blue-800 text-white py-8 px-10 mt-8 rounded-lg shadow-lg">
      <div className="flex items-center text-3xl font-semibold mb-6">
        <FaPhoneAlt className="w-8 h-8 mr-2" />
        CALL US: +912249449790
      </div>
      <div className="text-lg mb-4 italic">24-hour helpline</div>
      <div className="text-lg mb-4 font-bold">OR</div>
      <div className="text-lg mb-4">HAVE US CALL YOU FOR UP TO <span className="font-bold text-yellow-400">30% DISCOUNT</span></div>
      <div className="text-lg mb-4">India's Largest Wedding Company</div>
      <div className="text-lg mb-4">Find, Compare And Book Wedding Venues And Services</div>
      <div className="text-lg mb-4 font-semibold">Best Prices Guaranteed</div>
      <div className="text-lg">Find Inspiration, Ideas And Insights For Your Wedding</div>
    </div>
  );
};

export default InformationBanner;
