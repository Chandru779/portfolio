import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import TransitionEffect from "@/components/TransitionEffect";

const articles = () => {
  return (
    <>
      <Head>
        <title>Chandru | Articles</title>
        <meta name="description" content="List of projects by Chandru Angadi" />
      </Head>

      <TransitionEffect/>
      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText
            text="Words are Powerful then Weapons !"
            className="mb-16"
          />
          </Layout>
    </main>

    </> 
  )
}

export default articles