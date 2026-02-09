"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useCallback, useRef, useMemo } from "react"
import { useInView } from "framer-motion"

interface HeartBurst {
  id: number
  x: number
  y: number
  size: number
  delay: number
}

export default function ValentineSection() {
  const [answered, setAnswered] = useState(false)
  const [noPos, setNoPos] = useState({ x: 0, y: 0 })
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const hearts = useMemo<HeartBurst[]>(
    () =>
      Array.from({ length: 30 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 16 + Math.random() * 32,
        delay: Math.random() * 0.5,
      })),
    [],
  )

  const moveNoButton = useCallback(() => {
    const maxX = typeof window !== "undefined" ? Math.min(120, window.innerWidth * 0.25) : 120
    const maxY = typeof window !== "undefined" ? Math.min(100, window.innerHeight * 0.15) : 100
    const x = (Math.random() - 0.5) * maxX * 2
    const y = (Math.random() - 0.5) * maxY * 2
    setNoPos({ x, y })
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-[80vh] flex-col items-center justify-center overflow-hidden px-6 py-24"
      style={{ background: "hsl(350,35%,87%)" }}
    >
      <AnimatePresence mode="wait">
        {!answered ? (
          <motion.div
            key="question"
            className="relative z-10 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="mb-8"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              <svg
                width="64"
                height="64"
                viewBox="0 0 24 24"
                fill="hsl(350,65%,48%)"
                className="mx-auto"
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </motion.div>

            <h2 className="mb-4 font-serif text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
              Will you be my Valentine?
            </h2>
            <p className="mb-12 font-sans text-lg text-muted-foreground">
              {"I already know the answer, but I still want to ask."}
            </p>

            <div className="flex items-center justify-center gap-6">
              <motion.button
                onClick={() => setAnswered(true)}
                className="rounded-full bg-primary px-10 py-4 font-sans text-lg font-medium text-primary-foreground shadow-lg"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
              >
                {"Yes "}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="inline ml-1">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </motion.button>

              <motion.button
                onMouseEnter={moveNoButton}
                onTouchStart={moveNoButton}
                className="rounded-full border-2 border-border bg-card px-10 py-4 font-sans text-lg font-medium text-muted-foreground"
                animate={{ x: noPos.x, y: noPos.y }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                No
              </motion.button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="celebration"
            className="relative z-10 text-center"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
          >
            <motion.h2
              className="mb-4 font-serif text-5xl font-bold text-primary md:text-6xl lg:text-7xl"
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {"I knew it!"}
            </motion.h2>
            <motion.p
              className="font-sans text-xl text-foreground md:text-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {"I knew you'd never say no... I'll LOVE YOUU ALWAYSSS..."}
            </motion.p>

            {/* Heart burst */}
            {hearts.map((h) => (
              <motion.div
                key={h.id}
                className="pointer-events-none absolute"
                style={{ left: `${h.x}%`, top: `${h.y}%` }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: [0, 1, 0], scale: [0, 1.2, 0.6], y: -100 }}
                transition={{ duration: 2, delay: h.delay, ease: "easeOut" }}
              >
                <svg width={h.size} height={h.size} viewBox="0 0 24 24" fill="hsl(350,60%,55%)">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
