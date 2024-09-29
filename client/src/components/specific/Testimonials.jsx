import { motion } from "framer-motion";

import { Fragment } from "react";

const testimonials =
  [
    {
      text: "Absolutely stunning necklace! The craftsmanship is exquisite, and it arrived in perfect condition. Highly recommend this site for anyone looking for quality jewelry.",
      name: "Aarti Sharma",
      username: "aartisharma"
    },
    {
      text: "I was impressed with the fast shipping and the elegant packaging. The ring I purchased is even more beautiful in person. Will definitely be shopping here again!",
      name: "Rajesh Kumar",
      username: "rajeshkumar"
    },
    {
      text: "The earrings I ordered exceeded my expectations. They are delicate yet durable. Great customer service as well – they answered all my queries promptly.",
      name: "Priya Patel",
      username: "priyapatel"
    },
    {
      text: "I love the bracelet I bought from this site. It fits perfectly and has a unique design that I've not seen elsewhere. Worth every penny!",
      name: "Vikram Singh",
      username: "vikram_singh"
    },
    {
      text: "The custom jewelry service was fantastic. They helped me design a personalized pendant, and it turned out exactly as I envisioned. Thank you for the amazing service!",
      name: "Anita Desai",
      username: "anitadesai"
    },
    {
      text: "I had an issue with my order, but the customer support team was very helpful and resolved it quickly. The quality of the jewelry is top-notch, and I am very satisfied.",
      name: "Suresh Reddy",
      username: "suresh_reddy"
    },
    {
      text: "Beautiful collection and excellent quality. The website is easy to navigate, and the checkout process was smooth. I will be coming back for more.",
      name: "Meera Iyer",
      username: "meera_iyer"
    },
    {
      text: "The gold bracelet I purchased is simply elegant. The delivery was prompt, and the item was exactly as described on the site.",
      name: "Arjun Rao",
      username: "arjunrao"
    },
    {
      text: "Great value for money. The diamond pendant is gorgeous and has a brilliant sparkle. I’m very happy with my purchase.",
      name: "Sneha Kapoor",
      username: "sneha_kapoor"
    },
    {
      text: "Excellent customer service and the jewelry pieces are of high quality. I bought a pair of earrings, and they are beautiful and comfortable to wear.",
      name: "Ravi Gupta",
      username: "ravi_gupta"
    },
    {
      text: "The customization option allowed me to design a unique ring for my wife. It turned out perfect. She loves it!",
      name: "Nisha Verma",
      username: "nisha_verma"
    },
    {
      text: "Very satisfied with the necklace. It arrived well-packaged and the quality is exceptional. Will definitely recommend to friends.",
      name: "Amit Shah",
      username: "amit_shah"
    },
    {
      text: "I was looking for a traditional piece and found it here. The workmanship is impeccable and the delivery was on time.",
      name: "Deepika Agarwal",
      username: "deepika_agarwal"
    },
    {
      text: "The online experience was seamless and the bracelet I ordered is stunning. The fit is perfect and the quality is great.",
      name: "Vikas Mehta",
      username: "vikas_mehta"
    },
    {
      text: "Fantastic range of products. I purchased a pair of sapphire earrings, and they exceeded my expectations. Great purchase!",
      name: "Rita Singh",
      username: "rita_singh"
    },
    {
      text: "The jewelry is beautiful and the customer service was excellent. They handled my inquiries with professionalism and care.",
      name: "Gaurav Patel",
      username: "gaurav_patel"
    },
    {
      text: "I bought a customized locket, and it was made exactly to my specifications. The quality and finish are top-notch.",
      name: "Pooja Joshi",
      username: "pooja_joshi"
    },
    {
      text: "Very pleased with the ring I received. It’s elegant and the stone is set perfectly. Will definitely buy again.",
      name: "Arun Bhat",
      username: "arun_bhat"
    },
    {
      text: "I ordered a set of bangles for my sister's wedding, and they were absolutely beautiful. The craftsmanship is outstanding.",
      name: "Sonia Menon",
      username: "sonia_menon"
    },
    {
      text: "The delivery was faster than expected and the jewelry was just as described. I’m impressed with the quality.",
      name: "Naveen Kumar",
      username: "naveen_kumar"
    },
    {
      text: "The ring I bought as a gift was loved by the recipient. It’s elegant, well-crafted, and exactly what I was looking for.",
      name: "Shalini Rao",
      username: "shalini_rao"
    },
    {
      text: "Great selection of jewelry. The necklace I bought is stunning and has quickly become one of my favorites.",
      name: "Akhil Nair",
      username: "akhil_nair"
    }
  ]
  ;



const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const TestimonialsColumn = ({ className, testimonials, duration }) => (
  <div className={className}>
    <motion.div
      animate={{
        translateY: "-50%",
      }}
      transition={{
        duration: duration || 10,
        repeat: Infinity,
        ease: "linear",
        repeatType: "loop",
      }}
      className="flex flex-col gap-6 pb-6"
    >
      {[...new Array(2)].fill(0).map((_, index) => (
        <Fragment key={index}>
          {testimonials.map(({ text, name, username }) => (
            <div key={username} className="card">
              <div>{text}</div>
              <div className="mt-5 flex items-center gap-2">

                <div className="flex flex-col">
                  <div className="font-medium leading-5 tracking-tight">
                    {name}
                  </div>
                  <div className="leading-5 tracking-tight">{username}</div>
                </div>
              </div>
            </div>
          ))}
        </Fragment>
      ))}
    </motion.div>
  </div>
);

export const Testimonials = () => {
  return (
    <section className=" py-20 font-BeViet bg-orange">
      <div className="">
        <div className="section-header">
          <div className="flex justify-center">
            <div className="tag">What our users say</div>
          </div>
          <h2 className="section-title mt-5 font-Corm">Testimonials</h2>
          <p className="flex justify-center">
            <span className="section-description mt-5">
              From exquisite designs to exceptional craftsmanship, our jewelry has become a cherished choice for customers around the globe
            </span>
          </p>
        </div>
        <div className="mt-10 flex max-h-[790px] justify-center gap-6 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]">
          <TestimonialsColumn testimonials={firstColumn} duration={11} />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:block"
            duration={17}
          />
          <TestimonialsColumn
            duration={13}
            testimonials={thirdColumn}
            className="hidden lg:block"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials
