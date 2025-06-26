import Head from "next/head";

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogImage?: string;
  ogImageAlt?: string;
  ogType?: "website" | "article";
  twitterCard?: "summary" | "summary_large_image";
  noIndex?: boolean;
  structuredData?: Record<string, unknown>;
}

export function SEOHead({
  title = "CustomFormField - Advanced Form Component for Shadcn UI",
  description = "A comprehensive, type-safe form field component for React Hook Form and Shadcn UI. Supports 10+ field types with built-in validation, accessibility, and seamless integration.",
  keywords = [
    "React Hook Form",
    "Shadcn UI",
    "form component",
    "TypeScript",
    "form validation",
    "React forms",
    "custom form fields",
  ],
  canonicalUrl = "https://customformfield.dev",
  ogImage = "/og-image.png",
  ogImageAlt = "CustomFormField - Advanced Form Component",
  ogType = "website",
  twitterCard = "summary_large_image",
  noIndex = false,
  structuredData,
}: SEOHeadProps) {
  const fullTitle = title.includes("CustomFormField")
    ? title
    : `${title} | CustomFormField`;

  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(", ")} />

      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta
        property="og:image"
        content={`https://customformfield.dev${ogImage}`}
      />
      <meta property="og:image:alt" content={ogImageAlt} />
      <meta property="og:site_name" content="CustomFormField" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta property="twitter:card" content={twitterCard} />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta
        property="twitter:image"
        content={`https://customformfield.dev${ogImage}`}
      />
      <meta property="twitter:image:alt" content={ogImageAlt} />
      <meta property="twitter:creator" content="@customformfield" />
      <meta property="twitter:site" content="@customformfield" />

      {/* Additional Meta Tags */}
      <meta name="author" content="CustomFormField Team" />
      <meta
        name="robots"
        content={noIndex ? "noindex,nofollow" : "index,follow"}
      />
      <meta
        name="googlebot"
        content={noIndex ? "noindex,nofollow" : "index,follow"}
      />
      <meta name="theme-color" content="#000000" />
      <meta name="msapplication-TileColor" content="#000000" />

      {/* Preload Critical Resources */}
      <link
        rel="preload"
        href="/fonts/geist-sans.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href="/fonts/geist-mono.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />

      {/* DNS Prefetch for External Resources */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />

      {/* Structured Data */}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      )}

      {/* Additional Performance Hints */}
      <meta httpEquiv="x-dns-prefetch-control" content="on" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="format-detection" content="date=no" />
      <meta name="format-detection" content="address=no" />
      <meta name="format-detection" content="email=no" />
    </Head>
  );
}
