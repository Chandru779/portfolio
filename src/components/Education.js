import React, { useRef } from "react";
import { useScroll, motion } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);

  return (
    <li className="my-6 first:mt-0 last:mb-0 w-full lg:w-[60%] mx-auto flex flex-col items-center justify-between">
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
        className="flex flex-col gap-2"

      >
        <h3 className="capitalize font-bold text-lg lg:text-2xl">{type} &nbsp;</h3>
        <span className="capitalize font-medium text-dark/75 dark:text-white/90">
          {time} | {place}
        </span>
        <p className="font-medium w-full text-sm lg:text-md">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="">
      <h2 className="font-bold text-4xl lg:text-7xl mb-12 w-full text-center">Education</h2>

      <div ref={ref} className="lg:w-[75%] w-full mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute lg:left-9 top-0 w-[4px] h-full bg-dark dark:bg-light origin-top"
        />
        <ul className="w-full flex flex-col items-start justify-between  ml-[20px] lg:ml-0px">
          <Details
            type="Computer Science Engineering ( B.E )"
            time="2018-2022"
            place="RajaRajeswari College of Engineering ( VTU )"
            info="Completed a comprehensive curriculum conferred by Visvesvaraya Technological University.
            Developing a strong foundation in CS principles , Algorithms, Computer Systems Engineering and software engineering methodologies.
              "
          />
          <Details
            type="Pre University ( P.C.M.B )"
            time="2016-2018 "
            place="Sri Vidyanikethan PU College"
            info="Completed Pre-University studies with 82% , demonstrating a solid academic background in core science and mathematics disciplines. "
          />
          <Details
            type="High School Education"
            time="Primary-SSLC (2016)"
            place="National Green Valley Rural HighSchool"
            info="Demonstrated unwavering dedication through out my school life, attaining an impressive 92% in the  SSLC state board examinations."
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
