"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { ExternalLink, Code2, ArrowRight } from "lucide-react";

interface ProjectTag {
  name: string;
  color: string;
}

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: ProjectTag[];
  technologies?: string[];
  github: string;
  demo?: string;
}

const projects: Project[] = [
   {
    id: 1,
    title: "Cat vs Dog Image Classifier using SVM",
    description:
      "This project is a simple image classifier that distinguishes between cats and dogs using a Support Vector Machine (SVM) model trained on image data.",
    image: "/images/projects/cat_dog.jpg",
    tags: [
      { name: "Generative AI", color: "bg-purple-500" },
      { name: "Support Vector Machines", color: "bg-blue-500" },
      { name: "Transformers", color: "bg-yellow-500" },
      { name: "Python", color: "bg-green-500" },
    ],
    technologies: ["Python", "Jupyter", "Transformers", "Sc-Kit", "SVM", "Reinforcement Learning"],
    github: "https://github.com/ayu-yishu13/SCT_ML_03",
    
  },
  {
    id: 2,
    title: " Hand Gesture Recognition using SVM",
    description:
      "aimed at building a machine learning model that can recognize and classify static hand gestures using Support Vector Machines (SVM). The system can be used for intuitive human-computer interaction, touchless interfaces, or assistive technologies.",
    image: "/images/projects/hand.jpeg",
    tags: [
      { name: "SVM", color: "bg-green-500" },
      { name: "Library", color: "bg-blue-500" },
      { name: "PCA", color: "bg-purple-500" },
      { name: "Supervised", color: "bg-yellow-500" },
    ],
    technologies: ["Python", "scikit-learn", "Pca", "Flask", "React", "Svm", "Pandas"],
    github: "https://github.com/ayu-yishu13/SCT_ML_04",
    
  },
  {
    id: 3,
    title: "Mall Customer Segmentation using K-Means Clustering",
    description:
      "This project applies K-Means Clustering to segment customers based on their Annual Income and Spending Score using the Mall Customer Dataset. It helps identify customer groups for targeted marketing strategies.",
    image: "/images/projects/kmean.png",
    tags: [
      { name: "Heat Map", color: "bg-blue-500" },
      { name: "Deep Learning", color: "bg-purple-500" },
      { name: "Elbow Method", color: "bg-green-500" },
      { name: "Cluster", color: "bg-red-500" },
    ],
    technologies: ["Python", "Library", "HeatMap", "Cluster", "Sc-Kit"],
    github: "https://github.com/ayu-yishu13/SCT_ML_02",
    
  },
  {
    id: 4,
    title: "House Price Prediction",
    description:
      "This project predicts house sale prices using machine learning, based on data from Kaggle’s House Prices: Advanced Regression Techniques competition. It implements a complete pipeline from exploratory data analysis to model training and final predictions.",
    image: "/images/projects/house.jpeg",
    tags: [
      { name: "Sea Born", color: "bg-blue-500" },
      { name: "Prediction", color: "bg-red-500" },
      { name: "LightGBM", color: "bg-purple-500" },
      { name: "Python", color: "bg-yellow-500" },
    ],
    technologies: ["Python", "SeaBorn", "NumPy", "Pandas", "NumPy", "Matplotlib"],
    github: "https://github.com/ayu-yishu13/SCT_ML_01",
  },
  {
    id: 5,
    title: "Smart Attendance System using Ai",
    description:
      "The **Smart Attendance System using AI** is an innovative project designed to revolutionize the traditional methods of tracking attendance. By leveraging the power of artificial intelligence, this system automates the process, making it more accurate, efficient, and secure.",
    image: "/images/projects/ai.jpeg",
    tags: [
      { name: "Camera", color: "bg-green-500" },
      { name: "Attendence", color: "bg-blue-500" },
      { name: "Web Development", color: "bg-purple-500" },
      { name: "OpenCv", color: "bg-red-500" },
    ],
    technologies: ["Python", "Back-End", "Front-End", "OpenCV", "NumPy", "Pandas"],
    github: "Will be Uploaded Soon",
  },
  {
    id: 6,
    title: "Portfolio",
    description:
      "I developed a responsive and modern portfolio website using React.js and Tailwind CSS, designed to showcase my projects, technical skills, and professional experience in a clean and interactive format.",
    image: "/images/projects/portfolio.png",
    tags: [
      { name: "Tailwind", color: "bg-green-500" },
      { name: "Css", color: "bg-blue-500" },
      { name: "Web Development", color: "bg-purple-500" },
      { name: "React", color: "bg-red-500" },
    ],
    technologies: ["Python", "Back-End", "Front-End", "OpenCV", "NumPy", "Pandas", "React", "Tailwind CSS", "Next.js", "JavaScript"],
    github: "Will be Uploaded Soon",
    demo: ""
  },

];

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="group bg-slate-900/50 hover:bg-slate-900/70 backdrop-blur-sm border border-slate-800/60 hover:border-indigo-600/20 rounded-xl overflow-hidden shadow-lg hover:shadow-indigo-600/10 transition-all duration-300 flex flex-col h-full">
      <div className="p-5">
        <div className="relative overflow-hidden rounded-lg mb-4">
          <Image
            src={project.image}
            alt={project.title}
            width={400}
            height={225}
            className="w-full aspect-video object-cover transform group-hover:scale-105 transition-transform duration-500"
          />

          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/90 via-purple-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
            <div className="w-full">
              <div className="flex flex-wrap gap-1 mb-2">
                {project.tags.slice(0, 3).map((tag, index) => (
                  <span
                    key={index}
                    className={`text-xs px-2 py-0.5 rounded-full text-white border border-white/10 ${tag.color} bg-opacity-40`}
                  >
                    {tag.name}
                  </span>
                ))}
                {project.tags.length > 3 && (
                  <span className="bg-slate-600 bg-opacity-30 text-xs px-2 py-0.5 rounded-full text-white border border-slate-600 border-opacity-20">
                    +{project.tags.length - 3}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="flex-grow space-y-3">
          <h3 className="text-xl font-semibold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            {project.title}
          </h3>

          <p className="text-gray-300/80 text-sm leading-relaxed line-clamp-3">
            {project.description}
          </p>
        </div>

        <div className="pt-4 flex items-center justify-between mt-4">
          <Link
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-indigo-400 hover:text-indigo-300 transition-colors duration-200"
          >
            <span className="text-sm font-medium">GitHub</span>
            <FaGithub className="w-4 h-4" />
          </Link>

          {project.demo ? (
            <Link
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
            >
              <span className="text-sm font-medium">Demo</span>
              <ExternalLink className="w-4 h-4" />
            </Link>
          ) : (
            <Link
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/90 transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
            >
              <span className="text-sm font-medium">Details</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export function ProjectsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });

  return (
    <section id="projects" className="py-12 md:py-20 relative overflow-x-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-indigo-950/10 to-slate-950 opacity-50"></div>
      <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-indigo-900/5 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-indigo-900/5 to-transparent"></div>

      {/* Content */}
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center mb-12 md:mb-16 relative">
          {/* Decorative element */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl opacity-30"></div>

          <motion.h2
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent relative z-10"
            data-aos="fade-up"
          >
            Projects & Applications
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-slate-300 max-w-3xl mx-auto text-sm md:text-base relative z-10"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Showcasing the practical applications  in artificial
            intelligence and machine learning.
          </motion.p>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto"
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
