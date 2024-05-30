import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import { Suspense } from 'react'
import Loader from './components/Loader'
import Home from './pages/home'
import UserProfile from './pages/userProfile'
import UserRegister from './pages/userRegister'
<<<<<<< HEAD
<<<<<<< HEAD
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
>>>>>>> b8ea3ec828a077fc2cb6d9155852aea1e37b0588
import Vendor from './pages/vendor'
import Login from './auth/Login'
import Signup from './auth/SignUp'
import Business from './auth/business'
<<<<<<< HEAD
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
=======
import VenueServicePage from './pages/VenueServicePage'
>>>>>>> b8ea3ec828a077fc2cb6d9155852aea1e37b0588


const App = () => {
  return (
<<<<<<< HEAD
    // <ChakraProvider>
=======
    <ChakraProvider>
>>>>>>> b8ea3ec828a077fc2cb6d9155852aea1e37b0588

    <Router>
      {/* {Header} */}
      <Suspense fallback={<Loader />}>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/userprofile' element={<UserProfile />}/>
        <Route path='/userregister' element={<UserRegister />}/>
<<<<<<< HEAD
<<<<<<< HEAD
        {/* <Route path='/vendorProfilePage' element={<VendorProfilePage />}/> */}
        {/* <Route path='/vendorServicePage' element={<VendorServicePage />}/> */}
=======
=======
        <Route path='/vendorProfilePage' element={<VendorProfilePage />}/>
        <Route path='/vendorServicePage' element={<VendorServicePage />}/>
>>>>>>> 4c9dee31b5a2b54837007296cc4aeea005987ee4
=======
        <Route path='/vendorProfilePage' element={<VendorProfilePage />}/>
        <Route path='/vendorServicePage' element={<VendorServicePage />}/>
>>>>>>> b8ea3ec828a077fc2cb6d9155852aea1e37b0588
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
<<<<<<< HEAD
=======
       <Route path='/venuelist' element={<VenueList/>}/>
>>>>>>> 4c9dee31b5a2b54837007296cc4aeea005987ee4
=======
       <Route path='/venuelist' element={<VenueList/>}/>
>>>>>>> b8ea3ec828a077fc2cb6d9155852aea1e37b0588

      </Routes>
      </Suspense>
    
    </Router>

<<<<<<< HEAD
    // </ChakraProvider>
=======
    </ChakraProvider>
>>>>>>> b8ea3ec828a077fc2cb6d9155852aea1e37b0588
  )
}

export default App