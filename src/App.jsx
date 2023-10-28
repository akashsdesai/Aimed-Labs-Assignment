import Login from './Components/Login/Login'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signout from './Components/Signout/Signout';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/login' element={<Signout />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
