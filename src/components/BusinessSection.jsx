import React from 'react';
import strategyImg from '../assets/strategy.png';
import arrowImg from '../assets/trend.png';

const BusinessSection = () => {
  return (
    <section className="bg-[#f5ece6] text-[#2c1c27] px-6 md:px-20 py-20 space-y-16" id="pages">
      <div>
        <div className="max-w-6xl mx-auto space-y-2">
          <h2 className="text-[28px] lg:text-[50px] font-bold leading-tight">
            Since more than 40 years business
          </h2>

          <div className="flex flex-col md:flex-row md:justify-between">
            <h2 className="text-[28px] lg:text-[50px] font-bold leading-tight">
              manufacture and trader
            </h2>
            <div className="flex flex-col items-start mt-2 md:mt-0 md:items-end ">
              <div className="flex lg:gap-3 gap-1 cursor-pointer">
                <span className="border border-black rounded-full px-4 py-1 text-sm">#internet marketing</span>
                <span className="border border-black rounded-full px-4 py-1 text-sm">#Diversification</span>
              </div>
              <div className="flex lg:gap-2 md:gap-0 gap-1  mt-2 cursor-pointer">
                <span className="border border-black rounded-full px-2 py-1 text-sm">#Liquidity</span>
                <span className="border border-black rounded-full px-2 py-1 text-sm">#Interest Rate</span>
                <span className="border border-black rounded-full px-2 py-1 text-sm">#Capital Gains</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row  md:flex-w items-start gap-6 pt-6">
            <div className="flex items-center gap-3 min-w-[150px]">
              <p className="text-[12px] font-semibold">Business services</p>
              <div className="h-[1px] bg-black flex-grow w-full"></div>
            </div>
            <p className="text-sm md:max-w-3xl text-gray-700">
              Innovative business solutions tailored for efficiency and growth. We specialize<br /> in strategic consulting,
              technology integration, and seamless operational optimization,<br /> empowering your business for success in today's dynamic market.
            </p>
          </div>
        </div>
      </div>


      <div className="max-w-6xl mx-auto flex items-center justify-between ">
        <h3 className="text-3xl font-bold">Business strategy</h3>
        <div className="bg-[#ff725e] p-3 rounded-full">
          <img src={arrowImg} alt="Arrow" className="w-9 h-9" />
        </div>
      </div>
      <div className=" p-6  flex flex-col md:flex-row items-center gap-8 max-w-6xl mx-auto  ">
        <div className="w-full lg:w-[500px] md:w-[300px] h-[220px] rounded-[100px] overflow-hidden " data-aos="fade-right" data-aos-duration="1500">
          <img src={strategyImg} alt="Strategy" className="w-full h-full object-cover" />
        </div>

        <div className="flex-1 text-center md:text-left" data-aos="fade-left" data-aos-duration="1500">
          <h4 className="text-lg lg:text-2xl font-bold">Focus on easy to use business</h4>
          <p className="lg:text-lg font-semibold mt-5">
            Free process to elevate your<br /> business operation & productivity with<br /> ease.
          </p>
          <button className="mt-6 text-lg cursor-pointer font-semibold flex items-center justify-center md:justify-start gap-2">
            Explore our work
            <span class="material-icons">arrow_forward</span>
          </button>
        </div>
      </div>

      <div className="space-y-8 max-w-6xl mx-auto border-t-2  border-black pt-4 ">
        {['Decision Making Analysis', 'Cost Consultation', 'Modern Accounting'].map(service => (
          <div
            key={service}
            className="flex items-center justify-between border-b-2 border-black pb-5 mt-5 "
          >
            <h4 className="lg:text-4xl md:text-2xl font-bold" data-aos="fade-right" data-aos-duration="1500" >{service}</h4>
            <div className="border-2 border-black rounded-full p-2">
              <img src={arrowImg} alt="Arrow" className="w-8 h-8" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BusinessSection;
