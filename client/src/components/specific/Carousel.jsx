import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { useDispatch } from "react-redux";
import { setSearch } from "../../redux/features/search/searchSlice";

const carouselImages = [
  {
    image:
      "https://images.pexels.com/photos/28099027/pexels-photo-28099027/free-photo-of-a-woman-in-a-purple-sari-is-holding-flowers.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    text: "Bangles",
    link: "/Search",
  },
  {
    image:
      "https://images.pexels.com/photos/1721937/pexels-photo-1721937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    text: "Earring",
    link: "/Search",
  },
  {
    image:
      "https://images.pexels.com/photos/17298621/pexels-photo-17298621/free-photo-of-woman-with-heart-shaped-pendant-and-floral-shaped-ring.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    text: "Pendant",
    link: "/Search",
  },
  {
    image:
      "https://images.pexels.com/photos/792780/pexels-photo-792780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    text: "Ring",
    link: "/Search",
  },
  {
    image:
      "https://images.pexels.com/photos/5411883/pexels-photo-5411883.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    text: "Necklace",
    link: "/Search",
  },
  {
    image:
      "https://images.pexels.com/photos/17747008/pexels-photo-17747008/free-photo-of-portrait-cozy-hardeep-jpg.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    text: "Chain",
    link: "/Search",
  },
  {
    image:
      "https://images.pexels.com/photos/27308770/pexels-photo-27308770/free-photo-of-semijoias.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    text: "Bracelet",
    link: "/Search",
  },
];

const Carousel = () => {
  const dispatch = useDispatch();

  return (
    <div className="bg-orange py-8 md:py-12 ">
      <div className="">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)] ">
          <motion.div
            className="flex flex-none gap-4 pr-4"
            animate={{
              translateX: "-50%",
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            {carouselImages.map((item, index) => (
              <div className="border rounded-t-lg  h-[320px]" key={index}>
                <div className="overflow-hidden rounded-t-lg">
                  <Link
                    to={item.link}
                    onClick={() => {
                      dispatch(setSearch(item.text));
                    }}
                  >
                    <motion.img
                      whileHover={{ scale: 1.2 }}
                      src={item.image}
                      key={index}
                      className="h-72 scale-150"
                    />
                  </Link>
                </div>
                <div>
                  <h1 className="font-Corm text-center uppercase text-2xl">
                    {item.text}
                  </h1>
                </div>
              </div>
            ))}
            {carouselImages.map((item, index) => (
              <div
                className="border rounded-t-lg h-[320px]"
                key={index}
                onClick={() => {
                  dispatch(setSearch(item.text));
                }}
              >
                <div className="overflow-hidden rounded-t-lg">
                  <Link
                    to={item.link}
                    onClick={() => {
                      dispatch(setSearch(item.text));
                    }}
                  >
                    <motion.img
                      whileHover={{ scale: 1.2 }}
                      src={item.image}
                      key={index}
                      className="h-72 scale-150"
                    />
                  </Link>
                </div>
                <div>
                  <h1 className="font-Corm text-center uppercase text-2xl">
                    {item.text}
                  </h1>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
