import Hero from '../components/hero';
import About from '../components/about';
import CoreValue from '../components/core-values';
import OurSpeciality from '../components/our-speciality';
import User from '../components/users';

const Homepage = () => {
  return (
    <div>
      <Hero />
      <About />
      <CoreValue />
      <OurSpeciality />
      <User />
    </div>
  )
}

export default Homepage
