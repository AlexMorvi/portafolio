"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";


import {FaEnvelope, FaMapMarkerAlt} from "react-icons/fa";

const info = [
  
  {
    icon: <FaEnvelope />,
    title: "Email",
    descipcion: "arielmorales.2105@gmail.com"
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Location",
    descipcion: "Quito, Ecuador"
  }
]

import { motion } from "framer-motion";


const Contact = () => {
  return (
    <motion.section
      intial = {{ opacity: 0 }}
      animate ={{ 
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } 
        }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/** form */}
          <div className="xl:w-[64%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272C] rounded-xl">
              <h3 className="text-4xl text-accent">Let's work together</h3>
              <p className="text-white/60">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. A architecto odit non provident at aliquid cumque vero, amet, consequuntur doloribus nam incidunt voluptates accusantium in nisi quis ab perferendis unde?
              </p>
              {/** info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="firstname" placeholder="Firstname"></Input>
                <Input type="lastname" placeholder="Lastname"></Input>
                <Input type="email" placeholder="Email address"></Input>
                <Input type="phone" placeholder="Phone number"></Input>
              </div>
              {/** textarea */}
              <Textarea className="h-[200px]"
              placeholder="Type your message here." /> 
              {/** btn */}
              <Button size="md" className ="max-w-40">Send Message</Button>
            </form>
          </div>
          {/** info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-8">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-4 ">
                  <div className="w-[52px] h-[52px] xl:[72px] xl:h[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px]">
                      {item.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl text-white/60">{item.title}</h4>
                    <p className="text-white/60">{item.descipcion}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Contact;