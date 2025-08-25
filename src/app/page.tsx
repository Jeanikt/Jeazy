"use client";

import { useState } from "react";
import { ExternalLink, MessageCircle, Globe, Menu, X } from "lucide-react";

interface Project {
  id: string;
  title: string;
  description: string;
  repoUrl: string;
  liveUrl?: string;
  technologies: string[];
}

export default function Home() {
  const [isPortuguese, setIsPortuguese] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedTech, setSelectedTech] = useState<string | null>(null);

  const toggleLanguage = () => {
    setIsPortuguese(!isPortuguese);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const projects: Project[] = [
    {
      id: "01",
      title: isPortuguese ? "Bot de Busca de Vagas" : "Job Search Bot",
      description: isPortuguese
        ? "Um assistente automatizado que ajuda desenvolvedores a encontrar oportunidades de emprego. Possui notificações por e-mail, filtragem por localização e recursos avançados de busca com opção de assinatura premium."
        : "An automated assistant that helps developers find job opportunities. Features email notifications, location filtering, and advanced search capabilities with a premium subscription option.",
      repoUrl: "https://github.com/Jeanikt/job-search-bot",
      technologies: ["Node.js", "React", "Express", "MySQL"],
    },
    {
      id: "02",
      title: isPortuguese ? "Conversor de Moedas" : "Currency Converter",
      description: isPortuguese
        ? "Um conversor de moedas em tempo real construído com Next.js e React, apresentando múltiplas moedas, modo escuro e suporte a vários idiomas. Utiliza a API Currency Freaks para taxas de câmbio ao vivo."
        : "A real-time currency converter built with Next.js and React, featuring multiple currencies, dark mode, and multi-language support. Uses Currency Freaks API for live exchange rates.",
      repoUrl: "https://github.com/Jeanikt/currency-converter",
      liveUrl: "https://converter.gpstech.com.br",
      technologies: ["Next.js", "React", "API"],
    },
    {
      id: "03",
      title: "UniConnect",
      description: isPortuguese
        ? "Uma rede social focada em universidades que permite aos estudantes se conectarem, trocarem mensagens e criarem comunidades de cursos. Construída com React.js, Node.js e Supabase."
        : "A university-focused social network enabling students to connect, exchange messages, and create course communities. Built with React.js, Node.js, and Supabase.",
      repoUrl: "https://github.com/Jeanikt/uniconnect",
      liveUrl: "https://uniconnect.gpstech.com.br",
      technologies: ["React.js", "Node.js", "Supabase"],
    },
    {
      id: "04",
      title: "Elephantgun",
      description: isPortuguese
        ? "Plataforma de e-commerce de uma marca ecologicamente consciente que vende ECObags únicas e pintadas à mão. Apresenta vitrines de produtos e uma mensagem de impacto ambiental."
        : "An eco-conscious brand's e-commerce platform selling unique, hand-painted ECObags. Features product showcases and an environmental impact message.",
      repoUrl: "https://github.com/Jeanikt/elephantgun",
      liveUrl: "https://elephantgun.vercel.app",
      technologies: ["React", "Node.js"],
    },
    {
      id: "05",
      title: "Openzap",
      description: isPortuguese
        ? "Uma plataforma abrangente de gerenciamento de mensagens do WhatsApp desenvolvida com Node.js, Express, React e Baileys. Possui recursos avançados de automação e um frontend interativo."
        : "A comprehensive WhatsApp message management platform developed with Node.js, Express, React, and Baileys. Features advanced automation capabilities and an interactive frontend.",
      repoUrl: "https://github.com/Jeanikt/openzap",
      technologies: ["Node.js", "Express", "React", "Baileys"],
    },
    {
      id: "06",
      title: isPortuguese
        ? "Sistema de Gestão Hoteleira"
        : "Hotel Management System",
      description: isPortuguese
        ? "Solução completa arquitetada e desenvolvida usando Node.js, Express, Next.js e TypeScript. Inclui testes abrangentes com mais de 90% de cobertura."
        : "End-to-end solution architected and developed using Node.js, Express, Next.js, and TypeScript. Includes comprehensive testing with over 90% coverage.",
      repoUrl: "https://github.com/Jeanikt/hotel-management-system",
      liveUrl: "https://hotel-demo.opentoolsbrasil.com.br",
      technologies: ["Node.js", "Express", "Next.js", "TypeScript"],
    },
    {
      id: "07",
      title: "HUB EXPRESSO",
      description: isPortuguese
        ? "Plataforma para Valorant com pontuação de partidas, lobbies e filas por elo, com integrações de pagamento. Backend com Fastify/Node.js, TypeScript, Jest e Prisma; frontend com React.js e Clerk."
        : "Platform for Valorant with match scoring, lobbies, and rank-based queues, including payment integrations. Backend with Fastify/Node.js, TypeScript, Jest, and Prisma; frontend with React.js and Clerk.",
      repoUrl: "https://github.com/Jeanikt/hub-expresso",
      liveUrl: "https://hubexpresso.vercel.app",
      technologies: [
        "Fastify",
        "Node.js",
        "TypeScript",
        "React.js",
        "Prisma",
        "Clerk",
      ],
    },
    {
      id: "08",
      title: "OpenBox Light",
      description: isPortuguese
        ? "Aplicativo mobile cross-platform para gerenciamento de estoque, desenvolvido com React Native e Expo. Publicado na App Store e Google Play, com builds automatizados via Expo EAS."
        : "Cross-platform mobile app for inventory management, developed with React Native and Expo. Published on the App Store and Google Play, with automated builds via Expo EAS.",
      repoUrl: "https://github.com/Jeanikt/openbox-light",
      technologies: ["React Native", "Expo", "TypeScript"],
    },
  ];

  const technologies = Array.from(
    new Set(projects.flatMap((p) => p.technologies))
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white font-mono relative">
      <div className="absolute inset-0 pointer-events-none animate-dots-background"></div>

      <header className="fixed top-0 left-0 right-0 p-4 flex justify-between items-center z-50 bg-black/80 backdrop-blur-sm">
        <div className="text-sm tracking-wider animate-fade-in">JEAZY.DEV</div>
        <button
          onClick={toggleMenu}
          className="lg:hidden text-white focus:outline-none"
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
          <button
            onClick={toggleLanguage}
            className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-full transition-colors"
            aria-label={
              isPortuguese ? "Switch to English" : "Mudar para Português"
            }
          >
            <Globe className="w-5 h-5" />
            <span className="text-sm">
              {isPortuguese ? "Switch to English" : "Mudar para Português"}
            </span>
          </button>
        </div>
        <nav
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } lg:flex flex-col lg:flex-row lg:space-x-6 absolute lg:static top-16 left-0 right-0 bg-black/90 lg:bg-transparent p-4 lg:p-0`}
        >
          {[
            isPortuguese ? "Sobre" : "About",
            isPortuguese ? "Experiência" : "Experience",
            isPortuguese ? "Projetos" : "Projects",
            isPortuguese ? "Habilidades" : "Skills",
            isPortuguese ? "Formação" : "Education",
            isPortuguese ? "Contato" : "Contact",
          ].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm hover:text-gray-300 transition-colors py-2 lg:py-0"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </nav>
      </header>

      <main className="container mx-auto px-4 pt-24">
        <div className="border border-gray-800 rounded-lg p-4 lg:p-8 my-8 bg-gray-900/50">
          <section id={isPortuguese ? "sobre" : "about"} className="mb-12">
            <h1 className="text-4xl font-bold mb-4 animate-fade-in-up bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Jean Carlo de Oliveira
            </h1>
            <h2 className="text-xl text-gray-400 mb-6 animate-fade-in-up">
              {isPortuguese
                ? "Engenheiro de Software Pleno"
                : "Mid-level Software Engineer"}
            </h2>
            <p className="text-gray-300 mb-4 animate-fade-in-up">
              {isPortuguese
                ? "Sou um Engenheiro de Software Pleno com mais de 2 anos de experiência em desenvolvimento full-stack, DevOps e arquitetura escalável. Especializado em C# .NET 8, React.js, React Native e Node.js, com expertise em integrações de CRMs, pagamentos e autenticação (Clerk). Tenho forte experiência em PostgreSQL, CI/CD com Docker, AWS e Linux. Publiquei aplicativos mobile na App Store e Google Play e desenvolvi o HUB EXPRESSO para Valorant, uma plataforma escalável com foco em performance e segurança."
                : "I'm a Mid-level Software Engineer with over 2 years of experience in full-stack development, DevOps, and scalable architecture. Specialized in C# .NET 8, React.js, React Native, and Node.js, with expertise in CRM integrations, payment systems, and authentication (Clerk). I have strong experience in PostgreSQL, CI/CD with Docker, AWS, and Linux. I published mobile apps on the App Store and Google Play and developed HUB EXPRESSO for Valorant, a scalable platform focused on performance and security."}
            </p>
            <p className="text-gray-300 mb-4 animate-fade-in-up">
              {isPortuguese
                ? "Idiomas: Português (Nativo), Inglês (Avançado)"
                : "Languages: Portuguese (Native), English (Advanced)"}
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in-up">
              <a
                href="/curriculo-jean-carlo.pdf"
                download
                className="flex items-center text-gray-400 hover:text-white transition-colors bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-full"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                {isPortuguese ? "Baixar Currículo" : "Download Resume"}
              </a>
              <a
                href="https://github.com/jeanikt"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-400 hover:text-white transition-colors"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/jeanfoliveira"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-400 hover:text-white transition-colors"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                LinkedIn
              </a>
              <a
                href="mailto:jeandev003@gmail.com"
                className="flex items-center text-gray-400 hover:text-white transition-colors"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Email
              </a>
            </div>
          </section>

          <section
            id={isPortuguese ? "experiencia" : "experience"}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold mb-6 animate-fade-in-up">
              {isPortuguese
                ? "Experiência Profissional"
                : "Professional Experience"}
            </h2>
            <div className="animate-fade-in">
              <h3 className="text-xl font-semibold animate-slide-in-left">
                Inovacomm
              </h3>
              <p className="text-gray-400">
                {isPortuguese
                  ? "Engenheiro de Software Pleno"
                  : "Mid-level Software Engineer"}
              </p>
              <p className="text-sm text-gray-500 mb-4">
                {isPortuguese
                  ? "Março 2023 - Presente"
                  : "March 2023 - Present"}
              </p>
              <ul className="list-disc list-inside text-sm text-gray-300 space-y-2">
                <li>
                  {isPortuguese
                    ? "Desenvolvi APIs RESTful em C# .NET 8 para integrações com CRMs (Movidesk, RDStation, Stel Order), otimizando fluxos e reduzindo latência em 30%."
                    : "Developed RESTful APIs in C# .NET 8 for CRM integrations (Movidesk, RDStation, Stel Order), optimizing workflows and reducing latency by 30%."}
                </li>
                <li>
                  {isPortuguese
                    ? "Arquitetei aplicativos web escaláveis com React.js, Next.js e .NET Core para suportar alto tráfego."
                    : "Architected scalable web applications with React.js, Next.js, and .NET Core to handle high traffic."}
                </li>
                <li>
                  {isPortuguese
                    ? "Modelei bancos de dados PostgreSQL e MySQL para milhares de transações diárias, garantindo performance e integridade."
                    : "Modeled PostgreSQL and MySQL databases for thousands of daily transactions, ensuring performance and integrity."}
                </li>
                <li>
                  {isPortuguese
                    ? "Integrai VoIP (3CX, WebRTC, SIP) com Microsoft Teams para comunicações em tempo real."
                    : "Integrated VoIP (3CX, WebRTC, SIP) with Microsoft Teams for real-time communications."}
                </li>
                <li>
                  {isPortuguese
                    ? "Implementei CI/CD com Docker, reduzindo o tempo de deploy de dias para horas, e gerenciei servidores AWS/Linux."
                    : "Implemented CI/CD with Docker, reducing deployment time from days to hours, and managed AWS/Linux servers."}
                </li>
                <li>
                  {isPortuguese
                    ? "Desenvolvi mensageria com Node.js, WebSockets e Baileys para automação de mensagens no WhatsApp."
                    : "Developed messaging systems with Node.js, WebSockets, and Baileys for WhatsApp automation."}
                </li>
                <li>
                  {isPortuguese
                    ? "Criei dashboards em Grafana e Power BI para análise de dados e monitoramento de sistemas."
                    : "Created dashboards in Grafana and Power BI for data analysis and system monitoring."}
                </li>
                <li>
                  {isPortuguese
                    ? "Liderei o desenvolvimento do HUB EXPRESSO para Valorant, uma plataforma escalável com pontuação de partidas e integrações de pagamento."
                    : "Led the development of HUB EXPRESSO for Valorant, a scalable platform with match scoring and payment integrations."}
                </li>
                <li>
                  {isPortuguese
                    ? "Desenvolvi o app mobile OpenBox Light em React Native com Expo, publicado na App Store e Google Play."
                    : "Developed the OpenBox Light mobile app in React Native with Expo, published on the App Store and Google Play."}
                </li>
              </ul>
            </div>
          </section>

          <section
            id={isPortuguese ? "projetos" : "projects"}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold mb-6 animate-fade-in-up">
              {isPortuguese ? "Projetos em Destaque" : "Featured Projects"}
            </h2>
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">
                {isPortuguese
                  ? "Filtrar por Tecnologia"
                  : "Filter by Technology"}
              </h3>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedTech(null)}
                  className={`px-4 py-2 rounded-full text-sm transition-colors ${
                    selectedTech === null
                      ? "bg-blue-600 text-white"
                      : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                  }`}
                >
                  {isPortuguese ? "Todos" : "All"}
                </button>
                {technologies.map((tech) => (
                  <button
                    key={tech}
                    onClick={() => setSelectedTech(tech)}
                    className={`px-4 py-2 rounded-full text-sm transition-colors ${
                      selectedTech === tech
                        ? "bg-blue-600 text-white"
                        : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                    }`}
                  >
                    {tech}
                  </button>
                ))}
              </div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects
                .filter(
                  (project) =>
                    !selectedTech || project.technologies.includes(selectedTech)
                )
                .map((project) => (
                  <div
                    key={project.id}
                    className="relative animate-fade-in group p-4 border border-gray-800 rounded-lg hover:shadow-lg transition-shadow"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-lg font-semibold">
                          {project.title}
                        </h3>
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-gray-400 hover:text-white transition-colors"
                          >
                            {isPortuguese
                              ? "Ver Demo ao Vivo"
                              : "View Live Demo"}
                          </a>
                        )}
                      </div>
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-gray-400 hover:text-white transition-colors"
                        aria-label={`${
                          isPortuguese
                            ? "Ver código-fonte de"
                            : "View source code for"
                        } ${project.title} ${
                          isPortuguese ? "no GitHub" : "on GitHub"
                        }`}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                    <p className="text-sm text-gray-400 mt-2">
                      {project.description}
                    </p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
            </div>
          </section>

          <section
            id={isPortuguese ? "habilidades" : "skills"}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold mb-6 animate-fade-in-up">
              {isPortuguese ? "Habilidades Técnicas" : "Technical Skills"}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="animate-fade-in">
                <h3 className="text-lg font-semibold mb-2">
                  {isPortuguese ? "Linguagens" : "Languages"}
                </h3>
                <p className="text-sm text-gray-300">
                  C#, JavaScript, TypeScript, Python, SQL, PHP
                </p>
              </div>
              <div className="animate-fade-in">
                <h3 className="text-lg font-semibold mb-2">Frontend/Mobile</h3>
                <p className="text-sm text-gray-300">
                  React.js, Next.js, React Native, Expo, HTML5, CSS3
                </p>
              </div>
              <div className="animate-fade-in">
                <h3 className="text-lg font-semibold mb-2">Backend</h3>
                <p className="text-sm text-gray-300">
                  .NET Core/8, Node.js, Express, Fastify, Laravel, Prisma
                </p>
              </div>
              <div className="animate-fade-in">
                <h3 className="text-lg font-semibold mb-2">
                  {isPortuguese ? "Bancos de Dados" : "Databases"}
                </h3>
                <p className="text-sm text-gray-300">
                  PostgreSQL, MySQL, SQL Server
                </p>
              </div>
              <div className="animate-fade-in">
                <h3 className="text-lg font-semibold mb-2">DevOps/Cloud</h3>
                <p className="text-sm text-gray-300">
                  AWS, Docker, Linux, Git, CI/CD
                </p>
              </div>
              <div className="animate-fade-in">
                <h3 className="text-lg font-semibold mb-2">
                  {isPortuguese ? "Outros" : "Other"}
                </h3>
                <p className="text-sm text-gray-300">
                  VoIP (3CX, WebRTC, SIP), Baileys, Clerk, WebSockets, Grafana,
                  Power BI, Jest, PHPUnit
                </p>
              </div>
            </div>
          </section>

          <section
            id={isPortuguese ? "formacao" : "education"}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold mb-6 animate-fade-in-up">
              {isPortuguese ? "Formação Acadêmica" : "Education"}
            </h2>
            <div className="animate-fade-in">
              <h3 className="text-lg font-semibold">
                Bacharelado em Ciência da Computação
              </h3>
              <p className="text-sm text-gray-400">Faculdade Anhanguera</p>
              <p className="text-sm text-gray-500">2022 - 2026</p>
            </div>
          </section>

          <section
            id={isPortuguese ? "contato" : "contact"}
            className="mt-12 lg:mt-16 pt-8 border-t border-gray-800"
          >
            <h2 className="text-2xl font-bold mb-6 animate-fade-in-up">
              {isPortuguese ? "Contato" : "Contact"}
            </h2>
            <div className="space-y-4">
              <p className="text-gray-300">
                {isPortuguese
                  ? "Sinta-se à vontade para entrar em contato através de qualquer um dos seguintes canais:"
                  : "Feel free to reach out through any of the following channels:"}
              </p>
              <div className="space-y-2">
                <a
                  href="/curriculo-jean-carlo.pdf"
                  download
                  className="flex items-center text-gray-400 hover:text-white transition-colors"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  {isPortuguese ? "Baixar Currículo" : "Download Resume"}
                </a>
                <a
                  href="https://github.com/jeanikt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-400 hover:text-white transition-colors"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/jeanfoliveira"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-400 hover:text-white transition-colors"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  LinkedIn
                </a>
                <a
                  href="mailto:jeandev003@gmail.com"
                  className="flex items-center text-gray-400 hover:text-white transition-colors"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Email: jeandev003@gmail.com
                </a>
                <a
                  href="https://wa.me/5521979369780"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-400 hover:text-white transition-colors"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp: +55 21 97936-9780
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
