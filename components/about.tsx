"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I graduated with a degree in{" "}
        <span className="font-medium">Electrical and Electronic Engineering</span>, I decided to pursue my
        passion for programming during covid. Several courses in my undergraduate life and my thesis helped me learn{" "}
        <span className="font-medium">Automation and Machine Learning</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          Sklearn, Tensorflow, Selenium, and MATLAB
        </span>
        . I am also learning with Transformers and Pytorch. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a Data
        Scientist.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and playing with my dog. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">history and psychology</span>. I'm also
        learning how to sing though i am bad at it.
      </p>
    </motion.section>
  );
}
