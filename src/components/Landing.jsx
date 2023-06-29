import React, { useRef, useEffect } from 'react';
import backgroundImage from '../images/smallbg.svg';
import vid from '../data/videoplaceholder.mp4';

const Landing = () => {
  const videoRef = useRef(null);
  const isMobile = useRef(false);

  useEffect(() => {
    const videoElement = videoRef.current;
    isMobile.current = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (videoElement) {
      videoElement.addEventListener('mouseenter', showControls);
      videoElement.addEventListener('mouseleave', hideControls);
      if (isMobile.current) {
        videoElement.addEventListener('touchstart', showControls);
        videoElement.addEventListener('touchend', hideControls);
      }
    }

    return () => {
      if (videoElement) {
        videoElement.removeEventListener('mouseenter', showControls);
        videoElement.removeEventListener('mouseleave', hideControls);
        if (isMobile.current) {
          videoElement.removeEventListener('touchstart', showControls);
          videoElement.removeEventListener('touchend', hideControls);
        }
      }
    };
  }, []);

  const showControls = () => {
    videoRef.current.controls = true;
  };

  const hideControls = () => {
    videoRef.current.controls = false;
  };

  return (
    <div
    className="w-full lg:h-screen bg-cover bg-no-repeat bg-center bg-fixed md:h-fit sm:h-1/3"
    style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Mobile layout */}
      <div className="lg:hidden">
        <div className="flex flex-col mx-4 mb-8">
          <h3 className="font-bold font-abc text-white text-4xl py-2 text-center mt-8">
            Civic Welfare Training Service
          </h3>
          <h2 className="text-center font-abc text-white font-bold mt-2 text-md">
            Transforming Spaces, Inspiring Minds: Iskolar ng Bayan's Clean-Up Drive and Repainting Project for our Sintang Paaralan
          </h2>
          <a href="/" className="mx-auto">
            <div className="w-36 h-auto mt-4">
              <div className="bg-[#B56CCA] text-white font-bold text-sm text-center rounded-full">
                <h2 className="mx-2 mt-2 font-abc">BSIT 1 - 4 Project</h2>
              </div>
            </div>
          </a>
        </div>
        <div className="flex justify-center items-center mt-4">
          <div className="w-11/12">
            <div className="bg-[#B56CCA] mt-6 mb-12 sm:mb-12">
              <video
                ref={videoRef}
                controls={false}
                loop
                className="video w-full h-auto p-2 font-abc"
              >
                <source src={vid} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>

      {/* Tablet and PC layout */}
      <div className="hidden lg:block">
        <div className="grid grid-cols-2">
          <div className="flex flex-col mt-28 mx-32 mb-28">
            <h3 className="font-bold font-abc text-white text-7xl py-4">
              Civic <br /> Welfare <br /> Training <br /> Service
            </h3>
            <h2 className="text-justify font-abc text-white font-bold -mt-1 ml-1 text-md">
              Transforming Spaces, Inspiring Minds: Iskolar ng <br /> Bayan's Clean-Up Drive and Repainting Project
              <br /> for our Sintang Paaralan
            </h2>
            <a href="/">
              <div className="w-36 h-auto ml-1">
                <div className="bg-[#B56CCA] text-white font-bold text-sm text-center mt-2 rounded-full">
                  <h2 className="mx-2 mt-4 font-normal font-abc">BSIT 1 - 4 Project</h2>
                </div>
              </div>
            </a>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="w-11/12 h-auto mr-20">
              <div className="bg-[#B56CCA] mt-26">
                <video
                  ref={videoRef}
                  controls={false}
                  loop
                  className="video w-fit h-auto p-4"
                >
                  <source src={vid} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};



export default Landing;
