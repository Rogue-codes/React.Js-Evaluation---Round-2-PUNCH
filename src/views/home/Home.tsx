import Nav from '../../components/nav/Nav'
import Hero from './Hero'
import MarketPlace from './MarketPlace'
import HowItWorked from './HowItWorked'
import EnsureGoodHands from './EnsureGoodHands'
import StartYourJourney from './StartYourJourney'
import WhyChooseZwilt from './WhyChooseZwilt'
import Faq from './Faq'
import NeedAJob from './NeedAJob'
import Footer from '../../components/footer/Footer'

export default function Home() {
  return (
    <div className='w-full min-h-screen'>
        <Nav/>
        <Hero/>
         <MarketPlace/>
        <HowItWorked/>
        <EnsureGoodHands/>
        <StartYourJourney/>
        <WhyChooseZwilt/>
        <Faq/>
        <NeedAJob/>
        <Footer/>
    </div>
  )
}
