"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import GlassCard from "../GlassCard";
import Button from "../Button";

const projects = [
  {
  title: "AI Habit Tracker",
  description:
    "A productivity-focused application that allows users to track habits, monitor daily progress, and receive intelligent suggestions based on performance patterns.",
  tech: ["Java", "MySQL", "JDBC"],
  image: "📊",
  github: "https://github.com/jayeshwagh2511/Habit-Tracker",
},
  {
  title: "Nature-Themed Team Showcase Website",
  description:
    "An interactive team showcase website featuring glassmorphism UI, smooth animations, and a nature-inspired design. Built to present team members, projects, and skills with a modern and responsive user experience.",
  tech: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
  image: "🌿",
  github: "https://github.com/jayeshwagh2511",

},
  {
  title: "Serena AI",
  description: "An intelligent voice-controlled AI assistant that understands commands, automates system tasks, generates code and notes, and responds naturally using speech — bringing a Jarvis-like experience to everyday computing.",
  tech: ["Python", "Groq API", "SpeechRecognition", "Coqui TTS / pyttsx3"],
  image: "🤖",
  github: "https://github.com/jayeshwagh2511",
}, 

 {
    title: "Carbon Zero",
    description:
      "Personal carbon footprint calculator and offset marketplace for conscious consumers.",
    tech: ["Vue.js", "Stripe", "Firebase", "Mapbox"],
    image: "♻️",
  },
];

export default function Projects() {
  const containerRef = useRef<HTMLElement>(null);
  useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <section ref={containerRef} id="projects" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block px-4 py-2 glass rounded-full text-nature-300 text-sm font-medium mb-4">
            Our Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Featured <span className="text-nature-400">Projects</span>
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const x = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [index % 2 === 0 ? -100 : 100, 0, 0, index % 2 === 0 ? -100 : 100]
  );
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0, 1, 1, 0]
  );
  // Fix: derive a MotionValue string directly instead of calling .get() in render
  const filterValue = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [
    "blur(10px)",
    "blur(0px)",
    "blur(0px)",
    "blur(10px)",
  ]);

  return (
    <motion.div ref={ref} style={{ x, opacity, filter: filterValue }}>
      <GlassCard className="h-full" hover3D>
        <div className="flex items-start gap-4 mb-4">
          <span className="text-5xl">{project.image}</span>
          <div>
            <h3 className="text-2xl font-bold text-white">{project.title}</h3>
            <p className="text-white/60 mt-2">{project.description}</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-3 py-1 text-sm glass rounded-full text-nature-300"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex gap-3">
        <Button asChild variant="primary" size="sm">
  <a href={project.live} target="_blank">View Live</a>
</Button>

<Button asChild variant="outline" size="sm">
  <a href={project.github} target="_blank">GitHub</a>
</Button>        </div>
      </GlassCard>
    </motion.div>
  );
}
