import { DocumentationSection } from "@/components/documentation-section";
import { ExamplesSection } from "@/components/examples-section";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { InstallationSection } from "@/components/installation-section";
import { PlaygroundSection } from "@/components/playground-section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "CustomFormField - Advanced Form Component for Shadcn UI | React Hook Form Integration",
  description:
    "A comprehensive, type-safe form field component for React Hook Form and Shadcn UI. Supports 10+ field types with built-in validation, accessibility, and seamless integration.",
  keywords:
    "React Hook Form, Shadcn UI, form component, TypeScript, form validation, React forms, custom form fields",
  openGraph: {
    title: "CustomFormField - Advanced Form Component for Shadcn UI",
    description:
      "Build better forms with our comprehensive form field component. Type-safe, accessible, and easy to use.",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <div className="w-full">
      <Header />
      <main className="container mx-auto">
        <HeroSection />
        <InstallationSection />
        <DocumentationSection />
        <ExamplesSection />
        <PlaygroundSection />
      </main>
    </div>
  );
}
