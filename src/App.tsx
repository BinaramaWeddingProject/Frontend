import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import Loader from "./components/Loader";
import Home from "./pages/home";
import UserProfile from "./pages/userProfile";
import UserRegister from "./pages/userRegister";
import VendorsList from "./pages/VendorsList";
import VendorProfilePage from "./pages/VendorProfilePage";
import VendorServicePage from "./pages/VendorServicePage";
import { ChakraProvider } from "@chakra-ui/react";
import VenueList from "./pages/VenueList";
import Vendor from "./pages/vendor";
import Login from "./auth/Login";
import Signup from "./auth/SignUp";
import Business from "./auth/business";
import VenueServicePage from "./pages/VenueServicePage";

const App = () => {
  return (
    <ChakraProvider>
      <Router>
        {/* {Header} */}
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/userprofile" element={<UserProfile />} />
            <Route path="/userregister" element={<UserRegister />} />

            {/* <Route path='/vendorProfilePage' element={<VendorProfilePage />}/> */}
            {/* <Route path='/vendorServicePage' element={<VendorServicePage />}/> */}

            <Route path="/vendorProfilePage" element={<VendorProfilePage />} />
            <Route path="/vendorServicePage" element={<VendorServicePage />} />

            <Route path="/vendorProfilePage" element={<VendorProfilePage />} />
            <Route path="/vendorServicePage" element={<VendorServicePage />} />

            <Route path="/vendors" element={<Vendor />} />
            <Route path="/vendors/:_id" element={<VendorServicePage />} />
            <Route path="/venueServicePage" element={<VenueServicePage />} />

            {/* <Route path='/forget' element={<ForgetPasswordPage />}/> */}
            <Route path="/login" element={<Login />} />
            <Route path="/Signup" element={<Signup />} />
            {/* <Route path='/passverification' element={<PassVerification/>}/> */}
            {/* <Route path='/newpassword' element={<NewPassword/>}/> */}
            {/* <Route path='/verification' element={<Verification/>}/> */}
            <Route path="/business" element={<Business />} />
            <Route path="/vendorslist/:type" element={<VendorsList />} />

            <Route path="/venuelist" element={<VenueList />} />

            <Route path="/venuelist" element={<VenueList />} />
          </Routes>
        </Suspense>
      </Router>
    </ChakraProvider>
  );
};

export default App;
