import React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, ArrowRight } from "lucide-react"

const CTASection = () => {
  return (
    <section className="relative py-16 md:py-24 bg-blue-950 text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-blue-400 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-blue-300 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
              Your Health Is Our Top Priority
            </h2>
            <p className="text-blue-200 text-lg mb-8 max-w-lg">
              We're committed to providing exceptional healthcare services for you and your family.
              Our team of experienced medical professionals is here to support your health journey.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button asChild size="lg" className="bg-white text-blue-950 hover:bg-blue-100">
                <Link href="/appointments">
                  Book an Appointment
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                <Link href="/contact" className="inline-flex items-center">
                  Contact Us <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-blue-800 flex items-center justify-center shrink-0">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm text-blue-300">Emergency Hotline</p>
                  <p className="text-xl font-bold">1-800-HOSPITAL</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-blue-800 flex items-center justify-center shrink-0">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm text-blue-300">Find Us</p>
                  <p className="text-xl font-bold">Directions</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                title: "24/7 Emergency Care",
                description: "Round-the-clock emergency services for immediate medical attention"
              },
              {
                title: "Online Consultations",
                description: "Virtual appointments with our specialists from the comfort of your home"
              },
              {
                title: "Specialized Treatments",
                description: "Advanced medical procedures tailored to your specific health needs"
              },
              {
                title: "Patient Support",
                description: "Comprehensive support services for patients and their families"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-blue-900/50 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                <p className="text-blue-200">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTASection
