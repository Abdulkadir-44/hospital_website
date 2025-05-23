import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Quote } from "lucide-react"

interface TestimonialCardProps {
  quote: string
  name: string
  title: string
  imageUrl?: string
  initials: string
}

const TestimonialCard = ({ quote, name, title, imageUrl, initials }: TestimonialCardProps) => {
  return (
    <Card className="border-none shadow-md h-full">
      <CardContent className="pt-6">
        <div className="mb-6 text-blue-600">
          <Quote className="h-8 w-8" />
        </div>
        <blockquote className="text-gray-700 mb-6">
          "{quote}"
        </blockquote>
        <div className="flex items-center">
          <Avatar className="h-12 w-12 mr-4">
            <AvatarImage src={imageUrl} alt={name} />
            <AvatarFallback className="bg-blue-100 text-blue-700">{initials}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold text-gray-900">{name}</p>
            <p className="text-sm text-gray-500">{title}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "The care I received at Şanmad Hospital was exceptional. The doctors took time to explain my condition and treatment options thoroughly. The staff was incredibly supportive throughout my recovery.",
      name: "Emma Thompson",
      title: "Cardiac Patient",
      initials: "ET"
    },
    {
      quote: "I was nervous about my surgery, but the medical team at Şanmad put me at ease. Their professionalism and compassion made a difficult time much easier. The follow-up care has been amazing.",
      name: "Robert Martinez",
      title: "Orthopedic Patient",
      initials: "RM"
    },
    {
      quote: "As a parent, I was worried when my son needed emergency care. The pediatric team at Şanmad Hospital was not only highly skilled but also incredibly kind. They made both of us feel comfortable and well-cared for.",
      name: "Sarah Johnson",
      title: "Parent of Pediatric Patient",
      initials: "SJ"
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Patients Say</h2>
          <p className="text-gray-600 text-lg">
            We take pride in providing exceptional care. Here's what our patients have to say about their experiences at Şanmad Hospital.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-blue-600 text-white p-6 flex items-center justify-center">
              <div className="text-center sm:text-left">
                <p className="text-3xl font-bold mb-2">98%</p>
                <p className="text-sm opacity-90">Patient Satisfaction</p>
              </div>
            </div>
            <div className="bg-blue-600 text-white p-6 flex items-center justify-center">
              <div className="text-center sm:text-left">
                <p className="text-3xl font-bold mb-2">15K+</p>
                <p className="text-sm opacity-90">Patients Annually</p>
              </div>
            </div>
            <div className="bg-blue-600 text-white p-6 flex items-center justify-center">
              <div className="text-center sm:text-left">
                <p className="text-3xl font-bold mb-2">50+</p>
                <p className="text-sm opacity-90">Specialist Doctors</p>
              </div>
            </div>
            <div className="bg-blue-600 text-white p-6 flex items-center justify-center">
              <div className="text-center sm:text-left">
                <p className="text-3xl font-bold mb-2">15+</p>
                <p className="text-sm opacity-90">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
