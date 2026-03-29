const en = {
  metadata: {
    title: "Alexander Morales | QA Automation Engineer",
    description:
      "QA Automation Engineer portfolio focused on software quality, DevOps, and reliable delivery.",
  },
  nav: {
    home: "home",
    about: "about",
    projects: "projects",
    contact: "contact",
    language: "Language",
  },
  home: {
    badge: "QA Automation Engineer | Software Development & DevOps",
    headingLead: "",
    headingName: "Alexander Morales",
    description:
      "I believe technology should be a real transformation tool: one that reduces friction, opens opportunities, and improves people's lives. As a QA Automation Engineer, I go beyond finding defects: I design test and automation architectures so quality is built in from day one. My STEM educator background also strengthens my human-centered approach: building robust software while communicating clearly and connecting technical and business teams.",
    focusAreas: [
      "Test architecture across API, UI, and integration layers",
      "Reliable automation with Playwright, Selenium, and Python",
      "CI/CD pipelines for fast and secure delivery",
      "Quality driven by metrics and defect analysis",
    ],
    downloadCv: "Download CV",
    featuredProjects: "Featured Projects",
    cvHref: "/assets/CV-Alexander Morales.pdf",
  },
  stats: [
    { num: 3, text: "Years Building Software" },
    { num: 5, text: "Certifications & Bootcamps" },
    { num: 3, text: "Featured Impact Projects" },
    { num: 40, text: "Deployment Time Reduced (%)" },
    { num: 60, text: "Error Detection Improvement (%)" },
  ],
  about: {
    tabs: {
      experience: "Experience",
      education: "Education",
      certifications: "Certifications",
      skills: "Stack",
    },
    experience: {
      title: "Professional Experience",
      description:
        "Hands-on experience across QA, DevOps and software delivery in banking and education environments.",
      items: [
        {
          company: "NTT DATA (Client: Banco Pichincha)",
          position: "Business Banking Analyst Intern",
          duration: "Jan 2026 - Present",
        },
        {
          company: "Algorithmics",
          position: "Visual Programming Instructor",
          duration: "Aug 2024 - Present",
        },
        {
          company: "BIESS",
          position: "Development Intern",
          duration: "Jun 2025 - Aug 2025",
        },
        {
          company: "Radio Area Deportiva",
          position: "Project Leader and Developer",
          duration: "Aug 2024 - Dec 2024",
        },
      ],
    },
    education: {
      title: "Education",
      description:
        "Academic focus on software quality, secure architecture and project management.",
      items: [
        {
          institution: "Escuela Politecnica Nacional",
          degree: "Software Engineering (Final Semester)",
          duration: "2020 - 2026 (Expected)",
        },
        {
          institution: "CEC EPN",
          degree: "English Certification - B2",
          duration: "2021 - 2022",
        },
      ],
    },
    certifications: {
      title: "Certifications",
      description:
        "Continuous training in cloud, QA and engineering practices for high-quality delivery.",
      items: [
        { name: "QA Innovation Lab Bootcamp", issuer: "NTT DATA", date: "2026" },
        {
          name: "Microsoft Certified: Azure Fundamentals (AZ-900)",
          issuer: "Microsoft",
          date: "2026",
        },
        {
          name: "GitHub Certification (GH-300)",
          issuer: "GitHub / Microsoft",
          date: "2026",
        },
        {
          name: "Azure DevOps Engineer Bootcamp (AZ-400)",
          issuer: "Codigo Facilito",
          date: "2024 - 2025",
        },
      ],
    },
    skills: {
      title: "Technical Stack",
      description:
        "Grouped by domain so recruiters and teams can quickly identify tools, platforms and engineering practices.",
      groups: [
        {
          title: "Programming Languages",
          mode: "icon",
          items: ["Python", "Java", "JavaScript", "SQL", "C#"],
        },
        {
          title: "Frameworks",
          mode: "icon",
          items: ["Spring Boot", "Angular", "React"],
        },
        {
          title: "QA Automation & Quality Tools",
          mode: "icon",
          items: [
            "Playwright",
            "Selenium",
            "Postman",
            "Pytest",
            "Cucumber",
            "Karate",
            "Serenity BDD",
            "SonarQube",
            "Appium",
            "K6",
          ],
        },
        {
          title: "DevOps & Observability",
          mode: "icon",
          items: [
            "Docker",
            "Kubernetes",
            "GitHub Actions",
            "Jenkins",
            "Git",
            "Grafana",
          ],
        },
        {
          title: "Cloud Platforms",
          mode: "tag",
          items: ["Azure DevOps", "Azure Container Apps", "Azure Kubernetes Service (AKS)", "OpenLens"],
        },
        {
          title: "Architecture, Security & Methodologies",
          mode: "tag",
          items: [
            "Hexagonal Architecture",
            "Microservices Architecture",
            "Agile Development",
            "TDD",
            "BDD",
            "ISTQB",
            "Scrum",
            "ITIL v4",
            "Defense in Depth",
            "OAuth2",
          ],
        },
      ],
    },
  },
  projects: {
    title: "Portfolio Projects",
    liveLabel: "Live demo",
    repoLabel: "View repository",
    privateLabel: "Repository available on request.",
    items: [
      {
        num: "01",
        category: "CivicTech & Secure Architecture",
        title: "Denuncia Segura EC",
        description:
          "Secure reporting platform for anonymous citizen reports to government entities. Built with microservices and defense-in-depth principles, deployed with automated CI/CD and continuous observability.",
        stack: ["Java", "Spring Boot", "Angular", "OAuth2", "Azure Container Apps"],
        image: "/assets/work/dsec.png",
        imageAlt: "Project preview for Denuncia Segura EC",
        github: "https://github.com/AlexMorvi/DenunciaSeguraFrontend",
        githubLabel: "Frontend repository",
        githubSecondary: "https://github.com/AlexMorvi/DenunciaSeguraBackend",
        githubSecondaryLabel: "Backend repository",
        demo: "https://denuncia-segura-frontend.vercel.app/login",
      },
      {
        num: "02",
        category: "AI Safety for Education",
        title: "Educational AI Content Moderator",
        description:
          "Thesis project: browser extension and AI backend to detect and filter potentially abusive content on educational platforms.",
        stack: ["Browser Extension", "AI Backend", "Continuous Testing"],
        image: "/assets/work/ext.jpg",
        imageAlt: "Project preview for Educational AI Content Moderator",
        github: null,
        demo: null,
      },
      {
        num: "03",
        category: "Computer Vision & Automation",
        title: "Facial Recognition System",
        description:
          "Siamese neural network achieving 95% accuracy for facial recognition, integrated with Telegram and Alexa for real-time access control.",
        stack: ["Python", "TensorFlow", "Telegram API", "Alexa API"],
        image: "/assets/work/Face.png",
        imageAlt: "Project preview for Facial Recognition System",
        github: "https://github.com/AlexMorvi/Reconocimiento-Facial",
        demo: null,
      },
    ],
  },
  contact: {
    title: "Let's build reliable software together",
    description:
      "Looking for support in QA automation, DevOps delivery or software engineering? Send a message and I will reply as soon as possible.",
    labels: {
      firstname: "Firstname",
      lastname: "Lastname",
      email: "Email address",
      phone: "Phone number",
      message: "Tell me about your project, challenge or hiring process.",
      send: "Send",
      sending: "Sending...",
      success: "Message sent successfully. I will reply soon.",
      error: "Could not send your message right now. Please try again.",
      required: "Please complete name, email and message before sending.",
      phoneInvalid: "Enter a valid phone number (7 to 15 digits).",
      serviceUnavailable: "Contact service is temporarily unavailable. Please try again in a few minutes.",
      rateLimited: "Too many attempts. Please wait a few minutes before trying again.",
    },
    info: [
      { key: "email", title: "Email", description: "arielmorales.2105@gmail.com" },
      { key: "location", title: "Location", description: "Quito, Ecuador" },
      {
        key: "linkedin",
        title: "LinkedIn",
        description: "linkedin.com/in/alx-mrv",
        link: "https://linkedin.com/in/alx-mrv/",
      },
    ],
  },
};

export default en;
