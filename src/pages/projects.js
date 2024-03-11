import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Project1 from "../../public/images/projects/crypto-screener-cover-image.jpg";
import masthhmovies from "../../public/images/projects/masthmovie.png";
import portfolio from "../../public/images/projects/portfolio.png";
import TransitionEffect from "@/components/TransitionEffect";

// const FeaturedProject = ({ type, title, summary, img, link, github }) => {
//   return (
//     <article
//       className="w-full flex items-center justify-between rounded-3xl border border-solid border-dark
//      bg-light  shadow-2xl p-2 lg:p-6 dark:bg-dark dark:border-light"
//     >
//       <Link
//         href={link}
//         target="_blank"
//         className="hidden lg:block lg:w-1/2 cursor-pointer overflow-hidden rounded-lg"
//       >
//         <Image src={img} alt={title} className="w-full h-auto" />
//       </Link>

//       <div className="w-full lg:w-1/2 flex flex-col items-start justify-between  lg:pl-6">
//         <span className="text-primary font-medium text-md lg:text-xl">{type}</span>
//         <Link
//           href={link}
//           target="_blank"
//           className="hover:underline underline-offset-2"
//         >
//           <h2 className="my-2 w-full text-left text-2xl lg:text-4xl font-bold dark:text-light">
//             {title}
//           </h2>
//         </Link>
//         <p className="my-2 text-sm lg:text-md font-medium text-dark dark:text-light">{summary}</p>
//         <div className="mt-2 flex items-center">
//           <Link href={github} target="_blank" className="w-6 lg:w-10 dark:text-light">
//             <GithubIcon />
//           </Link>
//           <Link
//             href={link}
//             target="_blank"
//             className="ml-4 rounded-lg bg-dark text-light lg:p-2 px-6 text-lg font-semibold"
//           >
//             Visit Project
//           </Link>
//         </div>
//       </div>
//     </article>
//   );
// };

const Project = ({ type, title, summary, img, link, github }) => {
  return (
    <article
      className="w-full flex flex-col items-center rounded-2xl border
       border-dark bg-light dark:bg-dark/30 dark:border-light/30 overflow-hidden"
    >
      <Image
        src={img}
        alt={title}
        className="w-full h-auto bg-cover border border-b-gray-400/30 "
      />

      <div className="w-full flex flex-col items-start justify-between px-4 py-2 gap-1">
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="w-full text-left text-2xl lg:text-3xl font-bold dark:text-light">
            {title}
          </h2>
        </Link>
        <span className="text-primary font-normal text-md lg:text-lg">
          {type}
        </span>
        <p className="font-medium text-md text-dark dark:text-light">{summary}</p>
        <div className="w-full flex items-center gap-6 mt-2">
          <Link href={github} target="_blank" className="w-8 dark:text-light">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 border border-primary px-3 rounded-full text-md font-semibold dark:text-light"
          >
            Visit
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Chandru | Projects</title>
        <meta name="description" content="List of projects by Chandru Angadi" />
      </Head>

      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="">
          <AnimatedText
            text="Every project has a story,I write it in code."
            className="mb-16"
          />

          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10">
            <Project
              title="Portfolio"
              img={portfolio}
              summary="Explore my innovative portfolio, where Next.js powers lightning-fast performance, Tailwind CSS ensures sleek and responsive design, and Framer Motion adds captivating animations that bring every project to life. 
              The project showcases adept usage of image and font optimization, resulting in a super cool and highly responsive experience."
              link="https://moengage-app.vercel.app/"
              type="Development Portfolio"
              github="https://github.com/Chandru779/Portfolio"
            />

            <Project
              title="MovieMentum"
              img={masthhmovies}
              summary="Delve into my captivating movies app with optimized search experience,seamless navigation and dynamic content display. Highlighted this project in list for its excellence—I employed React js with meticulous documentation ensuring top-notch performance ,
              I showcase the art of modern web development, "
              link="https://moviementum.vercel.app/"
              type="Featuring latest movies"
              github="https://github.com/Chandru779/moviementum"
            />

            <Project
              title="MapTag"
              img={Project1}
              summary="MapTag is a map app where users mark spots they like. The more tags in an area, the hotter it looks on the map,This helps people find busy places easily businesses can use this to boost their visibility.
The app keeps user info safe and improves based on feedback  "
              link="/"
              type="Featured Project"
              github="/"
            />

            
          </div>
          <div className="mt-28"></div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
