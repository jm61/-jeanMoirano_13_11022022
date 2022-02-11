import logo from '../assets/argentBankLogo.png'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router'
import './Topbar.css'

export default function Topbar() {
  let navigate = useNavigate()


  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
    </nav>
  )
}
