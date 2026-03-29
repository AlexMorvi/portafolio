"use client";

import Image from "next/image";

import {
  FaJava,
  FaJs,
  FaPython,
  FaReact,
  FaDocker,
  FaJenkins,
  FaGitAlt,
  FaDatabase,
} from "react-icons/fa";
import {
  SiAngular,
  SiAppium,
  SiGrafana,
  SiPostman,
  SiPytest,
  SiSpringboot,
  SiSelenium,
  SiSonarqubecloud,
  SiGithubactions,
  SiKubernetes,
  SiK6,
} from "react-icons/si";
import { DiDotnet } from "react-icons/di";
import { TbBrandCucumber } from "react-icons/tb";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { motion } from "framer-motion";
import { getDictionary } from "@/lib/i18n";
import { useParams } from "next/navigation";

const iconMap = {
  Python: <FaPython />,
  Java: <FaJava />,
  JavaScript: <FaJs />,
  "C#": <DiDotnet />,
  SQL: <FaDatabase />,
  React: <FaReact />,
  Angular: <SiAngular />,
  "Spring Boot": <SiSpringboot />,
  Pytest: <SiPytest />,
  Selenium: <SiSelenium />,
  Playwright: (
    <Image
      src="/assets/skills/playwright.svg"
      alt="Playwright"
      width={48}
      height={48}
      className="h-12 w-12 object-contain brightness-0 saturate-100 invert"
    />
  ),
  Appium: <SiAppium />,
  K6: <SiK6 />,
  Postman: <SiPostman />,
  Cucumber: <TbBrandCucumber />,
  Karate: (
    <Image
      src="/assets/skills/karate.svg"
      alt="Karate"
      width={40}
      height={40}
      className="h-10 w-10 object-contain"
    />
  ),
  "Serenity BDD": (
    <Image
      src="/assets/skills/serenity-bdd.svg"
      alt="Serenity BDD"
      width={40}
      height={40}
      className="h-10 w-10 object-contain"
    />
  ),
  Git: <FaGitAlt />,
  Jenkins: <FaJenkins />,
  "GitHub Actions": <SiGithubactions />,
  Docker: <FaDocker />,
  Kubernetes: <SiKubernetes />,
  Grafana: <SiGrafana />,
  SonarQube: <SiSonarqubecloud />,
};

const getSkillVisual = (item) => {
  if (iconMap[item]) {
    return iconMap[item];
  }

  const generated = item
    .split(/\s+/)
    .filter(Boolean)
    .map((word) => word[0])
    .join("")
    .slice(0, 4)
    .toUpperCase();

  return <span className="text-sm font-semibold tracking-wider">{generated}</span>;
};

const Resume = () => {
  const params = useParams();
  const lang = params?.lang === "es" ? "es" : "en";

  const { about } = getDictionary(lang);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.5, duration: 0.5, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs defaultValue="experience" className="flex flex-col gap-10 xl:flex-row xl:gap-[60px]">
          <TabsList className="mx-auto flex w-full max-w-[380px] flex-col gap-6 xl:mx-0">
            <TabsTrigger value="experience">{about.tabs.experience}</TabsTrigger>
            <TabsTrigger value="education">{about.tabs.education}</TabsTrigger>
            <TabsTrigger value="certifications">{about.tabs.certifications}</TabsTrigger>
            <TabsTrigger value="skills">{about.tabs.skills}</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{about.experience.title}</h3>
                <p className="mx-auto max-w-[700px] text-white/60 xl:mx-0">{about.experience.description}</p>
                <ul className="grid grid-cols-1 gap-[24px] lg:grid-cols-2">
                  {about.experience.items.map((item) => (
                    <li
                      key={`${item.company}-${item.position}`}
                      className="flex min-h-[170px] flex-col items-center justify-center gap-2 rounded-xl border border-accent/20 bg-secondary/40 py-6 px-8 lg:items-start"
                    >
                      <span className="text-accent">{item.duration}</span>
                      <h3 className="min-h-[30px] text-center text-xl lg:text-left">{item.position}</h3>
                      <div className="flex items-center gap-3">
                        <span className="h-[6px] w-[6px] rounded-full bg-accent" />
                        <p className="text-center text-white/60 lg:text-left">{item.company}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>

            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{about.education.title}</h3>
                <p className="mx-auto max-w-[700px] text-white/60 xl:mx-0">{about.education.description}</p>
                <ul className="grid grid-cols-1 gap-[24px] lg:grid-cols-2">
                  {about.education.items.map((item) => (
                    <li
                      key={`${item.institution}-${item.degree}`}
                      className="flex min-h-[190px] flex-col items-center justify-center gap-2 rounded-xl border border-accent/20 bg-secondary/40 py-6 px-8 lg:items-start"
                    >
                      <span className="text-accent">{item.duration}</span>
                      <h3 className="min-h-[30px] text-center text-xl lg:text-left">{item.degree}</h3>
                      <div className="flex items-center gap-3">
                        <span className="h-[6px] w-[6px] rounded-full bg-accent" />
                        <p className="text-center text-white/60 lg:text-left">{item.institution}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>

            <TabsContent value="certifications" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{about.certifications.title}</h3>
                <p className="mx-auto max-w-[700px] text-white/60 xl:mx-0">{about.certifications.description}</p>
                <ul className="grid grid-cols-1 gap-[18px]">
                  {about.certifications.items.map((item) => (
                    <li
                      key={`${item.name}-${item.issuer}`}
                      className="flex flex-col gap-2 rounded-xl border border-accent/20 bg-secondary/40 py-5 px-8 md:flex-row md:items-center md:justify-between"
                    >
                      <div>
                        <h3 className="text-lg text-white">{item.name}</h3>
                        <p className="text-white/60">{item.issuer}</p>
                      </div>
                      <span className="text-accent">{item.date}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>

            <TabsContent value="skills" className="h-full w-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[20px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{about.skills.title}</h3>
                  <p className="mx-auto max-w-[700px] text-white/60 xl:mx-0">{about.skills.description}</p>
                </div>
                <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
                  {about.skills.groups.map((group) => (
                    <div key={group.title} className="rounded-xl border border-accent/20 bg-secondary/40 p-5">
                      <h4 className="mb-4 text-lg font-semibold text-accent">{group.title}</h4>
                      {group.mode === "tag" ? (
                        <ul className="flex flex-wrap gap-2">
                          {group.items.map((item) => (
                            <li
                              key={`${group.title}-${item}`}
                              className="rounded-full border border-accent/25 bg-primary/50 px-3 py-1 text-sm text-white/80"
                            >
                              {item}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                          {group.items.map((item) => (
                            <li key={`${group.title}-${item}`}>
                              <TooltipProvider delayDuration={100}>
                                <Tooltip>
                                  <TooltipTrigger className="group flex h-[100px] w-full items-center justify-center rounded-xl border border-accent/20 bg-primary/50">
                                    <div className="flex items-center justify-center text-[40px] text-white transition-all duration-300 group-hover:text-accent">
                                      {getSkillVisual(item)}
                                    </div>
                                  </TooltipTrigger>
                                  <TooltipContent className="rounded-xl bg-primary text-accent">
                                    <p>{item}</p>
                                  </TooltipContent>
                                </Tooltip>
                              </TooltipProvider>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
