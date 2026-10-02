import type { Metadata, Viewport } from "next";
import { Instrument_Serif, DM_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { SmoothScrollProvider } from "@/components/SmoothScroll";
import { CustomCursor } from "@/components/CustomCursor";
import { FilmGrain } from "@/components/FilmGrain";

const instrumentSerif = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mabusubhani.dev"),
  title: "D Mabusubhani · Software Engineer · AI/ML Builder",
  description:
    "Personal editorial portfolio of D Mabusubhani — undergraduate engineer at Manipal Institute of Technology (MAHE), Class of 2029. Focus on deterministic systems, digital evidence integrity (DIEMP), and applied machine learning.",
  keywords: [
    "D Mabusubhani",
    "Software Engineer",
    "AI/ML Builder",
    "Manipal Institute of Technology",
    "MAHE",
    "Bengaluru",
    "DIEMP",
    "Digital Evidence Management",
    "SHA-256",
    "PostgreSQL",
    "Next.js",
  ],
  authors: [{ name: "D Mabusubhani", url: "https://github.com/Mabusubhani07" }],
  creator: "D Mabusubhani",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "D Mabusubhani · Software Engineer · AI/ML Builder",
    description:
      "Undergraduate software engineer & AI/ML builder based in Bengaluru, India. Explore systems architecture, DIEMP case study, and hackathon milestones.",
    url: "https://mabusubhani.dev",
    siteName: "D Mabusubhani Portfolio",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/assets/d-mabusubhani-web.jpg",
        width: 800,
        height: 1000,
        alt: "D Mabusubhani — Software Engineer & AI/ML Builder",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "D Mabusubhani · Software Engineer · AI/ML Builder",
    description:
      "Undergraduate engineer at MAHE building deterministic systems and applied machine learning solutions.",
    images: ["/assets/d-mabusubhani-web.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#F4F1EA",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${instrumentSerif.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col relative selection:bg-[#1E3A2F] selection:text-[#F4F1EA]">
        <ThemeProvider>
          <SmoothScrollProvider>
            <CustomCursor />
            <FilmGrain />
            {children}
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
