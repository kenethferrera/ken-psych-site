"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Avatar from "../components/Avatar";
import AnimatedSection from "../components/AnimatedSection";
import EmailSignup from "../components/EmailSignup";

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.4,
      ease: "easeOut"
    }
  })
};

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-offwhite flex flex-col items-center p-4">
      {/* Hero Section */}
      <motion.section
        custom={0}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.7 }}
        variants={sectionVariants}
        className="w-full flex flex-col items-center justify-center py-12"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="flex justify-center mb-4 w-full"
        >
          <Avatar />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
          className="text-4xl font-cabin-sketch font-bold mb-2 text-violet-400 text-center"
        >
          Hi, I'm Ken 👋
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
          className="text-lg mb-4 text-offwhite text-center"
        >
          I turn everyday thoughts into animated, overdramatic life lessons.
        </motion.p>
        <div className="flex gap-4 mb-8">
          <motion.a
            href="/watch"
            whileHover={{ scale: 1.05, boxShadow: "0 0 16px #39ff14" }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
            className="bg-neon-green text-black px-4 py-2 rounded font-bold focus:outline-none"
          >
            Watch My Shorts
          </motion.a>
        </div>
      </motion.section>
      {/* About Section */}
      <motion.section
        custom={1}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.7 }}
        variants={sectionVariants}
        className="w-full max-w-xl mb-12"
      >
        <motion.h2 className="text-2xl font-bold mb-2" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.1, ease: "easeOut" }}>My Mind Works Like This...</motion.h2>
        <motion.div className="bg-gray-900 rounded p-4 mb-8" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.15, ease: "easeOut" }}>
          Ever stayed up overthinking an awkward moment? I turn those exact brain spirals into doodle-style, storytelling Shorts. Psychology, humor, and a dash of cringe.
        </motion.div>
        <motion.h2 className="text-2xl font-bold mb-2" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.2, ease: "easeOut" }}>Latest Shorts</motion.h2>
        <motion.p className="text-gray-300 mb-2" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.22, ease: "easeOut" }}>Fresh from my brain to your feed. Tap one to dive in.</motion.p>
        <motion.div className="bg-gray-900 rounded p-4 mb-8" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.25, ease: "easeOut" }}>YouTube Shorts thumbnails (placeholder)</motion.div>
        <motion.h2 className="text-2xl font-bold mb-2" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.3, ease: "easeOut" }}>Visual Templates I Use</motion.h2>
        <motion.p className="text-gray-300 mb-2" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.32, ease: "easeOut" }}>Custom-built to add flair to each Short – countdowns, captions, and quirky intros.</motion.p>
        <motion.div className="bg-gray-900 rounded p-4 mb-8" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.35, ease: "easeOut" }}>Templates gallery (placeholder)</motion.div>
        <motion.h2 className="text-2xl font-bold mb-2" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.4, ease: "easeOut" }}>Stay Updated</motion.h2>
        <motion.p className="text-gray-300 mb-2" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.42, ease: "easeOut" }}>Get new Shorts, tips, and mental hacks directly in your inbox.</motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.45, ease: "easeOut" }}>
          <EmailSignup />
        </motion.div>
      </motion.section>
    </main>
  );
}
