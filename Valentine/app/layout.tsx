import React from "react"
import type { Metadata, Viewport } from "next"
import { Playfair_Display, Lora } from "next/font/google"

import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
})

export const metadata: Metadata = {
  title: "For You, With Love",
  description: "A digital love letter — something personal, emotional, and just for you.",
}

export const viewport: Viewport = {
  themeColor: "#c97088",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${lora.variable}`}>
      <body className="font-serif antialiased overflow-x-hidden">{children}</body>
    </html>
  )
}
