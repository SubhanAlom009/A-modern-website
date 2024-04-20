import AboutUs from './Components/About Us/AboutUs'
import Campus from './Components/Campus/Campus'
import Footer from './Components/Footer/Footer'
import Hero from './Components/Hero/Hero'
import Navbar from './Components/Navbar/Navbar'
import Programs from './Components/Programs/Programs'
import Testimonials from './Components/Testimonials/Testimonials'

function App() {

  return (
    <>
      <div className='h-screen bg-[#F5F5F5]'>
        <Navbar />
        <Hero/>
        <Programs/>
        <AboutUs/>
        <Campus/>
        <Testimonials/>
        <Footer/>
      </div>
    </>
  )
}

export default App
