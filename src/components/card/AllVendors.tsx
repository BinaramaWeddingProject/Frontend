
import { Link } from "react-router-dom";
import { MdOutlineCameraAlt } from "react-icons/md";
import { PiHairDryerBold } from "react-icons/pi";
import { LiaHandsSolid } from "react-icons/lia";
import { GiVineFlower } from "react-icons/gi";
import { GiHotMeal } from "react-icons/gi";
import { FiChevronRight } from "react-icons/fi";

const type = {
  0: "AllVendors",
  1: "Photographer",
  2: "MakeupArtist",
  3: "MehendiArtist",
  4: "Decorator",
  5: "Caterer",
};
const AllVendors = () => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg ml-auto ">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Browse Vendors</div>
        <div className="mb-4">
          <Link to={`/vendor/${type[1]}`}>
            <div className="flex items-center mb-2">
              <MdOutlineCameraAlt size="20" />
              <p className="ml-2">Photograhers</p>
              <FiChevronRight className="ml-auto" size="15" />
            </div>
          </Link>
          <Link to={`/vendor/${type[2]}`}>
            <div className="flex items-center mb-2">
              <PiHairDryerBold size="20" />
              <p className="ml-2">Makeup Artists</p>
              <FiChevronRight className="ml-auto" size="15" />
            </div>
          </Link>
          <Link to={`/vendor/${type[3]}`}>
            <div className="flex items-center mb-2">
              <LiaHandsSolid size="20" />
              <p className="ml-2">Mehendi Artists</p>
              <FiChevronRight className="ml-auto" size="15" />
            </div>
          </Link>
          <Link to={`/vendor/${type[4]}`}>
            <div className="flex items-center mb-2">
              <GiVineFlower size="20" />
              <p className="ml-2">Decorators</p>
              <FiChevronRight className="ml-auto" size="15" />
            </div>
          </Link>
          <Link to={`/vendor/${type[5]}`}>
            <div className="flex items-center mb-2">
              <GiHotMeal />
              <p className="ml-2">Caterers</p>
              <FiChevronRight className="ml-auto" size="15" />
            </div>
          </Link>
        </div>
        <hr className="my-4" />
        <div className="text-center">
          <Link to={`/vendor/${type[0]}`} className="">
            All Vendors
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AllVendors;
