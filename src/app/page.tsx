import type { Metadata } from "next";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { FeaturesSection } from "@/components/features-section";
import { DocumentationSection } from "@/components/documentation-section";
import { PlaygroundSection } from "@/components/playground-section";
import { InstallationSection } from "@/components/installation-section";
import { ExamplesSection } from "@/components/examples-section";

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
        <FeaturesSection />
        <InstallationSection />
        <DocumentationSection />
        <ExamplesSection />
        <PlaygroundSection />
      </main>
    </div>
  );
}
