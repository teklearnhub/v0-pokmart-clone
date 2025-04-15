import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronDown, Clock, ArrowRight, FileText, BookOpen, Download } from "lucide-react"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function BuyerGuidesPage() {
  // Sample guide data
  const featuredGuides = [
    {
      id: 1,
      title: "First-Time Buyer's Complete Guide to Singapore Property",
      description:
        "Everything you need to know about buying your first property in Singapore, from budgeting to key considerations.",
      image: "/placeholder.svg?height=400&width=600&text=First-Time+Buyer",
      readTime: "15 min read",
      category: "Beginner",
      date: "Updated April 2025",
    },
    {
      id: 2,
      title: "Understanding Property Financing in Singapore",
      description:
        "A comprehensive guide to home loans, mortgage options, and financing strategies for property buyers.",
      image: "/placeholder.svg?height=400&width=600&text=Property+Financing",
      readTime: "12 min read",
      category: "Financing",
      date: "Updated March 2025",
    },
    {
      id: 3,
      title: "HDB vs Private Property: Making the Right Choice",
      description:
        "Compare the pros and cons of HDB flats and private properties to determine which is right for your needs.",
      image: "/placeholder.svg?height=400&width=600&text=HDB+vs+Private",
      readTime: "10 min read",
      category: "Property Types",
      date: "Updated April 2025",
    },
  ]

  const allGuides = [
    // Beginner Guides
    {
      id: 4,
      title: "Property Buying Process in Singapore",
      description: "A step-by-step guide to the entire property buying process in Singapore.",
      readTime: "8 min read",
      category: "Beginner",
      date: "Updated February 2025",
    },
    {
      id: 5,
      title: "Understanding Property Terminology",
      description: "Decode common real estate terms and jargon used in Singapore's property market.",
      readTime: "6 min read",
      category: "Beginner",
      date: "Updated January 2025",
    },
    {
      id: 6,
      title: "Property Viewing Checklist",
      description: "Essential things to look for and questions to ask when viewing properties.",
      readTime: "5 min read",
      category: "Beginner",
      date: "Updated March 2025",
    },

    // Financing Guides
    {
      id: 7,
      title: "Guide to Home Loan Interest Rates",
      description: "Understanding fixed vs. floating rates and how to choose the right option.",
      readTime: "7 min read",
      category: "Financing",
      date: "Updated April 2025",
    },
    {
      id: 8,
      title: "CPF Usage for Property Purchase",
      description: "How to optimize your CPF usage when buying property in Singapore.",
      readTime: "9 min read",
      category: "Financing",
      date: "Updated March 2025",
    },
    {
      id: 9,
      title: "Understanding TDSR and LTV Limits",
      description: "How loan restrictions affect your property purchase and borrowing capacity.",
      readTime: "8 min read",
      category: "Financing",
      date: "Updated February 2025",
    },

    // Property Types Guides
    {
      id: 10,
      title: "Comparing Condo Facilities and Management",
      description: "What to look for in condominium facilities and management before buying.",
      readTime: "7 min read",
      category: "Property Types",
      date: "Updated April 2025",
    },
    {
      id: 11,
      title: "Landed Property Buying Guide",
      description: "Special considerations when purchasing landed properties in Singapore.",
      readTime: "10 min read",
      category: "Property Types",
      date: "Updated March 2025",
    },
    {
      id: 12,
      title: "New Launch vs. Resale Properties",
      description: "Pros and cons of buying new launch versus resale properties.",
      readTime: "8 min read",
      category: "Property Types",
      date: "Updated February 2025",
    },

    // Legal & Taxes Guides
    {
      id: 13,
      title: "Stamp Duties Explained (ABSD & BSD)",
      description: "Understanding Buyer's Stamp Duty and Additional Buyer's Stamp Duty in Singapore.",
      readTime: "6 min read",
      category: "Legal & Taxes",
      date: "Updated April 2025",
    },
    {
      id: 14,
      title: "Property Tax Guide for Homeowners",
      description: "How property taxes are calculated and what you need to know as a homeowner.",
      readTime: "7 min read",
      category: "Legal & Taxes",
      date: "Updated March 2025",
    },
    {
      id: 15,
      title: "Understanding the Option to Purchase (OTP)",
      description: "What you need to know about the Option to Purchase agreement when buying property.",
      readTime: "5 min read",
      category: "Legal & Taxes",
      date: "Updated February 2025",
    },
  ]

  // Downloadable resources
  const resources = [
    {
      id: 1,
      title: "Property Viewing Checklist",
      description: "A comprehensive checklist of things to look for when viewing properties.",
      type: "PDF",
    },
    {
      id: 2,
      title: "Home Loan Comparison Spreadsheet",
      description: "Compare different home loan options to find the best one for your needs.",
      type: "Excel",
    },
    {
      id: 3,
      title: "First-Time Buyer's Budget Planner",
      description: "Plan your finances for your first property purchase with this detailed budget template.",
      type: "PDF",
    },
    {
      id: 4,
      title: "Property Purchase Timeline",
      description: "A timeline of the entire property buying process in Singapore.",
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
                    <Link href="/buyer-guides" className="block px-4 py-2 text-sm text-blue-600 bg-gray-50">
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
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Property Buyer Guides</h1>
              <p className="text-xl text-blue-100 mb-8">
                Everything you need to know about buying property in Singapore, from financing to legal considerations.
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
                    <Link href={`/buyer-guides/${guide.id}`}>
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
            <h2 className="text-2xl font-bold mb-8">All Buyer Guides</h2>

            <Tabs defaultValue="beginner" className="w-full">
              <TabsList className="grid grid-cols-4 mb-8">
                <TabsTrigger value="beginner">Beginner</TabsTrigger>
                <TabsTrigger value="financing">Financing</TabsTrigger>
                <TabsTrigger value="property-types">Property Types</TabsTrigger>
                <TabsTrigger value="legal-taxes">Legal & Taxes</TabsTrigger>
              </TabsList>

              {["beginner", "financing", "property-types", "legal-taxes"].map((category) => (
                <TabsContent key={category} value={category} className="mt-0">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {allGuides
                      .filter((guide) => guide.category.toLowerCase() === category.replace("-", " "))
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
                            <Link href={`/buyer-guides/${guide.id}`}>
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
                Download these helpful resources to assist you in your property buying journey.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Need personalized advice?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Our property experts are ready to help you with your specific needs
            </p>
            <Link
              href="https://wa.me/6596899591?text=I'm%20interested%20in%20your%20services!"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 text-lg">Get Expert Advice</Button>
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
