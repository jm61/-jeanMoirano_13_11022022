// Components
import Footer from '../components/Footer'
import Topbar from '../components/Topbar'
import Accounts from '../components/Accounts'
import { useNavigate } from 'react-router'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import './User.css'

const User = () => {
  document.title = "Argent Bank - User's Page"
  let navigate = useNavigate()
  
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
        <Accounts
          title="Argent Bank Checking (x8349)"
          amount="$2,082.79"
          description="Available Balance"
        />
        <Accounts
          title="Argent Bank Savings (x6712)"
          amount="$10,928.42"
          description="Available Balance"
        />
        <Accounts
          title="Argent Bank Credit Card (x8349)"
          amount="$184.30"
          description="Current Balance"
        />
      </main>
      <Footer />
    </>
  )
}
export default User
