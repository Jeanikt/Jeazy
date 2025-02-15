"use client";

import { useState } from "react";
import { ExternalLink, MessageCircle, Globe } from "lucide-react";
import Image, { type StaticImageData } from "next/image";
import conveter from "./img/converter.png";
import elephantgun from "./img/elephantgun.png";
import uniconnect from "./img/uniconnect.png";
import botVagas from "./img/bot-vagas.png";
import hotelManagement from "./img/hotel-management.png";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string | StaticImageData;
  repoUrl: string;
  liveUrl?: string;
}

export default function Home() {
  const [isPortuguese, setIsPortuguese] = useState(false);

  const toggleLanguage = () => {
    setIsPortuguese(!isPortuguese);
  };

  const projects: Project[] = [
    {
      id: "01",
      title: isPortuguese ? "Bot de Busca de Vagas" : "Job Search Bot",
      description: isPortuguese
        ? "Um assistente automatizado que ajuda desenvolvedores a encontrar oportunidades de emprego. Possui notificações por e-mail, filtragem por localização e recursos avançados de busca com opção de assinatura premium."
        : "An automated assistant that helps developers find job opportunities. Features email notifications, location filtering, and advanced search capabilities with a premium subscription option.",
      image: botVagas,
      repoUrl: "https://github.com/Jeanikt/job-search-bot",
    },
    {
      id: "02",
      title: isPortuguese ? "Conversor de Moedas" : "Currency Converter",
      description: isPortuguese
        ? "Um conversor de moedas em tempo real construído com Next.js e React, apresentando múltiplas moedas, modo escuro e suporte a vários idiomas. Utiliza a API Currency Freaks para taxas de câmbio ao vivo."
        : "A real-time currency converter built with Next.js and React, featuring multiple currencies, dark mode, and multi-language support. Uses Currency Freaks API for live exchange rates.",
      image: conveter,
      repoUrl: "https://github.com/Jeanikt/currency-converter",
      liveUrl: "https://converter.gpstech.com.br",
    },
    {
      id: "03",
      title: "UniConnect",
      description: isPortuguese
        ? "Uma rede social focada em universidades que permite aos estudantes se conectarem, trocarem mensagens e criarem comunidades de cursos. Construída com React.js, Node.js e Supabase."
        : "A university-focused social network enabling students to connect, exchange messages, and create course communities. Built with React.js, Node.js, and Supabase.",
      image: uniconnect,
      repoUrl: "https://github.com/Jeanikt/uniconnect",
      liveUrl: "https://uniconnect.gpstech.com.br",
    },
    {
      id: "04",
      title: "Elephantgun",
      description: isPortuguese
        ? "Plataforma de e-commerce de uma marca ecologicamente consciente que vende ECObags únicas e pintadas à mão. Apresenta vitrines de produtos e uma mensagem de impacto ambiental."
        : "An eco-conscious brand's e-commerce platform selling unique, hand-painted ECObags. Features product showcases and an environmental impact message.",
      image: elephantgun,
      repoUrl: "https://github.com/Jeanikt/elephantgun",
      liveUrl: "https://elephantgun.vercel.app",
    },
    {
      id: "05",
      title: "Openzap",
      description: isPortuguese
        ? "Uma plataforma abrangente de gerenciamento de mensagens do WhatsApp desenvolvida com Node.js, Express, React e Baileys. Possui recursos avançados de automação e um frontend interativo."
        : "A comprehensive WhatsApp message management platform developed with Node.js, Express, React, and Baileys. Features advanced automation capabilities and an interactive frontend.",
      image: "/placeholder.svg",
      repoUrl: "https://github.com/Jeanikt/openzap",
    },
    {
      id: "06",
      title: isPortuguese
        ? "Sistema de Gestão Hoteleira"
        : "Hotel Management System",
      description: isPortuguese
        ? "Solução completa arquitetada e desenvolvida usando Node.js, Express, Next.js e TypeScript. Inclui testes abrangentes com mais de 90% de cobertura."
        : "End-to-end solution architected and developed using Node.js, Express, Next.js, and TypeScript. Includes comprehensive testing with over 90% coverage.",
      image: hotelManagement,
      repoUrl: "https://github.com/Jeanikt/hotel-management-system",
      liveUrl: "https://hotel-demo.opentoolsbrasil.com.br",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-mono relative">
      <div className="absolute inset-0 pointer-events-none animate-dots-background"></div>

      <div className="fixed top-0 left-0 right-0 p-4 flex justify-between items-center z-50">
        <div className="text-sm tracking-wider animate-fade-in">JEAZY.DEV</div>
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
        <nav className="hidden lg:flex space-x-6">
          {[
            isPortuguese ? "Sobre" : "About",
            isPortuguese ? "Experiência" : "Experience",
            isPortuguese ? "Projetos" : "Projects",
            isPortuguese ? "Habilidades" : "Skills",
            isPortuguese ? "Contato" : "Contact",
          ].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm hover:text-gray-300 transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>
      </div>

      <main className="container mx-auto px-4 pt-20">
        <div className="border border-gray-800 rounded-lg p-4 lg:p-8 my-8">
          <section id={isPortuguese ? "sobre" : "about"} className="mb-12">
            <h1 className="text-3xl font-bold mb-4 animate-fade-in-up">
              Jean Carlo de Oliveira
            </h1>
            <h2 className="text-xl text-gray-400 mb-6 animate-fade-in-up">
              {isPortuguese
                ? "Engenheiro de Software Pleno"
                : "Mid-level Software Engineer"}
            </h2>
            <p className="text-gray-300 mb-4 animate-fade-in-up">
              {isPortuguese
                ? "Sou um Engenheiro de Software Pleno especializado em desenvolvimento full-stack, integrações VoIP, automação de mensagens WhatsApp e gerenciamento de APIs. Destaco-me na liderança de projetos complexos de forma independente, desde a concepção até a implementação. Com forte experiência em Node.js, React, .NET, PHP, Laravel e bancos de dados SQL, também possuo habilidades na criação de dashboards e análise de dados."
                : "I'm a Mid-level Software Engineer specializing in full-stack development, VoIP integrations, WhatsApp message automation, and API management. I excel in leading complex projects independently, from conception to implementation. With strong expertise in Node.js, React, .NET, PHP, Laravel, and SQL databases, I also have skills in creating dashboards and data analysis."}
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in-up">
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
              <a
                href="tel:+5521979369780"
                className="flex items-center text-gray-400 hover:text-white transition-colors"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                {isPortuguese ? "Telefone" : "Phone"}
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
                    ? "Liderou o desenvolvimento independente de um Sistema de Gestão Hoteleira completo, utilizando Node.js/Express (backend) e Next.js (frontend), implementando testes com cobertura superior a 90%."
                    : "Led the independent development of a complete Hotel Management System using Node.js/Express (backend) and Next.js (frontend), implementing tests with over 90% coverage."}
                </li>
                <li>
                  {isPortuguese
                    ? "Projetou e implementou integrações entre o sistema VoIP 3CX e diversas plataformas CRM, utilizando C# e .NET Framework."
                    : "Designed and implemented integrations between the 3CX VoIP system and various CRM platforms using C# and .NET Framework."}
                </li>
                <li>
                  {isPortuguese
                    ? "Desenvolveu a plataforma Openzap para gerenciamento de mensagens WhatsApp, utilizando Node.js, Express e a biblioteca Baileys, incluindo frontend interativo e funcionalidades avançadas de automação."
                    : "Developed the Openzap platform for WhatsApp message management using Node.js, Express, and the Baileys library, including an interactive frontend and advanced automation features."}
                </li>
                <li>
                  {isPortuguese
                    ? "Criou um Sistema de Discador Preditivo para gerenciamento de campanhas de chamadas automatizadas, utilizando .NET, MySQL e Laravel."
                    : "Created a Predictive Dialer System for managing automated call campaigns using .NET, MySQL, and Laravel."}
                </li>
                <li>
                  {isPortuguese
                    ? "Implementou integração seamless entre 3CX e Microsoft Teams, permitindo manipulação de chamadas diretamente na interface do Teams."
                    : "Implemented seamless integration between 3CX and Microsoft Teams, allowing call manipulation directly in the Teams interface."}
                </li>
                <li>
                  {isPortuguese
                    ? "Gerenciou processos de deploy em VMs Linux, implementou pipelines de CI/CD e administrou configuração de servidores."
                    : "Managed deployment processes on Linux VMs, implemented CI/CD pipelines, and administered server configurations."}
                </li>
                <li>
                  {isPortuguese
                    ? "Desenvolveu um site em Laravel para gerenciamento de uma WebAPI em C# .NET 8, focado no gerenciamento de licenças."
                    : "Developed a Laravel site for managing a C# .NET 8 WebAPI, focused on license management."}
                </li>
                <li>
                  {isPortuguese
                    ? "Criou dashboards complexos no Grafana, realizando consultas avançadas em bancos de dados MySQL e PostgreSQL para análise de dados e monitoramento de sistemas."
                    : "Created complex dashboards in Grafana, performing advanced queries on MySQL and PostgreSQL databases for data analysis and system monitoring."}
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
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <div key={project.id} className="relative animate-fade-in">
                  <div className="aspect-video relative overflow-hidden rounded border border-gray-800">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={`${project.title} project screenshot`}
                      fill
                      className="object-cover"
                      priority={index < 2}
                    />
                  </div>
                  <div className="mt-4 flex justify-between items-start">
                    <div>
                      <h3 className="text-lg">{project.title}</h3>
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-gray-400 hover:text-white transition-colors"
                        >
                          {isPortuguese ? "Ver Demo ao Vivo" : "View Live Demo"}
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
            <div className="grid md:grid-cols-2 gap-6">
              <div className="animate-fade-in">
                <h3 className="text-lg font-semibold mb-2">
                  {isPortuguese ? "Linguagens" : "Languages"}
                </h3>
                <p className="text-sm text-gray-300">
                  JavaScript, TypeScript, C#, PHP, SQL
                </p>
              </div>
              <div className="animate-fade-in">
                <h3 className="text-lg font-semibold mb-2">Frontend</h3>
                <p className="text-sm text-gray-300">
                  React.js, Next.js, HTML5, CSS3
                </p>
              </div>
              <div className="animate-fade-in">
                <h3 className="text-lg font-semibold mb-2">Backend</h3>
                <p className="text-sm text-gray-300">
                  Node.js, Express, .NET Framework, .NET 8, Laravel
                </p>
              </div>
              <div className="animate-fade-in">
                <h3 className="text-lg font-semibold mb-2">
                  {isPortuguese ? "Bancos de Dados" : "Databases"}
                </h3>
                <p className="text-sm text-gray-300">MySQL, PostgreSQL</p>
              </div>
              <div className="animate-fade-in">
                <h3 className="text-lg font-semibold mb-2">DevOps</h3>
                <p className="text-sm text-gray-300">Git, AWS, Linux, Docker</p>
              </div>
              <div className="animate-fade-in">
                <h3 className="text-lg font-semibold mb-2">
                  {isPortuguese ? "Outros" : "Other"}
                </h3>
                <p className="text-sm text-gray-300">
                  VoIP (3CX, WebRTC, SIP), Baileys (WhatsApp), Grafana, Jest,
                  PHPUnit
                </p>
              </div>
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
