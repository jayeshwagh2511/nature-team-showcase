"use client";

import { motion } from "framer-motion";
import GlassCard from "../GlassCard";
import Button from "../Button";

export default function Contact() {
  return (
    <section id="contact" className="relative py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block px-4 py-2 glass rounded-full text-nature-300 text-sm font-medium mb-4">
            Get in Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Start Your <span className="text-nature-400">Journey</span>
          </h2>
        </motion.div>

        <GlassCard className="!p-8">
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white/60 text-sm mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 glass rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-nature-500 focus:outline-none transition-all"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-white/60 text-sm mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 glass rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-nature-500 focus:outline-none transition-all"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            <div>
              <label className="block text-white/60 text-sm mb-2">Message</label>
              <textarea
                rows={5}
                className="w-full px-4 py-3 glass rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-nature-500 focus:outline-none transition-all resize-none"
                placeholder="Tell us about your project..."
              />
            </div>
            <div className="text-center">
              <Button variant="primary" size="lg">
                Send Message
              </Button>
            </div>
          </form>
        </GlassCard>

        {/* Social Links */}
        <motion.div
          className="flex justify-center gap-4 mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          {["Twitter", "GitHub", "LinkedIn", "Instagram"].map((s) => (
            <motion.a
              key={s}
              href="#"
              className="px-5 py-2 glass rounded-full text-white/60 hover:text-white hover:bg-white/10 transition-all"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {s}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
