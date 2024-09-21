import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dheeraj Jha - Full Stack Developer, UI/UX Designer, and Freelance Developer",
  description: "Portfolio website of Dheeraj Jha, showcasing skills and projects in full stack development, UI/UX design, and freelance work.",
  keywords: [
    "Dheeraj Jha",
    "Full Stack Developer",
    "UI/UX Designer",
    "Freelance Developer",
    "Web Development",
    "Software Engineering",
    "Freelance Projects",
    "Portfolio",
    "React Developer",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Prisma",
    "PostgreSQL",
  ],
  metadataBase: new URL("https://www.dheeraj-jha.tech"),
  openGraph: {
    title: "Dheeraj Jha - Full Stack Developer, UI/UX Designer, and Freelance Developer",
    description: "Explore the portfolio of Dheeraj Jha, showcasing skills and projects in full stack development, UI/UX design, and freelance work.",
    url: "https://www.dheeraj-jha.tech/",
    type: "website",
    siteName: "Dheeraj Jha's Portfolio",
    locale: "en_US",
    images: [
      {
        url: "https://www.dheeraj-jha.tech/assets/Dheeraj.jpeg", 
        width: 96,
        height: 96,
        alt: "Dheeraj Jha - Full Stack Developer Portfolio",
      },
    ],
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
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
