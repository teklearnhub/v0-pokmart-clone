import type React from "react"
import type { Metadata } from "next"
import { ThemeProvider } from "@/components/theme-provider"
import { WhatsAppWidget } from "@/components/whatsapp-widget"
import "./globals.css"

// Update metadata
export const metadata: Metadata = {
  title: "PÛRE - Singapore's Property Experts",
  description: "Sell and buy property with Singapore's most trusted real estate agency. Get a free consultation today.",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
          <WhatsAppWidget />
        </ThemeProvider>
      </body>
    </html>
  )
}


import './globals.css'