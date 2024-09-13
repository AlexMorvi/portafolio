"use client"
import { motion } from "framer-motion";
import React, {useState} from "react";
import {Swiper, SwiperSlide} from 'swiper/react';
import "swiper/css"
import {BsArrowUpRigth, BsGithub} from 'react-icons/bs';
import { Tooltip, TooltipContent,TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";

const works = [
  {
    num:'01',
    category: 'Web Development',
    title: 'project 1',
    description: "lorem",
    stack: [{name: "Html 5"}, {name: "Css 3"}, {name: "Javascript"}],
    image: '/assets/work/thumb2.png',
    github:""
  },
  {
    num:'02',
    category: 'Web Development',
    title: 'project 2',
    description: "lorem",
    stack: [{name: "Html 5"}, {name: "Css 3"}, {name: "Javascript"}],
    image: '/assets/work/thumb1.png',
    github:""
  },
  {
    num:'03',
    category: 'Web Development',
    title: 'project 3',
    description: "lorem",
    stack: [{name: "Html 5"}, {name: "Css 3"}, {name: "Javascript"}],
    image: '/assets/work/thumb3.png',
    github:""
  },
]

const Projects = () => {
  const [work, setWork] = useState(works[0]);
  return (
    <motion.section
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        projects
      </div>
    </motion.section>
  )
}

export default Projects;