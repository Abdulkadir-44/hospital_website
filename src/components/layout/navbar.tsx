"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { Phone, Menu, X, Clock, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const TopBar = () => {
  return (
    <div className="bg-primary text-white py-2 hidden md:block">
      <div className="container-custom flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span className="text-sm">Mon-Fri: 8am-8pm, Sat-Sun: 9am-6pm</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            <span className="text-sm">123 Medical Drive, Healthcare City</span>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4" />
            <span className="text-sm font-medium">Emergency: 1-800-HOSPITAL</span>
          </div>
        </div>
      </div>
    </div>
  )
}

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const navLinks = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Services", href: "/services" },
    { title: "Doctors", href: "/doctors" },
    { title: "Patient Info", href: "/patients" },
    { title: "Careers", href: "/careers" },
    { title: "Contact", href: "/contact" },
  ]

  return (
    <>
      <TopBar />
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-200 ${
          isScrolled
            ? "bg-white shadow-md py-2"
            : "bg-white py-4"
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <span className="font-bold text-2xl text-primary">
                Şanmad<span className="text-blue-400">Hospital</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-700 hover:text-primary transition-colors font-medium"
                >
                  {link.title}
                </Link>
              ))}
            </nav>

            {/* Call to action */}
            <div className="hidden lg:flex items-center gap-4">
              <Button variant="outline">Patient Portal</Button>
              <Button>Book Appointment</Button>
            </div>

            {/* Mobile Navigation */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px]">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between mb-8 mt-4">
                    <span className="font-bold text-xl text-primary">
                      Şanmad<span className="text-blue-400">Hospital</span>
                    </span>
                  </div>
                  <nav className="flex flex-col space-y-4">
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="text-gray-700 hover:text-primary transition-colors px-2 py-1.5 rounded-md hover:bg-gray-100"
                      >
                        {link.title}
                      </Link>
                    ))}
                  </nav>
                  <div className="mt-auto space-y-3 pt-8">
                    <Button variant="outline" className="w-full">Patient Portal</Button>
                    <Button className="w-full">Book Appointment</Button>
                    <div className="pt-4 space-y-2">
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-primary" />
                        <span className="text-sm">1-800-HOSPITAL</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-primary" />
                        <span className="text-sm">Mon-Fri: 8am-8pm</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-primary" />
                        <span className="text-sm">123 Medical Drive</span>
                      </div>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar
