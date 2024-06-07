// src/App.tsx
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import AdminDashboard from './pages/admin/adminDashboard';
import Home from './pages/home';
import UserProfile from './pages/userProfile';
import UserRegister from './pages/userRegister';
import VendorsList from './pages/VendorsList';
import VendorProfilePage from './pages/VendorProfilePage';
import VendorServicePage from './pages/VendorServicePage';
import VenueList from './pages/VenueList';
import Vendor from './pages/vendor';
import Login from './auth/Login';
import Signup from './auth/SignUp';
import Business from './auth/business';
import VenueServicePage from './pages/VenueServicePage';
import VendorCategory from './pages/VendorCategory';
import AboutUs from './pages/AboutUs';
import VenueProfilePage from './pages/VenueProfilePage';
import UserProfilePage from './pages/UserProfilePage';
import VendorsListByCategory from './pages/VendorListByCategory';
import BlogList from './pages/BlogList';
import NewBlog from './pages/NewBlog';
import Loader from './components/Loader';
import BlogPost from './pages/BlogPost';

const App: React.FC = () => {
  return (
    <ChakraProvider>
      <Router>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/userprofile" element={<UserProfile />} />
            <Route path="/userregister" element={<UserRegister />} />
            <Route path="/vendorProfilePage" element={<VendorProfilePage />} />
            <Route path="/venueProfilePage" element={<VenueProfilePage />} />
            <Route path="/userProfilePage" element={<UserProfilePage />} />
            <Route path="/vendorCategory" element={<VendorCategory />} />
            <Route path="/aboutus1" element={<AboutUs />} />
            <Route path="/business" element={<Business />} />
            <Route path="/venuelist" element={<VenueList />} />
            <Route path="/vendors/category/:category" element={<VendorsListByCategory />} />
            <Route path="/vendors" element={<Vendor />} />
            <Route path="/vendor/:type/:_id" element={<VendorServicePage />} />
            <Route path="/venuelist/:id" element={<VenueServicePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/adminDashboard" element={<AdminDashboard />} />
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
