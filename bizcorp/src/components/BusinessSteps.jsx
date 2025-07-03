import React from 'react';
import teamImage from '../assets/team-image.png';

const BusinessSteps = () => {
  return (
   <section className="bg-[#442B3C] text-white py-16 px-6 md:px-16">
  <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
    {/* Left Side */}
    <div className="flex-1 space-y-10 max-w-xl mx-auto">
      <div>
        <p className="text-sm uppercase text-gray-300">Working process</p>
        <h2 className="text-3xl md:text-4xl font-semibold mt-2">Business agency steps.</h2>
      </div>

      <div className="space-y-6" data-aos="fade-right" data-aos-duration="1500">
        <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl w-full md:w-100">
          <div className="flex items-center gap-3">
            <p className="text-[12px] font-bold mb-2 bg-[#442B3C] px-2 py-1 rounded-full">1 Step</p>
            <h3 className="text-xl font-semibold mb-1">Safeguard for your business</h3>
          </div>
          <p className="text-xs text-gray-300">
            Elevate your business resilience with our comprehensive strategies. From risk assessment to strategic risk...
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl w-full md:w-100">
          <div className="flex items-center gap-3">
            <p className="text-[12px] font-bold mb-2 bg-[#442B3C] px-2 py-1 rounded-full">2 Step</p>
            <h3 className="text-xl font-semibold mb-1">Build solid human resource</h3>
          </div>
          <p className="text-xs text-gray-300 mt-2">
            Empower your business with a solid human resource foundation – recruitment, training, and strategic planning...
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl w-full md:w-100">
          <div className="flex items-center gap-3">
            <p className="text-[12px] font-bold mb-2 bg-[#442B3C] px-2 py-1 rounded-full">3 Step</p>
            <h3 className="text-xl font-semibold mb-1">Results are the specific actions</h3>
          </div>
          <p className="text-xs text-gray-300">
            Results speak louder than promises. See the difference in decisive specific actions that propel business forward...
          </p>
        </div>
      </div>
    </div>

    {/* Right Side */}
    <div className="flex-1 relative max-w-xl mx-auto">
      <img src={teamImage} alt="Team celebrating" className="w-full" />

      <div className="absolute top-12 md:mt-4 text-center md:flex flex-col gap-10 z-10 md:-ml-12 hidden">
        <div className="bg-[#F06F58] text-white font-bold py-2 px-4 w-30 rounded-full rounded-br-none shadow-md text-md"
          data-aos="fade-left" data-aos-duration="1500">
          20+<br />
          <span className="text-xs font-normal">Years of service</span>
        </div>
        <div className="bg-[#F06F58] text-white font-bold py-2 px-4 w-35 md:-ml-5 rounded-full rounded-br-none shadow-md text-md"
          data-aos="fade-left" data-aos-duration="1500">
          90%<br />
          <span className="text-xs font-normal">Positive feedback</span>
        </div>
        <div className="bg-[#F06F58] text-white font-bold py-2 px-4 md:-ml-8 lg:-ml-10 rounded-full rounded-br-none shadow-md text-md"
          data-aos="fade-left" data-aos-duration="1500">
          5 M<br />
          <span className="text-xs font-normal">Happy clients worldwide</span>
        </div>
        <div className="bg-[#F06F58] text-white font-bold py-2 px-4 md:-ml-10 lg:-ml-18 rounded-full rounded-br-none shadow-md text-md"
          data-aos="fade-left" data-aos-duration="1500">
          120 K+<br />
          <span className="text-xs font-normal">Successful project completion</span>
        </div>
      </div>
    </div>
  </div>
</section>

  );
};

export default BusinessSteps;
