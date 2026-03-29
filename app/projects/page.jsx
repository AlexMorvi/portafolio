"use client"
import { motion } from "framer-motion";
import React, {useState} from "react";
import {Swiper, SwiperSlide} from 'swiper/react';
import "swiper/css"
import { BsGithub, BsGlobe2 } from 'react-icons/bs';
import { Tooltip, TooltipContent,TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";

import WorkSliderBtns from "@/components/WorkSliderBtns";


const works = [
  {
    num:'01',
    category: 'CivicTech & Secure Architecture',
    title: 'Denuncia Segura EC',
    description: "Secure reporting platform for anonymous citizen reports to government entities. Built with microservices and defense-in-depth principles, deployed with automated CI/CD and continuous observability.",
    stack: [{name: "Java"}, {name: "Spring Boot"}, {name: "Angular"}, {name: "OAuth2"}, {name: "Azure Container Apps"}],
    image: '/assets/work/dsec.png',
    github: "https://github.com/AlexMorvi/DenunciaSeguraFrontend",
    githubLabel: "Frontend repository",
    githubSecondary: "https://github.com/AlexMorvi/DenunciaSeguraBackend",
    githubSecondaryLabel: "Backend repository",
    demo: "https://denuncia-segura-frontend.vercel.app/login"
  },
  {
    num:'02',
    category: 'AI Safety for Education',
    title: 'Educational AI Content Moderator',
    description: "Thesis project: browser extension and AI backend to detect and filter potentially abusive content on educational platforms. Focused on model validation, continuous testing and ethical AI guidelines.",
    stack: [{name: "Browser Extension"}, {name: "AI Backend"}, {name: "Continuous Testing"}],
    image: '/assets/work/ext.jpg',
    github: null
  },
  {
    num:'03',
    category: 'Computer Vision & Automation',
    title: 'Facial Recognition System',
    description: "Siamese neural network achieving 95% accuracy for facial recognition, integrated with Telegram and Alexa for real-time access control and remote monitoring.",
    stack: [{name: "Python"}, {name: "TensorFlow"}, {name: "Telegram API"}, {name: "Alexa API"}],
    image: '/assets/work/Face.png',
    github:"https://github.com/AlexMorvi/Reconocimiento-Facial"
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
          <div className="w-full xl:w-[50%] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-5 rounded-2xl border border-accent/25 bg-secondary/40 p-6 xl:min-h-[460px] xl:p-8">
              {/*outline number*/}
              <div className="text-8xl leading-none font-extrabold text-transparent" 
              style={{ WebkitTextStroke: "1px #edd221" }}>
                {work.num}
              </div>
              {/*category*/}
              <h2 className="text-[38px] xl:text-[42px] font-bold leading-tight text-white group-hover:text-accent transition-all duration-500 capitalize break-words">
                {work.category}
              </h2>
              {/*Title*/}
              <h4 className="text-[20px] font-bold leading-none text-white/60 break-words">
                {work.title}
              </h4>
              {/*description*/}
              <p className=" text-white/60 break-words">
                {work.description}
              </p>
              {/*stack*/}
              <ul className="flex flex-wrap gap-3">
                {work.stack.map((item, index) => (
                  <li key={index} className="text-base text-accent flex items-center">
                    {item.name}
                    {/*remove the last comma*/}
                    {index !== work.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              {/*border*/}
              <div className="border border-white/20"></div>
              {/*buttons*/}
              <div className="flex flex-wrap items-center gap-3">
                {work.github && (
                  <Link href={work.github} target="_blank" rel="noopener noreferrer">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsGithub className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{work.githubLabel || "View repository"}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
                {work.githubSecondary && (
                  <Link href={work.githubSecondary} target="_blank" rel="noopener noreferrer">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsGithub className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{work.githubSecondaryLabel || "View repository"}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
                {work.demo && (
                  <Link href={work.demo} target="_blank" rel="noopener noreferrer">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsGlobe2 className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Live portfolio</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
                {!work.github && !work.githubSecondary && !work.demo && (
                  <p className="text-white/50 text-sm">Repository available on request.</p>
                )}
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
                  <div className="h-[460px] relative group flex justify-center items-center bg-accent/10 rounded-lg overflow-hidden">
                    {/*overlay*/}
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/25 z-10"></div>
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