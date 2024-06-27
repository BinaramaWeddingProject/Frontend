// import { Link } from "react-router-dom";
// import { MdPhotoCamera } from "react-icons/md";
// import { FaPalette } from "react-icons/fa";
// import { FaMehndi } from "react-icons/fa";  // Replaced GiHenna
// import { AiOutlineBgColors } from "react-icons/ai";
// import { GiMeal } from "react-icons/gi";
// import { FaMusic } from "react-icons/fa"; // Replaced AiFillMusic (incorrect)
// import { FaDrum } from "react-icons/fa";
// import { GiSplatter } from "react-icons/gi";
// import { AiOutlineUser } from "react-icons/ai";
// import { GiMagicHat } from "react-icons/gi";
// import { GiFog } from "react-icons/gi";
// import { GiJoystick } from "react-icons/gi"; // Replaced GiBoxTrap
// import { GiMicrophoneAlt } from "react-icons/fa"; // Replaced GiMicrophone
// import { FaUsers } from "react-icons/fa"; // Possible replacement for GiGirl
// import { GiWaiter } from "react-icons/gi";
// import { FaCar } from "react-icons/fa"; // Replaced GiParkingGarage
// import { FiDisc } from "react-icons/fi"; // Replaced GiTurnstile
// import { GiCake } from "react-icons/fi"; // Replaced GiCarSideview
// import { GiPawPrint } from "react-icons/gi"; // Needs replacement based on purpose
// import { GiHouse } from "react-icons/gi"; // Needs replacement based on purpose
// import { GiGlassCelebration } from "react-icons/gi";
// import { GiBeerBottle } from "react-icons/gi";
// import { FiChevronRight } from "react-icons/fi";


// const type = {
//   0: "AllVendors",
//   1: "Photographer",
//   2: "MakeupArtist",
//   3: "MehendiArtist",
//   4: "Decorator",
//   5: "Caterer",
//   6: "BandBaja",
//   7: "Dhol",
//   8: "TattooArtist",
//   9: "Messkot",
//   10: "Magicians",
//   11: "FogEvent",
//   12: "GameCoordinator",
//   13: "Anchor",
//   14: "LiveSinger",
//   15: "WelcomeGirls",
//   16: "WaiterService",
//   17: "ValetParking",
//   18: "DJ",
//   19: "BirthdayEntry",
//   20: "JagranSetup",
//   21: "MataChowkiSetup",
//   22: "Bartender",
//   23: "RoomsBooking"
// };

// const AllVendors = () => {
//   return (
//     <div className="max-w-sm rounded overflow-hidden shadow-lg ml-auto">
//       <div className="px-6 py-4">
//         <div className="font-bold text-xl mb-2">Browse Vendors</div>
//         <div className="mb-4">
//           <Link to={`/vendor/${type[1]}`}>
//             <div className="flex items-center mb-2">
//               <MdPhotoCamera size="20" />
//               <p className="ml-2">Photographers</p>
//               <FiChevronRight className="ml-auto" size="15" />
//             </div>
//           </Link>
//           <Link to={`/vendor/${type[2]}`}>
//             <div className="flex items-center mb-2">
//               <FaPalette size="20" />
//               <p className="ml-2">Makeup Artists</p>
//               <FiChevronRight className="ml-auto" size="15" />
//             </div>
//           </Link>
//           <Link to={`/vendor/${type[3]}`}>
//             <div className="flex items-center mb-2">
//               <GiHenna size="20" />
//               <p className="ml-2">Mehendi Artists</p>
//               <FiChevronRight className="ml-auto" size="15" />
//             </div>
//           </Link>
//           <Link to={`/vendor/${type[4]}`}>
//             <div className="flex items-center mb-2">
//               <AiOutlineBgColors size="20" />
//               <p className="ml-2">Decorators</p>
//               <FiChevronRight className="ml-auto" size="15" />
//             </div>
//           </Link>
//           <Link to={`/vendor/${type[5]}`}>
//             <div className="flex items-center mb-2">
//               <GiMeal size="20" />
//               <p className="ml-2">Caterers</p>
//               <FiChevronRight className="ml-auto" size="15" />
//             </div>
//           </Link>
//           <Link to={`/vendor/${type[6]}`}>
//             <div className="flex items-center mb-2">
//               <AiFillMusic size="20" />
//               <p className="ml-2">{`${type[6]}`}</p>
//               <FiChevronRight className="ml-auto" size="15" />
//             </div>
//           </Link>
//           <Link to={`/vendor/${type[7]}`}>
//             <div className="flex items-center mb-2">
//               <FaDrum size="20" />
//               <p className="ml-2">{`${type[7]}`}</p>
//               <FiChevronRight className="ml-auto" size="15" />
//             </div>
//           </Link>
//           <Link to={`/vendor/${type[8]}`}>
//             <div className="flex items-center mb-2">
//               <GiInkSplatter size="20" />
//               <p className="ml-2">{`${type[8]}`}</p>
//               <FiChevronRight className="ml-auto" size="15" />
//             </div>
//           </Link>
//           <Link to={`/vendor/${type[9]}`}>
//             <div className="flex items-center mb-2">
//               <AiOutlineUser size="20" />
//               <p className="ml-2">{`${type[9]}`}</p>
//               <FiChevronRight className="ml-auto" size="15" />
//             </div>
//           </Link>
//           <Link to={`/vendor/${type[10]}`}>
//             <div className="flex items-center mb-2">
//               <GiMagicHat size="20" />
//               <p className="ml-2">{`${type[10]}`}</p>
//               <FiChevronRight className="ml-auto" size="15" />
//             </div>
//           </Link>
//           <Link to={`/vendor/${type[11]}`}>
//             <div className="flex items-center mb-2">
//               <GiFog size="20" />
//               <p className="ml-2">{`${type[11]}`}</p>
//               <FiChevronRight className="ml-auto" size="15" />
//             </div>
//           </Link>
//           <Link to={`/vendor/${type[12]}`}>
//             <div className="flex items-center mb-2">
//               <GiBoxTrap size="20" />
//               <p className="ml-2">{`${type[12]}`}</p>
//               <FiChevronRight className="ml-auto" size="15" />
//             </div>
//           </Link>
//           <Link to={`/vendor/${type[13]}`}>
//             <div className="flex items-center mb-2">
//               <GiMicrophone size="20" />
//               <p className="ml-2">{`${type[13]}`}</p>
//               <FiChevronRight className="ml-auto" size="15" />
//             </div>
//           </Link>
//           <Link to={`/vendor/${type[14]}`}>
//             <div className="flex items-center mb-2">
//               <GiSinger size="20" />
//               <p className="ml-2">{`${type[14]}`}</p>
//               <FiChevronRight className="ml-auto" size="15" />
//             </div>
//           </Link>
//           <Link to={`/vendor/${type[15]}`}>
//             <div className="flex items-center mb-2">
//               <GiGirl size="20" />
//               <p className="ml-2">{`${type[15]}`}</p>
//               <FiChevronRight className="ml-auto" size="15" />
//             </div>
//           </Link>
//           <Link to={`/vendor/${type[16]}`}>
//             <div className="flex items-center mb-2">
//               <GiWaiter size="20" />
//               <p className="ml-2">{`${type[16]}`}</p>
//               <FiChevronRight className="ml-auto" size="15" />
//             </div>
//           </Link>
//           <Link to={`/vendor/${type[17]}`}>
//             <div className="flex items-center mb-2">
//               <GiParkingGarage size="20" />
//               <p className="ml-2">{`${type[17]}`}</p>
//               <FiChevronRight className="ml-auto" size="15" />
//             </div>
//           </Link>
//           <Link to={`/vendor/${type[18]}`}>
//             <div className="flex items-center mb-2">
//               <GiTurnstile size="20" />
//               <p className="ml-2">{`${type[18]}`}</p>
//               <FiChevronRight className="ml-auto" size="15" />
//             </div>
//           </Link>
//           <Link to={`/vendor/${type[19]}`}>
//             <div className="flex items-center mb-2">
//               <GiCarSideview size="20" />
//               <p className="ml-2">{`${type[19]}`}</p>
//               <FiChevronRight className="ml-auto" size="15" />
//             </div>
//           </Link>
//           <Link to={`/vendor/${type[20]}`}>
//             <div className="flex items-center mb-2">
//               <GiPawPrint size="20" />
//               <p className="ml-2">{`${type[20]}`}</p>
//               <FiChevronRight className="ml-auto" size="15" />
//             </div>
//           </Link>
//           <Link to={`/vendor/${type[21]}`}>
//             <div className="flex items-center mb-2">
//               <GiHouse size="20" />
//               <p className="ml-2">{`${type[21]}`}</p>
//               <FiChevronRight className="ml-auto" size="15" />
//             </div>
//           </Link>
//           <Link to={`/vendor/${type[22]}`}>
//             <div className="flex items-center mb-2">
//               <GiGlassCelebration size="20" />
//               <p className="ml-2">{`${type[22]}`}</p>
//               <FiChevronRight className="ml-auto" size="15" />
//             </div>
//           </Link>
//           <Link to={`/vendor/${type[23]}`}>
//             <div className="flex items-center mb-2">
//               <GiBeerBottle size="20" />
//               <p className="ml-2">{`${type[23]}`}</p>
//               <FiChevronRight className="ml-auto" size="15" />
//             </div>
//           </Link>
//         </div>
//         <hr className="my-4" />
//         <div className="text-center">
//           <Link to={`/vendor/${type[0]}`} className="">
//             All Vendors
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AllVendors;
