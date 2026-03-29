const es = {
  metadata: {
    title: "Alexander Morales | Ingeniero QA Automation",
    description:
      "Portafolio de QA Automation con enfoque en calidad de software, DevOps y entrega confiable.",
  },
  nav: {
    home: "inicio",
    about: "perfil",
    projects: "proyectos",
    contact: "contacto",
    language: "Idioma",
  },
  home: {
    badge: "Ingeniero QA Automation | Desarrollo de Software y DevOps",
    headingLead: "",
    headingName: "Alexander Morales",
    description:
      "Creo en la tecnología como una herramienta de transformación real: la que reduce fricción, abre oportunidades y mejora la vida de las personas. Como QA Automation Engineer, voy más allá de encontrar defectos: diseño arquitecturas de prueba y automatización para que la calidad nazca desde el inicio. Mi experiencia como educador STEM también refuerza mi enfoque humano: construir software robusto, pero también comunicar con claridad y conectar equipos técnicos y de negocio.",
    focusAreas: [
      "Arquitectura de pruebas: API, UI e integración",
      "Automatización confiable con Playwright, Selenium y Python",
      "CI/CD para entregas rápidas y seguras",
      "Calidad guiada por métricas y análisis de defectos",
    ],
    downloadCv: "Descargar CV",
    featuredProjects: "Proyectos Destacados",
    cvHref: "/assets/CV-Alexander Morales.pdf",
  },
  stats: [
    { num: 3, text: "Años construyendo software" },
    { num: 5, text: "Certificaciones y bootcamps" },
    { num: 3, text: "Proyectos de impacto" },
    { num: 40, text: "Reducción en tiempo de despliegue (%)" },
    { num: 60, text: "Mejora en detección de errores (%)" },
  ],
  about: {
    tabs: {
      experience: "Experiencia",
      education: "Educación",
      certifications: "Certificaciones",
      skills: "Stack",
    },
    experience: {
      title: "Experiencia Profesional",
      description:
        "Experiencia práctica en QA, DevOps y entrega de software en entornos bancarios y educativos.",
      items: [
        {
          company: "NTT DATA (Cliente: Banco Pichincha)",
          position: "Pasante Analista de Banca Empresarial",
          duration: "Ene 2026 - Actualidad",
        },
        {
          company: "Algorithmics",
          position: "Instructor de Programacion Visual",
          duration: "Ago 2024 - Actualidad",
        },
        {
          company: "BIESS",
          position: "Pasante de Desarrollo",
          duration: "Jun 2025 - Ago 2025",
        },
        {
          company: "Radio Area Deportiva",
          position: "Lider de Proyecto y Desarrollador",
          duration: "Ago 2024 - Dic 2024",
        },
      ],
    },
    education: {
      title: "Educacion",
      description:
        "Formacion enfocada en calidad de software, arquitectura segura y gestion de proyectos.",
      items: [
        {
          institution: "Escuela Politecnica Nacional",
          degree: "Ingenieria de Software (Ultimo semestre)",
          duration: "2020 - 2026 (Estimado)",
        },
        {
          institution: "CEC EPN",
          degree: "Certificacion de Ingles - B2",
          duration: "2021 - 2022",
        },
      ],
    },
    certifications: {
      title: "Certificaciones",
      description:
        "Formacion continua en cloud, QA y practicas de ingenieria para entrega de alto nivel.",
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
          name: "Bootcamp Azure DevOps Engineer (AZ-400)",
          issuer: "Codigo Facilito",
          date: "2024 - 2025",
        },
      ],
    },
    skills: {
      title: "Stack Tecnico",
      description:
        "Agrupado por dominios para mostrar rapidamente herramientas, plataformas y practicas de ingenieria.",
      groups: [
        {
          title: "Lenguajes de Programacion",
          mode: "icon",
          items: ["Python", "Java", "JavaScript", "SQL", "C#"],
        },
        {
          title: "Frameworks",
          mode: "icon",
          items: ["Spring Boot", "Angular", "React"],
        },
        {
          title: "Herramientas de QA Automation y Calidad",
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
          title: "DevOps y Observabilidad",
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
          title: "Plataformas Cloud",
          mode: "tag",
          items: ["Azure DevOps", "Azure Container Apps", "Azure Kubernetes Service (AKS)", "OpenLens"],
        },
        {
          title: "Arquitectura, Seguridad y Metodologias",
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
    title: "Proyectos del Portafolio",
    liveLabel: "Demo en vivo",
    repoLabel: "Ver repositorio",
    privateLabel: "Repositorio disponible bajo solicitud.",
    items: [
      {
        num: "01",
        category: "CivicTech y Arquitectura Segura",
        title: "Denuncia Segura EC",
        description:
          "Plataforma segura para reportes anonimos ciudadanos a entidades gubernamentales. Construida con microservicios y enfoque defense-in-depth, con CI/CD automatizado y observabilidad continua.",
        stack: ["Java", "Spring Boot", "Angular", "OAuth2", "Azure Container Apps"],
        image: "/assets/work/dsec.png",
        imageAlt: "Vista del proyecto Denuncia Segura EC",
        github: "https://github.com/AlexMorvi/DenunciaSeguraFrontend",
        githubLabel: "Repositorio Frontend",
        githubSecondary: "https://github.com/AlexMorvi/DenunciaSeguraBackend",
        githubSecondaryLabel: "Repositorio Backend",
        demo: "https://denuncia-segura-frontend.vercel.app/login",
      },
      {
        num: "02",
        category: "Seguridad con IA para Educacion",
        title: "Moderador de Contenido Educativo con IA",
        description:
          "Proyecto de tesis: extension de navegador y backend con IA para detectar y filtrar contenido potencialmente abusivo en plataformas educativas.",
        stack: ["Browser Extension", "AI Backend", "Continuous Testing"],
        image: "/assets/work/ext.jpg",
        imageAlt: "Vista del moderador de contenido educativo con IA",
        github: null,
        demo: null,
      },
      {
        num: "03",
        category: "Vision Computacional y Automatizacion",
        title: "Sistema de Reconocimiento Facial",
        description:
          "Red neuronal siamese con 95% de precision para reconocimiento facial, integrada con Telegram y Alexa para control de acceso en tiempo real.",
        stack: ["Python", "TensorFlow", "Telegram API", "Alexa API"],
        image: "/assets/work/Face.png",
        imageAlt: "Vista del sistema de reconocimiento facial",
        github: "https://github.com/AlexMorvi/Reconocimiento-Facial",
        demo: null,
      },
    ],
  },
  contact: {
    title: "Construyamos software confiable juntos",
    description:
      "Si buscas apoyo en QA automation, entrega DevOps o ingenieria de software, enviame un mensaje y te respondo pronto.",
    labels: {
      firstname: "Nombre",
      lastname: "Apellido",
      email: "Correo electronico",
      phone: "Telefono",
      message: "Cuentame sobre tu proyecto, reto o proceso de seleccion.",
      send: "Enviar",
      sending: "Enviando...",
      success: "Mensaje enviado correctamente. Te respondere pronto.",
      error: "No pude enviar tu mensaje ahora mismo. Intenta de nuevo.",
      required: "Completa nombre, correo y mensaje antes de enviar.",
      phoneInvalid: "Ingresa un telefono valido (7 a 15 digitos).",
      serviceUnavailable: "El servicio de contacto no esta disponible por ahora. Intenta de nuevo en unos minutos.",
      rateLimited: "Demasiados intentos. Espera unos minutos antes de volver a enviar.",
    },
    info: [
      { key: "email", title: "Correo", description: "arielmorales.2105@gmail.com" },
      { key: "location", title: "Ubicacion", description: "Quito, Ecuador" },
      {
        key: "linkedin",
        title: "LinkedIn",
        description: "linkedin.com/in/alx-mrv",
        link: "https://linkedin.com/in/alx-mrv/",
      },
    ],
  },
};

export default es;
