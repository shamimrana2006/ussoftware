import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Hind_Siliguri, Baloo_Da_2, Outfit, Plus_Jakarta_Sans, Poppins } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import SmoothScroll from "@/components/SmoothScroll";
import MouseBubbles from "@/components/MouseBubbles";
import LoadingScreen from "@/components/LoadingScreen";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  subsets: ["latin"],
  display: "swap",
});

const balooDa2 = Baloo_Da_2({
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-baloo",
  subsets: ["bengali", "latin"],
  display: "swap",
});

const hindSiliguri = Hind_Siliguri({
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-hind",
  subsets: ["bengali", "latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#008744",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://ussoftwareltd.com"),
  title: {
    default: "US Software LTD | Your Complete IT & Tech Education Partner",
    template: "%s | US Software LTD",
  },
  description:
    "Empowering engineers and businesses with enterprise software engineering, scalable cloud systems and industry-grade IT academy programs in Bangladesh.",
  keywords: [
    "US Software LTD",
    "Software Engineering Bangladesh",
    "IT Training Dhaka",
    "Full-Stack Web Development",
    "Next.js Bootcamp",
    "React Training",
    "Cyber Security Course",
    "UI/UX Design Course",
    "App Development Course",
    "Digital Marketing CPA",
    "DevOps Cloud Engineering",
    "Software Company Bangladesh",
  ],
  authors: [{ name: "US Software LTD", url: "https://ussoftwareltd.com" }],
  creator: "US Software LTD",
  publisher: "US Software LTD",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/logo/us software logo.png",
    shortcut: "/logo/us software logo.png",
    apple: "/logo/us software logo.png",
  },
  openGraph: {
    title: "US Software LTD | Your Complete IT & Tech Education Partner",
    description:
      "Enterprise software solutions & premier tech academy. Build production-grade skills with 1-on-1 industry mentorship.",
    url: "https://ussoftwareltd.com",
    siteName: "US Software LTD",
    locale: "bn_BD",
    alternateLocale: "en_US",
    type: "website",
    images: [
      {
        url: "/logo/us software logo.png",
        width: 800,
        height: 600,
        alt: "US Software LTD",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "US Software LTD | Your Complete IT & Tech Education Partner",
    description:
      "We deliver smart, scalable and secure IT solutions and industry-grade training.",
    images: ["/logo/us software logo.png"],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="bn"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${outfit.variable} ${plusJakarta.variable} ${poppins.variable} ${balooDa2.variable} ${hindSiliguri.variable} antialiased`}
    >
      <body
        className="min-h-screen flex flex-col font-sans bg-[#f8fafc] text-slate-900 selection:bg-[#008744]/20 selection:text-[#008744] antialiased"
        style={{ fontFamily: "var(--font-hind), sans-serif" }}
      >
        <LanguageProvider>
          <LoadingScreen>
            <SmoothScroll>
              <MouseBubbles />
              {children}
              <FloatingWhatsApp />
            </SmoothScroll>
          </LoadingScreen>
        </LanguageProvider>
      </body>
    </html>
  );
}

