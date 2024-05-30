import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import { Suspense } from 'react'
import Loader from './components/Loader'
import Home from './pages/home'
import UserProfile from './pages/userProfile'
import UserRegister from './pages/userRegister'
<<<<<<< HEAD
import Vendor from './pages/vendor'
import Login from './auth/Login'
import ForgetPasswordPage from './auth/Forget'
import Signup from './auth/SignUp'
import PassVerification from './auth/passverification'
import NewPassword from './auth/newPassword'
import Verification from './auth/Verification'
import Business from './auth/business'
import VendorsList from './pages/VendorsList'
=======
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
>>>>>>> 4c9dee31b5a2b54837007296cc4aeea005987ee4


const App = () => {
  return (
    // <ChakraProvider>

    <Router>
      {/* {Header} */}
      <Suspense fallback={<Loader />}>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/userprofile' element={<UserProfile />}/>
        <Route path='/userregister' element={<UserRegister />}/>
<<<<<<< HEAD
        {/* <Route path='/vendorProfilePage' element={<VendorProfilePage />}/> */}
        {/* <Route path='/vendorServicePage' element={<VendorServicePage />}/> */}
=======
=======
        <Route path='/vendorProfilePage' element={<VendorProfilePage />}/>
        <Route path='/vendorServicePage' element={<VendorServicePage />}/>
>>>>>>> 4c9dee31b5a2b54837007296cc4aeea005987ee4
        <Route path='/vendors' element={<Vendor />}/>
        <Route path='/vendors/:_id' element={<VendorServicePage  />}/>
        <Route path='venueServicePage' element={<VenueServicePage  />}/>

        {/* <Route path='/forget' element={<ForgetPasswordPage />}/> */}
        <Route path='/login' element={<Login/>}/>
        <Route path='/Signup' element={<Signup/>}/>
        {/* <Route path='/passverification' element={<PassVerification/>}/> */}
        {/* <Route path='/newpassword' element={<NewPassword/>}/> */}
        {/* <Route path='/verification' element={<Verification/>}/> */}
        <Route path='/business' element={<Business/>}/>
       <Route path='/vendorslist' element={<VendorsList/>}/>
<<<<<<< HEAD
=======
       <Route path='/venuelist' element={<VenueList/>}/>
>>>>>>> 4c9dee31b5a2b54837007296cc4aeea005987ee4

      </Routes>
      </Suspense>
    
    </Router>

    // </ChakraProvider>
  )
}

export default App