// Components
import Footer from '../components/Footer'
import Topbar from '../components/Topbar'
import { useNavigate } from 'react-router'
import './User.css'

export default function User() {
  document.title = "Argent Bank - User's Page"
  let navigate = useNavigate()
  
  return (
    <>
      <Topbar />
      <main className="main bg-dark bg-padding">
        <h2 className="sr-only">Accounts</h2>
        {/* <Account
          title="Argent Bank Checking (x8349)"
          amount="$2,082.79"
          description="Available Balance"
        />
        <Account
          title="Argent Bank Savings (x6712)"
          amount="$10,928.42"
          description="Available Balance"
        />
        <Account
          title="Argent Bank Credit Card (x8349)"
          amount="$184.30"
          description="Current Balance"
        /> */}
      </main>
      <Footer />
    </>
  )
}
