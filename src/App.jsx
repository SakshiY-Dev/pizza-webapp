import { useState } from "react";
import { motion } from "framer-motion";

import {
  Github,
  Linkedin,
  Code2,
  GitBranch,
  Palette,
  Layout,
  Globe,
  Menu,
  X,
} from "lucide-react";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const projects = [
    {
      title: "LaPizzaria Website",
      description:
        "A modern and responsive pizza ordering website with multiple pages, a sleek UI, and seamless navigation for an enhanced user experience.",
      tech: ["React", "Tailwind CSS", "Framer Motion", "React Router"],
      image: "/pizza_image.png",
      github: "https://github.com/SakshiY-Dev/pizza-webapp.git",
      linkedin:
        "https://www.linkedin.com/posts/sakshi-yadav-14200a256_reactjs-tailwindcss-webdevelopment-activity-7296784450611204096-KBZk",
    },
    {
      title: "Daily Digest",
      description:
        "A real-time news application that fetches the latest headlines from various sources, featuring a clean UI and seamless navigation for an engaging user experience.",
      tech: ["React", "Tailwind CSS", "API Integration"],
      image: "/news.png",
      github: "https://github.com/SakshiY-Dev/news-app.git",
      linkedin:
        "https://www.linkedin.com/posts/sakshi-yadav-14200a256_7miniprojects7days-reactjs-tailwindcss-activity-7290413318345834496-ADLy",
    },
    {
      title: "TaskMate",
      description:
        "A simple and efficient task management application with user authentication, filtering, and CRUD operations.",
      tech: ["React", "Zustand", "Tailwind CSS", "React Router"],
      image: "/todo.png",
      github: "https://github.com/SakshiY-Dev/taskmate-todolist.git",
      linkedin:
        "https://www.linkedin.com/posts/sakshi-yadav-14200a256_react-javascript-webdevelopment-activity-7287840973366145024-VJHR",
    },
  ];

  const skills = [
    { name: "HTML", icon: <Globe className="w-6 h-6" /> },
    { name: "CSS", icon: <Palette className="w-6 h-6" /> },
    { name: "JavaScript", icon: <Code2 className="w-6 h-6" /> },
    { name: "React.js", icon: <Layout className="w-6 h-6" /> },
    { name: "Tailwind CSS", icon: <Palette className="w-6 h-6" /> },
    { name: "Git & GitHub", icon: <GitBranch className="w-6 h-6" /> },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900 text-white">
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed w-full bg-opacity-90 bg-gray-900 backdrop-blur-sm z-50"
      >
        <div className="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold">Sakshi Yadav</div>
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-800"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
          <div
            className={`md:flex space-x-8 items-center ${
              isMenuOpen ? "block" : "hidden"
            }`}
          >
            <a href="#home" className="hover:text-purple-400">
              Home
            </a>
            <a href="#about" className="hover:text-purple-400">
              About
            </a>

            <a href="#skills" className="hover:text-purple-400">
              Skills
            </a>
            <a href="#projects" className="hover:text-purple-400">
              Projects
            </a>
            <a
              href="mailto:sakshiy1627@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="px-4 py-2 bg-purple-600 rounded-lg hover:bg-purple-700">
                Let's Connect
              </button>
            </a>
          </div>
        </div>
      </motion.nav>

      {/* Home Section */}
      <motion.section
        id="home"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="pt-24 md:pt-32 pb-16 px-4 sm:px-6 text-center"
      >
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
              Hi! I'm Sakshi Yadav
              <span className="block text-purple-400">Frontend Developer</span>
            </h1>
            <p className="text-gray-300 text-base sm:text-lg">
              Passionate about creating visually appealing and user-friendly
              websites that deliver a seamless experience.
            </p>
            <div className="flex space-x-4 justify-center items-center md:justify-start">
              <a
                href="https://www.linkedin.com/in/sakshi-yadav-14200a256"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-full hover:bg-purple-600"
              >
                <Linkedin className="w-7 h-7" />
              </a>
              <a
                href="https://github.com/SakshiY-Dev"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-full hover:bg-purple-600"
              >
                <Github className="w-7 h-7" />
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/2 mt-10 md:mt-0 flex justify-center">
            <img
              src="/coverImage.png"
              alt="Cover"
              className="w-48 sm:w-64 md:w-80 rounded-lg shadow-lg"
            />
          </div>
        </div>
      </motion.section>
      {/* About section */}
      <motion.section
        id="about"
        className="py-16 px-4 sm:px-6 bg-gray-900 text-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto max-w-3xl text-center">
          <motion.h2
            className="text-4xl font-bold text-purple-400 mb-6"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            About Me
          </motion.h2>

          <motion.p
            className="text-gray-300 text-lg leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            I am an{" "}
            <span className="text-purple-300 font-semibold">
              aspiring front-end developer
            </span>{" "}
            with a passion for crafting visually appealing and user-friendly
            websites. Currently, I am pursuing a
            <span className="text-purple-300 font-semibold">
              {" "}
              B.Sc. (Hons) in Computer Science
            </span>{" "}
            from Delhi University, where I have developed strong skills in
            <span className="text-purple-300 font-semibold">
              {" "}
              HTML, CSS, JavaScript, and React.js
            </span>
            .
          </motion.p>

          <motion.p
            className="text-gray-300 text-lg leading-relaxed mt-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            I am eager to apply my knowledge, learn from industry experts, and
            contribute to
            <span className="text-purple-300 font-semibold">
              {" "}
              innovative web projects
            </span>{" "}
            through an internship opportunity.
          </motion.p>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        id="skills"
        className="py-16 px-4 sm:px-6 bg-gray-900 text-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-4xl font-bold text-center text-purple-400 mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Skills
        </motion.h2>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6"
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
          }}
          viewport={{ once: true }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center p-6 bg-gray-800 rounded-lg shadow-lg hover:bg-purple-600 transition-transform transform hover:scale-105"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <div className="w-12 h-12 flex items-center justify-center">
                {skill.icon}
              </div>
              <span className="mt-3 text-lg font-semibold">{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
      {/* 
      project-section */}

      <motion.section
        id="projects"
        className="py-16 px-4 sm:px-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-center mb-12 text-purple-400">
          Projects
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="relative bg-gray-800 rounded-lg overflow-hidden p-4 group"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Project Image with Hover Effects */}
              <div className="relative overflow-hidden rounded-lg ">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-60 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105 "
                />
                {/* Dark Overlay on Hover */}
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>

                {/* Icons (Only Visible on Hover) */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-800 rounded-full hover:bg-purple-600 transition"
                  >
                    <Github className="w-7 h-7 text-white" />
                  </a>
                  <a
                    href={project.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-800 rounded-full hover:bg-purple-600 transition"
                  >
                    <Linkedin className="w-7 h-7 text-white" />
                  </a>
                </div>
              </div>

              {/* Project Title & Description (Always Visible) */}
              <h3 className="text-lg font-bold text-white mt-4">
                {project.title}
              </h3>
              <p className="text-gray-300 text-sm mt-2">
                {project.description}
              </p>

              {/* Tech Stack (Always Visible) */}
              <div className="flex flex-wrap gap-2 mt-3">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-purple-900 text-white rounded-full text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default App;
