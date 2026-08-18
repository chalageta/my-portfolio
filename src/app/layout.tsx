import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Chala Geta | Senior Full-Stack Software Developer",
  description: "Portfolio of Chala Geta — Senior Full-Stack Software Developer specializing in React, Next.js, Spring Boot, Node.js, enterprise applications, APIs, databases and system integration.",
  keywords: ["Chala Geta", "Full-Stack Developer", "Software Engineer", "Next.js", "React", "Spring Boot", "Node.js", "Portfolio", "Ethiopia", "System Integration"],
  authors: [{ name: "Chala Geta" }],
  creator: "Chala Geta",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://portifolio-delta-tawny-75.vercel.app", // Update this when you attach a custom domain
    title: "Chala Geta | Senior Full-Stack Software Developer",
    description: "Portfolio of Chala Geta — Senior Full-Stack Software Developer specializing in React, Next.js, Spring Boot, Node.js, and system integration.",
    siteName: "Chala Geta Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chala Geta | Senior Full-Stack Software Developer",
    description: "Portfolio of Chala Geta — Senior Full-Stack Software Developer",
  },
  icons: {
    icon: [
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  verification: {
    google: "b8Cu8e8MeSlNaFoGxUCUKCsHeggtonZsWNRGHn6K6Fo",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} font-sans h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
