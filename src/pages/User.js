// Components
import Footer from '../components/Footer'
import Topbar from '../components/Topbar'
import { useNavigate } from 'react-router'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import './User.css'

const User = () => {
  document.title = "Argent Bank - User's Page"
  let navigate = useNavigate()
  const { firstName } = useSelector((state) => state.userProfile)
  
  const { token } = useSelector((state) => state.userLogin)
 
  useEffect(() => {
    if (!token) {
      navigate('/')
    }
  }, [token, navigate])
  
  return (
    <>
      <Topbar />
      <main className="main bg-dark bg-padding">
        <h2 className="sr-only">Accounts</h2>
      </main>
        <h1>{firstName}</h1>
      <Footer />
    </>
  )
}
export default User
