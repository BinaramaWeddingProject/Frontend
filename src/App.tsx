
import AdminDashboard from "./pages/admin/adminDashboard";

import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import { Suspense } from 'react'
import Loader from './components/Loader'
import Home from './pages/home'
import UserProfile from './pages/userProfile'
import UserRegister from './pages/userRegister'
// import Vendor from './pages/vendor'
// import Login from './auth/Login'
// import ForgetPasswordPage from './auth/Forget'
// import Signup from './auth/SignUp'
// import PassVerification from './auth/passverification'
// import NewPassword from './auth/newPassword'
// import Verification from './auth/Verification'
// import Business from './auth/business'
import VendorsList from './pages/VendorsList'
import VendorProfilePage from './pages/VendorProfilePage'
import VendorServicePage from './pages/VendorServicePage'
import { ChakraProvider } from '@chakra-ui/react'
import VenueList from './pages/VenueList'
import Vendor from './pages/vendor'
import Login from './auth/Login'
import Signup from './auth/SignUp'
import Business from './auth/business'
import VenueServicePage from './pages/VenueServicePage'
import VendorCategory from './pages/VendorCategory'
import AboutUs from './pages/AboutUs'
import VenueProfilePage from './pages/VenueProfilePage'
import UserProfilePage from './pages/UserProfilePage'
import VendorsListByCategory from './pages/VendorListByCategory'


const App = () => {
  return (
    <ChakraProvider>
      <Router>
        {/* {Header} */}
        <Suspense fallback={<Loader />}>
          <Routes>

        <Route path='/' element={<Home />}/>
        <Route path='/userprofile' element={<UserProfile />}/>
        <Route path='/userregister' element={<UserRegister />}/>
        <Route path='/vendorProfilePage' element={<VendorProfilePage />}/>
        <Route path='/venueProfilePage' element={<VenueProfilePage />}/>
        <Route path='/userProfilePage' element={<UserProfilePage/>}/>

     
       
        
        <Route path='vendorCategory' element={<VendorCategory  />}/>
        <Route path='aboutus1' element={<AboutUs />}/>
        {/* <Route path='aboutus2' element={<AboutUs2 />}/> */}

        {/* <Route path='/forget' element={<ForgetPasswordPage />}/> */}
       
        {/* <Route path='/passverification' element={<PassVerification/>}/> */}
        {/* <Route path='/newpassword' element={<NewPassword/>}/> */}
        {/* <Route path='/verification' element={<Verification/>}/> */}
        <Route path='/business' element={<Business/>}/>
      
       <Route path='/venuelist' element={<VenueList/>}/>
       <Route path='/vendors/category/:category' element={<VendorsListByCategory />} />


            <Route path="/vendors" element={<Vendor />} />
            <Route path="/vendor/:type/:_id" element={<VendorServicePage />} />
            <Route path="/venueServicePage" element={<VenueServicePage />} />

            {/* <Route path='/forget' element={<ForgetPasswordPage />}/> */}
            <Route path="/login" element={<Login />} />
            <Route path="/Signup" element={<Signup />} />
            {/* <Route path='/passverification' element={<PassVerification/>}/> */}
            {/* <Route path='/newpassword' element={<NewPassword/>}/> */}
            {/* <Route path='/verification' element={<Verification/>}/> */}
            <Route path="/business" element={<Business />} />
            <Route path="/vendor/:type" element={<VendorsList />} />


            <Route path="/adminDashboard" element={<AdminDashboard/>}/>

          </Routes>
        </Suspense>
      </Router>
    </ChakraProvider>
  );
};

export default App;
