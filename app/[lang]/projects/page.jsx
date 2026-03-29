"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsGithub, BsGlobe2 } from "react-icons/bs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";
import { getDictionary } from "@/lib/i18n";
import { useParams } from "next/navigation";

const Projects = () => {
  const params = useParams();
  const lang = params?.lang === "es" ? "es" : "en";

  const { projects } = getDictionary(lang);
  const [work, setWork] = useState(projects.items[0]);

  const handleSlideChange = (swiper) => {
    const currentSlide = swiper.activeIndex;
    setWork(projects.items[currentSlide]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.6, duration: 0.5, ease: "easeIn" } }}
      className="min-h-[80vh] flex flex-col justify-start py-8 xl:py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="mb-8 text-center xl:text-left">
          <h2 className="h2">{projects.title}</h2>
        </div>
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="order-2 flex w-full flex-col xl:order-none xl:w-[50%] xl:justify-between">
            <div className="flex flex-col gap-5 rounded-2xl border border-accent/25 bg-secondary/40 p-6 xl:min-h-[460px] xl:p-8">
              <div className="text-7xl font-extrabold leading-none text-transparent xl:text-8xl" style={{ WebkitTextStroke: "1px #facc15" }}>
                {work.num}
              </div>
              <h3 className="text-[30px] font-bold leading-tight text-white capitalize break-words xl:text-[36px]">{work.category}</h3>
              <h4 className="text-[18px] font-semibold text-white/70 break-words xl:text-[20px]">{work.title}</h4>
              <p className="text-white/65 break-words">{work.description}</p>
              <ul className="flex flex-wrap gap-2">
                {work.stack.map((item, index) => (
                  <li key={`${item}-${index}`} className="rounded-full border border-accent/30 px-3 py-1 text-sm text-accent">
                    {item}
                  </li>
                ))}
              </ul>
              <div className="border border-white/10" />
              <div className="flex flex-wrap items-center gap-3">
                {work.github && (
                  <Link href={work.github} target="_blank" rel="noopener noreferrer">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="group flex h-[58px] w-[58px] items-center justify-center rounded-full border border-accent/30 bg-white/5">
                          <BsGithub className="text-2xl text-white group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{work.githubLabel || projects.repoLabel}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
                {work.githubSecondary && (
                  <Link href={work.githubSecondary} target="_blank" rel="noopener noreferrer">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="group flex h-[58px] w-[58px] items-center justify-center rounded-full border border-accent/30 bg-white/5">
                          <BsGithub className="text-2xl text-white group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{work.githubSecondaryLabel || projects.repoLabel}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
                {work.demo && (
                  <Link href={work.demo} target="_blank" rel="noopener noreferrer">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="group flex h-[58px] w-[58px] items-center justify-center rounded-full border border-accent/30 bg-white/5">
                          <BsGlobe2 className="text-2xl text-white group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{projects.liveLabel}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
                {!work.github && !work.githubSecondary && !work.demo && <p className="text-sm text-white/50">{projects.privateLabel}</p>}
              </div>
            </div>
          </div>

          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="mb-12 xl:h-[520px]"
              onSlideChange={handleSlideChange}
            >
              {projects.items.map((project, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="group relative flex h-[460px] items-center justify-center overflow-hidden rounded-2xl border border-accent/20 bg-accent/5">
                    <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/70 to-black/15" />
                    <Image src={project.image} fill className="object-cover" alt={project.imageAlt} />
                  </div>
                </SwiperSlide>
              ))}
              <WorkSliderBtns
                containerStyles="absolute right-0 bottom-[calc(50%_-_22px)] z-20 flex w-full justify-between gap-2 xl:bottom-0 xl:w-max"
                btnStyles="bg-accent hover:bg-primary hover:text-accent text-primary text-[34px] w-[44px] h-[44px] justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
