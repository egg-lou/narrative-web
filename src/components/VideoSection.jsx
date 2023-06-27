// import React, { useRef, useEffect } from 'react';
// import vid from '../data/videoplaceholder.mp4';

// const VideoSection = () => {
//   const videoRef = useRef(null);
//   const isMobile = useRef(false);

//   useEffect(() => {
//     const videoElement = videoRef.current;
//     isMobile.current = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

//     if (videoElement) {
//       videoElement.addEventListener('mouseenter', showControls);
//       videoElement.addEventListener('mouseleave', hideControls);
//       if (isMobile.current) {
//         videoElement.addEventListener('touchstart', showControls);
//         videoElement.addEventListener('touchend', hideControls);
//       }
//     }

//     return () => {
//       if (videoElement) {
//         videoElement.removeEventListener('mouseenter', showControls);
//         videoElement.removeEventListener('mouseleave', hideControls);
//         if (isMobile.current) {
//           videoElement.removeEventListener('touchstart', showControls);
//           videoElement.removeEventListener('touchend', hideControls);
//         }
//       }
//     };
//   }, []);

//   const showControls = () => {
//     videoRef.current.controls = true;
//   };

//   const hideControls = () => {
//     videoRef.current.controls = false;
//   };

//   return (
//     <div className='w-full h-auto bg-black p-5'>
//       <h3 className='text-white text-center text-2xl font-bold pb-5'>Video Documentation</h3>
//       <div className='w-full flex justify-center md:w-1/2 lg:w-1/3 xl:w-2/4 mx-auto'>
//         <video ref={videoRef} controls={false} loop className='w-full h-auto'>
//           <source src={vid} type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//       </div>
//     </div>
//   );
// };

// export default VideoSection;

import React, { useRef, useEffect } from 'react';
import vid from '../data/videoplaceholder.mp4';

const VideoSection = () => {
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
    <div className="video-section bg-black p-4">
      <h3 className="video-title text-white text-center text-2xl font-bold mb-4">
        Video Documentation
      </h3>
      <div className="video-wrapper flex justify-center p-2">
        <video
          ref={videoRef}
          controls={false}
          loop
          className="video w-3/5 h-auto  rounded-lg"
        >
          <source src={vid} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default VideoSection;
