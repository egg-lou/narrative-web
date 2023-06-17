import React, { useState, useEffect, useRef } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { MdOutlineArrowDropDown } from 'react-icons/md';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [showSubmenu, setShowSubmenu] = useState(null);

  let navRef = useRef(null);
  let submenuRef = useRef(null);
  
  const handleClickOutside = (event) => {
    if (
      navRef.current &&
      !navRef.current.contains(event.target) &&
      submenuRef.current &&
      !submenuRef.current.contains(event.target)
    ) {
      setNav(false);
      setShowSubmenu(false);
    }
  };
  
  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === "Escape") {
        setNav(false);
        setShowSubmenu(false);
      }
    };
  
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscapeKey);
  
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, []);
  

  const Links = [
    { name: 'Home', link: '/' },
    {
      name: 'Blog',
      submenu: true,
      sublinks: [
        { name: 'Preparation', link: '/blog/preparation' },
        { name: 'Immersion Day', link: '/blog/part1' },
        { name: 'End', link: '/blog/end' },
      ],
    },
    { name: 'About', link: '/about' },
  ];

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
      <div className="flex justify-between items-center h-16 mx-auto px-4 py-5 text-white bg-sky-950 shadow-lg sticky top-0" >
        <div className="flex items-center">
          <a href="/">
          <img
            src="/LOGOBSIT.png"
            alt="Logo"
            style={{ width: '100px', height: 'auto' }}
            className="mr-1"
          />
          </a>
          
          <div className="text-xl font-bold text-orange-500">
            BSIT 1 - 4 | CWTS
          </div>
        </div>
          <div className="hidden md:flex">
          <ul ref={submenuRef}className="flex space-x-6 pr-5 text-l">
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
                  <button title='Dropdown-Button'
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
        <div  onClick={handleNav} className="block md:hidden">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <ul ref={navRef} className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-sky-950 ease-in-out duration-500' : 'ease-in-out duration-1000 fixed left-[-100%]'}>
          <div>
            <img src='/LOGOBSIT.png' alt='Logo' style={{ width: '150px', height: 'auto' }} className='mr-1' />
            <h1 className='w-full text-l font-bold text-orange-500 m-4'>BSIT 1 - 4 | CWTS</h1>
          </div>
          {Links.map((link) => (
            <li className='text-l p-4 border-b border-white' key={link.name}>
              <div className="flex items-center">
                <NavLink to ={link.link}>{link.name}</NavLink>
                {link.submenu && (
                  <div className="md:hidden">
                    <button title='2nd-DropDown'
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