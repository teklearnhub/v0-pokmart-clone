import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronDown, Star } from "lucide-react"

export default function HomePage() {
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

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-zinc-800">
          <div className="absolute inset-0 opacity-20">
            <Image
              src="/placeholder.svg?height=600&width=1920"
              alt="Real estate consultants with clients"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="relative container py-20 md:py-28 lg:py-36 flex flex-col items-center text-center text-white z-10">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 max-w-3xl">
              Sell & Buy Property With Singapore&apos;s <span className="text-blue-400">Most Loved Agency</span>
            </h1>
            <div className="flex items-center gap-2 py-4">
              <Image
                src="/placeholder.svg?height=30&width=100&text=Google"
                alt="Google"
                width={100}
                height={30}
                className="h-6 w-auto"
              />
              <span className="font-medium">Excellent</span>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="font-bold">4.8</span>
              <span className="text-gray-200">813 Reviews</span>
            </div>
            <Link
              href="https://wa.me/6596899591?text=I'm%20interested%20in%20your%20services!"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-6 text-lg">
                Get a Free Consultation
              </Button>
            </Link>
          </div>
        </section>

        {/* Media Features */}
        <section className="py-10 bg-white">
          <div className="container">
            <p className="text-center text-sm uppercase tracking-wider text-gray-500 mb-8">AS FEATURED IN</p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
              {[
                "Financial Times",
                "Channel 5",
                "Straits Times",
                "Business Times",
                "Tech in Asia",
                "Lian He Zao Bao",
              ].map((media, index) => (
                <div key={index} className="grayscale opacity-70 hover:opacity-100 transition-opacity">
                  <Image
                    src={`/placeholder.svg?height=40&width=100&text=${media.replace(" ", "+")}`}
                    alt={media}
                    width={100}
                    height={40}
                    className="h-8 w-auto"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Why Choose Propseller?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm flex flex-col items-center text-center">
                <div className="bg-blue-100 p-4 rounded-full mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Sell & Buy Wisely</h3>
                <p className="text-gray-600">
                  Our expert agents ensure you get the best price whether you're selling or buying property in
                  Singapore.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm flex flex-col items-center text-center">
                <div className="bg-blue-100 p-4 rounded-full mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-blue-600"
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
                <h3 className="text-xl font-bold mb-3">Transparent Fees</h3>
                <p className="text-gray-600">
                  Clear and transparent fee structure with no hidden costs, ensuring you know exactly what you're paying
                  for.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm flex flex-col items-center text-center">
                <div className="bg-blue-100 p-4 rounded-full mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Best-In-Class Service</h3>
                <p className="text-gray-600">
                  Our tech-enabled agents provide faster, better service with proven results and outstanding customer
                  satisfaction.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* YouTube Video Showcase */}
        <section className="py-16 bg-white">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Property Showcase</h2>
            <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
              Take a virtual tour of our featured properties and get expert insights from our video guides.
            </p>

            <div className="relative">
              {/* Navigation Arrows */}
              <button className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full p-2 shadow-md hover:bg-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-800"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full p-2 shadow-md hover:bg-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-800"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Video Carousel */}
              <div className="flex overflow-x-auto gap-6 pb-8 hide-scrollbar">
                <div className="min-w-[350px] md:min-w-[400px] flex-shrink-0">
                  <div className="bg-gray-100 rounded-lg overflow-hidden aspect-video relative">
                    <iframe
                      className="absolute inset-0 w-full h-full"
                      src="https://www.youtube.com/embed/Ow9JCXaFVvE"
                      title="Reconfigured City-fringe Loft"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <h3 className="font-bold mt-4">Reconfigured City-fringe Loft</h3>
                  <p className="text-gray-600 text-sm">D3 Spottiswoode Suites</p>
                </div>

                <div className="min-w-[350px] md:min-w-[400px] flex-shrink-0">
                  <div className="bg-gray-100 rounded-lg overflow-hidden aspect-video relative">
                    <iframe
                      className="absolute inset-0 w-full h-full"
                      src="https://www.youtube.com/embed/qZqYuC1Zt0s"
                      title="Folding wall between rooms"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <h3 className="font-bold mt-4">Folding wall between rooms</h3>
                  <p className="text-gray-600 text-sm">D14 MacPherson Residency</p>
                </div>

                <div className="min-w-[350px] md:min-w-[400px] flex-shrink-0">
                  <div className="bg-gray-100 rounded-lg overflow-hidden aspect-video relative">
                    <iframe
                      className="absolute inset-0 w-full h-full"
                      src="https://www.youtube.com/embed/Ow-6F-Y4Zas"
                      title="The Real Marine Parade Gem"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <h3 className="font-bold mt-4">The Real Marine Parade Gem</h3>
                  <p className="text-gray-600 text-sm">D15 Parc Seabreeze</p>
                </div>

                <div className="min-w-[350px] md:min-w-[400px] flex-shrink-0">
                  <div className="bg-gray-100 rounded-lg overflow-hidden aspect-video relative">
                    <iframe
                      className="absolute inset-0 w-full h-full"
                      src="https://www.youtube.com/embed/Ow-6F-Y4Zas"
                      title="Gundams not included"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <h3 className="font-bold mt-4">"Gundams not included"</h3>
                  <p className="text-gray-600 text-sm">D12 Toa Payoh Crest</p>
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <Link href="https://youtube.com/@pure-sg" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                  View All Videos{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Market Insights Section */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Singapore Property Market Insights</h2>
            <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
              Stay informed with the latest trends, data, and forecasts for Singapore's dynamic property market.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Price Trends</h3>
                <p className="text-gray-600 mb-4">
                  Private residential prices increased by 3.2% in Q1 2025, with the strongest growth in the Core Central
                  Region.
                </p>
                <Link href="/market-insights" className="text-blue-600 hover:underline flex items-center text-sm">
                  View Price Analysis
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Upcoming Launches</h3>
                <p className="text-gray-600 mb-4">
                  Explore new property launches in Singapore for 2025, with detailed information on pricing and floor
                  plans.
                </p>
                <Link href="/new-launches" className="text-blue-600 hover:underline flex items-center text-sm">
                  View New Launches
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Market Forecast</h3>
                <p className="text-gray-600 mb-4">
                  Our experts predict a 4-5% growth in the Singapore property market for 2025, with key opportunities in
                  these areas.
                </p>
                <Link href="/market-forecast" className="text-blue-600 hover:underline flex items-center text-sm">
                  Read Full Forecast
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Link
                href="https://wa.me/6596899591?text=I'm%20interested%20in%20learning%20more%20about%20the%20property%20market!"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-blue-600 hover:bg-blue-700">Get Personalized Market Insights</Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Service Comparison Section */}
        <section className="py-16 bg-gray-900 text-white">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
              The Most Comprehensive Service in Singapore, From Only 1%
            </h2>

            <div className="max-w-4xl mx-auto mt-12">
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="col-span-1"></div>
                <div className="col-span-1 text-center">
                  <Image
                    src="/placeholder.svg?height=40&width=120&text=PÛRE"
                    alt="PÛRE"
                    width={120}
                    height={40}
                    className="h-10 w-auto mx-auto mb-2 brightness-200"
                  />
                </div>
                <div className="col-span-1 text-center">
                  <p className="text-xl font-medium">Traditional agents</p>
                </div>
              </div>

              {[
                "Property agent dedicated to you",
                "Guaranteed top agent in your area",
                "Marketing, listing and pricing experts",
                "Professional photography, 3D virtual tour",
                "Premium listings on 6 leading platforms",
                "Owner Dashboard™ available 24/7",
                "All-inclusive service for 1% commission",
              ].map((feature, index) => (
                <div key={index} className="grid grid-cols-3 gap-4 py-4 border-t border-gray-800">
                  <div className="col-span-1">
                    <p className="text-sm md:text-base">{feature}</p>
                  </div>
                  <div className="col-span-1 flex justify-center">
                    <div className="h-6 w-6 rounded-full bg-blue-500 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="col-span-1 flex justify-center">
                    <div className="h-6 w-6 rounded-full border-2 border-gray-400"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Track Record Section */}
        <section className="py-16 bg-gray-100">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Our track record</h2>

            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <p className="text-5xl font-bold text-blue-600 mb-4">22 days</p>
                <p className="text-lg">Average time to sell a property</p>
              </div>
              <div>
                <p className="text-5xl font-bold text-blue-600 mb-4">90%</p>
                <p className="text-lg">Transactions at target price or higher</p>
              </div>
              <div>
                <p className="text-5xl font-bold text-blue-600 mb-4">$5,968</p>
                <p className="text-lg">Clients' average savings on commission</p>
              </div>
            </div>
          </div>
        </section>

        {/* Customer Testimonials */}
        <section className="py-16 bg-gray-900 text-white">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">What Clients Say about PÛRE</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Josephine Lee",
                  date: "12 March 2025",
                  image: "J",
                  comment:
                    "Thank you agent Warren Wong for helping me sell my property. He was professional, responsive, and got me a great deal!",
                },
                {
                  name: "Praveen",
                  date: "10 March 2025",
                  image: "P",
                  comment:
                    "Dave Teo was a very helpful individual who guided me through the entire process. Highly recommended!",
                },
                {
                  name: "Lew",
                  date: "6 March 2025",
                  image: "L",
                  comment: "Bjorn was super helpful and professional. The entire process was smooth and stress-free.",
                },
              ].map((testimonial, index) => (
                <div key={index} className="bg-gray-800 p-8 rounded-lg">
                  <div className="flex items-center mb-4">
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-600 text-white font-bold mr-4">
                      {testimonial.image}
                    </div>
                    <div>
                      <h4 className="font-medium">{testimonial.name}</h4>
                      <p className="text-sm text-gray-400">{testimonial.date}</p>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-300">"{testimonial.comment}"</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button variant="outline" className="border-white text-white hover:bg-gray-800">
                Read All 813 Reviews
              </Button>
            </div>
          </div>
        </section>

        {/* Property Assessment CTA */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to make your next property move?</h2>
            <p className="text-xl mb-8 text-blue-100">Get a free consultation with our property experts</p>
            <Link
              href="https://wa.me/6596899591?text=I'm%20interested%20in%20your%20services!"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 text-lg">Get Started</Button>
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
                  <Link href="#" className="text-gray-400 hover:text-white">
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
                  <Link href="#" className="text-gray-400 hover:text-white">
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
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Press
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
