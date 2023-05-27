import React from 'react'

const NotfoundPage = () => {
  return (
    <div className='w-full h-1/2 -mt-24'>
    <div className='flex flex-col justify-center items-center -space-y-20 bg-white'>
      <div className='flex justify-center'>
        <img src='/LOGO.png' alt='404 ERROR' className='max-w-full' />
      </div>
      <div className='font-bold lg:text-4xl text-center md: text-2xl'>
        <p className='py-4 text-black'>404 PAGE NOT FOUND</p>
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