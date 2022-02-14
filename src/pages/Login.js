import Footer from '../components/Footer'
import Topbar from '../components/Topbar'
import LoginForm from '../components/LoginForm'

const SignIn = () => {
  document.title = 'Argent Bank - Login'
  return (
    <>
      <Topbar />
      <main className="main bg-dark">
        <LoginForm />
      </main>
      <Footer />
    </>
  )
}
export default SignIn
