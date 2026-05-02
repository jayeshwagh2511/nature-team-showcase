"use client";

import { motion } from "framer-motion";
import GlassCard from "../GlassCard";
import Button from "../Button";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-24 pb-16 overflow-hidden">
      {/* Project Completion */}
      <motion.div
        className="absolute right-0 top-1/4 w-64 h-64 opacity-60"
        initial={{ opacity: 0, x: 100, rotate: 20 }}
        animate={{ opacity: 0.6, x: 0, rotate: 0 }}
        transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
      >
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <path
            fill="rgba(34, 197, 94, 0.3)"
            d="M100 0C80 30 50 50 20 60c20 20 40 50 50 80 10-30 30-60 50-80-30-10-60-30-80-60z"
          />
          <path
            fill="rgba(22, 163, 74, 0.4)"
            d="M140 40c-15 25-35 40-55 48 15 15 28 38 35 60 7-22 20-45 35-60-20-8-40-23-55-48z"
          />
        </svg>
      </motion.div>

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, x: -60, filter: "blur(10px)" }}
          animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        >
          <div className="space-y-4">
            <motion.span
              className="inline-block px-4 py-2 glass rounded-full text-nature-300 text-sm font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Our Team
            </motion.span>
            
            <motion.h1
              className="text-5xl md:text-7xl font-bold text-white leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              BUILDING ,{" "}
              <span className="text-nature-400">OUR</span>
              <br />
              FUTURE TOGETHER
            </motion.h1>
            
            <motion.p
              className="text-lg text-white/70 max-w-md leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
             We are a passionate team of developers and designers creating modern, interactive, and user-friendly digital experiences. Our work reflects collaboration, creativity, and a shared vision to build impactful solutions using technology.
            </motion.p>
          </div>

          <motion.div
            className="flex gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Button variant="primary" size="lg">
              EXPLORE
            </Button>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </motion.div>
        </motion.div>

        {/* Right: Project Completion */}
        <div className="grid grid-cols-2 gap-4">
          {/* CO2 Emissions Card */}
          <GlassCard className="col-span-1" delay={0.2}>
            <p className="text-white/60 text-sm mb-2">Project Completion</p>
            <p className="text-5xl font-bold text-white">7+</p>
            <p className="text-white/60">Team projects</p>
          </GlassCard>

          {/* Growth Rate */}
          <GlassCard className="col-span-1" delay={0.3}>
            <p className="text-white/60 text-sm mb-3">Growth Rate</p>
            <div className="h-20 flex items-end gap-1">
              {[3, 4.5, 5.5, 7, 8.5, 9.2].map((h, i) => (
                <motion.div
                  key={i}
                  className="flex-1 bg-gradient-to-t from-nature-500/30 to-nature-400/60 rounded-t"
                  initial={{ height: 0 }}
                  whileInView={{ height: `${h * 15}%` }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.1, duration: 0.6 }}
                />
              ))}
            </div>
            <div className="flex justify-between text-xs text-white/40 mt-2">
              <span>Jan</span>
              <span>Feb</span>
              <span>Mar</span>
              <span>Apr</span>
              <span>May</span>
              <span>Jun</span>
            </div>
          </GlassCard>

          {/* Skill Coverage */}
          <GlassCard className="col-span-1" delay={0.4}>
            <p className="text-white font-semibold mb-2">Skill Coverage</p>
            <p className="text-white/60 text-sm leading-relaxed mb-4">
              Tech Diversity
            </p>
            <div className="flex items-center gap-3">
              <span className="text-2xl font-bold text-white">82%</span>
              <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-nature-500 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: "82%" }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                />
              </div>
            </div>
          </GlassCard>

          {/* Tech Ecosystem */}
          <GlassCard className="col-span-1" delay={0.5}>
            <p className="text-white font-semibold mb-2">Tech Ecosystem</p>
            <p className="text-white/60 text-sm leading-relaxed mb-4">
              Tools We Use.
            </p>
            <div className="flex items-center justify-center">
              <svg className="w-20 h-20" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="rgba(255,255,255,0.1)"
                  strokeWidth="8"
                />
                <motion.circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="url(#gradient)"
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeDasharray={251.2}
                  initial={{ strokeDashoffset: 251.2 }}
                  whileInView={{ strokeDashoffset: 251.2 * 0.85 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7, duration: 1 }}
                  transform="rotate(-90 50 50)"
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#4ade80" />
                    <stop offset="100%" stopColor="#22c55e" />
                  </linearGradient>
                </defs>
                <text
                  x="50"
                  y="55"
                  textAnchor="middle"
                  className="fill-white text-lg font-bold"
                >
                  15%
                </text>
              </svg>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
