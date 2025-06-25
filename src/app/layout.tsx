import type React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { ScrollArea } from "@/components/ui/scroll-area";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "CustomFormField - Advanced Form Component for Shadcn UI | React Hook Form Integration",
  description:
    "A comprehensive, type-safe form field component for React Hook Form and Shadcn UI. Supports 10+ field types with built-in validation, accessibility, and seamless integration. Perfect for building modern React forms with TypeScript.",
  keywords:
    "React Hook Form, Shadcn UI, form component, TypeScript, form validation, React forms, custom form fields, Zod validation, accessible forms, form builder",
  authors: [{ name: "CustomFormField Team" }],
  creator: "CustomFormField",
  publisher: "CustomFormField",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://customformfield.dev"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "CustomFormField - Advanced Form Component for Shadcn UI",
    description:
      "Build better forms with our comprehensive form field component. Type-safe, accessible, and easy to use with React Hook Form and Shadcn UI.",
    url: "https://customformfield.dev",
    siteName: "CustomFormField",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "CustomFormField - Advanced Form Component",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CustomFormField - Advanced Form Component for Shadcn UI",
    description:
      "Build better forms with our comprehensive form field component. Type-safe, accessible, and easy to use.",
    images: ["/og-image.png"],
    creator: "@customformfield",
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
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="h-full">
      <head>
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
        </ThemeProvider>
      </body>
    </html>
  );
}
