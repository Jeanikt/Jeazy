/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
  FaMoon,
  FaSun,
} from "react-icons/fa";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useInView } from "react-intersection-observer";

interface Repo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
}

interface GitHubUser {
  avatar_url: string;
  name: string;
}

interface WorkExperience {
  id: number;
  company: string;
  role: string;
  period: string;
  technologies: string[];
  description: string;
}

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

// eslint-disable-next-line react/display-name
const NavItem = React.memo(
  ({
    href,
    text,
    darkMode,
  }: {
    href: string;
    text: string;
    darkMode: boolean;
  }) => (
    <motion.li variants={fadeInUp}>
      <a
        href={href}
        className={`text-sm font-medium ${
          darkMode
            ? "text-gray-300 hover:text-white"
            : "text-gray-600 hover:text-gray-900"
        } transition-colors duration-300`}
      >
        {text}
      </a>
    </motion.li>
  )
);

// eslint-disable-next-line react/display-name
const SocialIcon = React.memo(
  ({
    Icon,
    href,
    darkMode,
  }: {
    Icon: React.ElementType;
    href: string;
    darkMode: boolean;
  }) => (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.2, rotate: 5 }}
      whileTap={{ scale: 0.9 }}
      className={`text-2xl ${
        darkMode
          ? "text-gray-300 hover:text-white"
          : "text-gray-600 hover:text-gray-900"
      } transition-colors duration-300`}
    >
      <Icon />
    </motion.a>
  )
);

export default function Portfolio() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [workExperience, setWorkExperience] = useState<WorkExperience[]>([]);
  const [language, setLanguage] = useState<"en" | "pt">("en");
  const [darkMode, setDarkMode] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [userData, reposData] = await Promise.all([
          fetch("https://api.github.com/users/Jeanikt").then((res) =>
            res.json()
          ),
          fetch("https://api.github.com/users/Jeanikt/repos").then((res) =>
            res.json()
          ),
        ]);

        setUser(userData);
        const filteredRepos = reposData.filter((repo: Repo) =>
          [
            "Flower",
            "WebCrawler",
            "Fiscalis",
            "myBazaar",
            "UniConnect",
          ].includes(repo.name)
        );
        setRepos(filteredRepos);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

    setWorkExperience([
      {
        id: 1,
        company: "Inovacomm",
        role: "Software Engineer",
        period: "Mar 2023 - Present",
        technologies: [
          "C#",
          "Tailwind CSS",
          "Grafana",
          "VoIP",
          "3CX",
          "React",
          "Node.js",
          "TypeScript",
          "Javascript",
          "PHP",
          "Laravel",
          "SQL",
          "UI/UX",
        ],
        description:
          "Provided support for the 3CX VoIP platform, developed Web APIs, and optimized site processing. Built and styled web pages using React.js and Tailwind CSS, and created dashboards with SQL and Grafana. Integrated CRM systems and handled predictive dialers.",
      },
    ]);
  }, []);

  const toggleLanguage = () =>
    setLanguage((prevLang) => (prevLang === "en" ? "pt" : "en"));
  const toggleDarkMode = () => setDarkMode((prevMode) => !prevMode);

  const translations = useMemo(
    () => ({
      en: {
        greeting: "Hi, I'm Jean 😶‍🌫️",
        role: "Fullstack Developer",
        description:
          "A fullstack software engineer specialized in building high-quality mobile applications and websites.",
        aboutMe: "About Me",
        aboutMeText:
          "I'm a passionate Fullstack Developer from Brazil, skilled in both front-end and back-end technologies. I blend technical expertise with a strong design sense to build scalable and visually engaging applications.",
        workExperience: "Work Experience",
        sideProjects: "Side Projects",
        downloadCV: "Download CV",
        skills: "Skills",
        contact: "Contact",
        name: "Name",
        email: "Email",
        message: "Message",
        send: "Send Message",
        availability: "Available for new projects",
        viewWork: "View my work",
      },
      pt: {
        greeting: "Olá, eu sou Jean 😶‍🌫️",
        role: "Desenvolvedor Fullstack",
        description:
          "Um engenheiro de software fullstack especializado em construir aplicativos móveis e sites de alta qualidade.",
        aboutMe: "Sobre Mim",
        aboutMeText:
          "Sou um Desenvolvedor Fullstack apaixonado do Brasil, habilidoso em tecnologias front-end e back-end. Combino expertise técnica com um forte senso de design para construir aplicações escaláveis e visualmente atraentes.",
        workExperience: "Experiência de Trabalho",
        sideProjects: "Projetos Paralelos",
        downloadCV: "Baixar CV",
        skills: "Habilidades",
        contact: "Contato",
        name: "Nome",
        email: "E-mail",
        message: "Mensagem",
        send: "Enviar Mensagem",
        availability: "Disponível para novos projetos",
        viewWork: "Veja meu trabalho",
      },
    }),
    []
  );

  const skills = useMemo(
    () => [
      "Next.js",
      "TypeScript",
      "Laravel",
      "PHP",
      "C#",
      "Tailwind CSS",
      "Node.js",
      "PostgreSQL",
      "MySQL",
      "Redux",
      "Push Notifications",
    ],
    []
  );

  const currentYear = new Date().getFullYear();

  return (
    <div
      className={`min-h-screen ${
        darkMode ? "bg-gray-950 text-white" : "bg-white text-gray-900"
      } transition-colors duration-300 relative overflow-hidden`}
    >
      <div className="absolute inset-0 z-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="dots"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="2" cy="2" r="1" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      <motion.header
        className={`fixed top-4 left-1/3 transform -translate-x-1/4 z-50 flex align-items-center justify-center ${
          darkMode ? "bg-gray-900" : "bg-white"
        } rounded-full shadow-lg`}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <nav className="px-1 py-3 w-full">
          <motion.ul
            className="flex space-x-2 sm:space-x-4 items-center justify-center"
            variants={stagger}
            initial="hidden"
            animate="visible"
          >
            {["about", "experience", "projects", "skills", "contact"].map(
              (item) => (
                <NavItem
                  key={item}
                  href={`#${item}`}
                  text={
                    translations[language][
                      item === "about"
                        ? "aboutMe"
                        : item === "experience"
                        ? "workExperience"
                        : item === "projects"
                        ? "sideProjects"
                        : item === "skills"
                        ? "skills"
                        : "contact"
                    ]
                  }
                  darkMode={darkMode}
                />
              )
            )}
            <motion.li variants={fadeInUp}>
              <Button
                onClick={toggleLanguage}
                variant="ghost"
                size="sm"
                className={`${
                  darkMode
                    ? "text-gray-300 hover:text-white"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {language === "en" ? "PT" : "EN"}
              </Button>
            </motion.li>
            <motion.li variants={fadeInUp}>
              <Button
                onClick={toggleDarkMode}
                variant="ghost"
                size="sm"
                className={`${
                  darkMode
                    ? "text-gray-300 hover:text-white"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {darkMode ? <FaSun /> : <FaMoon />}
              </Button>
            </motion.li>
          </motion.ul>
        </nav>
      </motion.header>

      <main className="pt-10 relative z-10">
        <section className="min-h-screen flex flex-col justify-center items-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <img
              src={user?.avatar_url}
              alt="Jean Carlo"
              className="w-32 h-32 rounded-full border-4 border-blue-500 shadow-lg"
              loading="lazy"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-4"
          >
            <span
              className={`${
                darkMode
                  ? "bg-green-800 text-green-200"
                  : "bg-green-100 text-green-800"
              } text-xs font-medium px-2.5 py-0.5 rounded-full`}
            >
              {translations[language].availability}
            </span>
          </motion.div>
          <AnimatePresence mode="wait">
            <motion.h1
              key={language}
              className="text-4xl md:text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {translations[language].greeting}
            </motion.h1>
          </AnimatePresence>
          <motion.h2
            className={`text-xl md:text-2xl mb-4 ${
              darkMode ? "text-blue-400" : "text-blue-600"
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {translations[language].role}
          </motion.h2>
          <motion.p
            className={`text-lg mb-8 max-w-2xl ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {translations[language].description}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <Button
              variant="default"
              size="lg"
              className="bg-blue-600 text-white hover:bg-blue-700"
              onClick={() => {
                // Navegar para a seção de trabalhos
                const section = document.getElementById("projects");
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              {translations[language].viewWork}
            </Button>

            <Button
              variant="outline"
              size="lg"
              className={`${
                darkMode
                  ? "border-white text-blue-700"
                  : "border-blue-600 text-blue-600 hover hover:bg-blue-50"
              }`}
              onClick={() => {
                // Navegar para a seção de contato
                const section = document.getElementById("contact");
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              {translations[language].contact}
            </Button>
          </motion.div>
        </section>

        <motion.section
          id="about"
          className="py-20"
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          <div className="container mx-auto px-4">
            <h2
              className={`text-3xl font-bold mb-8 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              {translations[language].aboutMe}
            </h2>
            <p
              className={`text-xl leading-relaxed max-w-3xl mx-auto ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              {translations[language].aboutMeText}
            </p>
          </div>
        </motion.section>

        <motion.section
          id="experience"
          className={`py-20 ${darkMode ? "bg-gray-900" : "bg-gray-100"}`}
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={stagger}
        >
          <div className="container mx-auto px-4">
            <h2
              className={`text-3xl font-bold mb-8 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              {translations[language].workExperience}
            </h2>
            {workExperience.map((exp) => (
              <motion.div key={exp.id} variants={fadeInUp}>
                <Card
                  className={`mb-8 ${
                    darkMode
                      ? "bg-gray-800 text-white"
                      : "bg-white text-gray-900"
                  }`}
                >
                  <CardHeader>
                    <CardTitle
                      className={darkMode ? "text-blue-400" : "text-blue-600"}
                    >
                      {exp.company}
                    </CardTitle>
                    <CardDescription
                      className={darkMode ? "text-gray-300" : "text-gray-600"}
                    >
                      {exp.role} | {exp.period}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className={darkMode ? "text-gray-300" : "text-gray-600"}>
                      {language === "en"
                        ? exp.description
                        : "Forneceu suporte para a plataforma VoIP 3CX, desenvolveu APIs Web e otimizou o processamento de sites. Construiu e estilizou páginas web usando React.js e Tailwind CSS, e criou dashboards com SQL e Grafana. Integrou sistemas CRM e gerenciou discadores preditivos."}
                    </p>
                    <div className="mt-4">
                      <h4
                        className={`font-semibold mb-2 ${
                          darkMode ? "text-white" : "text-gray-900"
                        }`}
                      >
                        Technologies:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className={`px-2 py-1 rounded-full text-sm ${
                              darkMode
                                ? "bg-gray-700 text-white"
                                : "bg-blue-100 text-blue-800"
                            }`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="projects"
          className="py-20"
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={stagger}
        >
          <div className="container mx-auto px-4">
            <h2
              className={`text-3xl font-bold mb-8 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              {translations[language].sideProjects}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {repos.map((repo) => (
                <motion.div key={repo.id} variants={fadeInUp}>
                  <Card
                    className={`h-full flex flex-col ${
                      darkMode
                        ? "bg-transparent text-white"
                        : "bg-white text-gray-900"
                    }`}
                  >
                    <CardHeader>
                      <CardTitle
                        className={darkMode ? "text-blue-400" : "text-blue-600"}
                      >
                        {repo.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p
                        className={darkMode ? "text-gray-200" : "text-gray-600"}
                      >
                        {repo.description}
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Button
                        variant="outline"
                        asChild
                        className={`w-full ${
                          darkMode
                            ? "border-white text-white bg-zinc-950"
                            : "border-blue-600 text-blue-600 hover:bg-blue-50"
                        }`}
                      >
                        <a
                          href={repo.html_url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View on GitHub
                        </a>
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          id="skills"
          className={`py-20 ${darkMode ? "bg-gray-900" : "bg-gray-100"}`}
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={stagger}
        >
          <div className="container mx-auto px-4">
            <h2
              className={`text-3xl font-bold mb-8 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              {translations[language].skills}
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className={`px-4 py-2 rounded-full text-sm ${
                    darkMode
                      ? "bg-gray-800 text-white"
                      : "bg-white text-gray-800"
                  }`}
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          id="contact"
          className="py-20"
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          <div className="container mx-auto px-4">
            <h2
              className={`text-3xl font-bold mb-8 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              {translations[language].contact}
            </h2>
            <form className="max-w-md mx-auto">
              <div className="mb-4">
                <Input
                  type="text"
                  placeholder={translations[language].name}
                  className={`w-full ${
                    darkMode
                      ? "bg-gray-800 text-white"
                      : "bg-white text-gray-900"
                  }`}
                />
              </div>
              <div className="mb-4">
                <Input
                  type="email"
                  placeholder={translations[language].email}
                  className={`w-full ${
                    darkMode
                      ? "bg-gray-800 text-white"
                      : "bg-white text-gray-900"
                  }`}
                />
              </div>
              <div className="mb-4">
                <Textarea
                  placeholder={translations[language].message}
                  className={`w-full ${
                    darkMode
                      ? "bg-gray-800 text-white"
                      : "bg-white text-gray-900"
                  }`}
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-blue-600 text-white hover:bg-blue-700"
              >
                {translations[language].send}
              </Button>
            </form>
          </div>
        </motion.section>
      </main>

      <footer
        className={`${
          darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
        } py-8 relative z-10`}
      >
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="mb-4 md:mb-0">
            &copy; {currentYear} Jean Carlo. All rights reserved.
          </p>
          <div className="flex space-x-4">
            {[
              { icon: FaGithub, href: "https://github.com/Jeanikt" },
              {
                icon: FaLinkedin,
                href: "https://www.linkedin.com/in/jeanfoliveira",
              },
              { icon: FaInstagram, href: "https://www.instagram.com/jewknd/" },
            ].map((social, index) => (
              <SocialIcon
                key={index}
                Icon={social.icon}
                href={social.href}
                darkMode={darkMode}
              />
            ))}
          </div>
        </div>
      </footer>

      <motion.a
        href="https://wa.me/21979369780"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300 z-20"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <FaWhatsapp className="text-2xl" />
      </motion.a>
    </div>
  );
}
