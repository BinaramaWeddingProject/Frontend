import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import { Suspense } from 'react'
import Loader from './components/Loader'
import Home from './pages/home'
import UserProfile from './pages/userProfile'
import UserRegister from './pages/userRegister'
<<<<<<< HEAD
// <<<<<<< HEAD
import VendorProfilePage from './pages/VendorProfilePage'
// In your JavaScript entry file (e.g., src/index.js or src/App.js)
import { ChakraProvider } from '@chakra-ui/react'
import VendorServicePage from './pages/VendorServicePage'
// =======
// <<<<<<< HEAD
import Vendor from './pages/vendor'
// =======
=======
import Vendor from './pages/vendor'
>>>>>>> 71dc26d7a34e878f3ad758ed3b5a08cfe322808a
import Login from './auth/Login'
import ForgetPasswordPage from './auth/Forget'
import Signup from './auth/SignUp'
import PassVerification from './auth/passverification'
import NewPassword from './auth/newPassword'
import Verification from './auth/Verification'
import Business from './auth/business'
import VendorsList from './pages/VendorsList'
<<<<<<< HEAD
// >>>>>>> d3e55bc7e07b882b6e89ef8db69a4976deb66cea
// >>>>>>> db8f19e1bf2efb425800e272c04a2247c330cbc1
=======
>>>>>>> 71dc26d7a34e878f3ad758ed3b5a08cfe322808a


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
<<<<<<< HEAD
<<<<<<< HEAD
        <Route path='/vendorProfilePage' element={<VendorProfilePage />}/>
        <Route path='/vendorServicePage' element={<VendorServicePage />}/>
=======
<<<<<<< HEAD
=======

>>>>>>> 71dc26d7a34e878f3ad758ed3b5a08cfe322808a
        <Route path='/vendors' element={<Vendor />}/>

        <Route path='/forget' element={<ForgetPasswordPage />}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/Signup' element={<Signup/>}/>
        <Route path='/passverification' element={<PassVerification/>}/>
        <Route path='/newpassword' element={<NewPassword/>}/>
        <Route path='/verification' element={<Verification/>}/>
        <Route path='/business' element={<Business/>}/>
       <Route path='/vendorslist' element={<VendorsList/>}/>
<<<<<<< HEAD
>>>>>>> d3e55bc7e07b882b6e89ef8db69a4976deb66cea
>>>>>>> db8f19e1bf2efb425800e272c04a2247c330cbc1
=======

>>>>>>> 71dc26d7a34e878f3ad758ed3b5a08cfe322808a
      </Routes>
      </Suspense>
    
    </Router>

    </ChakraProvider>
  )
}

export default App