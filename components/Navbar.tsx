import { useState, useEffect, useCallback } from "react";
import { BsChevronDown, BsSearch, BsEmojiSmile } from "react-icons/bs";

import NavbarItem from "./NavbarItem";
import MobileMenu from "./MobileMenu";
import AccountMenu from "./AccountMenu";

const TOP_OFFSET = 66;

const Navbar = () => {
 const [showMobileMenu, setShowMobileMenu] = useState(false);
 const [showAccountMenu, setShowAccountMenu] = useState(false);
 const [showBackground, setShowBackground] = useState(false);

 useEffect(() => {
  const handleScroll = () => {
   if (window.scrollY >= TOP_OFFSET) {
    setShowBackground(true);
   } else {
    setShowBackground(false);
   }
  }

  window.addEventListener('scroll', handleScroll);

  return () => {
   window.removeEventListener('scroll', handleScroll);
  }
 }, []);

 const toggleMobileMenu = useCallback(() => {
  setShowMobileMenu((current) => !current);
 }, []);

 
 const toggleAccountMenu = useCallback(() => {
  setShowAccountMenu((current) => !current);
 }, []);

 return (
    <nav className="w-full fixed top-0 z-40">
      <div className={`px-2 md:px-16 py-0 flex flex-row flex-nowrap items-center transition duration-500 ${showBackground ? 'bg-zinc-900 bg-opacity-90' : ''}`}>
        <div className="flex-row ml-0 gap-4 hidden lg:flex">
          <NavbarItem label="Home"/>
          <NavbarItem label="Series" />
          <NavbarItem label="Movies" />
          <NavbarItem label="Sport" />
          <NavbarItem label="My List" />
         </div>
       <div onClick={toggleMobileMenu} className="lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative">
        <p className="text-white text-sm">Browse</p>
        <BsChevronDown className={`text-white font-bold transition ${showMobileMenu ? 'rotate-180' : 'rotate-0'}`}/>
        <MobileMenu visible={showMobileMenu} />
       </div> 
       <div className="px-4 py-5 flex-row justify-center lg:flex ml-auto mr-auto">
       <img src="/images/logo.png" className="h-8 lg:h-10 flex flex-row justify-center relative cursor-pointer duration-500" alt="Logo" />
       </div>
       <div className="flex flex-row ml-auto gap-4 items-center relative">
         <div className="text-gray-200 hover:text-gray-950 text-center block border border-none rounded-full  hover:bg-gray-200 py-2 px-4 cursor-pointer transition">
           <BsSearch />
         </div>
         <div className="text-gray-200 flex-row hover:text-gray-950 items-center gap-1 border border-none rounded-full hover:bg-gray-200 py-2 px-4 cursor-pointer hidden lg:flex transition">
           <BsEmojiSmile />
           <span className="text-1xl font-bold">Kids</span>
         </div>

         <div onClick={toggleAccountMenu} className="flex flex-row items-center gap-4 px-2 py-1 cursor-pointer hover:text-gray-950 hover:bg-gray-200 hover:rounded-full relative">
          <div className="w-6 h-6 lg:w-10 lg:h-10 rounded-full overflow-hidden">
          <img src="/images/default-blue.png" alt="" />
          </div>
          <BsChevronDown className={`text-white text-bold transition hover:text-gray-950 ${showAccountMenu ? 'rotate-180' : 'rotate-0'}`}/>
          <AccountMenu visible={showAccountMenu} />
         </div>
       </div>
     </div>    
    </nav>
 )
}

export default Navbar;