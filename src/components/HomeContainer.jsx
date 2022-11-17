import React from 'react';
import Delivery from "../img/delivery.png";
import HeroBg from "../img/heroBg.png";
import I1 from "../img/i1.png";
import { heroData } from '../utils/data';

const HomeContainer = () => {
  return (

    <section className='grid grid-cols-1  md:grid-cols-2 gap-2 w-full i ' id='Home'>
      <div className='py-2 flex-1 flex fles-col items-start justify-center gap-6'>
        <div className='flex items-center gap-2 justify-center bg-orange-100 px-4 py-1 rounded-full'>
          <p className='text-base text-orange-500 font-semibold'>
            Bike Delivery
          </p>
          <div className='w-8 h-8 bg-white rounded-full overflow-hidden drop-shadow-xl'>
            <img
              src={Delivery}
              className='w-full h-full object-contain'
              alt='delivery'>

            </img>
          </div>
        </div>
        <p className=' text-[2.5rem] lg:text-[4.5rem] font-bold tracking-wide text-headingColor'>
          The fastest Delivery in{" "}
          <span className='text-orange-600 text-[3rem] lg:text-[5rem]'> Your City </span>
        </p>

        <p className='text-base text-textColor text-center md:text-left md:w-[80%]'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, esse harum rem velit iure sequi non sapiente sunt. Sequi fuga enim dicta veniam nisi, qui voluptates quidem iure ipsum maiores?
        </p>
        <button type='button'
          className='bg-gradient-to-br from-orange-400 
      to-orange-500 w-full px-4 py-2 md:w-auto
      rounded-lg hover:shadow-lg 
      transition-all ease-in-out  duration-100'
        >
          Order Now

        </button>

      </div>
      <div className=' py-2 flex-1 items-center ralative '>
        <img src={HeroBg}
          className="w-full h-420 w-full lg:w-auto lg:h-650"
          alt="hero-bg"></img>
        <div className=' w-full h-full absolute flex items-center justify-center lg:px-32 py-4 gap-4 flex-wrap '>


          {heroData && heroData.map(n => (

            <div key={n.id} className='w-190 p-2 bg-cardOverlay 
            backdrop-blur-md rounded-3xl flex drop-shadow-lg
            flex-col items-center justify-center '>
              <img src={n.imageSrc}
                classname="w-40 -mt-20  "
                alt=" I1"></img>
              <p className=' text-xl  font-semibold text-textColor mt-4'>
                {n.name}
              </p>
              <p className=' text-sm text-lighttextGray font-semibold my-3'>
                {n.decp}
              </p>
              <p className='text-sm font-semibold text-headingColor'>
                <spa className='text-xs text-red-600 '>$</spa> {n.price}
              </p>
            </div>


          ))};


        </div>
      </div>

    </section>
    

  );
};

export default HomeContainer;