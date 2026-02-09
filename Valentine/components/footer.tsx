"use client"

import { motion } from "framer-motion"

export default function Footer() {
  return (
    <footer className="relative overflow-hidden px-6 py-16 text-center" style={{ background: "hsl(350,28%,84%)" }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="hsl(350,65%,48%)"
          className="mx-auto mb-4"
        >
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
        <p className="font-serif text-lg italic text-foreground/70">
          {"Made with love, just for you."}
        </p>
        <p className="mt-2 font-sans text-sm text-muted-foreground">
          {"Happy Valentine's Day"}
        </p>
      </motion.div>
    </footer>
  )
}
