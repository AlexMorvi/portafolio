"use client"
import { motion } from "framer-motion";
import React, {useState} from "react";
import {Swiper, SwiperSlide} from 'swiper/react';
import "swiper/css"
import { BsGithub} from 'react-icons/bs';
import { Tooltip, TooltipContent,TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";

import WorkSliderBtns from "@/components/WorkSliderBtns";


const works = [
  
  {
    num:'01',
    category: 'AI & Machine Learning',
    title: 'SecureHome',
    description: "A custom Siamese neural network was used to ensure high accuracy in facial recognition. Additionally, it was connected to Telegram, which was used to send data from each recognition, view the live camera feed, access the history, and other functionalities. It is designed to address home security issues.",
    stack: [{name: "Python"}, {name: "TensorFlow"}, {name: "Telegram API"}],
    image: '/assets/work/Face.png',
    github:"https://github.com/AlexMorvi/Reconocimiento-Facial"
  },
  {
    num:'02',
    category: 'Game Development',
    title: 'Space Explorers',
    description: "This game is aimed at children aged 12 and up, born from the need to spark curiosity about outer space and the world of astronomy. In the game, players start on a spaceship and can explore the entire solar system, planet by planet. It is designed with a realistic approach, where the lights, planets, gravity, distance, etc. This game is a simulation of reality.",
    stack: [{name: "C++"}, {name: "OpenGl"}, {name: "Blender"}],
    image: '/assets/work/spaces.png',
    github:"https://github.com/AlexMorvi/Simulador-Del-Sistema-Solar"
  },
  {
    num:'03',
    category: 'Web Development',
    title: 'Gymbro',
    description: "This web system was made for a gym. It would display a landing page and provide access for the gym's administrative staff, where they could review all clients, schedules, trainers, workouts, memberships, etc. Each of these would have their respective C.R.U.D. operations.",
    stack: [{name: "Angular"}, {name: "Springboot"}, {name: "TS"}],
    image: '/assets/work/Gymbro.png',
    github:"https://github.com/AlexMorvi/Gym_WebSite"
  },
]

const Projects = () => {
  const [work, setWork] = useState(works[0]);

  const handleSlideChange = (swiper) => {
    
    const currentSlide = swiper.activeIndex;
    setWork(works[currentSlide]);
  }

  return (
    <motion.section
      initial={{opacity: 0}}
      animate={{opacity: 1, transition: {delay:1.5, duration: 0.4, ease: 'easeIn'} }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/*outline number*/}
              <div className="text-8xl leading-none font-extrabold text-transparent" 
              style={{ WebkitTextStroke: "1px #edd221" }}>
                {work.num}
              </div>
              {/*category*/}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {work.category} project
              </h2>
              {/*Title*/}
              <h4 className="text-[20px] font-bold leading-none text-white/60">
                {work.title}
              </h4>
              {/*description*/}
              <p className=" text-white/60">
                {work.description}
              </p>
              {/*stack*/}
              <ul className="flex gap-4">
                {work.stack.map((item, index) => (
                  <li key={index} className="text-xl text-accent flex items-center">
                    {item.name}
                    {/*remove the last comma*/}
                    {index !== work.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              {/*border*/}
              <div className="border border-white/20"></div>
              {/*buttons*/}
              <div className="flex items-center gap-4">
                <Link href={work.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" /> 
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>View project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {works.map((work, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                    {/*overlay*/}
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                    {/*image*/}
                    <div>
                      <Image
                        src={work.image}
                        fill 
                        className="object-cover"
                        alt=""
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              {/*buttons*/}
              <WorkSliderBtns 
              containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl-justify-none" 
              btnStyles= "bg-accent hover:bg-primary hover:text-accent text-primary text-[34px] w-[44px] h-[44px] justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Projects;