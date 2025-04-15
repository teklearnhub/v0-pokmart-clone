"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { ChevronDown, FileText, CheckCircle, AlertCircle } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function PropertyReportPage() {
  const [formData, setFormData] = useState({
    propertyInfo: "",
    name: "",
    email: "",
    phone: "",
    consent: false,
  })

  const [errors, setErrors] = useState({
    propertyInfo: "",
    name: "",
    email: "",
    phone: "",
    consent: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    })

    // Clear error when field is being edited
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      })
    }
  }

  const validateForm = () => {
    let isValid = true
    const newErrors = {
      propertyInfo: "",
      name: "",
      email: "",
      phone: "",
      consent: "",
    }

    if (!formData.propertyInfo.trim()) {
      newErrors.propertyInfo = "Please provide property information"
      isValid = false
    }

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
      isValid = false
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
      isValid = false
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
      isValid = false
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required"
      isValid = false
    }

    if (!formData.consent) {
      newErrors.consent = "You must consent to be contacted"
      isValid = false
    }

    setErrors(newErrors)
    return isValid
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (validateForm()) {
      setIsSubmitting(true)

      // Simulate form submission
      setTimeout(() => {
        setIsSubmitting(false)
        setIsSubmitted(true)

        // Reset form after submission
        setFormData({
          propertyInfo: "",
          name: "",
          email: "",
          phone: "",
          consent: false,
        })
      }, 1500)
    }
  }

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
                    <Link href="/property-report" className="block px-4 py-2 text-sm text-blue-600 bg-gray-50">
                      Get a Free Property Report
                    </Link>
                    <Link href="/agents" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
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

      <main className="flex-1 bg-gray-50 py-12">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-full mb-4">
                <FileText className="h-8 w-8 text-blue-600" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Get Your Free Property Report</h1>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Receive a comprehensive analysis of your property's value, market trends, and comparable sales in your
                area. Complete the form below to request your personalized property report.
              </p>
            </div>

            {/* Form Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Left Column - Benefits */}
              <div className="md:col-span-1">
                <h2 className="text-xl font-bold mb-6">What You'll Get</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle className="h-5 w-5 text-blue-600" />
                    </div>
                    <div className="ml-3">
                      <h3 className="text-base font-medium">Property Valuation</h3>
                      <p className="text-sm text-gray-600">Estimated market value based on recent transactions</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle className="h-5 w-5 text-blue-600" />
                    </div>
                    <div className="ml-3">
                      <h3 className="text-base font-medium">Market Trends</h3>
                      <p className="text-sm text-gray-600">Analysis of price trends in your neighborhood</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle className="h-5 w-5 text-blue-600" />
                    </div>
                    <div className="ml-3">
                      <h3 className="text-base font-medium">Comparable Sales</h3>
                      <p className="text-sm text-gray-600">Recent sales of similar properties in your area</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle className="h-5 w-5 text-blue-600" />
                    </div>
                    <div className="ml-3">
                      <h3 className="text-base font-medium">Rental Yield</h3>
                      <p className="text-sm text-gray-600">Potential rental income and yield estimates</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle className="h-5 w-5 text-blue-600" />
                    </div>
                    <div className="ml-3">
                      <h3 className="text-base font-medium">Expert Insights</h3>
                      <p className="text-sm text-gray-600">Recommendations from our property experts</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Form */}
              <div className="md:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Request Your Free Property Report</CardTitle>
                    <CardDescription>
                      Fill in the details below and we'll prepare a personalized property report for you.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {isSubmitted ? (
                      <div className="text-center py-8">
                        <div className="inline-flex items-center justify-center p-3 bg-green-100 rounded-full mb-4">
                          <CheckCircle className="h-8 w-8 text-green-600" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Thank You!</h3>
                        <p className="text-gray-600 mb-6">
                          Your property report request has been submitted successfully. One of our property experts will
                          prepare your report and contact you shortly.
                        </p>
                        <Button onClick={() => setIsSubmitted(false)} className="bg-blue-600 hover:bg-blue-700">
                          Request Another Report
                        </Button>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                          <Label htmlFor="propertyInfo">
                            Property Information <span className="text-red-500">*</span>
                          </Label>
                          <Textarea
                            id="propertyInfo"
                            name="propertyInfo"
                            placeholder="Please provide property name, address, or postal code"
                            value={formData.propertyInfo}
                            onChange={handleChange}
                            className={errors.propertyInfo ? "border-red-500" : ""}
                          />
                          {errors.propertyInfo && (
                            <p className="text-sm text-red-500 flex items-center mt-1">
                              <AlertCircle className="h-3 w-3 mr-1" /> {errors.propertyInfo}
                            </p>
                          )}
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="name">
                            Full Name <span className="text-red-500">*</span>
                          </Label>
                          <Input
                            id="name"
                            name="name"
                            placeholder="Your full name"
                            value={formData.name}
                            onChange={handleChange}
                            className={errors.name ? "border-red-500" : ""}
                          />
                          {errors.name && (
                            <p className="text-sm text-red-500 flex items-center mt-1">
                              <AlertCircle className="h-3 w-3 mr-1" /> {errors.name}
                            </p>
                          )}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="email">
                              Email Address <span className="text-red-500">*</span>
                            </Label>
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              placeholder="Your email address"
                              value={formData.email}
                              onChange={handleChange}
                              className={errors.email ? "border-red-500" : ""}
                            />
                            {errors.email && (
                              <p className="text-sm text-red-500 flex items-center mt-1">
                                <AlertCircle className="h-3 w-3 mr-1" /> {errors.email}
                              </p>
                            )}
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="phone">
                              Phone Number <span className="text-red-500">*</span>
                            </Label>
                            <Input
                              id="phone"
                              name="phone"
                              placeholder="Your phone number"
                              value={formData.phone}
                              onChange={handleChange}
                              className={errors.phone ? "border-red-500" : ""}
                            />
                            {errors.phone && (
                              <p className="text-sm text-red-500 flex items-center mt-1">
                                <AlertCircle className="h-3 w-3 mr-1" /> {errors.phone}
                              </p>
                            )}
                          </div>
                        </div>

                        <div className="flex items-start space-x-2">
                          <Checkbox
                            id="consent"
                            name="consent"
                            checked={formData.consent}
                            onCheckedChange={(checked) => {
                              setFormData({
                                ...formData,
                                consent: checked,
                              })
                              if (checked) {
                                setErrors({
                                  ...errors,
                                  consent: "",
                                })
                              }
                            }}
                            className={errors.consent ? "border-red-500" : ""}
                          />
                          <div className="grid gap-1.5 leading-none">
                            <Label
                              htmlFor="consent"
                              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              I consent to be contacted by PÛRE regarding my property report and related services.
                              <span className="text-red-500"> *</span>
                            </Label>
                            {errors.consent && (
                              <p className="text-sm text-red-500 flex items-center mt-1">
                                <AlertCircle className="h-3 w-3 mr-1" /> {errors.consent}
                              </p>
                            )}
                          </div>
                        </div>

                        <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700" disabled={isSubmitting}>
                          {isSubmitting ? "Submitting..." : "Get My Free Property Report"}
                        </Button>

                        <p className="text-xs text-gray-500 text-center">
                          By submitting this form, you agree to our{" "}
                          <Link href="#" className="text-blue-600 hover:underline">
                            Privacy Policy
                          </Link>{" "}
                          and{" "}
                          <Link href="#" className="text-blue-600 hover:underline">
                            Terms of Service
                          </Link>
                          .
                        </p>
                      </form>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
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
