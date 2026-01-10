import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Elite Edge",
    template: "%s | Elite Edge"
  },
  description: "Elite Edge provides premium facility management, staffing solutions, and import/export services in Qatar. German reliability with local excellence.",
  keywords: ["Facility Management", "Qatar", "Staffing Solutions", "Import Export", "Maintenance", "Elite Edge", "German Engineering"],
  authors: [{ name: "Elite Edge" }],
  creator: "Elite Edge",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://eliteedge.qa",
    title: "Elite Edge - Premier Facility Management in Qatar",
    description: "Experience the Elite Advantage. Comprehensive facility management, expert staffing, and global import/export solutions.",
    siteName: "Elite Edge",
    images: [
      {
        url: "/og-image.jpg", // We need to ensure this exists or use a placeholder
        width: 1200,
        height: 630,
        alt: "Elite Edge for Facility Management Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Elite Edge - Premier Facility Management",
    description: "German reliability, local excellence. Your partner for facility management and staffing in Qatar.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${outfit.variable} ${inter.variable} antialiased font-inter transition-colors duration-300`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
