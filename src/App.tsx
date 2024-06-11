import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Vendor from './pages/vendor'
// import Login from './auth/Login'
// import ForgetPasswordPage from './auth/Forget'
// import Signup from './auth/SignUp'
// import PassVerification from './auth/passverification'
// import NewPassword from './auth/newPassword'
// import Verification from './auth/Verification'
// import Business from './auth/business'

import { ChakraProvider } from "@chakra-ui/react";
import VenueList from "./pages/VenueList";
import Vendor from "./pages/vendor";
import Login from "./auth/Login";
import Signup from "./auth/SignUp";
import Business from "./auth/business";
import VenueServicePage from "./pages/VenueServicePage";
import VendorCategory from "./pages/VendorCategory";
import AboutUs from "./pages/AboutUs";
import VenueProfilePage from "./pages/VenueProfilePage";
import UserProfilePage from "./pages/UserProfilePage";
import VendorsListByCategory from "./pages/VendorListByCategory";
import VenueProfile from "./pages/admin/components/profile/venue/VenueProfilePage";
import VendorProfile from "./pages/admin/components/profile/vendor/VendorProfilePage";
import UserProfile from "./pages/admin/components/profile/user/UserProfile";

import React, { Suspense } from "react";

import AdminDashboard from "./pages/admin/adminDashboard";
import Home from "./pages/home";

import UserRegister from "./pages/userRegister";
import VendorsList from "./pages/VendorsList";
import VendorProfilePage from "./pages/VendorProfilePage";
import VendorServicePage from "./pages/VendorServicePage";

import BlogList from "./pages/BlogList";
import NewBlog from "./pages/NewBlog";
import Loader from "./components/Loader";
import BlogPost from "./pages/BlogPost";

const App: React.FC = () => {
  return (
    <ChakraProvider>
      <Router>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/userregister" element={<UserRegister />} />
            <Route path="/vendorProfilePage" element={<VendorProfilePage />} />
            <Route path="/venueProfilePage" element={<VenueProfilePage />} />
            <Route path="/userProfilePage" element={<UserProfilePage />} />

            <Route path="aboutus1" element={<AboutUs />} />
            {/* <Route path='aboutus2' element={<AboutUs2 />}/> */}

            {/* <Route path='/forget' element={<ForgetPasswordPage />}/> */}

            {/* <Route path='/passverification' element={<PassVerification/>}/> */}
            {/* <Route path='/newpassword' element={<NewPassword/>}/> */}
            {/* <Route path='/verification' element={<Verification/>}/> */}

            {/* <Route path='/forget' element={<ForgetPasswordPage />}/> */}

            {/* <Route path='/passverification' element={<PassVerification/>}/> */}
            {/* <Route path='/newpassword' element={<NewPassword/>}/> */}
            {/* <Route path='/verification' element={<Verification/>}/> */}

            <Route path="/vendor/:type" element={<VendorsList />} />

            <Route path="/adminDashboard" element={<AdminDashboard />} />
            <Route path="/adminDashboard/:page" element={<AdminDashboard />} />

            <Route path="/VenueProfile/:id" element={<VenueProfile />} />
            <Route path="/VendorProfile/:id" element={<VendorProfile />} />
            <Route path="/UserProfile/:id" element={<UserProfile />} />
            <Route path="/vendorCategory" element={<VendorCategory />} />

            <Route path="/business" element={<Business />} />
            <Route path="/venuelist" element={<VenueList />} />
            <Route
              path="/vendors/category/:category"
              element={<VendorsListByCategory />}
            />
            <Route path="/vendors" element={<Vendor />} />
            <Route path="/vendor/:type/:_id" element={<VendorServicePage />} />
            <Route path="/venuelist/:id" element={<VenueServicePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/blogs" element={<BlogList />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/blog/new" element={<NewBlog />} />
          </Routes>
        </Suspense>
      </Router>
    </ChakraProvider>
  );
};

export default App;
