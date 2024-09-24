import React from 'react'
import CountUp from 'react-countup';

function CountryNumber() {
  return (
    <div className='py-8 bg-secondary'>

      <div className="container ">
        <div className='text-white grid grid-cols-2 lg:grid-cols-4   '>

        <div className='text-center'>
          <p className='text-3xl font-semibold'>
            <CountUp
            start={0}
            end={875}
            duration={3}
            enableScrollSpy={true}
            scrollSpyOnce={false}
            />
          </p>
          <span className='font-medium'>Expert tutors</span>
        </div>

        <div className='text-center'>
          <p className='text-3xl font-semibold'>
          <CountUp
          start={0}
          end={20000}
          suffix='+'
          duration={3}
          enableScrollSpy={true}
          scrollSpyOnce={false}
          /> 
          </p>
          <span className='font-medium'>Hours content</span>
        </div>

        <div className='text-center'>
       <p className='text-3xl font-semibold'>
       <CountUp
          start={0}
          end={289}
          duration={3}
          enableScrollSpy={true}
          scrollSpyOnce={false}
          />
       </p>
          <span className='font-medium'>Subject and courses</span>
        </div>

        <div className='text-center'>
      <p className='text-3xl font-semibold'>
      <CountUp
          start={0}
          end={72878}
          suffix='+'
          duration={3}
          enableScrollSpy={true}
          scrollSpyOnce={false}
          /> 
      </p>
          <span className='font-medium'>Subject and courses</span>
        </div>

        </div>


      </div>

    </div>
  )
}

export default CountryNumber