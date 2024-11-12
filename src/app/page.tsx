"use client";

import { Menu, ExternalLink } from "lucide-react";

export default function Home() {
  const projects = [
    {
      id: "01",
      title: "UniConnect",
      description:
        "A social network platform designed specifically for university students, fostering academic collaboration and campus community.",
      image: "/placeholder.svg?height=600&width=800",
      repoUrl: "https://github.com/Jeanikt/UniConnect", // Repository URL
    },
    {
      id: "02",
      title: "WebCrawler",
      description:
        "An efficient web scraping tool built with C#, capable of extracting and analyzing data from various websites.",
      image: "/placeholder.svg?height=600&width=800",
      repoUrl: "https://github.com/Jeanikt/WebCrawler", // Repository URL
    },
    {
      id: "03",
      title: "Flower",
      description:
        "A web application designed for managing and tracking plant care routines, built using React.js and Node.js.",
      image: "/placeholder.svg?height=600&width=800",
      repoUrl: "https://github.com/Jeanikt/Flower", // Repository URL
    },
    {
      id: "04",
      title: "Fiscalis",
      description:
        "Fiscalis is a personal finance management app, developed to help you manage your finances in a simple and efficient way. With an intuitive interface and powerful features, Fiscalis allows you to track your expenses, create budgets, and view detailed financial analysis.",
      image: "/placeholder.svg?height=600&width=800",
      repoUrl: "https://github.com/Jeanikt/Fiscalis", // Repository URL
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-mono relative">
      {/* Dotted Animation */}
      <div className="absolute inset-0 pointer-events-none animate-dots-background"></div>

      <div className="fixed top-0 left-0 right-0 p-4 flex justify-between items-center z-50">
        <div className="text-sm tracking-wider animate-fade-in">JEAZY.DEV</div>
        <button className="p-2 lg:hidden" aria-label="Open menu">
          <Menu className="w-6 h-6" />
        </button>
        <nav className="hidden lg:flex space-x-6">
          {["Projects", "Experience", "Skills", "Contact"].map((item) => (
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
          <div className="max-w-2xl animate-fade-in-up">
            <div className="text-gray-500 mb-2 tracking-wider text-sm">
              SCREEN —{" "}
            </div>
            <h1 className="text-lg font-light mb-6 leading-relaxed animate-slide-in-left">
              I create{" "}
              <span className="text-gray-500">digital experiences</span> with
              modern technologies for{" "}
              <span className="underline">advanced developers</span> and
              designers from around the world.
            </h1>
          </div>

          <section id="projects" className="mt-12 lg:mt-16">
            <h2 className="text-2xl font-bold mb-6 animate-fade-in-up">
              Projects
            </h2>
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  className={`relative animate-fade-in delay-${index * 2}00`}
                  onClick={() => window.open(project.repoUrl, "_blank")} // Open repository on click
                >
                  <div className="aspect-video relative overflow-hidden rounded border border-gray-800">
                    {/* Video set to autoplay and loop */}
                    <video
                      src="/videos/video.mp4" // Correct path to video in public folder
                      autoPlay
                      loop
                      muted
                      width={640} // Adjusted video size
                      height={480}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="mt-4 flex justify-between items-start">
                    <div>
                      <h3 className="text-lg">{project.title}</h3>
                    </div>
                  </div>
                  <p className="text-sm text-gray-400 mt-2">
                    {project.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section
            id="experience"
            className="mt-12 lg:mt-16 pt-8 border-t border-gray-800"
          >
            <h2 className="text-2xl font-bold mb-6 animate-fade-in-up">
              Professional Experience
            </h2>
            <div className="animate-fade-in">
              <h3 className="text-xl font-semibold animate-slide-in-left">
                Inovacomm / OpenTools
              </h3>
              <p className="text-gray-400">Software Engineer</p>
              <p className="text-sm text-gray-500">March 2023 - Present</p>
              <p className="mt-2 text-sm text-gray-300">
                In my role at Inovacomm, which includes working on OpenTools, I
                played a key role in designing and developing the UX/UI for a
                wide range of services. I collaborated closely with
                cross-functional teams to ensure a seamless and user-friendly
                experience across all platforms. I was also responsible for
                creating Web APIs using C#, focusing on performance,
                scalability, and integration with other services.
              </p>
              <p className="mt-2 text-sm text-gray-300">
                Additionally, I contributed to the development of OpenZap, part
                of the OpenTools suite, both on the frontend and backend. On the
                frontend, I implemented user-friendly components using React and
                ensured that the application was visually appealing, easy to
                navigate, and mobile responsive. On the backend, I worked with
                the Baileys API to enable real-time communication and integrated
                various external services for enhanced functionality.
              </p>
              <div className="mt-2">
                <h4 className="text-sm font-semibold">Technologies:</h4>
                <p className="text-sm text-gray-400">
                  C#, Tailwind CSS, Grafana, VoIP, 3CX, React, Node.js,
                  TypeScript, JavaScript, PHP, Laravel, SQL, UI/UX, Baileys API
                </p>
              </div>
            </div>
          </section>

          <section
            id="skills"
            className="mt-12 lg:mt-16 pt-8 border-t border-gray-800"
          >
            <h2 className="text-2xl font-bold mb-6 animate-fade-in-up">
              Skills
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="animate-fade-in">
                <h3 className="text-lg font-semibold mb-2">Front-end</h3>
                <ul className="list-disc list-inside">
                  <li className="text-sm text-gray-300">React</li>
                  <li className="text-sm text-gray-300">Tailwind CSS</li>
                  <li className="text-sm text-gray-300">Next.js</li>
                  <li className="text-sm text-gray-300">Redux</li>
                </ul>
              </div>

              <div className="animate-fade-in">
                <h3 className="text-lg font-semibold mb-2">Back-end</h3>
                <ul className="list-disc list-inside">
                  <li className="text-sm text-gray-300">Node.js</li>
                  <li className="text-sm text-gray-300">TypeScript</li>
                  <li className="text-sm text-gray-300">PHP</li>
                  <li className="text-sm text-gray-300">Laravel</li>
                  <li className="text-sm text-gray-300">C#</li>
                </ul>
              </div>
            </div>
          </section>

          <section
            id="contact"
            className="mt-12 lg:mt-16 pt-8 border-t border-gray-800"
          >
            <h2 className="text-2xl font-bold mb-6 animate-fade-in-up">
              Contact
            </h2>
            <div className="space-y-4">
              <p className="text-gray-300">
                Feel free to reach out through any of the following channels:
              </p>
              <div className="space-y-2">
                <a
                  href="https://github.com/Jeanikt"
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
                  href="mailto:jean@gpstech.com.br"
                  className="flex items-center text-gray-400 hover:text-white transition-colors"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Email
                </a>
                <a
                  href="https://wa.me/5521979369780"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-400 hover:text-white transition-colors"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  WhatsApp
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
