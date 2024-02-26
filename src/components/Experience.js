import React, { useRef } from "react";
import { useScroll, motion } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-6 first:mt-0 last:mb-0 w-full lg:w-[60%] mx-auto flex flex-col items-center justify-between "
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
        className="flex flex-col gap-2"
      >
        <h3 className="capitalize font-bold text-lg lg:text-2xl">
          {position} &nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-primary capitalize"
          >
            @{company}
          </a>{" "}
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-white/90">
          {time} | {address}
        </span>
        <p className="font-medium w-full text-sm lg:text-md">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="">
      <h2 className="font-bold text-4xl lg:text-7xl mb-12 w-full text-center">
        Experience
      </h2>

      <div ref={ref} className="lg:w-[75%] w-full mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute lg:left-9 top-0 w-[4px] h-full bg-dark dark:bg-light origin-top"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-[20px] lg:ml-0px">
          <Details
            position="FrontEnd Developer"
            companyLink="https://talkinglands.com"
            company="Talking Lands"
            time="2022-Present"
            address="Jayanagar 2nd block Bengaluru,Karnataka - 560011 "
            work="At Talking Lands, I take charge of each feature, ensuring our web apps are dynamic, responsive, and high-performing.
        I've gained expertise in various frameworks and possess a deep understanding of mapping technologies.Guiding frontend teams, 
        I collaborate with colleagues to engineer exceptional products that consistently meet the highest standards of quality and performance.
        "
          />

          <Details
            position="FullStack Intern"
            companyLink="https://www.tequedlabs.com/"
            company="Tequed Labs"
            time="2022-2022"
            address="#10, 3rd A cross Anjaneya Nagar, BSK 3rd stage Bangalore"
            work="As an intern, I have honed my skills in JavaScript fundamentals and gained hands-on experience with React JS,
        Node JS ,MongoDB  through real-time projects and capable of working on FullStack ."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
