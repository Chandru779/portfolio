import { Inter, JetBrains_Mono } from "next/font/google";
import { siteConfig } from "@/data/site";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
  preload: true,
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
  preload: false,
});

export const metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: siteConfig.metaTitle,
    template: `%s · ${siteConfig.shortName}`,
  },
  description: siteConfig.metaDescription,
  keywords: [
    siteConfig.name,
    siteConfig.legalName,
    siteConfig.shortName,
    "Software Engineer",
    "Full Stack Developer",
    "React Developer",
    "Next.js",
    "Node.js",
    "TypeScript",
    "PostgreSQL",
    "Portfolio",
    "Bengaluru",
    "India",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.social.linkedin }],
  creator: siteConfig.name,
  openGraph: {
    title: siteConfig.metaTitle,
    description: siteConfig.metaDescription,
    siteName: `${siteConfig.shortName} — ${siteConfig.tagline}`,
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary",
    title: siteConfig.metaTitle,
    description: siteConfig.metaDescription,
    creator: "@chandru_s_a",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} min-h-screen font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
