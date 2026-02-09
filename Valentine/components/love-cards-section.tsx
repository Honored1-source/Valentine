"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const loveReasons = [
  { title: "Your laugh", detail: "The way it fills up every room and makes the whole world feel warmer." },
  { title: "Your kindness", detail: "How you care about people without ever asking for anything in return." },
  { title: "Your eyes", detail: "They hold entire galaxies, and I get lost in them every single time." },
  { title: "Your strength", detail: "The quiet way you carry so much, and still show up with grace." },
  { title: "Your silence", detail: "Even when we say nothing, being beside you feels like everything." },
  { title: "Your messy hair", detail: "Especially in the morning. Especially when you don't even know how beautiful you are." },
  { title: "Your voice", detail: "It's the most calming sound I know. I could listen forever." },
  { title: "Your heart", detail: "So big, so warm, so endlessly giving. It chose me, and I'll never take that for granted." },
]

function LoveCard({ item, index }: { item: (typeof loveReasons)[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-60px" })

  return (
    <motion.div
      ref={ref}
      className="group relative cursor-default overflow-hidden rounded-2xl border border-border bg-card p-6 md:p-8"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      whileHover={{ y: -4 }}
    >
      {/* Glow on hover */}
      <div className="absolute inset-0 rounded-2xl bg-primary/0 transition-colors duration-500 group-hover:bg-primary/5" />

      <div className="relative z-10">
        <span className="mb-3 inline-block font-sans text-xs uppercase tracking-[0.2em] text-primary/70">
          {String(index + 1).padStart(2, "0")}
        </span>
        <h3 className="mb-2 font-serif text-xl font-semibold text-foreground md:text-2xl">
          {item.title}
        </h3>
        <motion.p
          className="font-sans text-sm leading-relaxed text-muted-foreground md:text-base"
          initial={{ opacity: 0.6 }}
          whileHover={{ opacity: 1 }}
        >
          {item.detail}
        </motion.p>
      </div>

      {/* Corner heart accent */}
      <svg
        className="absolute -bottom-2 -right-2 text-primary/10 transition-colors duration-500 group-hover:text-primary/25"
        width="60"
        height="60"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
    </motion.div>
  )
}

export default function LoveCardsSection() {
  const titleRef = useRef(null)
  const titleInView = useInView(titleRef, { once: true, margin: "-100px" })

  return (
    <section className="relative px-6 py-24 md:py-32" style={{ background: "hsl(20,22%,88%)" }}>
      <div className="mx-auto max-w-5xl">
        <motion.div
          ref={titleRef}
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-3 font-sans text-sm uppercase tracking-[0.25em] text-muted-foreground">
            Let me count the ways
          </p>
          <h2 className="font-serif text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
            Things I Love About You
          </h2>
          <div className="mx-auto mt-4 h-px w-16 bg-primary/40" />
        </motion.div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {loveReasons.map((item, i) => (
            <LoveCard key={item.title} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
