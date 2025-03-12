import React from "react";
import {
  FaFacebook as FacebookIcon,
  FaXTwitter as TwitterIcon,
  FaYoutube as YoutubeIcon,
  FaInstagram as InstagramIcon,
} from "react-icons/fa6";
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";

const facebookLink = "https://www.google.com/";
const youtubeLink = "https://www.google.com/";
const twitterLink = "https://www.google.com/";
const instagramLink = "https://www.google.com/";

const Footer = ({ className }) => {
  return (
    <footer className={twMerge("bg-orange border-t border-dark py-8", className)}>
      {/* Grid Layout for Footer Sections */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-10">
        
        {/* Online Shopping & Useful Links (Side by Side on Small Screens) */}
        <div className="grid grid-cols-2 md:grid-cols-1 gap-6">
          {/* Online Shopping */}
          <div>
            <h3 className="text-lg font-bold uppercase">Online Shopping</h3>
            <ul className="mt-3 space-y-2">
              <li><Link to="/search">Men</Link></li>
              <li><Link to="/search">Women</Link></li>
              <li><Link to="/search">Kids</Link></li>
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-lg font-bold uppercase">Useful Links</h3>
            <ul className="mt-3 space-y-2">
              <li><Link to="/contact">Contact Us</Link></li>
              <li>Terms of Use</li>
              <li>Privacy Policy</li>
              <li><Link to="/FAQ">FAQ</Link></li>
            </ul>
          </div>
        </div>

        {/* Our Promise & Keep in Touch (Side by Side on Small Screens) */}
        <div className="grid grid-cols-2 md:grid-cols-1 gap-6">
          {/* Our Promise Section */}
          <div>
            <h3 className="text-lg font-bold uppercase">Our Promise</h3>
            <div className="mt-4 space-y-4">
              <div>
                <h4 className="font-semibold">100% Original Guarantee</h4>
                <p className="text-sm text-gray-700">For all products</p>
              </div>
              <div>
                <h4 className="font-semibold">30 Days Return Policy</h4>
                <p className="text-sm text-gray-700">Return within 2-3 working days</p>
              </div>
            </div>
          </div>

          {/* Keep in Touch Section */}
          <div>
            <h3 className="text-lg font-bold uppercase">Keep in Touch</h3>
            <div className="flex space-x-4 mt-4">
              <a href={facebookLink} target="_blank" rel="noopener noreferrer">
                <FacebookIcon className="text-xl hover:scale-110 transition" />
              </a>
              <a href={twitterLink} target="_blank" rel="noopener noreferrer">
                <TwitterIcon className="text-xl hover:scale-110 transition" />
              </a>
              <a href={youtubeLink} target="_blank" rel="noopener noreferrer">
                <YoutubeIcon className="text-xl hover:scale-110 transition" />
              </a>
              <a href={instagramLink} target="_blank" rel="noopener noreferrer">
                <InstagramIcon className="text-xl hover:scale-110 transition" />
              </a>
            </div>
          </div>
        </div>

        {/* Subscription Section */}
        <div>
          <h3 className="text-lg font-bold uppercase">Join Us</h3>
          <p className="text-sm text-gray-700 mt-2">Subscribe to our newsletter</p>
          <input
            type="email"
            className="mt-3 w-full p-2 border border-dark bg-orange placeholder-dark outline-none rounded-md"
            placeholder="Email Address"
          />
          <button className="mt-3 w-full p-2 bg-dark text-white uppercase rounded-md hover:opacity-90 transition">
            Subscribe
          </button>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="border-t border-dark mt-8 py-4">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>
            In case of any concern, 
            <Link to="/contact" className="font-bold text-dark ml-1">
              Contact Us
            </Link>
          </p>
          <p>&copy; 2024 All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
