"use client";

import { motion } from "framer-motion";
import GlassCard from "../GlassCard";

export default function Future() {
  return (
    <section className="relative py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <GlassCard className="py-16 px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-6xl mb-6 inline-block">🚀</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Coming <span className="text-nature-400">Soon</span>
            </h2>
            <p className="text-white/60 text-lg max-w-md mx-auto mb-8">
              We're working on something extraordinary. Stay tuned for our next 
              announcement in ai tech.
            </p>
            <div className="flex justify-center gap-4">
              <div className="glass px-6 py-3 rounded-xl">
                <span className="text-3xl font-bold text-nature-400">またね (see you later)</span>
                <p className="text-white/60 text-sm">Team Tj</p>
              </div>
            </div>
          </motion.div>
        </GlassCard>
      </div>
    </section>
  );
}
