import React,{useEffect} from 'react';
import hero from '../assets/hero.png';
import img1 from '../assets/img1.png';
import statue from '../assets/statue.png';
import about from '../assets/about.png';

import Aos from "aos";
import "aos/dist/aos.css"

const Hero = () => {
     useEffect(()=>{
          Aos.init();
        },[]);
  return (
    <>
  <section
  className="bg-cover bg-center text-white px-6 py-12 md:px-8 md:py-16 overflow-hidden rounded-2xl"
  style={{ backgroundImage: `url(${hero})`, paddingTop: '120px' }}
>
  <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between">

    <div className="max-w-lg mx-auto text-center md:text-left" data-aos="fade-right" data-aos-duration="1500">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
        We provide financial <br className="hidden sm:block" /> plan.
      </h1>
      <p className="mb-6 text-sm text-gray-100">
        Empower your business with our comprehensive financial planning services. From budgeting to investment strategies, we tailor plans to maximize profitability. Gain confidence in your...
      </p>
      <button className="bg-[#ff7a5c] text-white px-6 sm:px-8 py-2 rounded-bl-full rounded-tr-full font-semibold mb-6 cursor-pointer">
        Get Start now
      </button>
      <h3 className="font-semibold text-lg mb-3">Our services</h3>
      <div className="flex flex-wrap justify-center md:justify-start gap-2 sm:gap-3 text-sm">
        {['#internet marketing', '#Diversification', '#Liquidity', '#Interest Rate', '#Capital Gains'].map(tag => (
          <span key={tag} className="border-2 border-white px-4 py-1 rounded-full cursor-pointer">
            {tag}
          </span>
        ))}
      </div>
    </div>

    <div className="mt-10 mx-auto md:mt-0 flex flex-col sm:flex-row justify-start items-start gap-6 sm:gap-10 lg:-ml-10" data-aos="fade-left" data-aos-duration="1500">
      <img
        src={img1}
        alt="Robot"
        className="w-60 sm:w-72 md:w-100 relative lg:-mb-10"
      />
      <div className="hidden lg:block text-center">
        <img
          src={statue}
          alt="3D face"
          className="w-40 h-40 rounded-xl shadow-lg"
        />
        <p className="text-white mt-2 text-lg font-medium cursor-pointer">
          Explore our work <span className="inline-block ml-1">→</span>
        </p>
      </div>
    </div>
  </div>
</section>

    <section className='py-5 px-10'>
  <div
    className="bg-white text-[#2c1c27] px-6 md:px-20 py-10"
    style={{
      backgroundImage: `url(${about})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPositionX: "-200px", 
      backgroundPositionY: "center", 
    }}
  >
    <div className="max-w-5xl mx-auto text-center md:text-left" data-aos="fade-up" data-aos-duration="1500">
      <h2 className="text-3xl md:text-5xl font-bold mb-4">About us</h2>
      <p className="text-base md:text-3xl font-semibold leading-relaxed">
        We are organization that provides comparative business support & consulting services
        to new comer start ups & all the required organizations of financial & equity
        altercation & adjustment
      </p>
    </div>
  </div>
</section>

    </>
  );
};

export default Hero;
