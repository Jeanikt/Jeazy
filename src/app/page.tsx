"use client";

import React, { useEffect, useState } from "react";
import { Heading, Text, Flex, Button, Grid, Icon } from "@/once-ui/components";
import { FaLinkedinIn, FaInstagram, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

const textAnimation = `
  @keyframes gradientAnimation {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  
  .gradient-text {
    background: linear-gradient(45deg, #00bcd4, #8e2de2);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: gradientAnimation 3s ease infinite;
    font-weight: bold;
  }
`;

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

const truncateDescription = (
  description: string | null,
  maxLength: number = 65
): string => {
  if (!description) return "No description available";
  return description.length > maxLength
    ? `${description.substring(0, maxLength)}...`
    : description;
};

export default function Component() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [workExperience, setWorkExperience] = useState<WorkExperience[]>([]);
  const [language, setLanguage] = useState<"en" | "pt">("en");

  useEffect(() => {
    // Fetch GitHub user data
    fetch("https://api.github.com/users/Jeanikt")
      .then((response) => response.json())
      .then((data: GitHubUser) => setUser(data))
      .catch((error) =>
        console.error("Error fetching GitHub user data:", error)
      );

    // Fetch repositories from GitHub API
    fetch("https://api.github.com/users/Jeanikt/repos")
      .then((response) => response.json())
      .then((data: Repo[]) => {
        // Filter specific repositories
        const filteredRepos = data.filter((repo) =>
          ["Flower", "WebCrawler", "Fiscalis", "myBazaar"].includes(repo.name)
        );
        setRepos(filteredRepos);
      })
      .catch((error) => console.error("Error fetching GitHub repos:", error));

    // Set work experience data
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
          "C#",
          "UI/UX",
        ],
        description:
          "Provided support for the 3CX VoIP platform, developed Web APIs, and optimized site processing. Built and styled web pages using React.js and Tailwind CSS, and created dashboards with SQL and Grafana. Integrated CRM systems and handled predictive dialers.",
      },
    ]);
  }, []);

  const getCurrentYear = () => new Date().getFullYear();

  const scrollToAboutMe = () => {
    const aboutMeSection = document.getElementById("about-me");
    if (aboutMeSection) {
      aboutMeSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === "en" ? "pt" : "en"));
  };

  const downloadResume = () => {
    const resumeFileName =
      language === "en"
        ? "Jean_Carlo_de_Oliveira_Resume.pdf"
        : "Jean_Carlo_de_Oliveira_Curriculo.pdf";
    const resumeUrl = `/${resumeFileName}`;
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = resumeFileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const translations = {
    en: {
      readDocs: "Read docs",
      aboutMe: "About Me",
      aboutMeText:
        "I'm a passionate Fullstack Developer from Brazil, skilled in both front-end and back-end technologies. I blend technical expertise with a strong design sense to build scalable and visually engaging applications. My goal is to craft seamless user experiences and embrace new challenges with enthusiasm. As a coffee enthusiast, I love fueling my creativity with a great cup of coffee.",
      workExperience: "Work Experience",
      sideProjects: "Side Projects",
      downloadCV: "Download CV",
    },
    pt: {
      readDocs: "Ler documentação",
      aboutMe: "Sobre Mim",
      aboutMeText:
        "Sou um Desenvolvedor Fullstack apaixonado do Brasil, habilidoso em tecnologias front-end e back-end. Combino expertise técnica com um forte senso de design para construir aplicações escaláveis e visualmente atraentes. Meu objetivo é criar experiências de usuário perfeitas e abraçar novos desafios com entusiasmo. Como entusiasta do café, adoro alimentar minha criatividade com uma ótima xícara de café.",
      workExperience: "Experiência de Trabalho",
      sideProjects: "Projetos Paralelos",
      downloadCV: "Baixar CV",
    },
  };

  return (
    <>
      <style>{`
        ${textAnimation}
        
        @media (max-width: 768px) {
          .mobile-stack {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }
          
          .mobile-full-width {
            width: 100%;
          }
          
          .mobile-center {
            justify-content: center;
          }

          .avatar-image {
            width: 150px !important;
            height: 150px !important;
          }
        }
      `}</style>
      <Flex
        style={{
          backgroundImage:
            "radial-gradient(ellipse at top left, #46015F 0%, #0000 45%)",
        }}
        fillWidth
        paddingTop="l"
        paddingX="l"
        direction="column"
        alignItems="center"
        flex={1}
      >
        <Flex
          justifyContent="flex-end"
          fillWidth
          gap="m"
          marginBottom="m"
          className="mobile-center"
        >
          <Button onClick={toggleLanguage} variant="secondary" size="s">
            {language === "en" ? "PT" : "EN"}
          </Button>
          <Button onClick={downloadResume} variant="secondary" size="s">
            {translations[language].downloadCV}
          </Button>
        </Flex>
        <Flex
          as="section"
          overflow="hidden"
          fillWidth
          minHeight="0"
          maxWidth={64}
          direction="column"
          alignItems="center"
          flex={1}
        >
          <Flex
            as="main"
            direction="column"
            justifyContent="center"
            fillWidth
            fillHeight
            padding="l"
            gap="l"
          >
            <Flex
              mobileDirection="column"
              fillWidth
              gap="24"
              className="mb-48 mobile-stack"
            >
              <Flex
                position="relative"
                fillWidth
                paddingTop="16"
                paddingX="xl"
                direction="row"
                alignItems="center"
                gap="24"
                className="mobile-stack"
              >
                {user && (
                  <img
                    src={user.avatar_url}
                    alt={`${user.name}'s avatar`}
                    className="avatar-image"
                    style={{
                      borderRadius: "50%",
                      width: "300px",
                      height: "300px",
                      maxWidth: "100%",
                    }}
                  />
                )}
                <Flex
                  direction="column"
                  justifyContent="center"
                  gap="24"
                  className="mobile-full-width"
                >
                  <Heading variant="display-strong-s" className="mobile-center">
                    <span>Hi, I'm Jean 😶‍🌫️</span>
                    <br />
                    <span className="gradient-text">Fullstack Developer</span>
                  </Heading>
                  <Button
                    onClick={scrollToAboutMe}
                    suffixIcon="chevronRight"
                    variant="secondary"
                    style={{
                      backgroundColor: "transparent",
                      border: "1px solid #FFFFFF",
                    }}
                  >
                    {translations[language].readDocs}
                  </Button>
                </Flex>
              </Flex>
            </Flex>

            {/* About Me Section */}
            <Flex
              id="about-me"
              as="section"
              fillWidth
              direction="column"
              alignItems="start"
              gap="l"
              padding="l"
            >
              <Heading variant="display-strong-xs">
                {translations[language].aboutMe}
              </Heading>
              <Text variant="body-default-m">
                {translations[language].aboutMeText}
              </Text>
            </Flex>

            {/* Work Experience Section */}
            <Flex
              as="section"
              fillWidth
              direction="column"
              alignItems="start"
              gap="l"
              padding="l"
            >
              <Heading variant="display-strong-xs">
                {translations[language].workExperience}
              </Heading>
              <Grid
                radius="l"
                border="neutral-medium"
                borderStyle="solid-1"
                tabletColumns="1col"
                mobileColumns="1col"
                fillWidth
              >
                {workExperience.map((experience) => (
                  <Flex
                    key={experience.id}
                    fillWidth
                    padding="l"
                    direction="column"
                    gap="s"
                  >
                    <Heading variant="display-strong-s">
                      {experience.company}
                    </Heading>
                    <Text variant="body-strong-m">{experience.role}</Text>
                    <Text variant="body-default-s" onBackground="neutral-weak">
                      {experience.period}
                    </Text>
                    <Text variant="body-default-s" onBackground="neutral-weak">
                      {experience.description}
                    </Text>
                    <Text variant="body-default-s" onBackground="neutral-weak">
                      Technologies: {experience.technologies.join(", ")}
                    </Text>
                  </Flex>
                ))}
              </Grid>
            </Flex>

            {/* Side Projects Section */}
            <Flex
              as="section"
              fillWidth
              direction="column"
              alignItems="start"
              gap="l"
              padding="l"
            >
              <Heading variant="display-strong-xs">
                {translations[language].sideProjects}
              </Heading>
              <Grid
                radius="l"
                border="neutral-medium"
                borderStyle="solid-1"
                columns="repeat(auto-fit, minmax(250px, 1fr))"
                gap="m"
                fillWidth
              >
                {repos.map((repo) => (
                  <Link
                    target="_blank"
                    style={{ padding: "var(--responsive-space-l)" }}
                    key={repo.id}
                    href={repo.html_url}
                  >
                    <Flex fillWidth paddingY="8" gap="8" direction="column">
                      <Flex fillWidth gap="12" alignItems="center">
                        <Text
                          variant="body-strong-m"
                          onBackground="neutral-strong"
                        >
                          {repo.name}
                        </Text>
                        <Icon size="s" name="arrowUpRight" />
                      </Flex>
                      <Text
                        variant="body-default-s"
                        onBackground="neutral-weak"
                      >
                        {truncateDescription(repo.description)}
                      </Text>
                    </Flex>
                  </Link>
                ))}
              </Grid>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          as="footer"
          fillWidth
          paddingX="l"
          paddingY="m"
          justifyContent="space-between"
          className="mobile-stack"
        >
          <Text
            variant="body-default-s"
            onBackground="neutral-weak"
            className="mobile-center"
          >
            © {getCurrentYear()} Jeazy, <a></a>
            <Link href="https://github.com/Jeanikt/Jeazy/blob/main/LICENSE">
              MIT License
            </Link>
          </Text>
          <Flex gap="12" className="mobile-center">
            <Button
              href="https://github.com/Jeanikt/Jeazy.git"
              prefixIcon="github"
              size="s"
              variant="tertiary"
            >
              GitHub
            </Button>
            <Button
              href="https://www.linkedin.com/in/jeanfoliveira"
              size="s"
              variant="tertiary"
            >
              <span className="flex items-center">
                <FaLinkedinIn className="mr-4" />
                LinkedIn
              </span>
            </Button>
            <Button
              href="https://www.instagram.com/jewknd/"
              prefixIcon="gram"
              size="s"
              variant="tertiary"
            >
              <span className="flex items-center">
                <FaInstagram className="mr-4" />
                Instagram
              </span>
            </Button>
          </Flex>
        </Flex>
      </Flex>
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/21979369780"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: "fixed",
          bottom: "16px",
          right: "16px",
          backgroundColor: "transparent",
          borderRadius: "50%",
          padding: "12px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          color: "#25D366",
          fontSize: "24px",
          textAlign: "center",
          zIndex: 1000,
        }}
      >
        <FaWhatsapp style={{ color: "#25D366" }} />
      </a>
    </>
  );
}
