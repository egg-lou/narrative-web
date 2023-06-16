import React from 'react';
import vid from '../data/videoplaceholder.mp4';

const VideoSection = () => {
  return (
    <div className='w-full h-auto bg-black p-5'>
      <h3 className='text-white text-center text-2xl font-bold pb-5'>Video Documentation</h3>
      <div className='w-full  flex justify-center md:w-1/2 lg:w-1/3 xl:w-2/4 mx-auto'>
        <video src={vid} autoPlay loop muted className='w-full h-auto' />
      </div>
    </div>
  );
};

export default VideoSection;
