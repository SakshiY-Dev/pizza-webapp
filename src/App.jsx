import { useState } from "react";
import { motion } from "framer-motion";
import { FaReact } from "react-icons/fa6";
import { FaHtml5 } from "react-icons/fa6";
import { TbBrandJavascript } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaCss3Alt } from "react-icons/fa";
import { SiMysql } from "react-icons/si";

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
      title: "Resume Builder",
      description:
        "Developed a responsive web application that allows users to create, edit, and download professional resumes. Included features like dynamic input fields, live preview, customizable templates, and PDF export functionality.",
      tech: ["React.js", "TypeScript", "Tailwind CSS"],
      image: "/resume_builder.png",
      github: "https://github.com/SakshiY-Dev/resume_builder",
      linkedin: "https://magenta-gnome-56849b.netlify.app/",
    },
    {
      title: "Daily Digest",
      description:
        "A real-time news application that fetches the latest headlines from various sources, featuring a clean UI and seamless navigation for an engaging user experience.",
      tech: ["React", "Tailwind CSS", "API Integration"],
      image: "/news_image.png",
      github: "https://github.com/SakshiY-Dev/news-app.git",
      linkedin: "https://lively-manatee-df999c.netlify.app/",
    },
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
  ];

  const skills = [
    { name: "HTML", icon: <FaHtml5 className="w-8 h-8 " /> },
    { name: "CSS", icon: <FaCss3Alt className="w-8 h-8 " /> },
    { name: "JavaScript", icon: <TbBrandJavascript className="w-8 h-8 " /> },
    { name: "React.js", icon: <FaReact className="w-8 h-8 " /> },
    { name: "Tailwind CSS", icon: <RiTailwindCssFill className="w-8 h-8 " /> },
    { name: "Git & GitHub", icon: <GitBranch className="w-8 h-8 " /> },
    { name: "MySQL", icon: <SiMysql className="w-8 h-8" /> },
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
          {/* Left-aligned brand name */}
          <div className="text-2xl font-bold text-[#D69ADE]">Sakshi Yadav</div>

          {/* Mobile Menu Button */}
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

          {/* Navbar Links */}
          <div
            className={`absolute top-16 right-0 bg-gray-900 md:static md:w-auto md:flex items-center transition-all duration-300 gap-6 ${
              isMenuOpen
                ? "flex flex-col items-end py-4 space-y-4 px-6 w-auto"
                : "hidden md:flex"
            }`}
          >
            <a href="#home" className="text-[#D69ADE] hover:text-purple-400">
              Home
            </a>
            <a href="#about" className="text-[#D69ADE] hover:text-purple-400">
              About
            </a>
            <a href="#skills" className="text-[#D69ADE] hover:text-purple-400">
              Skills
            </a>
            <a
              href="#projects"
              className="text-[#D69ADE] hover:text-purple-400"
            >
              Projects
            </a>
            <a
              href="mailto:sakshiy1627@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="px-4 py-2 bg-[#AA60C8]  rounded-lg  hover:bg-purple-600">
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
            <h1 className=" text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
              Hi! I'm Sakshi Yadav
              <span className="block text-[#9e37c0]">Frontend Developer</span>
            </h1>
            <p className=" text-base sm:text-lg text-[#f0c5fe]">
              Passionate about creating visually appealing and user-friendly
              websites that deliver a seamless experience.
            </p>
            <div className="flex space-x-4 justify-center items-center md:justify-start">
              <a
                href="https://www.linkedin.com/in/sakshi-yadav-14200a256"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-[#AA60C8] rounded-full hover:bg-purple-600"
              >
                <Linkedin className="w-7 h-7" />
              </a>
              <a
                href="https://github.com/SakshiY-Dev"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-[#AA60C8]  rounded-full hover:bg-purple-600"
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
            I’m an{" "}
            <span className="text-purple-300 font-semibold">
              aspiring front-end developer
            </span>{" "}
            with a strong foundation in
            <span className="text-purple-300 font-semibold">
              {" "}
              HTML, CSS, JavaScript, React.js, and MySQL
            </span>
            . I have completed my
            <span className="text-purple-300 font-semibold">
              {" "}
              B.Sc. (Hons) in Computer Science
            </span>{" "}
            from Delhi University, and I’m currently exploring frontend
            technologies along with backend tools like
            <span className="text-purple-300 font-semibold">
              {" "}
              Node.js and Express.js
            </span>
            . .
          </motion.p>

          <motion.p
            className="text-gray-300 text-lg leading-relaxed mt-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            I’m actively seeking{" "}
            <span className="text-purple-300 font-semibold">
              job or internship opportunities
            </span>{" "}
            where I can grow as a developer, contribute to real-world projects,
            and continue learning from experienced professionals.
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
              className="flex flex-col items-center p-6 bg-[#AA60C8]  rounded-lg shadow-lg hover:bg-purple-400 transition-transform transform hover:scale-105"
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
              <div className="relative overflow-hidden rounded-lg group flex justify-center">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-100 h-55 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                />
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
      <motion.footer
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-gray-900 text-white py-6 mt-10"
      >
        <div className="container mx-auto px-4 sm:px-6 flex flex-col items-center md:flex-row md:justify-between">
          {/* Middle Section - Links */}
          <div className="flex w-full justify-center gap-6 mt-4 md:mt-0">
            <a href="#home" className=" text-[#D69ADE] hover:text-purple-400">
              Home
            </a>
            <a href="#about" className="text-[#D69ADE] hover:text-purple-400">
              About
            </a>
            <a href="#skills" className="text-[#D69ADE] hover:text-purple-400">
              Skills
            </a>
            <a
              href="#projects"
              className="text-[#D69ADE] hover:text-purple-400"
            >
              Projects
            </a>
          </div>
        </div>

        {/* Copyright Section */}
        <div className=" flex justify-center items-center text-sm mt-6 opacity-75 text-[16px] text-[#EABDE6] ">
          © {new Date().getFullYear()} | Sakshi Yadav | All rights reserved
        </div>
      </motion.footer>
    </div>
  );
};

export default App;
