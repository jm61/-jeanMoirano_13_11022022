import logo from '../assets/argentBankLogo.png'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import './Topbar.css'
import { logout } from '../app/actions'

const Topbar = () => {
  let navigate = useNavigate()
  const dispatch = useDispatch()
  const { token } = useSelector( state => state.userLogin)
  const { firstName } = useSelector( state => state.userProfile)
  //const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZmE4ZDA3NTNmZDg1MjE5NWQ5MjY5NCIsImlhdCI6MTY0NDgyOTUwMCwiZXhwIjoxNjQ0OTE1OTAwfQ._bi_o6LYeDiBe5HmTZsnNpG5r1Zh1VyCdazls2c-81c'
  //const firstName  = 'Tony'

  const logoutHandler = () => {
    dispatch(logout())
    navigate('/')
  }

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
      <div>
        {!token ? (
          <Link className="main-nav-item" to="/login">
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
        ) : (
          ''
        )}
        {token ? (
          <Link className="main-nav-item" to="/profile">
            <i className="fa fa-user-circle"></i>
            {firstName}
          </Link>
        ) : (
          ''
        )}
        {token ? (
          <Link onClick={logoutHandler} className="main-nav-item" to="/">
            <i className="fa fa-sign-out"></i>
            Sign Out
          </Link>
        ) : (
          ''
        )}
      </div>
    </nav>
  )
}
export default Topbar
