import React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CalendarDays, ChevronRight } from "lucide-react"

interface NewsCardProps {
  title: string
  excerpt: string
  category: string
  date: string
  imageUrl: string
  slug: string
}

const NewsCard = ({ title, excerpt, category, date, imageUrl, slug }: NewsCardProps) => {
  return (
    <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow">
      <div className="aspect-video overflow-hidden relative">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full font-medium">
            {category}
          </span>
        </div>
      </div>
      <CardContent className="p-6">
        <div className="flex items-center mb-3 text-gray-500 text-sm">
          <CalendarDays className="h-4 w-4 mr-2" />
          <span>{date}</span>
        </div>
        <h3 className="text-xl font-semibold mb-2">
          <Link href={`/news/${slug}`} className="hover:text-blue-600 transition-colors">
            {title}
          </Link>
        </h3>
        <p className="text-gray-600 mb-4">{excerpt}</p>
        <Link
          href={`/news/${slug}`}
          className="text-blue-600 font-medium inline-flex items-center hover:text-blue-700"
        >
          Read More <ChevronRight className="ml-1 h-4 w-4" />
        </Link>
      </CardContent>
    </Card>
  )
}

const NewsSection = () => {
  const newsItems = [
    {
      title: "Şanmad Hospital Introduces Cutting-Edge Robotic Surgery Technology",
      excerpt: "Our hospital has invested in state-of-the-art robotic surgery systems, enhancing precision and reducing recovery time for patients.",
      category: "Technology",
      date: "May 18, 2025",
      imageUrl: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      slug: "şanmad-hospital-introduces-robotic-surgery"
    },
    {
      title: "New Pediatric Wing Opens to Better Serve Young Patients",
      excerpt: "Şanmad Hospital has opened a specialized pediatric wing designed to create a comfortable and reassuring environment for children and their families.",
      category: "Facilities",
      date: "May 10, 2025",
      imageUrl: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80",
      slug: "new-pediatric-wing-opens"
    },
    {
      title: "Şanmad Hospital Hosts Free Community Health Screening Event",
      excerpt: "As part of our commitment to community health, we're hosting a free screening event offering blood pressure checks, diabetes screenings, and more.",
      category: "Community",
      date: "May 5, 2025",
      imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      slug: "free-community-health-screening-event"
    }
  ]

  return (
    <section className="py-16 md:py-24">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div className="max-w-2xl mb-6 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest News & Events</h2>
            <p className="text-gray-600 text-lg">
              Stay updated on the latest medical advancements, hospital news, and
              upcoming health events in our community.
            </p>
          </div>
          <Button asChild variant="outline" size="lg">
            <Link href="/news">
              View All News <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((news, index) => (
            <NewsCard key={index} {...news} />
          ))}
        </div>

        <div className="mt-16 bg-blue-600 text-white rounded-xl p-8 lg:p-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="lg:max-w-xl">
              <h3 className="text-2xl md:text-3xl font-bold text-blue-100 mb-4">Subscribe to Our Newsletter</h3>
              <p className="mb-0 text-blue-100">
                Get the latest health tips, hospital news, and information about upcoming events
                delivered directly to your inbox.
              </p>
            </div>
            <div className="w-full lg:w-auto">
              <div className="flex flex-col items-center sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="px-4 py-3 rounded-md text-gray-900 w-full sm:w-64"
                />
                <Button className="bg-white text-blue-600 hover:bg-blue-50 font-medium whitespace-nowrap">
                  Subscribe Now
                </Button>
              </div>
              <p className="text-xs text-blue-200 mt-2">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NewsSection
