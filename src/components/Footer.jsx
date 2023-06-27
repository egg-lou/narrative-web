import React from 'react'


const Footer = () => {
  return (

<div className="footer-container mx-auto" style={{backgroundColor: "white", left: 0, bottom: 0, width: '100%'}}>
    <div className="mx-auto py-3 px-4 gap-8 text-black">
      <div>
        <div className="flex flex-row justify-center -mx-4 mb-4">
          <img src='/bsitlogo.svg' alt='logo' className='w-20 items-center -mr-2'/>
          <h1 className="text-xl text-center font-bold text-[#524781] py-2 pt-3">
            BSIT 1 - 4 | CWTS
          </h1>
        </div>
        <p className="text-center mx-20">
          Lorem ipsum dolor sit amet. Quo illum tempora est nesciunt sunt eum beatae tempora. A
          aliquid perspiciatis ex rerum Quis et eius quas sit quidem nulla qui obcaecati ratione
          aut mollitia inventore aut delectus magni.
        </p>
        <div className="flex justify-evenly grid-cols-2 md:px-10 lg:px-20 my-3 -space-x-40">
          <a href='https://www.facebook.com/profile.php?id=100086537897320' target='_blank' rel='noopener noreferrer'>
            <img src="/fblogo.svg" alt="facebooklogo" className='w-20'/>
          </a>
          <a href='/' target='_blank' rel='noopener noreferrer'>
            <img src="/gitlogo.svg" alt="githublogo" className='w-20'/>
          </a>
          <a href='/' target='_blank' rel='noopener noreferrer'>
            <img src="/emaillogo.svg" alt="emaillogo" className='w-20'/>
          </a>
        </div>
      </div>
    </div>
    <div className="flex-auto bg-black mx-auto my-auto">
      <footer className="text-center text-white text-sm py-3 md: mx-auto">
        &copy; 2023 Polytechnic University of the Philippines - Main. All rights reserved. | BSIT 1 - 4
      </footer>
    </div>
    <style>
        {`
          .footer-container {
            background-color: rgb(0, 84, 121);
            color: white;
          }

          @media (max-width: 768px) {
            .footer-container {
              font-size: 14px;
            }
          }
        `}
      </style>
</div>
  );
}

export default Footer