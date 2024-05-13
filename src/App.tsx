import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import { lazy,Suspense } from 'react'
import Loader from './components/Loader'
import Home from './pages/home'
import UserProfile from './pages/userProfile'
import UserRegister from './pages/userRegister'

const App = () => {
  return (
    <Router>
      {/* {Header} */}
      <Suspense fallback={<Loader />}>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/userprofile' element={<UserProfile />}/>
        <Route path='/userregister' element={<UserRegister />}/>
      </Routes>
      </Suspense>
    
    </Router>

  )
}

export default App