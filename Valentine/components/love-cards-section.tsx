"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const loveReasons = [
  { title: "Everything", detail: "The way you doubt yourself, while being more than enough in ways you don't even realize." },
  { title: "Everything", detail: "The comfort in your presence, nothing loud (a little loud :) ), nothing forced, just peace." },
  { title: "Everything", detail: "The way you care for your friends so deeply, like their happiness matters as much as your own." },
  { title: "Everything", detail: "How you overthink sometimes... and still choose kindness every time." },
  { title: "Everything", detail: "The softness in you that you sometimes mistake for weakness, but I see as your greatest strength." },
  { title: "Everything", detail: "How real you are. No pretending, no trying to impress... just being you." },
  { title: "Everything", detail: "The little things you do for people without expecting anything back." },
  { title: "Everything", detail: "And most of all.... the way you exist so gently in this world, yet leave such a deep impact." },
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
            <LoveCard key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
