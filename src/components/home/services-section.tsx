import type React from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { HeartPulse, Brain, Bone, Baby, Stethoscope, Eye, ChevronRight } from "lucide-react"

interface ServiceCardProps {
  title: string
  description: string
  icon: React.ReactNode
  href: string
}

const ServiceCard = ({ title, description, icon, href }: ServiceCardProps) => {
  return (
    <Card className="border-none shadow-lg hover:shadow-xl transition-shadow group">
      <CardHeader className="pb-2">
        <div className="w-14 h-14 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
          {icon}
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-gray-600 mb-4">{description}</CardDescription>
        <Link
          href={href}
          className="text-blue-600 font-medium inline-flex items-center hover:text-blue-700"
        >
          Learn More <ChevronRight className="ml-1 h-4 w-4" />
        </Link>
      </CardContent>
    </Card>
  )
}

const ServicesSection = () => {
  const services = [
    {
      title: "Cardiology",
      description: "Comprehensive cardiac care including prevention, diagnosis, and treatment of heart diseases with cutting-edge technology.",
      icon: <HeartPulse className="h-8 w-8" />,
      href: "/services/cardiology"
    },
    {
      title: "Neurology",
      description: "Expert diagnosis and treatment of conditions affecting the brain, spinal cord, and nervous system.",
      icon: <Brain className="h-8 w-8" />,
      href: "/services/neurology"
    },
    {
      title: "Orthopedics",
      description: "Specialized care for musculoskeletal issues including bones, joints, ligaments, tendons, and muscles.",
      icon: <Bone className="h-8 w-8" />,
      href: "/services/orthopedics"
    },
    {
      title: "Pediatrics",
      description: "Compassionate healthcare for children from birth through adolescence, with specialized pediatric services.",
      icon: <Baby className="h-8 w-8" />,
      href: "/services/pediatrics"
    },
    {
      title: "Internal Medicine",
      description: "Comprehensive healthcare for adults focusing on prevention, diagnosis, and treatment of diseases.",
      icon: <Stethoscope className="h-8 w-8" />,
      href: "/services/internal-medicine"
    },
    {
      title: "Ophthalmology",
      description: "Complete eye care services from routine exams to advanced surgical procedures for eye conditions.",
      icon: <Eye className="h-8 w-8" />,
      href: "/services/ophthalmology"
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Medical Services</h2>
          <p className="text-gray-600 text-lg">
            We provide comprehensive healthcare services with cutting-edge technology and
            experienced specialists dedicated to delivering outstanding patient care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild size="lg">
            <Link href="/services">
              View All Services <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
