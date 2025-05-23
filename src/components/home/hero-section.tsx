import React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CalendarDays, Phone, ChevronRight } from "lucide-react"

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-950 to-blue-900 text-white">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-white to-transparent" />
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-b from-blue-400 to-transparent opacity-20" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 py-16 md:py-24 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center px-4 py-2 bg-blue-800/50 rounded-full text-sm">
              <span className="font-medium">Your health is our priority</span>
            </div>
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Exceptional Care for a <span className="text-blue-300">Healthier Life</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-xl">
              Şanmad Hospital combines compassionate care with cutting-edge technology to provide the best healthcare services for you and your family.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Link href="/appointments" className="inline-flex items-center">
                  <CalendarDays className="mr-2 h-5 w-5" />
                  Book Appointment
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="bg-white text-blue-950 hover:bg-blue-100">
                <Link href="/services" className="inline-flex items-center">
                  Learn More
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            <div className="flex items-center pt-4">
              <div className="h-12 w-12 rounded-full bg-blue-600 flex items-center justify-center mr-4">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm text-blue-200">Emergency Hotline</p>
                <p className="text-xl font-bold">1-800-HOSPITAL</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-video rounded-xl overflow-hidden border-8 border-white/10 shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Medical professionals at Şanmad Hospital"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-blue-500 rounded-lg p-6 shadow-lg hidden md:block">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <p className="font-bold text-3xl">50+</p>
                  <p className="text-blue-100 text-sm">Specialists</p>
                </div>
                <div className="text-center">
                  <p className="font-bold text-3xl">20+</p>
                  <p className="text-blue-100 text-sm">Departments</p>
                </div>
                <div className="text-center">
                  <p className="font-bold text-3xl">24/7</p>
                  <p className="text-blue-100 text-sm">Emergency</p>
                </div>
                <div className="text-center">
                  <p className="font-bold text-3xl">15+</p>
                  <p className="text-blue-100 text-sm">Years</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave bottom */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-12 text-white">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fillOpacity=".25" fill="currentColor" />
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" fillOpacity=".5" fill="currentColor" />
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="currentColor" />
        </svg>
      </div>
    </section>
  )
}

export default HeroSection
