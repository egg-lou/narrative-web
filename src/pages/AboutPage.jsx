import React from 'react';
import aboutdata from '../data/aboutdata.json'


const AboutPage = () => {
  return (
    <div>
      <div className="w-full ">
        <div style={{ backgroundColor: "rgb(0,84,121)" }}>
          <h1 className="flex justify-center text-justify text-4xl font-bold py-5 text-white">About Us</h1>
        </div>
          <div className="p-6 h-auto bg-white">
          {aboutdata.map((aboutdata) => (
            <div>
              <div className='flex justify-center'>
                <img src={aboutdata.image} alt='GroupPicture'/>
              </div>
              <p className='text-md text-justify px-20 pb-5 pt-5'>{aboutdata.content}</p>

            </div>
              ))}
          </div>
      </div>
      <div className="bg-rgb(0,84,121)"></div>
    </div>
  );
};

export default AboutPage;
