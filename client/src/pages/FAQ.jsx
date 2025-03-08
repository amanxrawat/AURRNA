import React from 'react'
import Layout from '../components/layout/Layout'
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import clsx from "clsx";


import { FaPlus as PlusIcon } from 'react-icons/fa6';
import { FaMinus as MinusIcon} from 'react-icons/fa6';

const items = [
  {
    question: "What materials do you use in your jewelry?",
    answer:
      "We use high-quality materials, including gold, silver, platinum, diamonds, and ethically sourced gemstones. Each product page provides specific details.",
  },
  {
    question: "Are your diamonds and gemstones certified?",
    answer:
      "Yes! All our diamonds and gemstones come with certification from reputable agencies such as GIA, IGI, or SGL.",
  },
  {
    question: "How do I find my ring size?",
    answer:
      "You can use our ring size guide available on our website, or visit a local jeweler for an accurate measurement.",
  },
  {
    question: "Can I customize my jewelry?",
    answer:
      "Absolutely! We offer custom jewelry services, including engraving, resizing, and unique designs. Contact us for more details.",
  },
  {
    question: "How long will it take to receive my order?",
    answer:
      "Processing times vary by product: ready-made jewelry ships within 2-5 business days, while custom orders take 2-4 weeks.",
  },
  {
    question: "Do you offer international shipping?",
    answer:
      "Yes, we ship worldwide! International shipping rates and delivery times vary based on location.",
  },
  {
    question: "What is your return policy?",
    answer:
      "We offer a 30-day return policy for unworn, non-customized jewelry. Returns for customized pieces are handled on a case-by-case basis.",
  },
  {
    question: "How do I take care of my jewelry?",
    answer:
      "To keep your jewelry looking new, avoid water, perfume, and chemicals. Store in a jewelry box and clean with a soft cloth.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept credit/debit cards, PayPal, UPI, Net Banking, and EMI options for selected orders.",
  },
  {
    question: "Do you offer financing options?",
    answer:
      "Yes! We offer buy now, pay later (BNPL) options and EMI plans. Check our payments page for more details.",
  },
];


const AccordionItems = ({
  question,
  answer,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-white/30 py-7">
      <div className="flex items-center" onClick={() => setIsOpen(!isOpen)}>
        <span className="flex-1 text-lg font-bold">{question}</span>
        {isOpen ? <MinusIcon /> : <PlusIcon />}
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={clsx("mt-4", {
              hidden: !isOpen,
              "": isOpen === true,
            })}
            initial={{
              opacity: 0,
              height: 0,
              marginTop: 0,
            }}
            animate={{ opacity: 1, marginTop: "16px", height: "auto" }}
            exit={{ opacity: 0, marginTop: 0, height: 0 }}
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const FAQ = () => {
  return (
    <section className="bg-gradient-to-b from-[#5D2CA8] to-black pt-[72px] text-white sm:py-24">
      <div className="container">
        <h2 className="text-center text-5xl font-bold tracking-tighter max-w-[800px] mx-auto sm:text-6xl">Frequently Asked Questions</h2>
        <div className="mx-auto mt-12 max-w-[648px]">
          {items.map(({ question, answer }) => (
            <AccordionItems
              question={question}
              answer={answer}
              key={question}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Layout()(FAQ)