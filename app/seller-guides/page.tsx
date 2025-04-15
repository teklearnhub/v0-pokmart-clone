import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronDown, Clock, ArrowRight, FileText, BookOpen, Download, CheckCircle } from "lucide-react"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function SellerGuidesPage() {
  // Sample guide data
  const featuredGuides = [
    {
      id: 1,
      title: "Complete Guide to Selling Your Property in Singapore",
      description: "A comprehensive guide covering every step of the selling process, from preparation to closing.",
      image: "/placeholder.svg?height=400&width=600&text=Selling+Guide",
      readTime: "18 min read",
      category: "Beginner",
      date: "Updated April 2025",
    },
    {
      id: 2,
      title: "How to Maximize Your Property's Value Before Selling",
      description: "Practical tips and strategies to increase your property's value and attract better offers.",
      image: "/placeholder.svg?height=400&width=600&text=Maximize+Value",
      readTime: "12 min read",
      category: "Preparation",
      date: "Updated March 2025",
    },
    {
      id: 3,
      title: "Understanding Property Taxes When Selling in Singapore",
      description: "A detailed guide to Seller's Stamp Duty, capital gains, and other tax considerations for sellers.",
      image: "/placeholder.svg?height=400&width=600&text=Property+Taxes",
      readTime: "10 min read",
      category: "Legal & Taxes",
      date: "Updated April 2025",
    },
  ]

  const allGuides = [
    // Beginner Guides
    {
      id: 4,
      title: "Property Selling Process in Singapore",
      description: "A step-by-step guide to the entire property selling process in Singapore.",
      readTime: "8 min read",
      category: "Beginner",
      date: "Updated February 2025",
    },
    {
      id: 5,
      title: "When Is the Right Time to Sell Your Property?",
      description: "Factors to consider when deciding the optimal time to sell your property.",
      readTime: "6 min read",
      category: "Beginner",
      date: "Updated January 2025",
    },
    {
      id: 6,
      title: "Choosing the Right Property Agent",
      description: "How to select a property agent who will best represent your interests.",
      readTime: "7 min read",
      category: "Beginner",
      date: "Updated March 2025",
    },

    // Preparation Guides
    {
      id: 7,
      title: "Home Staging Tips for Singapore Properties",
      description: "How to stage your home effectively to attract potential buyers.",
      readTime: "9 min read",
      category: "Preparation",
      date: "Updated April 2025",
    },
    {
      id: 8,
      title: "Essential Repairs Before Selling Your Property",
      description: "Which repairs are worth making and which ones you can skip when selling.",
      readTime: "8 min read",
      category: "Preparation",
      date: "Updated March 2025",
    },
    {
      id: 9,
      title: "Professional Photography Tips for Property Listings",
      description: "How to ensure your property is photographed in the best possible light.",
      readTime: "6 min read",
      category: "Preparation",
      date: "Updated February 2025",
    },

    // Marketing Guides
    {
      id: 10,
      title: "Effective Property Listing Strategies",
      description: "How to create compelling property listings that attract serious buyers.",
      readTime: "7 min read",
      category: "Marketing",
      date: "Updated April 2025",
    },
    {
      id: 11,
      title: "Setting the Right Price for Your Property",
      description: "Strategies for pricing your property to maximize interest and offers.",
      readTime: "10 min read",
      category: "Marketing",
      date: "Updated March 2025",
    },
    {
      id: 12,
      title: "Hosting Successful Property Viewings",
      description: "Tips for conducting effective property viewings that convert to offers.",
      readTime: "8 min read",
      category: "Marketing",
      date: "Updated February 2025",
    },

    // Legal & Taxes Guides
    {
      id: 13,
      title: "Seller's Stamp Duty (SSD) Explained",
      description: "Understanding Seller's Stamp Duty and how it might affect your property sale.",
      readTime: "6 min read",
      category: "Legal & Taxes",
      date: "Updated April 2025",
    },
    {
      id: 14,
      title: "Legal Documents Needed When Selling Property",
      description: "A checklist of all legal documents required for a smooth property sale.",
      readTime: "7 min read",
      category: "Legal & Taxes",
      date: "Updated March 2025",
    },
    {
      id: 15,
      title: "Understanding the Option to Purchase (OTP) as a Seller",
      description: "What sellers need to know about the Option to Purchase agreement.",
      readTime: "5 min read",
      category: "Legal & Taxes",
      date: "Updated February 2025",
    },
  ]

  // Downloadable resources
  const resources = [
    {
      id: 1,
      title: "Property Selling Checklist",
      description: "A comprehensive checklist to guide you through the entire selling process.",
      type: "PDF",
    },
    {
      id: 2,
      title: "Home Staging Guide",
      description: "Detailed tips and tricks for staging your home to maximize its appeal.",
      type: "PDF",
    },
    {
      id: 3,
      title: "Property Valuation Worksheet",
      description: "A worksheet to help you determine the optimal selling price for your property.",
      type: "Excel",
    },
    {
      id: 4,
      title: "Seller's Legal Document Checklist",
      description: "A list of all legal documents you'll need when selling your property.",
      type: "PDF",
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
                    <Link href="/agents" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Our Agents
                    </Link>
                    <Link href="/buyer-guides" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Buyer Guides
                    </Link>
                    <Link href="/seller-guides" className="block px-4 py-2 text-sm text-blue-600 bg-gray-50">
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
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Property Seller Guides</h1>
              <p className="text-xl text-blue-100 mb-8">
                Expert advice and resources to help you sell your property quickly and at the best possible price.
              </p>
              <div className="flex justify-center">
                <Link
                  href="https://wa.me/6596899591?text=I'm%20interested%20in%20your%20services!"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-white text-blue-600 hover:bg-gray-100">Speak to a Property Expert</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Why Sell with Us */}
        <section className="py-12 bg-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-2xl font-bold mb-4">Why Sell With PÛRE?</h2>
              <p className="text-gray-600">
                Our tech-enabled approach and expert agents help you sell faster and at better prices.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">22 Days</h3>
                <p className="text-gray-600">
                  Average time to sell a property, compared to the market average of 90+ days
                </p>
              </div>

              <div className="text-center">
                <div className="bg-blue-100 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">99%</h3>
                <p className="text-gray-600">Of our listings sell at or above the expected price</p>
              </div>

              <div className="text-center">
                <div className="bg-blue-100 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">1% Commission</h3>
                <p className="text-gray-600">Transparent fee structure with no hidden costs</p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Guides */}
        <section className="py-16">
          <div className="container">
            <h2 className="text-2xl font-bold mb-8">Featured Guides</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredGuides.map((guide) => (
                <Card key={guide.id} className="overflow-hidden">
                  <div className="relative h-48">
                    <Image src={guide.image || "/placeholder.svg"} alt={guide.title} fill className="object-cover" />
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-medium px-2.5 py-0.5 rounded bg-blue-100 text-blue-800">
                        {guide.category}
                      </span>
                      <div className="flex items-center text-gray-500 text-xs">
                        <Clock className="h-3 w-3 mr-1" />
                        {guide.readTime}
                      </div>
                    </div>
                    <CardTitle className="text-xl">{guide.title}</CardTitle>
                    <CardDescription>{guide.description}</CardDescription>
                  </CardHeader>
                  <CardFooter className="flex justify-between items-center pt-2 border-t">
                    <span className="text-xs text-gray-500">{guide.date}</span>
                    <Link href={`/seller-guides/${guide.id}`}>
                      <Button variant="ghost" className="text-blue-600 hover:text-blue-800 p-0">
                        Read Guide <ArrowRight className="h-4 w-4 ml-1" />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* All Guides */}
        <section className="py-16 bg-white">
          <div className="container">
            <h2 className="text-2xl font-bold mb-8">All Seller Guides</h2>

            <Tabs defaultValue="beginner" className="w-full">
              <TabsList className="grid grid-cols-4 mb-8">
                <TabsTrigger value="beginner">Beginner</TabsTrigger>
                <TabsTrigger value="preparation">Preparation</TabsTrigger>
                <TabsTrigger value="marketing">Marketing</TabsTrigger>
                <TabsTrigger value="legal-taxes">Legal & Taxes</TabsTrigger>
              </TabsList>

              {["beginner", "preparation", "marketing", "legal-taxes"].map((category) => (
                <TabsContent key={category} value={category} className="mt-0">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {allGuides
                      .filter((guide) => guide.category.toLowerCase() === category.replace("-", " & "))
                      .map((guide) => (
                        <Card key={guide.id}>
                          <CardHeader>
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-xs font-medium px-2.5 py-0.5 rounded bg-blue-100 text-blue-800">
                                {guide.category}
                              </span>
                              <div className="flex items-center text-gray-500 text-xs">
                                <Clock className="h-3 w-3 mr-1" />
                                {guide.readTime}
                              </div>
                            </div>
                            <CardTitle className="text-lg">{guide.title}</CardTitle>
                            <CardDescription>{guide.description}</CardDescription>
                          </CardHeader>
                          <CardFooter className="flex justify-between items-center pt-2 border-t">
                            <span className="text-xs text-gray-500">{guide.date}</span>
                            <Link href={`/seller-guides/${guide.id}`}>
                              <Button variant="ghost" className="text-blue-600 hover:text-blue-800 p-0">
                                Read Guide <ArrowRight className="h-4 w-4 ml-1" />
                              </Button>
                            </Link>
                          </CardFooter>
                        </Card>
                      ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* Downloadable Resources */}
        <section className="py-16 bg-gray-100">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-2xl font-bold mb-4">Free Downloadable Resources</h2>
              <p className="text-gray-600">
                Download these helpful resources to assist you in your property selling journey.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {resources.map((resource) => (
                <Card key={resource.id} className="flex">
                  <div className="bg-blue-100 p-4 flex items-center justify-center">
                    {resource.type === "PDF" ? (
                      <FileText className="h-8 w-8 text-blue-600" />
                    ) : (
                      <BookOpen className="h-8 w-8 text-blue-600" />
                    )}
                  </div>
                  <div className="flex-1 p-4">
                    <h3 className="font-bold mb-1">{resource.title}</h3>
                    <p className="text-sm text-gray-600 mb-3">{resource.description}</p>
                    <Button variant="outline" size="sm" className="text-blue-600 border-blue-600">
                      <Download className="h-4 w-4 mr-2" /> Download {resource.type}
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to sell your property?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Get a free property valuation and consultation with our experts
            </p>
            <Link
              href="https://wa.me/6596899591?text=I'm%20interested%20in%20your%20services!"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 text-lg">
                Get a Free Valuation
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
