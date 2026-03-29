"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";

const info = [
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "arielmorales.2105@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Location",
    description: "Quito, Ecuador",
  },
  {
    icon: <FaLinkedin />,
    title: "LinkedIn",
    description: "linkedin.com/in/alx-mrv",
    link: "https://linkedin.com/in/alx-mrv/",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const requiredFields = [
      formData.firstname,
      formData.lastname,
      formData.email,
      formData.message,
    ];

    if (requiredFields.some((field) => !field.trim())) {
      alert("Please complete name, email and message before sending.");
      return;
    }

    const subject = encodeURIComponent(
      `Portfolio contact - ${formData.firstname} ${formData.lastname}`
    );
    const body = encodeURIComponent(
      `Name: ${formData.firstname} ${formData.lastname}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
    );

    window.location.href = `mailto:arielmorales.2105@gmail.com?subject=${subject}&body=${body}`;

    setFormData({
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:w-[64%] order-2 xl:order-none">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 p-10 bg-[#27272C] rounded-xl"
            >
              <h3 className="text-4xl text-accent">Let&apos;s build reliable software together</h3>
              <p className="text-white/60">
                Looking for support in QA automation, DevOps delivery or software engineering?
                Send a message and I will reply as soon as possible.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="text"
                  name="firstname"
                  placeholder="Firstname"
                  required
                  value={formData.firstname}
                  onChange={handleChange}
                />
                <Input
                  type="text"
                  name="lastname"
                  placeholder="Lastname"
                  required
                  value={formData.lastname}
                  onChange={handleChange}
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
                <Input
                  type="tel"
                  name="phone"
                  placeholder="Phone number"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <Textarea
                className="h-[200px]"
                name="message"
                placeholder="Tell me about your project, challenge or hiring process."
                required
                value={formData.message}
                onChange={handleChange}
              />
              <Button type="submit" size="md" className="max-w-40">
                Send
              </Button>
            </form>
          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-8">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-4 ">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl text-white/60">{item.title}</h4>
                    {item.link ? (
                      <Link
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/80 hover:text-accent transition-colors"
                      >
                        {item.description}
                      </Link>
                    ) : (
                      <p className="text-white/60">{item.description}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
