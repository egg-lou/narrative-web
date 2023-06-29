import React from 'react';
import aboutdata from '../data/aboutdata.json';
import abtBg from '../images/abtUsBg.svg';

const AboutPage = () => {
  return (
    <div className="w-full min-h-screen bg-cover bg-fixed" style={{ backgroundImage: `url(${abtBg})` }}>
      <div className="flex flex-col justify-center items-center">
        <h3 className="text-white font-abc font-bold text-4xl mt-10">About Us</h3>
        <div>
          {aboutdata.map((about) => (
            <div key={about.id}>
              <div className="flex justify-center m-8">
                <div className=' bg-[#E399EE] mx-0 lg:mx-16'>
                <img
                  src={about.image}
                  alt="group"
                  className="w-full max-w-93 h-auto max-h-300 object-cover p-1"
                />
                 </div>
              </div>
              <p className="px-8 lg:px-24 md:px-10 pb-10 text-white text-justify text-base font-abc sm:text-sm lg:text-lg md:text-base">{about.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;