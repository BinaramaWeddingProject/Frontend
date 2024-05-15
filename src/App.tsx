import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import { lazy,Suspense } from 'react'
import Loader from './components/Loader'
import Home from './pages/home'
import UserProfile from './pages/userProfile'
import UserRegister from './pages/userRegister'
import VendorProfilePage from './pages/VendorProfilePage'
// In your JavaScript entry file (e.g., src/index.js or src/App.js)
import { ChakraProvider } from '@chakra-ui/react'
import VendorServicePage from './pages/VendorServicePage'


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
        <Route path='/vendorServicePage' element={<VendorServicePage />}/>
      </Routes>
      </Suspense>
    
    </Router>

    </ChakraProvider>
  )
}

export default App