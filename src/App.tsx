import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import { Suspense } from 'react'
import Loader from './components/Loader'
import Home from './pages/home'
import UserProfile from './pages/userProfile'
import UserRegister from './pages/userRegister'
import Vendor from './pages/vendor'
import Login from './auth/Login'
import ForgetPasswordPage from './auth/Forget'
import Signup from './auth/SignUp'
import PassVerification from './auth/passverification'
import NewPassword from './auth/newPassword'
import Verification from './auth/Verification'
import Business from './auth/business'
import VendorsList from './pages/VendorsList'


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
        {/* <Route path='/vendorProfilePage' element={<VendorProfilePage />}/> */}
        {/* <Route path='/vendorServicePage' element={<VendorServicePage />}/> */}
=======
        <Route path='/vendors' element={<Vendor />}/>

        <Route path='/forget' element={<ForgetPasswordPage />}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/Signup' element={<Signup/>}/>
        <Route path='/passverification' element={<PassVerification/>}/>
        <Route path='/newpassword' element={<NewPassword/>}/>
        <Route path='/verification' element={<Verification/>}/>
        <Route path='/business' element={<Business/>}/>
       <Route path='/vendorslist' element={<VendorsList/>}/>

      </Routes>
      </Suspense>
    
    </Router>

    // </ChakraProvider>
  )
}

export default App