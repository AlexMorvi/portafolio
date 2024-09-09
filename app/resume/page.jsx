"use client"
import { 
  FaHtml5, 
  FaCss3, 
  FaReact, 
  FaJava,
  FaJs,
  FaPython,
  FaDatabase,
 } from "react-icons/fa";
 
 import { SiCsharp,
  
  } from "react-icons/si";

//experience data
const experience = {
  icon: '/assets/resume/badge.svg',
  title: 'My Experience',
  description: "In my short carrer, I've gained a foundation in tech while also building soft skills in other industries. I'm eager to apply my diverse experience to real-world software projects.",
  items: [
    {
      company: "Tuscooterelectrico.com",
      position: "Team lead, Seller and Content Creator",
      duration: "2021-2022"
    },
    {
      company: "Independent",
      position: "EPN Student Consultant",
      duration: "2022-Present"
    },
    {
      company: "Imagen Sistemas Group",
      position: "Volunteer",
      duration: "2024-Present"
    },
  ]
}
  
  //education data
const education = {
  icon: '/assets/resume/cap.svg',
  title: 'My Educational',
  description: "Throughout these years I have had a diverse educational background that includes both technical and non-technical courses. This variety has enriched my problem-solving abilities and adaptability across different fields.",
  items: [
    {
      institution: "EPN",
      degree: "Seventh semester Software Engineering",
      duration: "2020 - Present"
    },
    {
      institution: "CEC EPN",
      degree: "English B2",
      duration: "2021-2022"
    },
    {
      institution: "Algorithmics",
      degree: "International professor of programming, videogame design",
      duration: "2024"
    },
  ]
}

//skills data
const skills = {
  title: 'My Skills',
  description: "I have experience with a variety of programming languages and technologies. I am always eager to learn new things and expand my knowledge.",
  items: [
    {
      name: "HTML5",
      icon: <FaHtml5 />
    },
    {
      name: "CSS3",
      icon: <FaCss3 />
    },
    {
      name: "JavaScript",
      icon: <FaJs />
    },
    {
      name: "React",
      icon: <FaReact />
    },
    {
      name: "Java",
      icon: <FaJava />
    },
    {
      name: "Python",
      icon: <FaPython />
    },
    {
      name: "C#",
      icon: <SiCsharp />
    },
    {
      name: "Databases",
      icon: <FaDatabase />
    },
  ]
}

import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: 1, 
        transition: { delay:2.4, duration: 0.5, ease: "easeIn" },
      }}
    className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto
          xl:mx-0 gap-6 ">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
          </TabsList>

          {/* content */}

          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">
                  {experience.title}
                </h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li 
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl 
                          flex flex-col justify-center items-center lg-items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w[260px] min-h-[30px] text-center lg:text-center">{item.position}</h3>
                          <div className="flex items-center gap-3">
                            {/**dat */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* education */}
            <TabsContent value="education" className="w-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">
                  {education.title}
                </h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li 
                          key={index}
                          className="bg-[#232329] h-[264px] py-6 px-10 rounded-xl 
                          flex flex-col justify-center items-center lg-items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w[260px] min-h-[30px] text-center lg:text-center">{item.degree}</h3>
                          <div className="flex items-center gap-3">
                            {/**dat */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60 items-center text-center">{item.institution}</p>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* skill */}
            <TabsContent value="skills" className="w-full">
              skills
            </TabsContent>
          </div>

        </Tabs>
      </div>
    
    </motion.div>
  )
}

export default Resume;