import React, { useState } from "react";
import {
  FaFacebook as FacebookIcon,
  FaXTwitter as TwitterIcon,
  FaYoutube as YoutubeIcon,
  FaInstagram as InstagramIcon,
} from "react-icons/fa6";
import Layout from "../components/layout/Layout";

const facebookLink = "https://www.google.com/";
const youtubeLink = "https://www.google.com/";
const twitterLink = "https://www.google.com/";
const instagramLink = "https://www.google.com/";

const Contact = () => {
  const [result, setResult] = useState("");
  const [isVisible, setVisible] = useState(false);

  const handleChange = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setVisible(true);
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "fe07456b-108e-4b50-b071-b3c8520ff959");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Submitted 👍");
    } else {
      setResult("Failed ❌");
    }

    const timer = setTimeout(() => {
      setVisible(false);
      setResult("");
    }, 3000);

    event.target.reset();
    return () => clearTimeout(timer);
  };

  return (
    <div id="contact" className="py-8 px-4 md:px-10">
      <h1 className="section-heading text-center border-b mb-5">
        Contact Us
      </h1>

      <div className="flex flex-col md:flex-row items-center justify-center gap-10">
        {/* Left Section */}
        <div className="md:w-1/2 w-full max-w-lg text-center md:text-left">
          <p className="text-lg">We’d love to hear from you!</p>
          <p className="text-gray-600 mt-2 md:pb-16">
            Whether you have questions about our collections, need assistance
            with your order, or just want to chat about jewelry, we’re here to
            help.
          </p>

          {/* Contact Info */}
          <div className="mt-6 md:pb-16" >
            <p className="text-xl font-semibold">Customer Service</p>
            <p>Email: aurrna@gmail.com</p>
            <p>Contact: 9189373892</p>
            <p>Hours: Monday to Friday, 9 AM - 5 PM (IST)</p>
          </div>

          {/* Social Media Links */}
          <div className="mt-6">
            <p className="text-xl font-semibold">Follow Us</p>
            <p>Stay connected and inspired!</p>
            <div className="flex justify-center md:justify-start gap-4 mt-2">
              <a href={facebookLink} target="_blank" rel="noopener noreferrer">
                <FacebookIcon className="scale-125 hover:text-blue-600 transition-all" />
              </a>
              <a href={twitterLink} target="_blank" rel="noopener noreferrer">
                <TwitterIcon className="scale-125 hover:text-blue-400 transition-all" />
              </a>
              <a href={youtubeLink} target="_blank" rel="noopener noreferrer">
                <YoutubeIcon className="scale-125 hover:text-red-600 transition-all" />
              </a>
              <a href={instagramLink} target="_blank" rel="noopener noreferrer">
                <InstagramIcon className="scale-125 hover:text-pink-500 transition-all" />
              </a>
            </div>
            <p className="mt-4">Thanks for choosing AURRNA</p>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="w-full md:w-1/2 max-w-lg bg-dark text-white p-6 rounded-lg shadow-lg">
          <p className="text-xl font-semibold">Have a Question?</p>
          <p className="text-gray-300 mt-2">
            Fill out the form below, and we’ll get back to you as soon as
            possible.
          </p>

          <form onSubmit={onSubmit} className="flex flex-col gap-4 mt-4">
            <label className="text-sm">Name</label>
            <input
              type="text"
              name="name"
              className="w-full px-3 py-2 rounded-md text-gray-900 outline-none"
              onKeyDown={handleChange}
            />

            <label className="text-sm">Email</label>
            <input
              type="email"
              name="email"
              className="w-full px-3 py-2 rounded-md text-gray-900 outline-none"
              onKeyDown={handleChange}
            />

            <label className="text-sm">Feedback or Comments</label>
            <textarea
              name="message"
              rows="4"
              className="w-full px-3 py-2 rounded-md text-gray-900 outline-none resize-none"
            ></textarea>

            <div className="flex flex-col sm:flex-row justify-between items-center gap-3 mt-4">
              <button
                type="submit"
                className="w-full sm:w-40 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 rounded-md transition-all"
              >
                Submit
              </button>

              {isVisible && (
                <div
                  className={`w-full sm:w-60 text-center py-2 rounded-md ${
                    result !== "Failed ❌" ? "bg-green-600" : "bg-red-600"
                  }`}
                >
                  <p className="text-white">{result}</p>
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Layout()(Contact);
