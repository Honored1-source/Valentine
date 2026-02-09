"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const moments = [
  {
    date: "The day we met",
    title: "First glance",
    text: "I didn't know it then, but that moment changed everything. Something in the way you smiled told me the universe had plans.",
  },
  {
    date: "The night we stayed up talking",
    title: "No more walls",
    text: "We talked until the clock turned 4, I told you things I'd never told anyone. And you held every word so gently.",
  },
  {
    date: "When I knew",
    title: "Certainty",
    text: "It wasn't one big moment. It was a hundred small ones. The way you smiled at me. The way you remembered my small and little details. The way you looked at me like I mattered.",
  },
  {
    date: "Right now",
    title: "Still falling",
    text: "Every day with you feels like the beginning of something beautiful. I didn't know love could keep growing. But with you, it does.",
  },
]

function TimelineItem({ item, index }: { item: (typeof moments)[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })
  const isEven = index % 2 === 0

  return (
    <motion.div
      ref={ref}
      className={`relative flex w-full items-start gap-6 md:gap-10 ${isEven ? "md:flex-row" : "md:flex-row-reverse"} flex-row`}
      initial={{ opacity: 0, x: isEven ? -40 : 40 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.1 }}
    >
      {/* Content card */}
      <div className={`flex-1 ${isEven ? "md:text-right" : "md:text-left"} text-left`}>
        <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
          <span className="font-sans text-xs uppercase tracking-[0.2em] text-primary/70">{item.date}</span>
          <h3 className="mt-2 font-serif text-2xl font-semibold text-foreground md:text-3xl">{item.title}</h3>
          <p className="mt-3 font-sans text-sm leading-relaxed text-muted-foreground md:text-base">{item.text}</p>
        </div>
      </div>

      {/* Center dot */}
      <div className="relative hidden w-5 flex-shrink-0 items-start justify-center pt-8 md:flex">
        <motion.div
          className="relative z-10 flex h-5 w-5 items-center justify-center rounded-full border-2 border-primary bg-background"
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <div className="h-2 w-2 rounded-full bg-primary" />
        </motion.div>
      </div>

      {/* Spacer for alignment */}
      <div className="hidden flex-1 md:block" />
    </motion.div>
  )
}

export default function TimelineSection() {
  const titleRef = useRef(null)
  const titleInView = useInView(titleRef, { once: true, margin: "-100px" })

  return (
    <section className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-4xl">
        <motion.div
          ref={titleRef}
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-3 font-sans text-sm uppercase tracking-[0.25em] text-muted-foreground">
            A story worth telling
          </p>
          <h2 className="font-serif text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
            Best Moments
          </h2>
          <div className="mx-auto mt-4 h-px w-16 bg-primary/40" />
        </motion.div>

        {/* Timeline line */}
        <div className="relative">
          <div className="absolute top-0 hidden h-full w-px bg-border md:left-1/2 md:block" />
          <div className="flex flex-col gap-10 md:gap-16">
            {moments.map((item, i) => (
              <TimelineItem key={item.title} item={item} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
