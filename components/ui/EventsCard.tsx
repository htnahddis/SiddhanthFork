"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./3d-card";
import CodeLikeHer from "../../public/Code-like-her.png";
import Flutterverse from "../../public/flutterverse.png";
import DataEngineering from "../../public/Data-engineering.png";
import DataAnalysis from "../../public/da.png";
import MLbootcamp from "../../public/ml-bootcamp.png";
import Link from "next/link";


const cardData = [
  {
    title: "Code Like Her",
    description: "DJS-Compute Presents CodeLikeHer Programming Challenge!✨🎉 Hey there, tech-savvy ladies! 👩‍💻 Get ready to showcase your coding prowess and celebrate women's empowerment with us at this Women's Day Challenge!🔥",
    imageSrc: CodeLikeHer,
  },
  {
    title: "Data Engineering Seminar",
    description: "DJS-Compute has organized a seminar on Data Engineering led by Mr. Aakash Shah, a DJSCE alumni and Assistant VP at J.P.Morgan Chase and Co.",
    imageSrc: DataEngineering,
  },
  {
    title: "Flutterverse",
    description: "DJS Compute presents Flutterverse 2.0: Inception to Implementation. Embark on a comprehensive journey through Flutter, from its inception to full-scale implementation. Join us for two days of immersive learning, where we'll cover everything from the basics to advanced techniques.",
    imageSrc: Flutterverse,
  },
  {
    title: "Data Analysis Seminar",
    description: "What's on the Agenda: Exploring how real-world companies harness the power of data, diving into the fascinating realms of data science, analytics, and machine learning, uncovering the challenges businesses face in these domains, mapping your path to an exciting career in this ever-evolving field.",
    imageSrc: DataAnalysis,
  },
  {
    title: "ML Bootcamp",
    description: "Unlock the power of data with our Machine Learning Bootcamp! Our roadmap, crafted by DJS-Compute and DJS-S4DS, is your guide to mastering ML from start to finish.",
    imageSrc: CodeLikeHer,
  },
  {
    title: "Git Ready",
    description: "Organized by DJS Compute and DJS S4DS, this event provided a comprehensive introduction to Git and GitHub, covering essential version control practices. Participants gained insights into using these tools effectively and explored strategies for leveraging version control in hackathons.",
    imageSrc: Flutterverse
  },
];

const Card = ({ title, description, imageSrc, link }: any) => (
  <CardContainer className="inter-var flex justify-center">
    <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-[20rem] md:w-[40rem] h-full rounded-xl p-6 border">
      <CardItem
        translateZ="50"
        className="text-2xl font-bold text-neutral-600 dark:text-purple"
      >
        {title}
      </CardItem>
      <CardItem
        as="p"
        translateZ="60"
        className="text-neutral-500 text-md w-full mt-2 dark:text-white h-20"
      >
        {description}
      </CardItem>
      <CardItem translateZ="100" className="w-full mt-4">
        <Image
          src={imageSrc}
          height={600}
          width={800}
          className="h-full w-full object-cover rounded-xl group-hover/card:shadow-xl"
          alt="thumbnail"
        />
      </CardItem>
    </CardBody>
  </CardContainer>
);

export function ThreeDCardDemo() {
  return (
    <>
      <h1 className="heading pt-20">
  Curating Excellence:{" "}
  <span className="text-purple">Our Clubs Premier Events</span>
</h1>

      <div className="flex flex-wrap justify-center gap-x-6 gap-y-6">
        {cardData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            imageSrc={card.imageSrc}
          />
        ))}
      </div>
    </>
  );
}
