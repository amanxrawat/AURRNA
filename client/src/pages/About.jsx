import React from "react";
import Layout from "../components/layout/Layout";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

const StyledText = ({ text, className = "" }) => (
  <span className={className}>
    <span className="bg-black p-1 rounded-md mx-1 ">
      <motion.span
        animate={{
          backgroundPositionX: "100%",
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDf,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDf)] bg-clip-text font-medium text-transparent [background-size:200%]"
      >
        {text}
      </motion.span>
    </span>
  </span>
);

const About = () => {
  return (
    <div className=" pt-4 pb-8 px-10 bg-[url('./../../public/Images/layered-waves-haikei(1).svg')] bg-cover bg-no-repeat">
      <h2 className="section-heading text-white">About Us</h2>
      <div className="flex gap-2 flex-row">
        <div className="max-w-2xl">
          <p>
            Welcome to
            <StyledText text={"AURRNA"} />
            <br />
            Where elegance meets artistry in every piece.
          </p>
          <p className="py-2">
            At AURRNA, we believe that jewelry is not just an accessory — it’s
            an
            <br />
            <StyledText
              text={
                "expression of individuality, a reflection of style, and a timeless keepsake"
              }
              className={" mt-4"}
            />
            <br />. Founded by [Your Name], our brand is rooted in a passion for
            craftsmanship, design, and the beauty of natural materials. Every
            piece we create is thoughtfully designed and meticulously crafted to
            tell a unique story — your story. Our Story
          </p>
        </div>
        <div>
          <img
            className="w-80"
            src="https://images.pexels.com/photos/1927266/pexels-photo-1927266.jpeg?auto=compress&cs=tinysrgb&w=600"
          />
        </div>
      </div>
    </div>
  );
};

export default Layout()(About);
