"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";
import { getDictionary } from "@/lib/i18n";
import { useParams } from "next/navigation";

const iconMap = {
  email: <FaEnvelope />,
  location: <FaMapMarkerAlt />,
  linkedin: <FaLinkedin />,
};

const phoneAllowedChars = /^[+()\-\s\d]+$/;

function isPhoneValid(phone = "") {
  const trimmed = phone.trim();

  if (!trimmed) {
    return true;
  }

  if (!phoneAllowedChars.test(trimmed)) {
    return false;
  }

  const digitsOnly = trimmed.replace(/\D/g, "");
  return digitsOnly.length >= 7 && digitsOnly.length <= 15;
}

function mapApiErrorToMessage(result, labels) {
  switch (result?.errorCode) {
    case "PHONE_INVALID":
      return labels.phoneInvalid;
    case "SERVICE_UNAVAILABLE":
      return labels.serviceUnavailable;
    case "RATE_LIMITED":
      return labels.rateLimited;
    case "FORM_INVALID":
      return labels.required;
    default:
      return labels.error;
  }
}

const Contact = () => {
  const params = useParams();
  const lang = params?.lang === "es" ? "es" : "en";

  const { contact } = getDictionary(lang);

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    message: "",
    company: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [feedback, setFeedback] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const requiredFields = [formData.firstname, formData.lastname, formData.email, formData.message];
    if (requiredFields.some((field) => !field.trim())) {
      setFeedback({ type: "error", message: contact.labels.required });
      return;
    }

    if (!isPhoneValid(formData.phone)) {
      setFeedback({ type: "error", message: contact.labels.phoneInvalid });
      return;
    }

    setIsLoading(true);
    setFeedback({ type: "", message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        setFeedback({ type: "error", message: mapApiErrorToMessage(result, contact.labels) });
      } else {
        setFeedback({ type: "success", message: contact.labels.success });
        setFormData({
          firstname: "",
          lastname: "",
          email: "",
          phone: "",
          message: "",
          company: "",
        });
      }
    } catch {
      setFeedback({ type: "error", message: contact.labels.error });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.5, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-[30px] xl:flex-row">
          <div className="order-2 xl:order-none xl:w-[64%]">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 rounded-2xl border border-accent/25 bg-secondary/40 p-8 xl:p-10">
              <h3 className="text-3xl text-accent xl:text-4xl">{contact.title}</h3>
              <p className="text-white/60">{contact.description}</p>

              <Input
                type="text"
                name="company"
                tabIndex={-1}
                autoComplete="off"
                value={formData.company}
                onChange={handleChange}
                className="hidden"
                aria-hidden="true"
              />

              {feedback.message && (
                <p
                  className={`rounded-md border px-4 py-3 text-sm ${
                    feedback.type === "success"
                      ? "border-emerald-500/40 bg-emerald-500/10 text-emerald-300"
                      : "border-rose-500/40 bg-rose-500/10 text-rose-300"
                  }`}
                >
                  {feedback.message}
                </p>
              )}

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <Input
                  type="text"
                  name="firstname"
                  placeholder={contact.labels.firstname}
                  required
                  value={formData.firstname}
                  onChange={handleChange}
                />
                <Input
                  type="text"
                  name="lastname"
                  placeholder={contact.labels.lastname}
                  required
                  value={formData.lastname}
                  onChange={handleChange}
                />
                <Input
                  type="email"
                  name="email"
                  placeholder={contact.labels.email}
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
                <Input
                  type="tel"
                  name="phone"
                  placeholder={contact.labels.phone}
                  inputMode="tel"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <Textarea
                className="h-[200px]"
                name="message"
                placeholder={contact.labels.message}
                required
                value={formData.message}
                onChange={handleChange}
              />
              <Button type="submit" size="md" className="max-w-40" disabled={isLoading}>
                {isLoading ? contact.labels.sending : contact.labels.send}
              </Button>
            </form>
          </div>

          <div className="order-1 mb-8 flex flex-1 items-center xl:order-none xl:mb-8 xl:justify-end">
            <ul className="flex flex-col gap-10">
              {contact.info.map((item) => (
                <li key={item.key} className="flex items-center gap-4">
                  <div className="flex h-[52px] w-[52px] items-center justify-center rounded-md border border-accent/30 bg-secondary/40 text-accent xl:h-[72px] xl:w-[72px]">
                    <div className="text-[28px]">{iconMap[item.key]}</div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl text-white/60">{item.title}</h4>
                    {item.link ? (
                      <Link
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/80 transition-colors hover:text-accent"
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
