import React, { useState } from 'react';
import star from '../assets/bstar.png';
import per1 from '../assets/per1.png';
import per2 from '../assets/per2.png';
import per3 from '../assets/per3.png';

const profiles = [
  {
    name: 'Alex Jhonemartin',
    title: 'Marketing Manager',
    image: per1,
    review: 'Impressive performance! They delivered on promises, providing tailored solutions that significantly impacted our business growth and profitability.'
  },
  {
    name: 'Margaret Atwood',
    title: 'Marketing Manager',
    image: per2,
    review: 'An outstanding team with innovative strategies that elevated our campaigns and brought exceptional ROI.'
  },
  {
    name: 'Jane Austen',
    title: 'Geoffrey Chaucer',
    image: per3,
    review: 'Their professionalism and creative thinking helped us restructure our approach to market expansion efficiently.'
  }
];

const Profile = () => {
  const [selected, setSelected] = useState(0);

  return (
    <section className="px-6 py-10">
      <div className="max-w-[1440px] mx-auto lg:px-20">
        <div className="flex">
          <div className="hidden lg:flex flex-col ml-2 mr-6 items-center">
            {profiles.map((_, i) => (
              <div
                key={i}
                className={`rounded-md transition-all duration-300 ${selected === i ? 'w-2 h-30 bg-[#F06F58]' : 'w-0.5 h-30 bg-[#F06F58]'
                  }`}
              ></div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 w-full px-2 md:px-6">
            <div className="flex flex-col gap-2 md:col-span-1">
              {profiles.map((profile, index) => (
                <div
                  key={index}
                  className="items-center cursor-pointer p-2 rounded-lg transition duration-300"
                  onClick={() => setSelected(index)}
                >
                  <img
                    src={profile.image}
                    alt={profile.name}
                    className="w-15 h-15 rounded-full"
                    data-aos="zoom-out"
                    data-aos-duration="1500"
                  />
                  <div>
                    <p className="font-semibold">{profile.name}</p>
                    <p className="text-sm text-gray-500">{profile.title}</p>
                  </div>
                </div>
              ))}
            </div>
            <div
              className="border-t-2 border-[#F06F58] pt-10 md:col-span-2 mt-5"
              data-aos="fade-left"
              data-aos-duration="1500"
            >
              <div className="md:py-10 lg:w-140">
                <div className="flex gap-2 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <img key={i} src={star} alt="star" className="w-6 h-6" />
                  ))}
                </div>
                <p className="text-md lg:text-2xl font-semibold leading-relaxed text-black">
                  {profiles[selected].review}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
};

export default Profile;
