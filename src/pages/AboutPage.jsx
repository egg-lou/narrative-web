import React from 'react';
import aboutdata from '../data/aboutdata.json';

const AboutPage = () => {
  return (
    <div>
      <div className="w-full">
        <div style={{ backgroundColor: "rgb(0,84,121)" }}>
          <h1 className="text-center text-4xl font-bold py-5 text-white">About Us</h1>
        </div>
        <div className="bg-white p-10">
          <div className="max-w-screen-lg mx-auto rounded-lg overflow-hidden shadow-2xl">
            <div className="p-6 bg-gray-300">
              {aboutdata.map((about) => (
                <div key={about.id}>
                  <div className="flex justify-center">
                    <img src={about.image} alt="GroupPicture" style={{ width: "100%", maxWidth: "92%", height: "300px", objectFit: "cover"}} className='rounded-lg pt-8' />
                  </div>
                  <p className="text-md text-justify px-10 py-3 pt-8">{about.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-blue-500"></div>
    </div>
  );
};

export default AboutPage;

