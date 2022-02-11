import iconChat from '../assets/icon-chat.png'
import iconMoney from '../assets/icon-money.png'
import iconSecurity from '../assets/icon-security.png'
import Topbar from '../components/Topbar'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import FeatureItem from '../components/FeatureItem'
import './Home.css'

const featureTitleChat = 'You are our #1 priority'
const featureTitleMoney = 'More savings means higher rates'
const featureTitleSecurity = 'Security you can trust'

const featureTextChat =
    'Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.'
const featureTextMoney =
    'The more you save with us, the higher your interest rate will be!'
const featureTextSecurity =
    'We use top of the line encryption to make sure your data and money is always safe.'

export default function Index() {
  document.title = 'Argent Bank - Home Page'
  return (
    <>
      <Topbar />
      <main>
        <Banner />
        <section className="features">
          <FeatureItem
            iconUrl={iconChat}
            title={featureTitleChat}
            text={featureTextChat}
          />
          <FeatureItem
            iconUrl={iconMoney}
            title={featureTitleMoney}
            text={featureTextMoney}
          />
          <FeatureItem
            iconUrl={iconSecurity}
            title={featureTitleSecurity}
            text={featureTextSecurity}
          />
        </section>
        <Footer />
      </main>
    </>
  )
}
