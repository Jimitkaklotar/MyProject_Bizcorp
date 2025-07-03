import React from 'react';
import img1 from '../assets/blog1.png';
import img2 from '../assets/blog2.png';
import bg from '../assets/bg.png';

const BlogSection = () => {
  return (
    <section
      className="bg-[#FDF6F4] py-16 px-6 md:px-20 text-center"
      style={{ backgroundImage: `url(${bg})` }}
      id="blog"
    >
      <div className="max-w-[1440px] mx-auto">
        <p className="text-gray-900 text-md mb-3">Our latest News</p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#2E1F2B] mb-16">
          Inspirational story from our blog
        </h2>

        <div
          className="grid grid-cols-1 md:grid-cols-3 items-center pt-3"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <div className="flex justify-center">
            <img
              src={img1}
              alt="Blog 1"
              className="w-full max-w-sm rounded-tr-[100px] rounded-bl-[100px] object-cover"
            />
          </div>
          <div className="space-y-5 text-center flex flex-col items-center">
            <div className="space-y-3 max-w-xs">
              <p className="text-sm">17 April 2023 - 02 Comments</p>
              <p className="text-sm lg:text-lg font-semibold text-[#2E1F2B]">
                understanding the requirement of the new ventures, scaled businesses with current fundings.
              </p>
              <button className="flex items-center justify-center gap-2 font-semibold text-[#2E1F2B] cursor-pointer mx-auto">
                <a href="#">Explore our news</a>
                <span className="material-icons pt-1">arrow_forward</span>
              </button>
            </div>

            <div className="w-full h-0.5 bg-gray-600"></div>

            <div className="space-y-3 max-w-xs items-center text-center">
              <p className="text-sm">17 April 2023 - 02 Comments</p>
              <p className="text-sm lg:text-lg font-semibold text-[#2E1F2B]">
                Navigating growth by strategies for expanding your business horizons
              </p>
              <button className="flex items-center gap-2 font-semibold text-[#2E1F2B] mx-auto">
                <a href="#">Explore our news</a>
                <span className="material-icons pt-1">arrow_forward</span>
              </button>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              src={img2}
              alt="Blog 2"
              className="w-full max-w-sm rounded-tr-[100px] rounded-bl-[100px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>

  );
};

export default BlogSection;
