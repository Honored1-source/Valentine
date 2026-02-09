"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export default function SectionDivider() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <div ref={ref} className="flex items-center justify-center py-12">
      <motion.div
        className="flex items-center gap-4"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.6 }}
      >
        <div className="h-px w-12 bg-primary/20 md:w-20" />
        <motion.svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="hsl(350,60%,58%)"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        >
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </motion.svg>
        <div className="h-px w-12 bg-primary/20 md:w-20" />
      </motion.div>
    </div>
  )
}
