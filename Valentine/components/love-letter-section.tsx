"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"

const letterText = `There is something about you the world can't replace,
A calm in your voice, a light in your face,
No storm, no chaos, no grand display—
Yet everything shifts when you stay.

Not loudly spoken, not forced or shown,
But deeply, quietly, you are known,
Like a truth the heart had always knew,
Before it ever even met you.

This feeling didn't arrive with sound,
It grew in silence, soft and profound,
No sudden fire, no reckless start,
Just a steady claim upon the heart.

And if love exists in its purest form,
It isn't loud, it isn't a storm,
It's the peace that settles, warm and true,
In simply being close to you.

Not perfection, not some ideal,
But something human, raw, and real,
A presence that doesn't try to shine—
Yet becomes the brightest sign.

Because somewhere between each word you say,
And every quiet, passing day,
Something deeper begins to prove
That this is more than passing "new."

It feels like care that chose to stay,
Like light that gently found its way,
Like fate didn't shout or loudly start—
It simply placed you in this heart.

And what grows here cannot pretend,
It doesn't rush, it doesn't bend,
It stands, it breathes, it learns your name,
And nothing after feels the same.

Call it love, or something more,
Something the soul has felt before,
Not loud enough for crowds to see—
But louder than eternity.

Because loving you is not a phase,
Not fleeting nights or passing days,
It's the quiet truth the heart once knew…

That it was always meant to love you.`

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
      text[displayed.length] === "\n" ? 200 : 45,
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
