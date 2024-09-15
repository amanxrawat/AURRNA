import React from 'react'
import {
  FaFacebook as FacebookIcon,
  FaXTwitter as TwitterIcon,
  FaYoutube as YoutubeIcon,
  FaInstagram as InstagramIcon
} from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const facebookLink = "https://www.google.com/";
const youtubeLink = "https://www.google.com/";
const twitterLink = "https://www.google.com/";
const instagramLink = "https://www.google.com/";

const Footer = () => {
  return (
    <div className='bg-orange overflow-hidden bordet-t border-dark flex flex-col'>
      <div className='bg-orange border-t border-dark'>
        <div className='flex flex-row justify-between px-20 py-5 text-dark'>
          <div>
            <div >
              <div className='font-bold uppercase'>online shopping</div>
              <ul className='pl-5 flex flex-col gap-1'>
                <Link to={"/search"}>Men</Link>
                <Link to={"/search"}>Women</Link>
                <Link to={"/search"}>Kids</Link>
              </ul>
            </div>
            <div className=' my-3'>
              <div className='uppercase font-bold'>useful links</div>
              <ul className='pl-5'>
                <li>Contact Us</li>
                <li>Terms of Use</li>
                <li>Privacy Policy</li>
                <li>FAQ</li>
              </ul>
            </div>
          </div>
          <div className='font-bold'>
            <div>
              <div className='uppercase'>
                keep in touch
              </div>
              <div className=' flex flex-row gap-3 p-2'>
                <a href={facebookLink} target="blank">
                  <FacebookIcon className='scale-125' />
                </a>
                <a href={twitterLink} target="blank">
                  <TwitterIcon className='scale-125' />
                </a>
                <a href={youtubeLink} target="blank">
                  <YoutubeIcon className='scale-125' />
                </a>
                <a href={instagramLink} target="blank">
                  <InstagramIcon className='scale-125' />
                </a>
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-5'>
            <div>
              <div className='font-bold uppercase'>100% original gurantee</div>
              <div>For all products</div>
            </div>
            <div>
              <div className='font-bold uppercase'>30 days return policy</div>
              <div>Return within 2-3 working days</div>
            </div>
          </div>
          <div>
            <div className='font-bold uppercase'>Join Us</div>
            <div className='uppercase text-black opacity-50 my-2'>subscribe to our newsletters</div>
            <input type="email" className='fill-orange bg-orange placeholder-dark w-full p-2 outline-none border border-dark my-2' placeholder='Email Address' />
            <button className='uppercase bg-dark text-[#FFFFFF] w-full p-2 '>subscribe</button>
          </div>
        </div>
      </div >
      <div className='bg-orange'>
        <div className='border-t border-dark mx-20 p-5 flex flex-row justify-between'>
          <div>
            <span >
              In Case Of Any Concern,
            </span>
            <Link to="/contact" className='font-bold text-dark'> Contact Us </Link>
          </div>
          <div>
            &copy; 2024 All Rights Reserved
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
