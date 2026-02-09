"use client"

import { motion } from "framer-motion"

export default function HeroSection() {
  const scrollToStory = () => {
    document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">
      {/* Background gradient */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse at 50% 30%, hsl(350,55%,85%) 0%, hsl(20,20%,92%) 50%, hsl(20,18%,88%) 100%)",
        }}
      />

      {/* Soft glowing orbs */}
      <motion.div
        className="absolute -z-10 rounded-full"
        style={{
          width: 400,
          height: 400,
          background: "radial-gradient(circle, hsl(350,55%,75%,0.35) 0%, transparent 70%)",
          top: "15%",
          left: "20%",
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -z-10 rounded-full"
        style={{
          width: 300,
          height: 300,
          background: "radial-gradient(circle, hsl(20,40%,78%,0.3) 0%, transparent 70%)",
          bottom: "20%",
          right: "15%",
        }}
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-10"
      >
        <motion.p
          className="mb-4 text-sm font-sans uppercase tracking-[0.3em] text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          A digital love letter
        </motion.p>

        <motion.h1
          className="font-serif text-5xl font-bold leading-tight text-foreground md:text-7xl lg:text-8xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
        >
          <span className="text-balance block">
            Not a <span className="text-primary">long story</span> yet...
          </span>
          <span className="text-balance block">
            but definitely my{" "}
            <span className="italic text-primary">favorite beginning.</span>
          </span>
        </motion.h1>

        <motion.p
          className="mx-auto mt-6 max-w-md font-sans text-lg leading-relaxed text-muted-foreground md:text-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          {"I wrote this for you, because some feelings are too big for words alone."}
        </motion.p>

        <motion.button
          onClick={scrollToStory}
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 font-sans text-base font-medium text-primary-foreground shadow-lg transition-shadow hover:shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
        >
          Open this
          <motion.span
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </motion.span>
        </motion.button>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <motion.div
          className="flex flex-col items-center gap-2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        >
          <span className="font-sans text-xs tracking-widest text-muted-foreground uppercase">Scroll down</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="hsl(350,65%,48%)" strokeWidth="2">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}
