import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronDown, Star, MapPin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function AgentsPage() {
  // Sample agent data
  const agents = [
    {
      id: 1,
      name: "Derrick Low",
      title: "Senior Property Consultant",
      specialization: "Residential Properties",
      experience: "10+ years",
      languages: ["English", "Mandarin", "Cantonese"],
      areas: ["Central", "East"],
      rating: 4.9,
      reviews: 42,
      transactions: 87,
      bio: "Derrick specializes in high-end residential properties in Singapore's prime districts. With over a decade of experience, he has helped numerous clients achieve their property goals with his deep market knowledge and negotiation skills.",
      image: "/placeholder.svg?height=300&width=300&text=Derrick",
    },
    {
      id: 2,
      name: "Sophia Chen",
      title: "Property Investment Specialist",
      specialization: "Investment Properties",
      experience: "8 years",
      languages: ["English", "Mandarin"],
      areas: ["Central", "North-East"],
      rating: 4.8,
      reviews: 36,
      transactions: 65,
      bio: "Sophia is an investment property expert who helps clients build their real estate portfolios. Her background in finance gives her a unique perspective on property investment strategies and market trends.",
      image: "/placeholder.svg?height=300&width=300&text=Sophia",
    },
    {
      id: 3,
      name: "Dave Teo",
      title: "HDB Specialist",
      specialization: "HDB Resale",
      experience: "7 years",
      languages: ["English", "Malay", "Tamil"],
      areas: ["West", "North"],
      rating: 4.9,
      reviews: 51,
      transactions: 93,
      bio: "Dave is our HDB resale expert, with extensive knowledge of HDB policies and procedures. He has helped hundreds of families find their perfect home within their budget constraints.",
      image: "/placeholder.svg?height=300&width=300&text=Dave",
    },
    {
      id: 4,
      name: "Jasmine Tan",
      title: "Luxury Property Consultant",
      specialization: "Luxury Condominiums",
      experience: "12 years",
      languages: ["English", "Mandarin", "Japanese"],
      areas: ["Central", "East"],
      rating: 4.7,
      reviews: 39,
      transactions: 72,
      bio: "Jasmine specializes in luxury properties and has an extensive network of high-net-worth clients. Her attention to detail and personalized service have made her a trusted advisor in the luxury property market.",
      image: "/placeholder.svg?height=300&width=300&text=Jasmine",
    },
    {
      id: 5,
      name: "Bjorn Lim",
      title: "Commercial Property Specialist",
      specialization: "Commercial Real Estate",
      experience: "9 years",
      languages: ["English", "Mandarin"],
      areas: ["Central Business District", "Jurong"],
      rating: 4.8,
      reviews: 28,
      transactions: 45,
      bio: "Bjorn focuses on commercial properties, helping businesses find the perfect location for their operations. His background in business development gives him insight into what companies need from their commercial spaces.",
      image: "/placeholder.svg?height=300&width=300&text=Bjorn",
    },
    {
      id: 6,
      name: "Priya Sharma",
      title: "New Launch Specialist",
      specialization: "New Developments",
      experience: "6 years",
      languages: ["English", "Hindi", "Tamil"],
      areas: ["Island-wide"],
      rating: 4.9,
      reviews: 32,
      transactions: 58,
      bio: "Priya specializes in new property launches and has strong relationships with major developers in Singapore. She helps clients get early access to new projects and secure the best units at favorable prices.",
      image: "/placeholder.svg?height=300&width=300&text=Priya",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full bg-white border-b">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-10">
            <Link href="/" className="flex items-center">
              <Image
                src="/placeholder.svg?height=32&width=140&text=PÛRE"
                alt="PÛRE"
                width={140}
                height={32}
                className="h-8 w-auto"
              />
            </Link>
            <nav className="hidden md:flex gap-6">
              <div className="relative group">
                <button className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600">
                  PURE Advantage
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="py-1">
                    <Link href="/calculators" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Property Calculator
                    </Link>
                    <Link href="/property-report" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Get a Free Property Report
                    </Link>
                    <Link href="/agents" className="block px-4 py-2 text-sm text-blue-600 bg-gray-50">
                      Our Agents
                    </Link>
                    <Link href="/buyer-guides" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Buyer Guides
                    </Link>
                    <Link href="/seller-guides" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Seller Guides
                    </Link>
                  </div>
                </div>
              </div>
            </nav>
          </div>
          <div className="flex items-center">
            <Link
              href="https://wa.me/6596899591?text=I'm%20interested%20in%20your%20services!"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-blue-600 hover:bg-blue-700">Get a Free Consultation</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1 bg-gray-50">
        {/* Hero Section */}
        <section className="bg-blue-600 text-white py-16">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Expert Property Agents</h1>
              <p className="text-xl text-blue-100 mb-8">
                Our team of experienced agents are among the top 1% in Singapore, with an average experience of 8+ years
                in the real estate industry.
              </p>
              <div className="flex justify-center">
                <Link
                  href="https://wa.me/6596899591?text=I'm%20interested%20in%20your%20services!"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-white text-blue-600 hover:bg-gray-100">Connect With an Agent</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Agent Stats */}
        <section className="py-12 bg-white">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <p className="text-4xl font-bold text-blue-600 mb-2">8+</p>
                <p className="text-lg text-gray-600">Years Average Experience</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-blue-600 mb-2">98%</p>
                <p className="text-lg text-gray-600">Client Satisfaction Rate</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-blue-600 mb-2">500+</p>
                <p className="text-lg text-gray-600">Successful Transactions</p>
              </div>
            </div>
          </div>
        </section>

        {/* Agent Listings */}
        <section className="py-16">
          <div className="container">
            <h2 className="text-2xl font-bold mb-8">Our Property Consultants</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {agents.map((agent) => (
                <Card key={agent.id} className="overflow-hidden">
                  <div className="relative h-64">
                    <Image src={agent.image || "/placeholder.svg"} alt={agent.name} fill className="object-cover" />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="font-bold text-xl">{agent.name}</h3>
                        <p className="text-gray-600">{agent.title}</p>
                      </div>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                        <span className="font-medium">{agent.rating}</span>
                      </div>
                    </div>

                    <div className="space-y-3 mb-4">
                      <div className="flex items-start gap-2">
                        <Badge className="bg-blue-100 text-blue-600 hover:bg-blue-100 px-2 py-1">
                          {agent.specialization}
                        </Badge>
                        <Badge className="bg-gray-100 text-gray-600 hover:bg-gray-100 px-2 py-1">
                          {agent.experience}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600 line-clamp-3">{agent.bio}</p>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      <div className="flex items-center text-sm text-gray-600">
                        <MapPin className="h-4 w-4 mr-1 text-gray-400" />
                        <span>{agent.areas.join(", ")}</span>
                      </div>
                    </div>

                    <div className="flex justify-between items-center pt-4 border-t">
                      <div className="text-sm text-gray-600">
                        <span className="font-medium">{agent.transactions}</span> transactions
                      </div>
                      <Link
                        href={`https://wa.me/6596899591?text=I'm interested in your services! I'd like to speak with ${agent.name}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-50">
                          Contact Agent
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Our Agents */}
        <section className="py-16 bg-gray-900 text-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Choose Our Agents?</h2>
              <p className="text-gray-300">
                Our agents are carefully selected and trained to provide exceptional service to our clients.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-800 p-8 rounded-lg">
                <div className="bg-blue-600 h-12 w-12 rounded-full flex items-center justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Verified Expertise</h3>
                <p className="text-gray-300">
                  All our agents are CEA-certified and undergo rigorous training and evaluation before joining our team.
                </p>
              </div>

              <div className="bg-gray-800 p-8 rounded-lg">
                <div className="bg-blue-600 h-12 w-12 rounded-full flex items-center justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Tech-Enabled</h3>
                <p className="text-gray-300">
                  Our agents leverage cutting-edge technology and data analytics to provide you with the best service
                  and insights.
                </p>
              </div>

              <div className="bg-gray-800 p-8 rounded-lg">
                <div className="bg-blue-600 h-12 w-12 rounded-full flex items-center justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Client-Focused</h3>
                <p className="text-gray-300">
                  We prioritize your needs and goals, providing personalized service and regular communication
                  throughout the process.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to work with our expert agents?</h2>
            <p className="text-xl mb-8 text-blue-100">Get matched with the perfect agent for your property needs</p>
            <Link
              href="https://wa.me/6596899591?text=I'm%20interested%20in%20your%20services!"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 text-lg">
                Connect With an Agent
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <Image
                src="/placeholder.svg?height=32&width=140&text=PÛRE"
                alt="PÛRE"
                width={140}
                height={32}
                className="h-8 w-auto mb-4 brightness-200"
              />
              <p className="text-gray-400 mt-4">
                People Under Real Estate - Simplifying property transactions in Singapore with technology and
                exceptional service.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">For Sellers</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Sell your property
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Property valuation
                  </Link>
                </li>
                <li>
                  <Link href="/seller-guides" className="text-gray-400 hover:text-white">
                    Seller guides
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Selling calculator
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">For Buyers</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Find properties
                  </Link>
                </li>
                <li>
                  <Link href="/buyer-guides" className="text-gray-400 hover:text-white">
                    Buyer guides
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Home loans
                  </Link>
                </li>
                <li>
                  <Link href="/calculators" className="text-gray-400 hover:text-white">
                    Property calculator
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    About us
                  </Link>
                </li>
                <li>
                  <Link href="/agents" className="text-gray-400 hover:text-white">
                    Our agents
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Contact us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500">© {new Date().getFullYear()} Propseller. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Link href="#" className="text-gray-400 hover:text-white">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
