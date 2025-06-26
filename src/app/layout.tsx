import type React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Particles } from "@/components/magicui/particles";
import { Toaster } from "@/components/ui/sonner";
import { StructuredData } from "@/components/structured-data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default:
      "CustomFormField - Advanced Form Component for Shadcn UI | React Hook Form Integration",
    template: "%s | CustomFormField",
  },
  description:
    "A comprehensive, type-safe form field component for React Hook Form and Shadcn UI. Supports 10+ field types with built-in validation, accessibility, and seamless integration. Perfect for building modern React forms with TypeScript.",
  keywords: [
    "React Hook Form",
    "Shadcn UI",
    "form component",
    "TypeScript",
    "form validation",
    "React forms",
    "custom form fields",
    "Zod validation",
    "accessible forms",
    "form builder",
    "React components",
    "UI library",
    "form inputs",
    "date picker",
    "select dropdown",
    "checkbox",
    "radio buttons",
    "textarea",
    "number input",
    "email validation",
    "password input",
    "switch toggle",
    "modern forms",
    "developer tools",
    "open source",
    "MIT license",
    "responsive design",
    "dark mode",
    "WCAG compliant",
    "accessibility",
    "screen reader",
    "keyboard navigation",
    "ARIA labels",
    "form UX",
    "developer experience",
    "component library",
    "React ecosystem",
    "frontend development",
    "web development",
  ],
  authors: [
    { name: "CustomFormField Team", url: "https://customformfield.dev" },
  ],
  creator: "CustomFormField Team",
  publisher: "CustomFormField",
  applicationName: "CustomFormField",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://customformfield.dev"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
      "x-default": "/",
    },
  },
  openGraph: {
    title: "CustomFormField - Advanced Form Component for Shadcn UI",
    description:
      "Build better forms with our comprehensive form field component. Type-safe, accessible, and easy to use with React Hook Form and Shadcn UI. Supports 10+ field types with built-in validation.",
    url: "https://customformfield.dev",
    siteName: "CustomFormField",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "CustomFormField - Advanced Form Component for Shadcn UI showcasing various field types",
        type: "image/png",
      },
      {
        url: "/og-image-square.png",
        width: 1200,
        height: 1200,
        alt: "CustomFormField Logo and Features",
        type: "image/png",
      },
    ],
    locale: "en_US",
    type: "website",
    countryName: "United States",
  },
  twitter: {
    card: "summary_large_image",
    title: "CustomFormField - Advanced Form Component for Shadcn UI",
    description:
      "Build better forms with our comprehensive form field component. Type-safe, accessible, and easy to use with 10+ field types and built-in validation.",
    images: [
      {
        url: "/og-image.png",
        alt: "CustomFormField - Advanced Form Component",
      },
    ],
    creator: "@customformfield",
    site: "@customformfield",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/manifest.json",
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
    other: {
      me: ["your-email@customformfield.dev"],
    },
  },
  category: "technology",
  classification: "Developer Tools",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="h-full">
      <head>
        <StructuredData />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-background h-full overflow-hidden font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ScrollArea className="h-screen">{children}</ScrollArea>
          <Particles className="absolute inset-0 -z-10 h-full" />
          <Toaster richColors position="bottom-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}
