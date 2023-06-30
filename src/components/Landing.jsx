// import React, { useRef, useEffect } from 'react';
// import backgroundImage from '../images/smallbg.svg';

// const Landing = () => {
//   const isMobile = useRef(false);

//   useEffect(() => {
//     isMobile.current = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
//   }, []);

//   return (
//     <div
//       className="w-full lg:h-screen bg-cover bg-no-repeat bg-center bg-fixed md:h-fit sm:h-1/3"
//       style={{ backgroundImage: `url(${backgroundImage})` }}
//     >
//       {/* Mobile layout */}
//       <div className="lg:hidden">
//         <div className="flex flex-col mx-4 mb-8">
//           <h3 className="font-bold font-abc text-white text-4xl py-2 text-center mt-8">
//             Civic Welfare Training Service
//           </h3>
//           <h2 className="text-center font-abc text-white font-bold mt-2 text-md">
//             Transforming Spaces, Inspiring Minds: Iskolar ng Bayan's Clean-Up Drive and Repainting Project for our Sintang Paaralan
//           </h2>
//           <a href="/" className="mx-auto">
//             <div className="w-36 h-auto mt-4">
//               <div className="bg-[#B56CCA] text-white font-bold text-sm text-center rounded-full">
//                 <h2 className="mx-2 mt-2 font-abc">BSIT 1 - 4 Project</h2>
//               </div>
//             </div>
//           </a>
//         </div>
//         <div className="flex justify-center items-center mt-4">
//           <div className="w-11/12">
//             <div className="bg-[#B56CCA]  p-2 flex justify-center items-center mt-6 mb-12 sm:mb-12">
//               <iframe
//                 title="Embedded Video"
//                 src="https://drive.google.com/file/d/1oq_NLPFes7DiijAiJ4FxTp73Rw3YxVmv/preview"
//                 width="100%"
//                 height="100%"
//                 allow="autoplay; fullscreen"
//                 className=' h-72'
//               ></iframe>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Tablet and PC layout */}
//       <div className="hidden lg:block">
//         <div className="grid grid-cols-2">
//           <div className="flex flex-col mt-28 mx-32 mb-28">
//             <h3 className="font-bold font-abc text-white text-7xl py-4">
//               Civic <br /> Welfare <br /> Training <br /> Service
//             </h3>
//             <h2 className="text-justify font-abc text-white font-bold -mt-1 ml-1 text-md">
//               Transforming Spaces, Inspiring Minds: Iskolar ng <br /> Bayan's Clean-Up Drive and Repainting Project
//               <br /> for our Sintang Paaralan
//             </h2>
//             <a href="/">
//               <div className="w-36 h-auto ml-1">
//                 <div className="bg-[#B56CCA] text-white font-bold text-sm text-center mt-2 rounded-full">
//                   <h2 className="mx-2 mt-4 font-normal font-abc">BSIT 1 - 4 Project</h2>
//                 </div>
//               </div>
//             </a>
//           </div>
//           <div className="flex flex-col justify-center items-center">
//             <div className="w-11/12 mr-36">
//               <div className="bg-[#B56CCA] p-2 flex justify-center items-center">
//                 <iframe
//                   title="Embedded Video"
//                   src="https://drive.google.com/file/d/1oq_NLPFes7DiijAiJ4FxTp73Rw3YxVmv/preview"
//                   width="100%"
//                   height="100%"
//                   allow="autoplay; fullscreen"
//                   className='h-96'
//                 ></iframe>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Landing;

import React, { useRef, useEffect, lazy, Suspense } from 'react';
import backgroundImage from '../images/smallbg.svg';

const LazyLoadedIFrame = lazy(() => import('./LazyLoadedIFrame'));

const Landing = () => {
  const isMobile = useRef(false);

  useEffect(() => {
    isMobile.current = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  }, []);

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
            <div className="bg-[#B56CCA]  p-2 flex justify-center items-center mt-6 mb-12 sm:mb-12">
              <Suspense fallback={<div>Loading...</div>}>
                <LazyLoadedIFrame />
              </Suspense>
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
            <div className="w-11/12 mr-36">
              <div className="bg-[#B56CCA] p-2 flex justify-center items-center">
                <Suspense fallback={<div>Loading...</div>}>
                  <LazyLoadedIFrame />
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;