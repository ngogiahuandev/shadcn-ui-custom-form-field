"use client";

export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://customformfield.dev/#website",
        url: "https://customformfield.dev/",
        name: "CustomFormField",
        description:
          "Advanced Form Component for Shadcn UI and React Hook Form",
        publisher: {
          "@id": "https://customformfield.dev/#organization",
        },
        potentialAction: [
          {
            "@type": "SearchAction",
            target: {
              "@type": "EntryPoint",
              urlTemplate:
                "https://customformfield.dev/?q={search_term_string}",
            },
            "query-input": "required name=search_term_string",
          },
        ],
        inLanguage: "en-US",
      },
      {
        "@type": "Organization",
        "@id": "https://customformfield.dev/#organization",
        name: "CustomFormField",
        url: "https://customformfield.dev/",
        logo: {
          "@type": "ImageObject",
          inLanguage: "en-US",
          "@id": "https://customformfield.dev/#/schema/logo/image/",
          url: "https://customformfield.dev/icon-512.png",
          contentUrl: "https://customformfield.dev/icon-512.png",
          width: 512,
          height: 512,
          caption: "CustomFormField",
        },
        image: {
          "@id": "https://customformfield.dev/#/schema/logo/image/",
        },
        sameAs: [
          "https://github.com/your-org/custom-form-field",
          "https://www.npmjs.com/package/custom-form-field",
          "https://twitter.com/customformfield",
        ],
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://customformfield.dev/#software",
        name: "CustomFormField",
        description:
          "A comprehensive, type-safe form field component for React Hook Form and Shadcn UI. Supports 10+ field types with built-in validation, accessibility, and seamless integration.",
        url: "https://customformfield.dev/",
        author: {
          "@id": "https://customformfield.dev/#organization",
        },
        publisher: {
          "@id": "https://customformfield.dev/#organization",
        },
        applicationCategory: "DeveloperApplication",
        operatingSystem: "Cross-platform",
        softwareVersion: "1.0.0",
        programmingLanguage: ["TypeScript", "JavaScript", "React", "CSS"],
        runtimePlatform: ["Node.js", "Browser"],
        license: "https://opensource.org/licenses/MIT",
        downloadUrl: "https://www.npmjs.com/package/custom-form-field",
        installUrl: "https://www.npmjs.com/package/custom-form-field",
        softwareRequirements: [
          "React 18+",
          "React Hook Form",
          "Shadcn UI",
          "TypeScript",
        ],
        featureList: [
          "Type-safe form components",
          "10+ field types support",
          "Built-in validation",
          "Accessibility compliance",
          "Dark mode support",
          "Responsive design",
          "Zero external dependencies",
          "TypeScript IntelliSense",
          "React Hook Form integration",
          "Zod schema validation",
        ],
        keywords: [
          "React",
          "Form",
          "Components",
          "TypeScript",
          "Shadcn UI",
          "React Hook Form",
          "Validation",
          "Accessibility",
        ],
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
          description: "Free open source software",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
