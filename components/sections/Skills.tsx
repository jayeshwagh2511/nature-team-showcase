"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import GlassCard from "../GlassCard";

const skills = [
  { name: "React / Next.js", level: 90, color: "#61dafb" },
  { name: "TypeScript", level: 90, color: "#3178c6" },
  { name: "Node.js", level: 80, color: "#68a063" },
  { name: "Python / ML", level: 85, color: "#ffd43b" },
  { name: "UI/UX Design", level: 88, color: "#ff7262" },
  { name: "Cloud / DevOps", level: 75, color: "#ff9900" },
];

export default function Skills() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <section ref={ref} id="skills" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          style={{ y }}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left: Text */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -60, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block px-4 py-2 glass rounded-full text-nature-300 text-sm font-medium">
              Expertise
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Our <span className="text-nature-400">Technical</span> Stack
            </h2>
            <p className="text-white/70 text-lg leading-relaxed">
              We combine cutting-edge technology with sustainable practices to deliver 
              impactful digital solutions.
            </p>
          </motion.div>

          {/* Right: Skills */}
          <div className="space-y-4">
            {skills.map((skill, i) => (
              <GlassCard key={skill.name} className="!p-4" delay={i * 0.1}>
                <div className="flex justify-between mb-2">
                  <span className="text-white font-medium">{skill.name}</span>
                  <span className="text-nature-400">{skill.level}%</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ backgroundColor: skill.color }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1, duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                  />
                </div>
              </GlassCard>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
