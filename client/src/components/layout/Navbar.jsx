import React, { useEffect, useState } from 'react'
import { twMerge } from 'tailwind-merge'
import { Link, useNavigate } from 'react-router-dom';
import { motion, useAnimationControls } from 'framer-motion';

import { IoSearch as SearchIcon, IoMenu as MenuIcon } from 'react-icons/io5'
import { FaRegUser as ProfileIcon, FaRegHeart as FavouriteIcon } from 'react-icons/fa6'
import { PiShoppingCart as CartIcon } from "react-icons/pi";
import { RxCross1 as CrossIcon } from "react-icons/rx"


const navitems = [
  { itemname: "Home", path: "/" },
  { itemname: "Browse", path: "/search" },
  { itemname: "Necklaces", path: "/search/necklaces" },
  { itemname: "Bracelets", path: "/search/bracelets" },
  { itemname: "Earring", path: "/search/earring" },
  { itemname: "Collections", path: "/search/collections" }
]


const containerVariants = {
  close: {
    x: 400,
    transition: {
      type: "spring",
      damping: 15,
      duration: 0.5,
    }
  },
  open: {
    x: 0,
    transition: {
      type: "spring",
      damping: 15,
      duration: 0.5,
    }
  }
}

const Navbar = () => {

  const [user, SetUser] = useState(false);
  const navigate = useNavigate()

  const [isOpen, setIsOpen] = useState(false);

  const containerControls = useAnimationControls();

  useEffect(() => {
    if (isOpen) {
      containerControls.start("open")
    } else {
      containerControls.start("close")
    }
  })

  const toggleMenu = () => {
    setIsOpen((prev) => !prev)
  };

  return (
    <div className='overflow-hidden sticky top-0 z-20'>
      <div className='flex flex-col w-full bg-orange sticky overscroll-none'>
        <div className="bg-dark  font-viet p-2 text-orange justify-center text-center">
          Get Exclusive Offers and Deals
        </div>
        <div className='bg-orange p-4 overflow-x-clip'>
          <div className='flex flex-row justify-between items-center text-center lg:px-12 sm:px-6'>
            <div className='text-center hidden sm:flex items-center gap-2 border rounded-full bg-orange px-2 border-purple'>
              <SearchIcon className='text-dark' />
              <input placeholder='Search' className='lg:w-72 md:w-48 sm:w-28 outline-none h-8 bg-orange rounded-md placeholder-black' />
            </div>
            <div className='items-center flex gap-2 lg:-translate-x-[88px] md:-translate-x-[40px]'>
              <img src='/Images/Logo.png' className='h-12' />
              <span className='text-3xl text-purple uppercase cursor-pointer font-Corm font-bold' onClick={() => navigate("/")}>aurrna</span>
            </div>

            <div className='items-center flex gap-4' >
              <ProfileIcon onClick={() => navigate("/profile")} />
              <FavouriteIcon onClick={() => navigate("/favourite")} />
              <CartIcon className='text-xl' onClick={() => navigate("/cart")} />
              <button className='pl-4'>
                {
                  user ? (
                    <Link className="border border-dark text-dark w-full px-4 py-1" to="/" onClick={() => { SetUser(false) }}>Logout</Link>
                  ) : (
                    <Link className="border border-dark text-dark w-full px-4 py-1" to="/login">Login</Link>
                  )
                }
              </button>
            </div>
          </div>
        </div>
        <div className=' items-center border-y border-purple  flex sm:hidden  justify-between px-2 py-2 '>
          <div className=' flex justify-between items-center px-2 w-[60%] gap-4 border rounded-full bg-yellow border-purple'>
            <SearchIcon className='text-dark sm-scale-[2.5] ' />
            <input placeholder='Search' className='lg:w-72 md:w-48 sm:w-40 outline-none h-8 bg-yellow rounded-md placeholder-black' />
          </div>
          <div className='px-2'>
            {
              !isOpen ? <MenuIcon onClick={() => { toggleMenu(isOpen) }} /> : <CrossIcon onClick={() => { toggleMenu(isOpen) }} />
            }
          </div>
        </div>
        <div className='flex-row gap-5 hidden sm:flex justify-center bg-orange p-2 border-y border-dark '>

          {navitems.map(({ itemname, path }) => (
            <Link
              className={twMerge(
                "hover:text-gray-900"
              )}
              key={Math.random()}
              to={path}
            >
              {itemname}
            </Link>
          ))}
        </div>
      </div>
      {
        <motion.div variants={containerVariants} animate={containerControls} initial="close" className="fixed top-[171px] z-[-2] right-0 flex h-[calc(100%-150px)] py-auto w-[60%] flex-row  justify-center border-l z-10 bg-yellow  p-5  text-xl  text-white backdrop-blur-md  sm:hidden" >
          {
            <div className='flex flex-col gap-5 justify-center items-center  '>
              {
                navitems.map(({ itemname, path }) => (
                  <Link
                    className={twMerge(
                      "hover:text-gray-900 text-black"
                    )}
                    key={Math.random()}
                    to={path}
                  >
                    {itemname}
                  </Link>
                ))
              }
            </div>
          }
        </motion.div>}
    </div >
  )
}

export default Navbar