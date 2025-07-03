import React from "react";
import img1 from "../assets/p1.png";
import img2 from "../assets/p2.png";
import img3 from "../assets/p3.png";
import img4 from "../assets/p4.png";
import img5 from "../assets/p5.png";
import img6 from "../assets/p6.png";
import TrendingUp from "../assets/Trending.png";

import leftImg from '../assets/left-team.png';
import rightImg from '../assets/right-bulb.png';
import star from '../assets/star.png';
import round from '../assets/round.png';
import arrow from '../assets/arrow.png';

const projects = [
  {
    image: img1,
    category: "Branding",
    title: "Business Success Showcase",
  },
  {
    image: img2,
    category: "Technology",
    title: "Strategic Solution Portfolio",
  },
  {
    image: img3,
    category: "Branding",
    title: "Innovation Venture Collection",
  },
  {
    image: img4,
    category: "Marketing",
    title: "Corporate Triumph Highlights",
  },
  {
    image: img5,
    category: "Technology",
    title: "Marker Leadership Portfolio",
  },
  {
    image: img6,
    category: "Marketing",
    title: "Dynamic Business Snapshot",
  },
];

const ProjectShowcase = () => {
  return (
    <>
      <section
        className="bg-white text-center px-4 md:px-10 py-16"
        id="service"
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        <div className="max-w-[1440px] mx-auto">
          <p className="text-sm text-gray-600 mb-2">Our Work Showcase</p>
          <h2 className="text-3xl md:text-5xl font-semibold text-[#2f1e2f] mb-10">
            Checkout our latest projects
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="relative rounded-bl-[100px] rounded-tr-[100px] overflow-hidden group shadow-md cursor-pointer mx-auto"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-[#442B3C] p-3 rounded-full">
                    <img src={TrendingUp} alt="Trending Up" className="w-7 h-7" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-[#F06F58] text-white text-left px-4 py-4">
                  <p className="text-sm font-medium mb-1 ml-10">| {project.category}</p>
                  <h4 className="text-md font-semibold leading-tight ml-10">
                    {project.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section
        className="bg-[#F06F58] py-16 px-6 lg:px-20 relative overflow-hidden"
        id="Portfolio"
        data-aos="zoom-out"
        data-aos-duration="1000"
      >
        <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="relative flex flex-col items-start gap-6 z-10 lg:-mt-40">
            <img src={leftImg} alt="Team working" className="w-[240px] rounded shadow-md" />

            <div className="absolute top-1/2 left-[220px] lg:flex items-center hidden lg:-mt-10 lg:ml-5">
              <img src={round} alt="Venn Diagram" className="w-[500px] h-auto" />
              <div className="w-[300px] h-[2px] bg-white ml-2"></div>
            </div>
          </div>
          <div className="relative w-[340px] lg:w-[400px] z-10">
            <img src={rightImg} alt="Bulb idea" className="w-full rounded" />
            <div className="absolute inset-0 bg-black opacity-50 rounded"></div>

            <div className="absolute inset-0 flex flex-col items-start justify-center gap-6 px-6 text-white z-20">
              <div className="flex items-center gap-2 lg:text-6xl text-2xl font-semibold lg:-ml-45 lg:-mt-20">
                <span>FINANCES</span>
                <img src={star} alt="Star icon" className="md:w-8 md:h-8 w-6 h-6 lg:mt-15 lg:ml-10" />
              </div>

              <div className="flex items-center gap-4 lg:-ml-42">
                <div className="lg:w-35 lg:h-10 w-15 h-15">
                  <img src={arrow} alt="Arrow" className="w-full h-auto object-contain lg:-mt-2" />
                </div>
                <div className="lg:text-5xl text-2xl font-semibold">ADVANCES</div>
              </div>
            </div>

            <button className="absolute bottom-6 left-6 px-5 py-2 border-2 font-bold border-[#E3BEBE] text-white rounded-bl-2xl rounded-tr-2xl text-sm hover:bg-[#E3BEBE] hover:text-[#f0613c] transition cursor-pointer z-50">
              <a href="#">Get free estimate</a>
            </button>
          </div>
        </div>
      </section>

    </>
  );
};

export default ProjectShowcase;
