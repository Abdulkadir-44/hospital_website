import HeroSection from "@/components/home/hero-section"
import ServicesSection from "@/components/home/services-section"
import DoctorsSection from "@/components/home/doctors-section"
import TestimonialsSection from "@/components/home/testimonials-section"
import AppointmentSection from "@/components/home/appointment-section"
import NewsSection from "@/components/home/news-section"
import CTASection from "@/components/home/cta-section"

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <DoctorsSection />
      <TestimonialsSection />
      <AppointmentSection />
      <NewsSection />
      <CTASection />
    </>
  )
}
