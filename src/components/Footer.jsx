import React from 'react';

const Footer = () => {
  return (
    <div
      className="footer-container mx-auto"
      style={{ backgroundColor: "white", left: 0, bottom: 0, width: '100%', height: 'auto' }}
    >
      <div className="mx-auto py-3 px-4 gap-8 text-black">
        <div>
          <div className="flex flex-row justify-center -mx-4 mb-4">
            <img src='/bsitlogo.svg' alt='logo' className='w-20 items-center -mr-2' />
            <h1 className="text-xl text-center font-bold font-abc text-[#524781] py-2 pt-3">
              BSIT 1 - 4 | CWTS
            </h1>
          </div>
          <p className="text-center font-abc mx-4 md:mx-20">
          This website serves as a platform to compile our narrative reports regarding our Civic Welfare Training Service Immersion. It also functions as a memorabilia for us to reflect upon. If you have any questions or feedback, please feel free to visit our Social Media Page, Github Repository, or reach out to us via email.
          </p>
          <div className="flex justify-center md:justify-evenly my-3">
            <a href='https://www.facebook.com/profile.php?id=100086537897320' target='_blank' rel='noopener noreferrer'>
              <img src="logo/fb.svg" alt="facebooklogo" className='w-12 md:w-20 mx-2' />
            </a>
            <a href='https://github.com/egg-lou/narrative-web' target='_blank' rel='noopener noreferrer'>
              <img src="logo/gh.svg" alt="githublogo" className='w-12 md:w-20 mx-2' />
            </a>
            <a href='mailto:2223bsit1.4@gmail.com' target='_blank' rel='noopener noreferrer'>
              <img src="logo/em.svg" alt="emaillogo" className='w-12 md:w-20 mx-2' />
            </a>
          </div>
        </div>
      </div>
      <div className="flex-auto bg-black mx-auto my-auto">
        <footer className="text-center font-abc text-white text-xs py-3 md:text-sm mx-4 md:flex md:justify-center">
          &copy; 2023 Bachelor of Science in Information Technology 1 - 4 - PUP MAIN. All rights reserved.
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
              font-size: 12px;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Footer;

// https://mail.google.com/mail/?view=cm&fs=1&to=2223bsit1.4@gmail.com