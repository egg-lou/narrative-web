import React from 'react'

const NotfoundPage = () => {
  return (
    <div  className=' bg-[#4B3D72]' style={{width: 'full', height: '58vh'}}>
        <div className='w-full h-auto flex flex-col justify-center items-center'>
          <div className='m-10'>
            <img src='/bsitlogo.svg' alt='404 ERROR' className='w-96 '/>
          </div>
          <div className='font-bold lg:text-4xl text-center md: text-2xl'>
            <p className=' font-extrabold font-abc text-white'>404 PAGE NOT FOUND</p>
          </div>
          <style>
            {`
              @media (max-width: 768px) {
                .flex-col {
                  padding: 20px;
                }
                .text-4xl {
                  font-size: 2rem;
                }
                .py-8 {
                  padding-top: 4rem;
                  padding-bottom: 4rem;
                }
              }
            `}
        </style>
      </div>
    </div>
    
  );
}

export default NotfoundPage