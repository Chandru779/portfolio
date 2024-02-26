import React from "react";
import { motion } from "framer-motion";
import { skillsData } from "@/configs";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light 
        px-4 py-1 text-sm shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y }}
      viewport={{ once: true }}
      transition={{ duration: 1.5 }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <div>
      <h2 className="font-bold text-4xl lg:text-7xl mb-12 w-full text-center">
        Skills
      </h2>
      <div className="hidden lg:flex w-full h-[50vh] lg:h-screen relative items-center justify-center rounded-full bg-circularLightMobile lg:bg-circularLight dark:bg-circularDark">
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-6 shadow-dark
                    dark:text-dark dark:bg-light"
          whileHover={{ scale: 1.05 }}
        >
          web
        </motion.div>

        <Skill name="HTML" x="14vw" y="-20vw" />
        <Skill name="CSS" x="-28vw" y="-20vw" />
        <Skill name="Tailwind CSS" x="-8vw" y="-18vw" />
        <Skill name="Bootstrap" x="-18vw" y="-10vw" />
        <Skill name="ReactBootstrap" x="-18vw" y="-10vw" />
        <Skill name="Javascript" x="-24vw" y="12vw" />
        <Skill name="Typescript" x="-14vw" y="8vw" />
        <Skill name="React JS" x="14vw" y="12vw" />
        <Skill name="Next JS" x="28vw" y="8vw" />
        <Skill name="Vue JS" x="1vw" y="7vw" />
        <Skill name="Nuxt JS" x="-1vw" y="-8vw" />
        <Skill name="Vuetify" x="-34vw" y="-8vw" />
        <Skill name="Leaflet" x="22vw" y="-14vw" />
        <Skill name="Maptiler" x="14vw" y="-8vw" />
        <Skill name="Git and Github" x="14vw" y="-8vw" />
        <Skill name="Framer Motion" x="22vw" y="-1vw" />
        <Skill name="Redux" x="38vw" y="4vw" />
        <Skill name="Pinia " x="-26vw" y="-1vw" />
        <Skill name="Zustand " x="-38vw" y="4vw" />
      </div>

      <div className="lg:hidden flex flex-wrap gap-3">
        {skillsData.map((card, index) => (
          <p
            className={`mb-4 px-6 py-4 font-medium rounded-xl border-2 border-slate-400/50 bg-neutral-100 dark:bg-neutral-900`}
            key={index}
          >
            {card}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Skills;
