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
  6: "Band baja",
  7: "dhol",
  8: "Tatto Artist",
  9: "Messkot",
  10: "Magicians",
  11: "Fog Event",
  12: "Game Coordinator",
  13: "Anchor",
  14: "Live singer",
  15: "Welcome Girls",
  16: "Waiter service boy",
  17: "Vallet parking vendor",
  18: "Dj",
  19: "Birthday boy car Entry",
  20: "Jagran setup",
  21: "Mata ki Chowki setup",
  22: "Bar tender boy",
  23: "Rooms booking"
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
          <Link to={`/vendor/${type[6]}`}>
            <div className="flex items-center mb-2">
              <GiHotMeal />
              <p className="ml-2">{`${type[6]}`}</p>
              <FiChevronRight className="ml-auto" size="15" />
            </div>
          </Link>
          <Link to={`/vendor/${type[7]}`}>
            <div className="flex items-center mb-2">
              <GiHotMeal />
              <p className="ml-2">{`${type[7]}`}</p>
              <FiChevronRight className="ml-auto" size="15" />
            </div>
          </Link>
          <Link to={`/vendor/${type[8]}`}>
            <div className="flex items-center mb-2">
              <GiHotMeal />
              <p className="ml-2">{`${type[8]}`}</p>
              <FiChevronRight className="ml-auto" size="15" />
            </div>
          </Link>
          <Link to={`/vendor/${type[9]}`}>
            <div className="flex items-center mb-2">
              <GiHotMeal />
              <p className="ml-2">{`${type[9]}`}</p>
              <FiChevronRight className="ml-auto" size="15" />
            </div>
          </Link>
          <Link to={`/vendor/${type[10]}`}>
            <div className="flex items-center mb-2">
              <GiHotMeal />
              <p className="ml-2">{`${type[10]}`}</p>
              <FiChevronRight className="ml-auto" size="15" />
            </div>
          </Link>
          <Link to={`/vendor/${type[11]}`}>
            <div className="flex items-center mb-2">
              <GiHotMeal />
              <p className="ml-2">{`${type[11]}`}</p>
              <FiChevronRight className="ml-auto" size="15" />
            </div>
          </Link>
          <Link to={`/vendor/${type[12]}`}>
            <div className="flex items-center mb-2">
              <GiHotMeal />
              <p className="ml-2">{`${type[12]}`}</p>
              <FiChevronRight className="ml-auto" size="15" />
            </div>
          </Link>
          <Link to={`/vendor/${type[13]}`}>
            <div className="flex items-center mb-2">
              <GiHotMeal />
              <p className="ml-2">{`${type[13]}`}</p>
              <FiChevronRight className="ml-auto" size="15" />
            </div>
          </Link>
          <Link to={`/vendor/${type[14]}`}>
            <div className="flex items-center mb-2">
              <GiHotMeal />
              <p className="ml-2">{`${type[14]}`}</p>
              <FiChevronRight className="ml-auto" size="15" />
            </div>
          </Link>
          <Link to={`/vendor/${type[15]}`}>
            <div className="flex items-center mb-2">
              <GiHotMeal />
              <p className="ml-2">{`${type[15]}`}</p>
              <FiChevronRight className="ml-auto" size="15" />
            </div>
          </Link>
          <Link to={`/vendor/${type[16]}`}>
            <div className="flex items-center mb-2">
              <GiHotMeal />
              <p className="ml-2">{`${type[16]}`}</p>
              <FiChevronRight className="ml-auto" size="15" />
            </div>
          </Link>
          <Link to={`/vendor/${type[17]}`}>
            <div className="flex items-center mb-2">
              <GiHotMeal />
              <p className="ml-2">{`${type[17]}`}</p>
              <FiChevronRight className="ml-auto" size="15" />
            </div>
          </Link>
          <Link to={`/vendor/${type[18]}`}>
            <div className="flex items-center mb-2">
              <GiHotMeal />
              <p className="ml-2">{`${type[18]}`}</p>
              <FiChevronRight className="ml-auto" size="15" />
            </div>
          </Link>
          <Link to={`/vendor/${type[19]}`}>
            <div className="flex items-center mb-2">
              <GiHotMeal />
              <p className="ml-2">{`${type[19]}`}</p>
              <FiChevronRight className="ml-auto" size="15" />
            </div>
          </Link>
          <Link to={`/vendor/${type[20]}`}>
            <div className="flex items-center mb-2">
              <GiHotMeal />
              <p className="ml-2">{`${type[20]}`}</p>
              <FiChevronRight className="ml-auto" size="15" />
            </div>
          </Link>
          <Link to={`/vendor/${type[21]}`}>
            <div className="flex items-center mb-2">
              <GiHotMeal />
              <p className="ml-2">{`${type[21]}`}</p>
              <FiChevronRight className="ml-auto" size="15" />
            </div>
          </Link>
          <Link to={`/vendor/${type[22]}`}>
            <div className="flex items-center mb-2">
              <GiHotMeal />
              <p className="ml-2">{`${type[22]}`}</p>
              <FiChevronRight className="ml-auto" size="15" />
            </div>
          </Link>
          <Link to={`/vendor/${type[23]}`}>
            <div className="flex items-center mb-2">
              <GiHotMeal />
              <p className="ml-2">{`${type[23]}`}</p>
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
