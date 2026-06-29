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
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata = {
  title: {
    default: `${siteConfig.shortName} | ${siteConfig.title}`,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.bio,
  keywords: [
    siteConfig.name,
    siteConfig.legalName,
    "Software Engineer",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "Portfolio",
    "Bengaluru",
  ],
  authors: [{ name: siteConfig.name }],
  openGraph: {
    title: `${siteConfig.name} — ${siteConfig.title}`,
    description: siteConfig.bio,
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
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
