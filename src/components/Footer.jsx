import React from 'react'
import {
    FaFacebookSquare,
    FaGithub
}from 'react-icons/fa'
import {SiGmail} from 'react-icons/si'

const Footer = () => {
  return (

<div className="footer-container mx-auto">
    <div className="mx-auto py-5 px-4 gap-8 text-white">
      <div>
        <h1 className="text-xl text-center font-bold text-orange-500 py-4 pt-3">
          BSIT 1 - 4 | CWTS
        </h1>
        <p className="text-center">
          Lorem ipsum dolor sit amet. Quo illum tempora est nesciunt sunt eum beatae tempora. A
          aliquid perspiciatis ex rerum Quis et eius quas sit quidem nulla qui obcaecati ratione
          aut mollitia inventore aut delectus magni.
        </p>
        <div className="flex justify-evenly grid-cols-2 md:px-10 lg:px-20 my-6">
          <a href='https://www.facebook.com/profile.php?id=100086537897320' target='_blank' rel='noopener noreferrer'>
            <FaFacebookSquare size={30} />
          </a>
          <a href='/' target='_blank' rel='noopener noreferrer'>
            <FaGithub size={30} />
          </a>
          <a href='/' target='_blank' rel='noopener noreferrer'>
            <SiGmail size={30} />
          </a>
        </div>
      </div>
    </div>
    <div className="flex-auto bg-black mx-auto my-auto">
      <footer className="text-center text-white text-sm py-3">
        &copy; 2023 Polytechnic University of the Philippines - Main. All rights reserved. | BSIT 1 - 4
      </footer>
    </div>
</div>
  );
}

export default Footer