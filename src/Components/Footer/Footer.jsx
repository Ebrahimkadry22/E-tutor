import React from 'react'
import FooterImg from '../../assets/image/footer-CcPnvUau.jpg'
import { MdComputer } from 'react-icons/md'
import { HiLocationMarker } from 'react-icons/hi'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa6'
 

const Footer = () => {
  return (
    <div style={{backgroundImage: `url(${FooterImg})`,}} className='rounded-t-xl bg-no-repeat bg-cover bg-[bottom_center]'>
      <div className='bg-primary/5'>

      <div className='container'>
        
        <div className='py-5 grid md:grid-cols-4 md:gap-4 border-t-2 border-gray-300/10 text-black'>

         {/* {brand} */}
          <div className='py-8 px-4 space-y-4'>
            <div className='flex items-center gap-2 text-2xl font-bold uppercase  '>
              <MdComputer className='text-secondary text-4xl' />
              <p>E-Tutor</p>
            </div>
            <div>
              <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque
                accusamus nulla labore cumque id ipsum molestias architecto
                voluptatum saepe ab.
              </p>
            </div>

            <div className="flex items-center justify-start gap-5 mt-6">
                <a href="#" className="hover:text-secondary duration-200">
                  <HiLocationMarker className="text-3xl" />
                </a>
                <a href="#" className="hover:text-secondary duration-200">
                  <FaInstagram className="text-3xl" />
                </a>
                <a href="#" className="hover:text-secondary duration-200">
                  <FaFacebook className="text-3xl" />
                </a>
                <a href="#" className="hover:text-secondary duration-200">
                  <FaLinkedin className="text-3xl" />
                </a>
              </div>

          </div>

          {/* {Footer Links } */}
          <div className='grid grid-cols-2 md:grid-cols-3 md:col-span-3 md:ml-14'>

            <div className='py-8 px-4'>
              <h1 className='sm:text-xl text-xl font-bold sm:text-left text-justify mb-5'>
              Important Links
              </h1>

              <ul className='flex flex-col gap-3'>
                <li><a href="#" className='hover:text-secondary duration-200'>Home</a></li>
                <li><a href="#" className='hover:text-secondary duration-200'>About</a></li>
                <li><a href="#" className='hover:text-secondary duration-200'>Services</a></li>
                <li><a href="#" className='hover:text-secondary duration-200'>Login</a></li>
              </ul>



            </div>
            <div className='py-8 px-4'>
              <h1 className='sm:text-xl text-xl font-bold sm:text-left text-justify mb-5'>
              Company Links
              </h1>

              <ul className='flex flex-col gap-3'>
                <li><a href="#" className='hover:text-secondary duration-200'>Our Servies</a></li>
                <li><a href="#" className='hover:text-secondary duration-200'>Contact</a></li>
                <li><a href="#" className='hover:text-secondary duration-200'>Privacy Policy</a></li>

              </ul>



            </div>
            <div className='py-8 px-4'>
              <h1 className='sm:text-xl text-xl font-bold sm:text-left text-justify mb-5'>
              Company Links
              </h1>

              <ul className='flex flex-col gap-3'>
              <li><a href="#" className='hover:text-secondary duration-200'>Home</a></li>
                <li><a href="#" className='hover:text-secondary duration-200'>About</a></li>
                <li><a href="#" className='hover:text-secondary duration-200'>Services</a></li>
                <li><a href="#" className='hover:text-secondary duration-200'>Login</a></li>

              </ul>



            </div>




          </div>


        </div>

      </div>

      </div>
      </div>
  )
}

export default Footer