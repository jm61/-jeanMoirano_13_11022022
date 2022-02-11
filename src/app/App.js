import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Error404 from '../pages/Error404'
import Home from '../pages/Home'
import Login from '../pages/Login'
import User from '../pages/User'

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} /> 
          <Route path="/user" element={<User />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Router>
    </>
  )
}