import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { MdOutlineArrowDropDown } from 'react-icons/md';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
  let Links = [
    { name: 'Home', link: '/' },
    {
      name: 'Blog',
      submenu: true,
      sublinks: [
        { name: 'Preparation', link: '/blog/preparation' },
        { name: 'Part 1', link: '/blog/part1' },
        { name: 'Part 2', link: '/blog/part2' },
        { name: 'End', link: '/blog/end' },
      ],
    },
    { name: 'About', link: '/about' },
  ];
  const [nav, setNav] = useState(false);
  const [showSubmenu, setShowSubmenu] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const handleSubmenu1 = () => {
    setShowSubmenu(!showSubmenu);
  };

  const handleSubmenu2 = (linkName) => {
    if (showSubmenu === linkName) {
      setShowSubmenu(null);
    } else {
      setShowSubmenu(linkName);
    }

  };

  return (
      <div className="flex justify-between items-center h-16 mx-auto px-4 py-5 text-white bg-sky-950 shadow-lg sticky top-0">
        <div className="flex items-center">
          <img
            src="/LOGO.png"
            alt="Logo"
            style={{ width: '100px', height: 'auto' }}
            className="mr-1"
          />
          <div className="text-xl font-bold text-orange-500">
            BSIT 1 - 4 | CWTS
          </div>
        </div>
          <div className="hidden md:flex">
          <ul className="flex space-x-6 pr-5 text-l">
            {Links.map((link) => (
              <li key={link.name} className="relative">
                <NavLink to = {link.link}
                  onClick={() => {
                    if (link.submenu) {
                      handleSubmenu1();
                    }
                  }}
                >
                  {link.name}
                </NavLink>
                {link.submenu && (
                  <button
                    onClick={handleSubmenu1}
                    className={`${
                      showSubmenu ? 'transform rotate-180' : ''
                    } inline-block ml-1 text-md`}
                  >
                    <MdOutlineArrowDropDown />
                  </button>
                )}
                {link.submenu && showSubmenu && (
                <ul className="absolute left-0 mt-2 space-y-2 text-sm bg-sky-950 rounded-lg shadow-md ">
                {link.sublinks.map((sublink) => (
                  <li key={sublink.name}>
                    <NavLink to = {sublink.link}
                      className="block px-4 py-2 hover:bg-gray-200 hover:text-black text-white"
                    >
                      {sublink.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div onClick={handleNav} className="block md:hidden">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-sky-950 bg-sky-950 ease-in-out duration-1000' : 'hidden md:hidden'}>
          <div>
            <img src='/LOGO.png' alt='Logo' style={{ width: '150px', height: 'auto' }} className='mr-1' />
            <h1 className='w-full text-l font-bold text-orange-500 m-4'>BSIT 1 - 4 | CWTS</h1>
          </div>
          {Links.map((link) => (
            <li className='text-l p-4 border-b border-white' key={link.name}>
              <div className="flex items-center">
                <NavLink to ={link.link}>{link.name}</NavLink>
                {link.submenu && (
                  <div className="md:hidden">
                    <button
                      onClick={() => handleSubmenu2(link.name)}
                      className="ml-1 text-md flex items-center"
                    >
                      <MdOutlineArrowDropDown />
                    </button>
                  </div>
                )}
              </div>
              {showSubmenu === link.name && link.submenu && (
                <ul className="bg-sky-950">
                  {link.sublinks.map((sublink) => (
                    <li key={sublink.name}>
                      <NavLink to = {sublink.link}
                        className="block px-4 py-2 hover:bg-gray-200 hover:text-black text-white"
                      >
                        {sublink.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
    </div>
  );
};

export default Navbar;