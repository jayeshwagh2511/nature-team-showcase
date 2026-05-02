"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import GlassCard from "../GlassCard";

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section ref={ref} id="about" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          style={{ y, opacity }}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left: Text */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -60, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
          >
            <span className="inline-block px-4 py-2 glass rounded-full text-nature-300 text-sm font-medium">
              About Us
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Driven by Passion, United as a{" "}
              <span className="text-nature-400">Team</span> 
            </h2>
            <p className="text-white/70 text-lg leading-relaxed">
             We are a team of passionate developers, designers, and innovators working together to create impactful digital experiences. Our goal is to combine creativity with technology to build modern, user-friendly, and visually engaging solutions.

This platform represents our journey, skills, and collaborative projects. From designing smooth interfaces to developing functional systems, we focus on delivering meaningful work while continuously learning and improving.

Together, we aim to grow, innovate, and contribute to the tech community with solutions that are both practical and inspiring.
            </p>
            <p className="text-white/60 leading-relaxed">
              Through innovative solutions and sustainable practices, we create 
              digital experiences that inspire action and drive meaningful environmental change.
            </p>
          </motion.div>

          {/* Right: Stats Cards */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { value: "3", label: "Team Members" },
              { value: "7+", label: "Project build" },
              { value: "10+", label: "Technologies Used" },
              { value: "100", label: "Dedication" },
            ].map((stat, i) => (
              <GlassCard key={stat.label} delay={i * 0.1}>
                <p className="text-4xl font-bold text-nature-400">{stat.value}</p>
                <p className="text-white/60 mt-2">{stat.label}</p>
              </GlassCard>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
