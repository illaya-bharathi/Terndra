

import HowItWorks from "./HowItWorks";
import AboutSection from "./AboutSection";
import Earn from "./Earn";
import Testimonials from "./Testimonials";
import About from "./About";
import Newsletter from "./NewsLetter";
import VehicleCategories from "./vechicleCategories";
import MobileApp from "./MobileSection";
import Hero from "./Hero";



const Home = () => {
  return (


<main id="main-content" className="flex-grow">
    <Hero />
                  <VehicleCategories />
                  <About id="about-section" />  {/* ✅ Added ID */}
                  <AboutSection />
                  <HowItWorks />
                  <MobileApp />
                  <Earn />
                  <Testimonials />
                  <Newsletter />
</main>









  )
}

export default Home