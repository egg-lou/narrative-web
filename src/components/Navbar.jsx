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
    { name: 'Home', link: '/', logo: 'logo/home.svg' },
    {
      name: 'Narrative Reports',
      submenu: true,
      logo: 'logo/nr.svg',
      sublinks: [
        { name: 'Preparation Narrative', link: '/blog/preparation_narrative',},
        { name: 'Immersion Day Narrative', link: '/blog/immersion_day_narrative' },
        { name: 'Conclusion Narrative', link: '/blog/conclusion_narrative' },
      ],
    },
    { name: 'About', link: '/about', logo: 'logo/abt.svg'},
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
      <div className="flex justify-between items-center h-16 mx-auto px-4 py-5 text-black bg-white shadow-lg sticky top-0" >
        <div className="flex items-center">
          <a href="/">
          <img
            src="/bsitlogo.svg"
            alt="Logo"
            style={{ width: '100px', height: 'auto' }}
            className="mr-1 -ml-2"
          />
          </a>
          
          <div className="text-xl font-bold font-abc text-[#524781] -ml-5">
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
                <div className='flex flex-row items-center -mx-2 font-abc'>
                  <img src={link.logo} alt='logo' className='w-16 -mr-2'/>
                {link.name}
                {link.submenu && (
                  <button title='Dropdown-Button'
                    onClick={handleSubmenu1}
                    className={`${
                      showSubmenu ? 'transform rotate-180' : ''
                    } inline-block ml-1 -mr-4 text-md duration-500`}
                  >
                    <MdOutlineArrowDropDown />
                  </button>
                )}
                </div>
                </NavLink>
                
                {link.submenu && showSubmenu && (
                <ul className="absolute left-0 mt-2 space-y-2 text-sm bg-white shadow-md font-abc">
                {link.sublinks.map((sublink) => (
                  <li key={sublink.name}>
                    <NavLink to = {sublink.link}
                      className="block px-4 py-2 hover:bg-[#524781] hover:text-white text-[#524781] duration-500 font-abc"
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
        <ul ref={navRef} className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-white ease-in-out duration-500' : 'ease-in-out duration-1000 fixed left-[-100%]'}>
          <div>
            <img src='/bsitlogo.svg' alt='Logo' style={{ width: '150px', height: 'auto' }} className='mr-1' />
            <h1 className='w-full text-2xl font-extrabold font-abc text-[#524781] m-4'>BSIT 1 - 4 | CWTS</h1>
          </div>
          {Links.map((link) => (
            <li className='text-l p-4 border-b border-[#524781]' key={link.name}>
              <div className="flex items-center font-bold font-abc">
                <NavLink to ={link.link}>{link.name}</NavLink>
                {link.submenu && (
                  <div className="md:hidden">
                    <button title='2nd-DropDown'
                      onClick={() => handleSubmenu2(link.name)}
                      className={`${
                        showSubmenu ? 'transform rotate-180 duration-300' : ''
                      } ml-1 text-md flex items-center duration-500`}
                    >
                      <MdOutlineArrowDropDown />
                    </button>
                  </div>
                )}
              </div>
              {showSubmenu === link.name && link.submenu && (
                <ul className="bg-white">
                  {link.sublinks.map((sublink) => (
                    <li key={sublink.name}>
                      <NavLink to = {sublink.link}
                        className="block px-4 py-2 mt-4 border-spacing-14 border font-abc border-[#524781] hover:bg-[#524781] hover:text-white text-black duration-500"
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