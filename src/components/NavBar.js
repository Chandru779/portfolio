import React, { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { FaRegFilePdf } from "react-icons/fa";
import {
  DribbbleIcon,
  GithubIcon,
  LinkedInIcon,
  MoonIcon,
  PinterestIcon,
  SunIcon,
  TwitterIcon,
  IconHamburgerMenu,
} from "./Icons";

import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import useThemeSwitcher from "./Hooks/useThemeSwitcher";

const CustomLink = ({ href, title, setShowModel, className = "" }) => {
  const router = useRouter();

  return (
    <Link
      href={href}
      className={`${className} relative group`}
      onClick={() => setShowModel(false)}
    >
      {title}
      <span
        className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 dark:bg-light
        group-hover:w-full transition-[width] ease duration-300 ${
          router.asPath == href ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const NavBar = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [showModel, setShowModel] = useState(false);

  return (
    <>
      <header
        className="w-full px-10 lg:px-32 py-6 font-medium flex items-center justify-between
        dark:text-light"
      >
        <div className="flex items-center">
          <nav className="hidden lg:block">
            <CustomLink
              setShowModel={setShowModel}
              href="/"
              title="Home"
              className="mr-4"
            />
            <CustomLink
              setShowModel={setShowModel}
              href="/about"
              title="About"
              className="mx-4"
            />
            <CustomLink
              setShowModel={setShowModel}
              href="/projects"
              title="Projects"
              className="mx-4"
            />
            {/* <CustomLink href="/articles" title="Articles" className="ml-4" /> */}
          </nav>

          <Link
            href="/public/Resume.pdf"
            target="_blank"
            className="text-sm md:ml-6 px-2 py-1 font-semibold rounded-lg flex items-center bg-gradient-to-br from-dark to-light"
          >
            Resume <FaRegFilePdf className="ml-2" />
          </Link>
        </div>
        <Logo />
        <nav className="hidden lg:flex items-center justify-center flex-wrap">
          <motion.a
            href="https://github.com/Chandru779?tab=repositories"
            target={"_blank"}
            whileTap={{ scale: 0.7 }}
            whileHover={{ y: -2 }}
            className="w-6 mr-2"
          >
            <GithubIcon />
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/chandrashekar-angadi-218928195?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target={"_blank"}
            whileTap={{ scale: 0.7 }}
            whileHover={{ y: -2 }}
            className="w-6 mx-2"
          >
            <LinkedInIcon />
          </motion.a>

          <motion.a
            href="https://twitter.com/chandru_s_a"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.7 }}
            className="w-6 mx-2"
          >
            <TwitterIcon />
          </motion.a>

          <button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className={`ml-3 flex items-center justify-center rounded-full p-1 ${
              mode == "light" ? "bg-dark text-light" : "bg-light text-dark"
            }`}
          >
            {mode === "dark" ? (
              <SunIcon className={"fill-dark"} />
            ) : (
              <MoonIcon className={"fill-dark"} />
            )}
          </button>
        </nav>

        <div
          className="block lg:hidden"
          onClick={() => setShowModel(!showModel)}
        >
          <GiHamburgerMenu />
        </div>
      </header>

      {showModel && (
        <div className="fixed w-full z-10 h-full bg-primary p-10 transition-all ease-in">
          <GrClose
            className="float-right -mt-2"
            onClick={() => setShowModel(!showModel)}
          />

          <nav className="flex flex-col h-full justify-center gap-10">
            <div className="flex flex-col sm:w-1/4 mx-auto">
              <CustomLink
                setShowModel={setShowModel}
                href="/"
                title="Home"
                className="text-center my-3 text-2xl"
              />
              <CustomLink
                setShowModel={setShowModel}
                href="/about"
                title="About"
                className="text-center my-3 text-2xl"
              />
              <CustomLink
                setShowModel={setShowModel}
                href="/projects"
                title="Projects"
                className="text-center my-3 text-2xl"
              />
              {/* <CustomLink
                setShowModel={setShowModel}
                href="/articles"
                title="Articles"
                className="text-center"
              /> */}
            </div>

            <nav className="flex items-center justify-center gap-4">
              <motion.a
                href="https://github.com/Chandru779?tab=repositories"
                target={"_blank"}
                whileTap={{ scale: 0.7 }}
                whileHover={{ y: -2 }}
                className="w-9 mr-2"
              >
                <GithubIcon />
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/chandrashekar-angadi-218928195?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target={"_blank"}
                whileTap={{ scale: 0.7 }}
                whileHover={{ y: -2 }}
                className="w-9 mx-2"
              >
                <LinkedInIcon />
              </motion.a>

              <motion.a
                href="/"
                target={"_blank"}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.7 }}
                className="w-9 mx-2"
              >
                <TwitterIcon />
              </motion.a>

              <button
                onClick={() => {
                  setMode(mode === "light" ? "dark" : "light"),
                    setShowModel(!showModel);
                }}
                className={`ml-3 flex items-center justify-center rounded-full p-1 ${
                  mode == "light" ? "bg-dark text-light" : "bg-light text-dark"
                }`}
              >
                {mode === "dark" ? (
                  <SunIcon className={"fill-dark"} />
                ) : (
                  <MoonIcon className={"fill-dark"} />
                )}
              </button>
            </nav>
          </nav>
        </div>
      )}
    </>
  );
};

export default NavBar;
