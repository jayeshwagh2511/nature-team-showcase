"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const team = [
  {
    name: "Jayesh Wagh",
    role: "Lead Designer,Developer",
    avatar: "👨‍💻",
    special: false,
    socials: [
      { type: "github", url: "https://github.com/jayeshwagh2511" },
      { type: "linkedin", url: "https://www.linkedin.com/in/jayesh-wagh-607440378" },
    ],
  },
  {
    name: "Tanisha Dyaga",
    role: "Senior Developer",
    avatar: "👩‍💻",
    special: true,
    socials: [
      { type: "github", url: "https://github.com/tanishadyaga1125-lang" },
      { type: "linkedin", url: "https://www.linkedin.com/in/tanisha-dyaga-249771399" },
    ],
  },
  {
    name: "Atharv Hange",
    role: "Project Manager",
    avatar: "👨‍💻",
    special: false,
    socials: [
      { type: "twitter", url: "https://twitter.com/" },
      { type: "linkedin", url: "https://www.linkedin.com/in/atharv-hange-978b3b336" },
    ],
  },
];

function SocialIcon({ type }: { type: string }) {
  if (type === "github") return <FaGithub size={15} />;
  if (type === "linkedin") return <FaLinkedin size={15} />;
  return <FaXTwitter size={15} />;
}

function SunflowerBadge() {
  return (
    <div className="absolute -top-7 left-1/2 -translate-x-1/2 w-14 h-14 z-10">
      <svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(40,40)">
          <ellipse rx="6" ry="14" fill="rgba(250,204,21,0.9)"  transform="rotate(0)   translate(0,-22)" />
          <ellipse rx="6" ry="14" fill="rgba(245,158,11,0.85)" transform="rotate(45)  translate(0,-22)" />
          <ellipse rx="6" ry="14" fill="rgba(250,204,21,0.9)"  transform="rotate(90)  translate(0,-22)" />
          <ellipse rx="6" ry="14" fill="rgba(245,158,11,0.85)" transform="rotate(135) translate(0,-22)" />
          <ellipse rx="6" ry="14" fill="rgba(250,204,21,0.9)"  transform="rotate(180) translate(0,-22)" />
          <ellipse rx="6" ry="14" fill="rgba(245,158,11,0.85)" transform="rotate(225) translate(0,-22)" />
          <ellipse rx="6" ry="14" fill="rgba(250,204,21,0.9)"  transform="rotate(270) translate(0,-22)" />
          <ellipse rx="6" ry="14" fill="rgba(245,158,11,0.85)" transform="rotate(315) translate(0,-22)" />
          <circle r="13" fill="rgba(120,53,15,0.95)" />
          <circle r="9"  fill="rgba(70,25,5,1)" />
          <circle cx="-2" cy="-2" r="1.5" fill="rgba(161,98,7,0.7)" />
          <circle cx="3"  cy="-1" r="1.2" fill="rgba(161,98,7,0.6)" />
          <circle cx="0"  cy="3"  r="1.2" fill="rgba(161,98,7,0.6)" />
          <circle cx="-3" cy="2"  r="1"   fill="rgba(161,98,7,0.5)" />
          <circle cx="3"  cy="3"  r="1"   fill="rgba(161,98,7,0.5)" />
        </g>
      </svg>
    </div>
  );
}

type Member = (typeof team)[0];

function MemberCard({ member, index }: { member: Member; index: number }) {
  const sf = member.special;

  return (
    <motion.div
      className="relative text-center"
      initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] }}
    >
      {sf && <SunflowerBadge />}

      {/* Card */}
      <div
        className="relative rounded-2xl p-5 pt-6 flex flex-col items-center overflow-hidden"
        style={
          sf
            ? {
                background: "rgba(250,204,21,0.07)",
                border: "1.5px solid rgba(250,204,21,0.35)",
                backdropFilter: "blur(24px) saturate(180%)",
                WebkitBackdropFilter: "blur(24px) saturate(180%)",
                boxShadow:
                  "inset 0 1.5px 0 rgba(253,230,138,0.22), inset 0 -1px 0 rgba(250,180,0,0.08), 0 0 0 4px rgba(250,204,21,0.06), 0 8px 32px rgba(0,0,0,0.3)",
              }
            : {
                background: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(255,255,255,0.14)",
                backdropFilter: "blur(20px) saturate(160%)",
                WebkitBackdropFilter: "blur(20px) saturate(160%)",
                boxShadow:
                  "inset 0 1px 0 rgba(255,255,255,0.10), 0 8px 32px rgba(0,0,0,0.25)",
              }
        }
      >
        {/* Liquid glass sheen — sunflower only */}
        {sf && (
          <div
            className="absolute inset-0 rounded-2xl pointer-events-none"
            style={{
              background:
                "linear-gradient(140deg, rgba(253,230,138,0.11) 0%, rgba(255,255,255,0.02) 55%, rgba(245,200,66,0.07) 100%)",
            }}
          />
        )}

        {/* Avatar */}
        <div
          className="w-14 h-14 rounded-full flex items-center justify-center text-2xl mb-3 mt-4 relative z-10"
          style={
            sf
              ? {
                  background: "rgba(250,204,21,0.16)",
                  border: "2px solid rgba(245,158,11,0.45)",
                }
              : {
                  background: "rgba(255,255,255,0.09)",
                  border: "1.5px solid rgba(255,255,255,0.18)",
                }
          }
        >
          {member.avatar}
        </div>

        {/* Cute badge — sunflower only */}
        {sf && (
          <span
            className="text-xs px-2 py-0.5 rounded-full mb-1.5 relative z-10"
            style={{
              background: "rgba(250,204,21,0.14)",
              border: "1px solid rgba(250,204,21,0.28)",
              color: "rgba(253,230,138,0.9)",
              fontSize: "10px",
            }}
          >
            ✦ Leader ✦
          </span>
        )}

        {/* Name */}
        <h3
          className="text-base font-semibold mb-0.5 relative z-10"
          style={{ color: sf ? "#fde68a" : "#ffffff" }}
        >
          {member.name}
        </h3>

        {/* Role */}
        <p
          className="text-xs mb-3 relative z-10"
          style={{
            color: sf
              ? "rgba(253,230,138,0.62)"
              : "rgba(134,239,172,0.85)",
          }}
        >
          {member.role}
        </p>

        {/* Divider */}
        <div
          className="w-full h-px mb-3 relative z-10"
          style={{
            background: sf
              ? "rgba(250,204,21,0.18)"
              : "rgba(255,255,255,0.09)",
          }}
        />

        {/* Socials buttons */}
        <div className="flex justify-center gap-3 relative z-10">
          {member.socials.map((social) => (
            <motion.a
              key={social.url}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full flex items-center justify-center transition-colors duration-200"
              style={
                sf
                  ? {
                      background: "rgba(250,204,21,0.10)",
                      border: "1px solid rgba(250,204,21,0.28)",
                      color: "rgba(253,230,138,0.85)",
                    }
                  : {
                      background: "rgba(255,255,255,0.07)",
                      border: "1px solid rgba(255,255,255,0.14)",
                      color: "rgba(255,255,255,0.65)",
                    }
              }
              whileHover={{ scale: 1.12 }}
              whileTap={{ scale: 0.95 }}
            >
              <SocialIcon type={social.type} />
            </motion.a>
          ))}
        </div>

      </div>
    </motion.div>
  );
}

export default function Team() {
  return (
    <section id="team" className="relative py-32 px-6">
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
            Our Team
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Meet the <span className="text-nature-400">Creative Minds</span>
          </h2>
        </motion.div>

        {/* 3-column grid — centered on large screens */}
        <div className="grid sm:grid-cols-3 gap-x-6 gap-y-10 items-start max-w-3xl mx-auto">
          {team.map((member, i) => (
            <MemberCard key={member.name} member={member} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
