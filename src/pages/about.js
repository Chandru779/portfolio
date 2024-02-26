import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { useMotionValue, useSpring, useInView } from "framer-motion";
import profileImage from "../../public/images/profile/developer-pic-2.jpg";
import heroImage from "../../public/images/profile/hero.gif";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import TransitionEffect from "@/components/TransitionEffect";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, []);

  return <span ref={ref}>{value}</span>;
};

const about = () => {
  return (
    <>
      <Head>
        <title>Chandru | About</title>
        <meta name="description" content="Details about Chandru Angadi" />
      </Head>

      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="flex flex-col lg:gap-24 gap-12">
          <AnimatedText text="Passion Ignites Purpose" />
          <div className="w-full lg:flex gap-16">
            <div className="flex flex-col items-start justify-start w-full lg:w-[30%]">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                Biography
              </h2>
              <p className="font-medium">
                "Hello, I'm Chandru, a seasoned web developer with a two-year
                track record of crafting beautiful, functional, and user-centric
                digital experiences. My passion lies in seamlessly merging
                design and code to bring ideas to life.
              </p>
              <p className="font-medium my-4">
                Always on the lookout for new and innovative ways to elevate
                products, I thrive in creating engaging and dynamic web
                solutions. Beyond frontend, I'm adept at making valuable
                contributions to backend development, ensuring a holistic
                approach to building robust and intuitive applications. let's
                collaborate to turn your ideas into exceptional digital
                realities.
              </p>
              <p className="font-medium">
                Whether I'm working on a website, mobile app, or other digital
                product, I bring my commitment and potential to excellence to
                every project I work on.
              </p>
            </div>

            <div className="hidden relative w-[60%] flex-grow-1 h-auto bg-light lg:flex ">
              <Image
                fill
                src="/images/profile/about.jpg"
                className="rounded-lg object-cover"
              />
            </div>

            {/* <div className="col-span-2 flex flex-col items-end justify-between">
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumbers value="50+" />
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75">
                  satisfied clients
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumbers value="40+" />
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75">
                  projects completed
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumbers value="5+" />
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75">
                  year of experience{" "}
                </h2>
              </div>
            </div> */}
          </div>
          <Skills />
          <Experience />
          <Education />
          <div className="mt-32"></div>
        </Layout>
          {/* <div className="fixed h-[400px] w-screen left-0 bottom-0 pb-24 bg-gradient-to-t from-dark/70"></div> */}
      </main>
    </>
  );
};

export default about;
