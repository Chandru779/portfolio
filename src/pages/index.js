import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import AnimatedText from "@/components/AnimatedText";
import { LinkArrow } from "@/components/Icons";
import profilePic from "../../public/images/profile/developer-pic-1.png";
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";
import TransitionEffect from "@/components/TransitionEffect";
import { MdMailOutline  } from "react-icons/md";


export default function Home() {
  return (
    <>
      <Head>
        <title>Chandru | Portfolio</title>
        <meta name="Chandru_portfolio" content="Chandru Angadi Portfolio." />
      </Head>

      <TransitionEffect />
      <main className="w-ful flex items-center text-dark dark:text-light">
        <Layout className="flex flex-col lg:flex-row">
          <div className="w-full md:w-1/2 self-center">
            <Image src={profilePic} alt="codeBucks" className="w-full h-auto" />
          </div>

          <div className="w-full lg:w-1/2 flex flex-col items-center self-center lg:mr-16">
            <AnimatedText
              text="Visionary Coder turns imagination into reality with code."
              className="text-xl md:text-4xl lg:!text-5xl xl:!text-6xl lg:!text-left"
            />
            <p className="my-4 text-base font-medium word-wrap">
              Passionate frontend developer with expertise in the latest
              JavaScript frameworks — React, Next.js, and Vue and more. I bring
              innovative solutions to life through clean and efficient code.
              Explore my portfolio to witness the seamless blend of technology
              and creativity in my latest projects.
            </p>
            <div className="w-full flex items-center justify-start">
              <Link
                href="Resume.pdf"
                target="_blank"
                className="flex items-center bg-dark text-light p-2 px-6 
                rounded-lg text-lg font-semibold border-solid border-transparent hover:bg-light hover:text-dark hover:border-dark border-2 dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light
                hover:dark:border-light
                "
              >
                Resume <LinkArrow className={"w-6 ml-1"} />
              </Link>
              <Link
                href="mailto:chanduangadi779@gmail.com"
                className="flex items-center ml-8 font-semibold text-lg capitalize bg-light  border-dark border-2 rounded-lg p-2 px-6  text-dark dark:text-light hover:scale-95 transition-all "
              >
                Contact <MdMailOutline  className={"w-6 h-6 ml-2"}/>
              </Link>
            </div>
          </div>
        </Layout>

        <div className="hidden absolute right-6 bottom-8 lg:inline-block w-24">
          <Image
            src={lightBulb}
            alt="chandru_light_knowledge"
            className="w-full h-auto"
          />
        </div>
      </main>
    </>
  );
}
