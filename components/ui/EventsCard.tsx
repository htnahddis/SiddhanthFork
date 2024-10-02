"use client";

import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import CodeLikeHer from "../../public/Code-like-her.png";
import Flutterverse from "../../public/flutterverse.png";
import DataEngineering from "../../public/Data-engineering.png";
import DataAnalysis from "../../public/da.png";
import MLbootcamp from "../../public/ml-bootcamp.png";

const cardData = [
  {
    title: "Code Like Her",
    description:
      "Hey there, tech-savvy ladies! 👩‍💻 Get ready to showcase your coding prowess and celebrate women's empowerment with us at this Women's Day Challenge!🔥",
    bgColor: "bg-pink-700",
    imageSrc: CodeLikeHer,
  },
  {
    title: "Data Engineering Seminar",
    description:
      "A seminar on Data Engineering led by Mr. Aakash Shah, a DJSCE alumni and Assistant VP at J.P.Morgan Chase and Co.",
    bgColor: "bg-blue-700",
    imageSrc: DataEngineering,
  },
  {
    title: "Flutterverse",
    description:
      "Inception to Implementation. Embark on a comprehensive journey through Flutter, from its inception to full-scale implementation.",
    bgColor: "bg-green-700",
    imageSrc: Flutterverse,
  },
  {
    title: "Data Analysis Seminar",
    description:
      "Exploring how real-world companies harness the power of data, diving into the fascinating realms of data science, analytics, and machine learning, uncovering the challenges businesses face in these domains.",
    bgColor: "bg-yellow-700",
    imageSrc: DataAnalysis,
  },
  {
    title: "ML Bootcamp",
    description:
      "Unlock the power of data with our Machine Learning Bootcamp! Our roadmap, crafted by DJS-Compute and DJS-S4DS, is your guide to mastering ML from start to finish.",
    bgColor: "bg-purple",
    imageSrc: MLbootcamp,
  },
];

export function CardDemo() {
  return (
    <div className="p-8">
      <h1 className="md:text-6xl font-bold text-center mb-8">
        Curating Excellence:{" "}
        <span className="md:text-6xl font-bold text-center mb-8 text-purple">
          Our Clubs Premier Events
        </span>{" "}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cardData.map((card, index) => (
          <div
            key={index}
            className={cn(
              "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4",
              "transition-all duration-500",
              card.bgColor
            )}
          >
            <div className="absolute inset-0 bg-purple-800 opacity-50 transition-opacity duration-300 group-hover:opacity-0"></div>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
              <Image
                src={card.imageSrc}
                alt={card.title}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="relative group">
              <div className="text relative z-20 opacity-100 group-hover:opacity-0 transition-opacity duration-300 ease-in-out">
                <h1 className="font-bold text-xl md:text-3xl text-white mb-2">
                  {card.title}
                </h1>
                <p className="font-bold text-sm md:text-base text-white">
                  {card.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
