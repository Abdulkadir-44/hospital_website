import React from "react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ChevronRight } from "lucide-react"

interface DoctorCardProps {
  name: string
  specialty: string
  imageUrl: string
  initials: string
  profileUrl: string
}

const DoctorCard = ({ name, specialty, imageUrl, initials, profileUrl }: DoctorCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow">
      <div className="aspect-[3/4] overflow-hidden bg-blue-50">
        <img
          src={imageUrl}
          alt={`Dr. ${name}`}
          className="w-full h-full object-cover transition-transform hover:scale-105"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-1">{name}</h3>
        <p className="text-blue-600 mb-4">{specialty}</p>
        <Link
          href={profileUrl}
          className="text-blue-600 font-medium inline-flex items-center hover:text-blue-700"
        >
          View Profile <ChevronRight className="ml-1 h-4 w-4" />
        </Link>
      </CardContent>
    </Card>
  )
}

const DoctorsSection = () => {
  const doctors = [
    {
      name: "Dr. Sarah Johnson",
      specialty: "Cardiology",
      imageUrl: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      initials: "SJ",
      profileUrl: "/doctors/sarah-johnson"
    },
    {
      name: "Dr. Michael Chen",
      specialty: "Neurology",
      imageUrl: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      initials: "MC",
      profileUrl: "/doctors/michael-chen"
    },
    {
      name: "Dr. Maria Rodriguez",
      specialty: "Pediatrics",
      imageUrl: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      initials: "MR",
      profileUrl: "/doctors/maria-rodriguez"
    },
    {
      name: "Dr. James Wilson",
      specialty: "Orthopedics",
      imageUrl: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
      initials: "JW",
      profileUrl: "/doctors/james-wilson"
    }
  ]

  return (
    <section className="py-16 md:py-24">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div className="max-w-2xl mb-6 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Specialists</h2>
            <p className="text-gray-600 text-lg">
              Our team of highly qualified medical professionals uses the latest
              technologies and treatments to ensure you receive the best care.
            </p>
          </div>
          <Button asChild variant="outline" size="lg">
            <Link href="/doctors">
              View All Doctors <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {doctors.map((doctor, index) => (
            <DoctorCard key={index} {...doctor} />
          ))}
        </div>

        <div className="mt-16 bg-blue-50 rounded-xl p-8 lg:p-12">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex -space-x-4 md:mr-4">
              {doctors.map((doctor, index) => (
                <Avatar key={index} className={`w-16 h-16 border-4 border-white ${index === 0 ? 'z-40' : index === 1 ? 'z-30' : index === 2 ? 'z-20' : 'z-10'}`}>
                  <AvatarImage src={doctor.imageUrl} alt={doctor.name} />
                  <AvatarFallback>{doctor.initials}</AvatarFallback>
                </Avatar>
              ))}
              <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center border-4 border-white z-0">
                <span className="text-sm font-medium">20+</span>
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2">Join Our Team of Specialists</h3>
              <p className="text-gray-600 mb-4">
                We're always looking for talented healthcare professionals to join our growing team.
              </p>
              <Button asChild>
                <Link href="/careers">
                  View Career Opportunities
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DoctorsSection
