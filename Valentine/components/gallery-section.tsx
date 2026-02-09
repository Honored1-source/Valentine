"use client"

import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { useRef } from "react"

const photos = [
  { src: "/gallery-1.jpg", caption: "The flowers that remind me of you", tall: true },
  { src: "/gallery-2.jpg", caption: "Our quiet mornings together", tall: false },
  { src: "/gallery-3.jpg", caption: "Sunsets we chased", tall: false },
  { src: "/gallery-4.jpg", caption: "Words I meant to say", tall: true },
  { src: "/gallery-5.jpg", caption: "Even the cat knows we belong", tall: false },
  { src: "/gallery-6.jpg", caption: "Our cozy little world", tall: false },
]

function GalleryItem({ photo, index }: { photo: (typeof photos)[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      className={`group relative overflow-hidden rounded-2xl ${photo.tall ? "row-span-2" : ""}`}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1 }}
    >
      <div className="relative w-full h-full">
        <Image
          src={photo.src || "/placeholder.svg"}
          alt={photo.caption}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 flex items-end bg-gradient-to-t from-foreground/50 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <p className="p-4 font-sans text-sm text-primary-foreground md:p-6 md:text-base">{photo.caption}</p>
        </div>
      </div>
    </motion.div>
  )
}

export default function GallerySection() {
  const titleRef = useRef(null)
  const titleInView = useInView(titleRef, { once: true, margin: "-100px" })

  return (
    <section id="gallery" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        {/* Section title */}
        <motion.div
          ref={titleRef}
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-3 font-sans text-sm uppercase tracking-[0.25em] text-muted-foreground">
            Moments with you
          </p>
          <h2 className="font-serif text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
            Her Gallery
          </h2>
          <div className="mx-auto mt-4 h-px w-16 bg-primary/40" />
        </motion.div>

        {/* Masonry grid */}
        <div className="grid auto-rows-[200px] grid-cols-1 gap-4 md:auto-rows-[240px] md:grid-cols-2 lg:grid-cols-3">
          {photos.map((photo, i) => (
            <GalleryItem key={photo.src} photo={photo} index={i} />
          ))}
        </div>

        <motion.p
          className="mt-12 text-center font-sans text-sm italic text-muted-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          {"Replace these with your own photos to make it truly yours."}
        </motion.p>
      </div>
    </section>
  )
}
