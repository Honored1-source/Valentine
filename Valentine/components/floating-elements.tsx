"use client"

import { motion } from "framer-motion"
import { useMemo } from "react"

function Heart({ size, color }: { size: number; color: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  )
}

function Petal({ size }: { size: number }) {
  return (
    <svg width={size} height={size * 1.4} viewBox="0 0 20 28" fill="none">
      <path
        d="M10 0C10 0 0 8 0 16c0 6.627 4.477 12 10 12s10-5.373 10-12C20 8 10 0 10 0z"
        fill="hsl(350, 58%, 64%)"
        opacity={0.6}
      />
    </svg>
  )
}

interface FloatingConfig {
  id: number
  type: "heart" | "petal"
  x: number
  size: number
  duration: number
  delay: number
  color: string
  rotate: number
}

export default function FloatingElements({ count = 15, types = ["heart", "petal"] }: { count?: number; types?: ("heart" | "petal")[] }) {
  const typesKey = types.join(",")
  const elements = useMemo<FloatingConfig[]>(() => {
    const typeArr = typesKey.split(",") as ("heart" | "petal")[]
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      type: typeArr[i % typeArr.length],
      x: Math.random() * 100,
      size: 10 + Math.random() * 18,
      duration: 8 + Math.random() * 12,
      delay: Math.random() * 10,
      color: ["hsl(350,60%,58%)", "hsl(350,50%,68%)", "hsl(0,55%,62%)", "hsl(20,40%,72%)"][i % 4],
      rotate: Math.random() * 360,
    }))
  }, [count, typesKey])

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      {elements.map((el) => (
        <motion.div
          key={el.id}
          className="absolute"
          style={{ left: `${el.x}%` }}
          initial={{ y: "-10%", opacity: 0, rotate: el.rotate }}
          animate={{
            y: "110vh",
            opacity: [0, 0.7, 0.7, 0],
            rotate: el.rotate + 360,
          }}
          transition={{
            duration: el.duration,
            delay: el.delay,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        >
          {el.type === "heart" ? (
            <Heart size={el.size} color={el.color} />
          ) : (
            <Petal size={el.size} />
          )}
        </motion.div>
      ))}
    </div>
  )
}
