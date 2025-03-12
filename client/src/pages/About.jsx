import React from "react";
import Layout from "../components/layout/Layout";

const About = () => {
  return (
    <div className="bg-orange py-6 px-4 md:px-10">
      <h2 className="section-heading text-center border-b mb-5">About Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 items-center gap-6">
        {/* Left Section - About Text */}
        <div className="text-center md:text-left lg:col-span-3 lg:col-start-2">
          <div className="max-w-lg mx-auto md:mx-0">
            <p className="text-lg">Welcome to AURRNA, where elegance meets artistry in every piece.</p>
            <p className="py-4 text-gray-700">
              At AURRNA, we believe that jewelry is not just an accessory—it’s an expression of individuality,
              a reflection of style, and a timeless keepsake.
            </p>
            <p className="text-gray-700">
              Founded by <span className="font-semibold">Mr. Prince Rana</span> and <span className="font-semibold">Mr. Abhinav Sharma</span>,
              the brand is rooted in a passion for craftsmanship, design, and the beauty of natural materials.
            </p>
            <p className="py-4 text-gray-700">
              Every piece we create is thoughtfully designed and meticulously crafted to tell a unique story—your story.
            </p>
          </div>
        </div>

        {/* Right Section - Logo & Branding */}
        <div className="flex flex-col items-center justify-center lg:col-start-5">
          <img src="/Images/Logo.png" className="w-32 h-32 md:w-40 md:h-40" alt="AURRNA Logo" />
          <p className="font-Corm text-6xl md:text-8xl text-purple mt-4">AURRNA</p>
        </div>
      </div>
    </div>
  );
};

export default Layout()(About);
