import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';


const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='flex justify-between items-center h-24 mx-auto px-4 text-white bg-sky-950'>
    <div className='flex items-center'>
    <img src='/BSIT 1-4 LOGO.png' alt='Logo' style={{ width: '150px', height: 'auto' }} className='mr-1' />
    <div className='text-xl font-bold text-orange-500'>BSIT 1 - 4 | CWTS</div>
    </div>
    <div className='hidden md:flex'>
      <ul className='flex'>
        <li className='text-l p-4'>Home</li>
        <li className='text-l p-4'>Blog
          <i className='fas fa-caret-down'></i>
        </li>
        <li className='text-l; p-4'>About</li>
        <li className='text-l p-4'>Contacts</li>
      </ul>
    </div>
      <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-sky-950 bg-sky-950 ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <div>
        <img src='/BSIT 1-4 LOGO.png' alt='Logo' style={{ width: '150px', height: 'auto' }} className='mr-1' />
        <h1 className='w-full text-l font-bold text-orange-500 m-4'>BSIT 1 - 4 | CWTS</h1>
        </div>
          <li className='text-l; p-4 border-b border-white'>Home</li>
          <li className='text-l; p-4 border-b border-white'>Blog
          </li>
          <li className='text-l p-4 border-b border-white'>About</li>
          <li className='text-l p-4'>Contacts</li>
      </ul>
    </div>
  );
};

export default Navbar;