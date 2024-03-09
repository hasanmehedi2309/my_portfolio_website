import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import recommenderImg from "@/public/recommender.png";
import lstmImg from "@/public/lstm.png";
import mostsoldreasonImg from "@/public/most_sold_reason.png";
import shopifyautomationImg from "@/public/shopifyautomation.jpeg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated from Rajshasi University of Engineering & Technology",
    location: "Rajshahi, Bangladesh",
    description:
      "I graduated after 4 years of studying. I did freelancing while studying.",
    icon: React.createElement(LuGraduationCap),
    date: "2024",
  },
  {
    title: "Web Scraing & Automation Engineer",
    location: "Remote",
    description:
      "I worked as a freelancer for 3 years as web scraper and automation engineer.",
    icon: React.createElement(CgWorkAlt),
    date: "2020 - 2023",
  },
  
] as const;

export const projectsData = [
  {
    title: "Recommender System",
    description:
      "Colaborative filtering based system where the filtering is done by only considering people having more than 50 reviews.",
    tags: ["Scikit-Learn", "Pandas", "Numpy", "Flask", "HTML", "CSS"],
    imageUrl: recommenderImg,
    githubLink: "https://github.com/hasanmehedi2309/book_recommendation_system",
  },
  {
    title: "Next Word Generator",
    description:
      "The LSTM-based Next Word Generator project employs advanced neural networks to predict subsequent words in text sequences, enhancing language modeling and facilitating more accurate text generation.",
    tags: ["Tensorflow", "Keras", "Numpy"],
    imageUrl: lstmImg,
    githubLink: "https://github.com/hasanmehedi2309/next_word_predictor",
  },
  {
    title: "Sales Data Analysis",
    description:
      "The sales data analysis project provided valuable insights into sales trends and patterns, aiding strategic decision-making processes.",
    tags: ["Pandas", "Matplotlib"],
    imageUrl: mostsoldreasonImg,
    githubLink: "https://github.com/hasanmehedi2309/sales_data_analysis",
  },
  {
    title: "Shopify & Telegram Automation",
    description:
      "The project utilizies scripts to collect new/cancelled orders 24/7 and deliver details to a designated Telegram group.",
    tags: ["Requests", "Api","Pandas","Json"],
    imageUrl: shopifyautomationImg,
    githubLink: "https://github.com/hasanmehedi2309/RedStore",
  },
] as const;

export const skillsData = [
  "Pandas",
  "Numpy",
  "Matplotlib",
  "Sklearn",
  "Tensorflow",
  "MATLAB",
  "Git",
  "Requests",
  "Selenium",
  "BeautifulSoup",
  "Python",
  "Transformers",
  "Flask",
  "HTML",
  "CSS",
] as const;
