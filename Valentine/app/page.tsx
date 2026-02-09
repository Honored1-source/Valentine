import HeroSection from "@/components/hero-section"
import GallerySection from "@/components/gallery-section"
import LoveCardsSection from "@/components/love-cards-section"
import TimelineSection from "@/components/timeline-section"
import ValentineSection from "@/components/valentine-section"
import LoveLetterSection from "@/components/love-letter-section"
import SectionDivider from "@/components/section-divider"
import FloatingElements from "@/components/floating-elements"
import Footer from "@/components/footer"

export default function Page() {
  return (
    <main className="relative">
      <FloatingElements count={12} types={["heart", "petal"]} />
      <HeroSection />
      <SectionDivider />
      <GallerySection />
      <SectionDivider />
      <LoveCardsSection />
      <SectionDivider />
      <TimelineSection />
      <SectionDivider />
      <ValentineSection />
      <SectionDivider />
      <LoveLetterSection />
      <Footer />
    </main>
  )
}
