import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import NavbarBanner from './Components/Navbar/NavbarBanner'
import Hero from './Components/Hero/Hero'
import CountryNumber from './Components/CountryNumber/CountryNumber'
import Chooseus from './Components/ChooseUs/Chooseus'
import Img1 from './assets/image/banner1-ChWN6Q7z.png'
import Img2 from './assets/image/banner2-BMWB7nzP.png'
import Banner from './Components/Banner/Banner'
import Subject from './Components/Subject/Subject'
import Testimonial from './Components/Testimonial/Testimonial'
import Footer from './Components/Footer/Footer'

const BannerData = {
  image: Img1,
  tag: "CUSTOMIZE WITH YOUR SCHEDULE",
  title: "Personalized Professional Online Tutor on Your Schedule",
  subtitle:
    "Our scheduling system allows you to select based on your free time. Lorem ipsum demo text for template. Keep track of your students class and tutoring schedules, and never miss your lectures. The best online class scheduling system with easy accessibility.Lorem ipsum is a placeholder text commonly used to demonstrate the visual form",
  link: "#",
};

const BannerData2 = {
  image: Img2,
  tag: "CUSTOMIZE WITH YOUR SCHEDULE",
  title: "Talented and Qualified Tutors to Serve You for Help",
  subtitle:
    "Our scheduling system allows you to select based on your free time. Lorem ipsum demo text for template. Keep track of your students class and tutoring schedules, and never miss your lectures. The best online class scheduling system with easy accessibility. Lorem ipsum is a placeholder text commonly used",
  link: "#",
};

function App() {


  return (
    <main className='overflow-x-hidden'>
      <Navbar />
      <NavbarBanner />
      <Hero />
      <CountryNumber />
      <Chooseus />
      <Banner {...BannerData} reverse={false} />
      <Banner {...BannerData2} reverse={true} />
      <Subject />
      <Testimonial />
      <Footer />
    </main>
  )
}

export default App
