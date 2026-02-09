"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"

const letterText = `My dearest,

There are things I carry in my chest that I've never known how to say out loud. So I built this instead. A quiet little corner of the internet, just for you.

You came into my life like morning light — soft, warm, and impossible to ignore. Before you, I didn't know love could feel this steady, this safe, this full.

I love the way you make ordinary days feel extraordinary. The way a walk to the grocery store becomes an adventure. The way a rainy afternoon becomes the coziest memory. You turn everything you touch into something beautiful.

I know I don't always find the right words at the right time. I know sometimes I go quiet when I should speak. But I want you to know — even in my silence, I am always loving you. Loudly. Endlessly.

You are my favorite person. My safest place. My best friend. My greatest adventure.

Thank you for choosing me. For staying. For being exactly who you are.

I love you — not just today, but in every version of tomorrow I can imagine.`

const signature = "Forever yours"

function TypingText({ text, isInView }: { text: string; isInView: boolean }) {
  const [displayed, setDisplayed] = useState("")
  const [started, setStarted] = useState(false)

  useEffect(() => {
    if (isInView && !started) {
      setStarted(true)
    }
  }, [isInView, started])

  useEffect(() => {
    if (!started) return
    if (displayed.length >= text.length) return

    const timeout = setTimeout(
      () => {
        setDisplayed(text.slice(0, displayed.length + 1))
      },
      text[displayed.length] === "\n" ? 80 : 18,
    )

    return () => clearTimeout(timeout)
  }, [displayed, text, started])

  return (
    <div className="font-sans text-base leading-relaxed text-foreground/80 whitespace-pre-line md:text-lg md:leading-loose">
      {displayed}
      {started && displayed.length < text.length && (
        <motion.span
          className="inline-block h-5 w-0.5 bg-primary ml-0.5"
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY }}
        />
      )}
    </div>
  )
}

export default function LoveLetterSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      className="relative px-6 py-24 md:py-32"
      style={{
        background:
          "linear-gradient(180deg, hsl(20,20%,92%) 0%, hsl(350,28%,86%) 100%)",
      }}
    >
      <div className="mx-auto max-w-2xl">
        <motion.div
          ref={ref}
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-3 font-sans text-sm uppercase tracking-[0.25em] text-muted-foreground">
            From my heart to yours
          </p>
          <h2 className="font-serif text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
            A Love Letter
          </h2>
          <div className="mx-auto mt-4 h-px w-16 bg-primary/40" />
        </motion.div>

        {/* Letter paper */}
        <motion.div
          className="relative rounded-2xl border border-border bg-card p-8 shadow-lg md:p-12"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Paper texture feel */}
          <div className="absolute inset-0 rounded-2xl opacity-30" style={{ background: "url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"4\" height=\"4\"><rect width=\"4\" height=\"4\" fill=\"transparent\"/><rect width=\"1\" height=\"1\" fill=\"rgba(0,0,0,0.02)\"/></svg>')" }} />

          <div className="relative z-10">
            <TypingText text={letterText} isInView={isInView} />

            <motion.div
              className="mt-10 border-t border-border pt-6"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 2, duration: 1 }}
            >
              <p className="font-serif text-xl italic text-primary md:text-2xl">{signature}</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
