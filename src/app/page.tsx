import { HeroSection } from "../components/landing/hero-section"
import { FeaturesSection } from "../components/landing/features-section"
import { ProblemSection } from "../components/landing/problem-section"
import { BenefitsSection } from "../components/landing/benefits-section"
import { TestimonialsSection } from "../components/landing/testimonials-section"
import { CTASection } from "../components/landing/cta-section"
import { Footer } from "../components/landing/footer"
import { Navbar } from "../components/landing/navbar"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <ProblemSection />
        <FeaturesSection />
        <BenefitsSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}

