import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {Error404} from '../pages/Error404'
import Home from '../pages/Home'

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Router>
    </>
  )
}