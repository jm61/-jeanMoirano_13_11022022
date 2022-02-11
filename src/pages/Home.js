import iconChat from '../assets/icon-chat.png'
import iconMoney from '../assets/icon-money.png'
import iconSecurity from '../assets/icon-security.png'

import Banner from '../components/Banner'
import Footer from '../components/Footer'

import './Home.css'

export default function Index() {
  document.title = 'Argent Bank - Home Page'


  return (
    <>
      <main>
        <Banner />
        <Footer />
      </main>
    </>
  )
}
