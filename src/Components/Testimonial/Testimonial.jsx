import React from 'react'
import HeadingSection from '../HeadingSection/HeadingSection';
import Slider from "react-slick";


const TestimonialsData = [
  {
    id: 1,
    name: "John Doe",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/101/101",
    delay: 0.2,
  },
  {
    id: 2,
    name: "Steve Smith",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/102/102",
    delay: 0.5,
  },
  {
    id: 3,
    name: "Kristen",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/104/104",
    delay: 0.8,
  },
  {
    id: 5,
    name: "Ariana",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/103/103",
    delay: 1.1,
  },
];

const Testimonial = () => {

  const setting = {
    dots: true,
    arrow: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 2000,
    autoplay:true,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1055,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };


  return (
    <div className='py-14 mb-10'>

      <div className="container ">

        <HeadingSection heading={'OUR TESTIMONIALS'} describetion={'What Our Students Say About Us'} />

        <div>

          <Slider {...setting}>
            {
              TestimonialsData.map((item , index)=> {
                return (
                  <div key={index} >


              <div className='flex flex-col gap-4 p-8 shadow-lg mx-4 rounded-xl bg-secondary/5'>

                <div className='flex justify-start items-center gap-5'>
                  <img src={item.img} alt="image" className='
                    w-14 h-14 rounded-full
                    ' />
                </div>
                <div>
                  <p className='text-xl font-bold text-black/80'>
                    {item.name}
                  </p>
                  <p>{item.name}</p>
                </div>

                <div className='py-6 space-y-4'>
                  <p className='text-gray-500 text-sm'>
                    {item.text}
                  </p>
                  <p>⭐⭐⭐⭐⭐</p>
                </div>

              </div>



            </div>
                )
              })
            }

            

          </Slider>

        </div>



      </div>

    </div>
  )
}

export default Testimonial