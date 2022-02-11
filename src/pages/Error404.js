import logo from '../assets/argentBankLogo.png'
import {Link} from 'react-router-dom'


/**
 * Error 404 page rendering
 * @returns {JSX}
 */
const Error404 = () => {
  document.title = 'Argent Bank - Error Page'
  return (
   <div>
       <img src={logo} alt="logo" />
       <h2>Cette page n'existe pas</h2>
       <Link to="/">Retournez à l'accueil</Link>
   </div>

  )
}
export default Error404