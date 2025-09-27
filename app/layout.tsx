import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import { Analytics } from '@vercel/analytics/react';

// Use system fonts as fallback to avoid network issues
const fontClass = "font-sans";

export const metadata: Metadata = {
  title: {
    default: "Dheeraj Jha - Full Stack Developer, UI/UX Designer & Freelancer",
    template: "%s | Dheeraj Jha"
  },
  description: "Dheeraj Jha is a skilled Full Stack Developer with expertise in UI/UX design, React, Next.js, TypeScript, and modern web technologies. Specializing in responsive web applications, AI/ML integration, and freelance development projects.",
  keywords: [
    "Dheeraj Jha",
    "Full Stack Developer",
    "UI/UX Designer",
    "Freelance Developer",
    "Web Development",
    "Software Engineering",
    "React Developer",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "JavaScript",
    "Node.js",
    "MongoDB",
    "PostgreSQL",
    "AI/ML",
    "Machine Learning",
    "Frontend Development",
    "Backend Development",
    "Responsive Design",
    "Modern Web Apps",
    "Portfolio Website",
    "Freelance Projects",
    "Fullstack Entwickler",
    "Webentwicklung",
    "Softwareentwicklung",
    "Freiberuflicher Entwickler",
    "UI/UX Designer",
    "Full Stack Ontwikkelaar",
    "Webontwikkeling",
    "Software Ontwikkelaar",
    "Freelance Ontwikkelaar",
    "UI/UX Ontwerper",
    "Développeur Full Stack",
    "Développement Web",
    "Ingénieur Logiciel",
    "Développeur Freelance",
    "Concepteur UI/UX",
    "Desarrollador Full Stack",
    "Desarrollo Web",
    "Ingeniero de Software",
    "Desarrollador Freelance",
    "Diseñador UI/UX",
    "مطور ويب",
    "مطور تطبيقات",
    "مصمم واجهات",
    "مطور مستقل",
    "Sviluppatore Full Stack",
    "Sviluppo Web",
    "Ingegnere del Software",
    "Sviluppatore Freelance",
    "Designer UI/UX"
  ],
  authors: [{ name: "Dheeraj Jha" }],
  creator: "Dheeraj Jha",
  publisher: "Dheeraj Jha",
  metadataBase: new URL("https://www.dheerajjha.com"),
  alternates: {
    canonical: "https://www.dheerajjha.com",
    languages: {
      'en-US': 'https://www.dheerajjha.com',
      'en-GB': 'https://www.dheerajjha.com/en-gb',
      'de-DE': 'https://www.dheerajjha.com/de',
      'de-AT': 'https://www.dheerajjha.com/de-at',
      'de-CH': 'https://www.dheerajjha.com/de-ch',
      'ar-SA': 'https://www.dheerajjha.com/ar',
      'ar-AE': 'https://www.dheerajjha.com/ar-ae',
      'nl-NL': 'https://www.dheerajjha.com/nl',
      'nl-BE': 'https://www.dheerajjha.com/nl-be',
      'fr-FR': 'https://www.dheerajjha.com/fr',
      'fr-BE': 'https://www.dheerajjha.com/fr-be',
      'fr-CH': 'https://www.dheerajjha.com/fr-ch',
      'es-ES': 'https://www.dheerajjha.com/es',
      'it-IT': 'https://www.dheerajjha.com/it',
      'pt-PT': 'https://www.dheerajjha.com/pt',
      'sv-SE': 'https://www.dheerajjha.com/sv',
      'da-DK': 'https://www.dheerajjha.com/da',
      'no-NO': 'https://www.dheerajjha.com/no',
      'fi-FI': 'https://www.dheerajjha.com/fi',
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    siteName: "Dheeraj Jha's Portfolio",
    title: "Dheeraj Jha - Full Stack Developer, UI/UX Designer & Freelancer",
    description: "Explore the portfolio of Dheeraj Jha, showcasing innovative projects in full stack development, UI/UX design, AI/ML integration, and freelance solutions.",
    url: "https://www.dheerajjha.com",
    locale: "en_US",
    alternateLocale: [
      "en_GB",
      "de_DE", 
      "de_AT", 
      "de_CH",
      "ar_SA",
      "ar_AE", 
      "nl_NL", 
      "nl_BE",
      "fr_FR", 
      "fr_BE", 
      "fr_CH",
      "es_ES", 
      "it_IT", 
      "pt_PT",
      "sv_SE",
      "da_DK",
      "no_NO",
      "fi_FI"
    ],
    images: [
      {
        url: "/assets/Dheeraj.jpeg", 
        width: 1200,
        height: 630,
        alt: "Dheeraj Jha - Full Stack Developer Portfolio",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dheeraj Jha - Full Stack Developer & UI/UX Designer",
    description: "Skilled Full Stack Developer specializing in React, Next.js, AI/ML integration, and modern web applications.",
    images: ["/assets/Dheeraj.jpeg"],
    creator: "@dheerajjha451", 
  },
  verification: {
    google: "he2XSqBKe7HJzey6IC51NRFS8wdQ8TAQpv26jOk8sGQ",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="google-site-verification" content="he2XSqBKe7HJzey6IC51NRFS8wdQ8TAQpv26jOk8sGQ" />
        <link rel="icon" href="/assets/Dheeraj.jpeg" sizes="96x96" />
        <link rel="apple-touch-icon" href="/assets/Dheeraj.jpeg" sizes="96x96" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
        <meta name="color-scheme" content="dark light" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        
        <link rel="alternate" hrefLang="en-US" href="https://www.dheerajjha.com" />
        <link rel="alternate" hrefLang="en-GB" href="https://www.dheerajjha.com/en-gb" />
        <link rel="alternate" hrefLang="de-DE" href="https://www.dheerajjha.com/de" />
        <link rel="alternate" hrefLang="de-AT" href="https://www.dheerajjha.com/de-at" />
        <link rel="alternate" hrefLang="de-CH" href="https://www.dheerajjha.com/de-ch" />
        <link rel="alternate" hrefLang="ar-SA" href="https://www.dheerajjha.com/ar" />
        <link rel="alternate" hrefLang="ar-AE" href="https://www.dheerajjha.com/ar-ae" />
        <link rel="alternate" hrefLang="nl-NL" href="https://www.dheerajjha.com/nl" />
        <link rel="alternate" hrefLang="nl-BE" href="https://www.dheerajjha.com/nl-be" />
        <link rel="alternate" hrefLang="fr-FR" href="https://www.dheerajjha.com/fr" />
        <link rel="alternate" hrefLang="fr-BE" href="https://www.dheerajjha.com/fr-be" />
        <link rel="alternate" hrefLang="fr-CH" href="https://www.dheerajjha.com/fr-ch" />
        <link rel="alternate" hrefLang="es-ES" href="https://www.dheerajjha.com/es" />
        <link rel="alternate" hrefLang="it-IT" href="https://www.dheerajjha.com/it" />
        <link rel="alternate" hrefLang="pt-PT" href="https://www.dheerajjha.com/pt" />
        <link rel="alternate" hrefLang="sv-SE" href="https://www.dheerajjha.com/sv" />
        <link rel="alternate" hrefLang="da-DK" href="https://www.dheerajjha.com/da" />
        <link rel="alternate" hrefLang="no-NO" href="https://www.dheerajjha.com/no" />
        <link rel="alternate" hrefLang="fi-FI" href="https://www.dheerajjha.com/fi" />
        <link rel="alternate" hrefLang="x-default" href="https://www.dheerajjha.com" />
 
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Dheeraj Jha",
              "jobTitle": "Full Stack Developer",
              "url": "https://www.dheerajjha.com",
              "image": "https://www.dheerajjha.com/assets/Dheeraj.jpeg",
              "description": "Skilled Full Stack Developer with expertise in UI/UX design, React, Next.js, TypeScript, and modern web technologies.",
              "knowsAbout": ["Full Stack Development", "UI/UX Design", "React", "Next.js", "TypeScript", "JavaScript", "Machine Learning", "AI"],
              "workLocation": {
                "@type": "Place",
                "address": {
                  "@type": "PostalAddress",
                  "addressCountry": ["US", "GB", "DE", "SA", "NL", "FR", "ES", "IT", "PT", "SE", "DK", "NO", "FI", "AT", "CH", "BE", "AE"]
                }
              },
              "worksFor": {
                "@type": "Organization",
                "name": "Freelance"
              },
          
              "sameAs": [
                "https://github.com/dheerajjha451",
                "https://linkedin.com/in/dheerajjha451"
              ],
              "availableLanguage": [
                {
                  "@type": "Language",
                  "name": "English",
                  "alternateName": "en"
                },
                {
                  "@type": "Language", 
                  "name": "German",
                  "alternateName": "de"
                },
                {
                  "@type": "Language",
                  "name": "Arabic", 
                  "alternateName": "ar"
                },
                {
                  "@type": "Language",
                  "name": "Dutch",
                  "alternateName": "nl"
                },
                {
                  "@type": "Language",
                  "name": "French",
                  "alternateName": "fr"
                },
                {
                  "@type": "Language",
                  "name": "Spanish",
                  "alternateName": "es"
                }
              ]
            })
          }}
        />
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
