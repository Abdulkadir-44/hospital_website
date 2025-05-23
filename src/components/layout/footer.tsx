import React from "react"
import Link from "next/link"
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin, ChevronRight } from "lucide-react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-blue-950 text-gray-200">
      <div className="container-custom pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: About */}
          <div>
            <h3 className="text-white text-xl font-bold mb-6">Şanmad<span className="text-blue-400">Hospital</span></h3>
            <p className="mb-6">
              Providing compassionate healthcare services with cutting-edge
              technology and experienced professionals, dedicated to your wellbeing.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-blue-800 hover:bg-blue-700 h-10 w-10 rounded-full flex items-center justify-center transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-blue-800 hover:bg-blue-700 h-10 w-10 rounded-full flex items-center justify-center transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-blue-800 hover:bg-blue-700 h-10 w-10 rounded-full flex items-center justify-center transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-blue-800 hover:bg-blue-700 h-10 w-10 rounded-full flex items-center justify-center transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Departments */}
          <div>
            <h3 className="text-white text-xl font-bold mb-6">Departments</h3>
            <ul className="space-y-3">
              {[
                "Cardiology",
                "Neurology",
                "Orthopedics",
                "Pediatrics",
                "Oncology",
                "Gynecology",
                "Dermatology",
                "Ophthalmology"
              ].map((dept, index) => (
                <li key={index}>
                  <Link href="#" className="hover:text-blue-400 transition-colors inline-flex items-center">
                    <ChevronRight className="h-4 w-4 mr-2" /> {dept}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h3 className="text-white text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: "About Us", href: "/about" },
                { name: "Doctors", href: "/doctors" },
                { name: "Appointments", href: "/appointments" },
                { name: "Services", href: "/services" },
                { name: "Insurance", href: "/insurance" },
                { name: "Careers", href: "/careers" },
                { name: "Privacy Policy", href: "/privacy-policy" },
                { name: "Contact", href: "/contact" }
              ].map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="hover:text-blue-400 transition-colors inline-flex items-center">
                    <ChevronRight className="h-4 w-4 mr-2" /> {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="text-white text-xl font-bold mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-blue-400 mr-3 mt-0.5" />
                <span>123 Medical Drive, Healthcare City, TX 12345</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-blue-400 mr-3" />
                <span>1-800-HOSPITAL</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-blue-400 mr-3" />
                <span>info@şanmadhospital.com</span>
              </li>
              <li className="flex items-start">
                <Clock className="h-5 w-5 text-blue-400 mr-3 mt-0.5" />
                <div>
                  <p>Monday-Friday: 8am-8pm</p>
                  <p>Saturday-Sunday: 9am-6pm</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-blue-900 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {currentYear} Şanmad Hospital. All rights reserved.</p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6">
                <li><Link href="/terms" className="hover:text-blue-400 transition-colors">Terms</Link></li>
                <li><Link href="/privacy" className="hover:text-blue-400 transition-colors">Privacy</Link></li>
                <li><Link href="/sitemap" className="hover:text-blue-400 transition-colors">Sitemap</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
