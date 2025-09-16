
import Header from '@/components/header'
import Footer from '@/components/footer'
import HeroSection from '@/components/hero-section'
import ServicesSection from '@/components/services-section'
import GallerySection from '@/components/gallery-section'
import DestinationsSection from '@/components/destinations-section'
import WhyChooseUsSection from '@/components/why-choose-us-section'
import CTASection from '@/components/cta-section'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ServicesSection />
      <GallerySection />
      <DestinationsSection />
      <WhyChooseUsSection />
      <CTASection />
      <Footer />
    </main>
  )
}
