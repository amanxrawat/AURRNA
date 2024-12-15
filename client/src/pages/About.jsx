import React from "react";
import Layout from "../components/layout/Layout";

const About = () => {
  return (
    <div class="bg-orange">
      <div class=" pt-4 pb-8 px-10 grid grid-cols-2">
        <div class="col-span-1">
          <h2 class="section-heading text-purple">About Us</h2>
          <div class="max-w-2xl">
            <p>
              Welcome to AURRNA Where elegance meets artistry in every piece.
            </p>
            <p class="py-2 max-w-xl">
              At AURRNA, we believe that jewelry is not just an accessory — it’s
              an
              <br />
              expression of individuality, a reflection of style, and a timeless
              keepsake.
              <br /> <br />
              Founded by Mr. Prince Rana and Mr. Abhinav Sharma,
              <br />
              the brand is rooted in a passion for craftsmanship, design, and
              the beauty of natural materials. Every piece we create is
              thoughtfully designed and meticulously crafted to tell a unique
              story — your story.
            </p>
          </div>
        </div>
        <div class="col-span-1 p-5 py-10">
          <div class="flex gap-2 flex-row justify-between">
            <div class="flex flex-col gap-2 items-center px-32 justify-center">
              <img src="/Images/Logo.png" class=" w-40 h-40" />
              <p class="font-Corm text-8xl text-purple">AURRNA</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout()(About);
