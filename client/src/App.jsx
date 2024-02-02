import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import SignUp from './pages/SignUp';
import About from './pages/about';


export default function App() {
  return <BrowserRouter>
  <Headers />
  <Route>
    <Route path='/' element={<Home />} />
    <Route path='/sign-in' element={<SignIn />} />
    <Route path='/sign-up' element={<SignUp />} />
    <Route path='/about' element={<About />} />
    <Route path='/profile' element={<Profile />} />
    </Route>
  </BrowserRouter>
 
  
}
