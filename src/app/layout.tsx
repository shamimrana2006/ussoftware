import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Hind_Siliguri, Baloo_Da_2, Outfit, Plus_Jakarta_Sans, Space_Grotesk, Sora, Poppins, Urbanist } from "next/font/google";
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

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  display: "swap",
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  subsets: ["latin"],
  display: "swap",
});

const urbanist = Urbanist({
  variable: "--font-urbanist",
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
  themeColor: "#f8fafc",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: {
    default: "US Software LTD | Your Complete IT & Tech Education Partner",
    template: "%s | US Software LTD",
  },
  description:
    "Empowering engineers and businesses with enterprise software engineering, scalable cloud systems, and industry-grade IT academy programs.",
  keywords: [
    "US Software LTD",
    "Software Engineering Bangladesh",
    "Full-Stack Development",
    "Next.js",
    "React",
    "AI Training",
    "IT Training Dhaka",
    "DevOps Cloud",
  ],
  authors: [{ name: "US Software LTD" }],
  creator: "US Software LTD",
  publisher: "US Software LTD",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/logo/us software logo.png",
    shortcut: "/logo/us software logo.png",
    apple: "/logo/us software logo.png",
  },
  openGraph: {
    title: "US Software LTD | Your Complete IT Partner",
    description:
      "Enterprise software solutions & premier tech academy. Build production-grade skills with 1-on-1 industry mentorship.",
    url: "https://ussoftwareltd.com",
    siteName: "US Software LTD",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "US Software LTD | Your Complete IT Partner",
    description:
      "We deliver smart, scalable, and secure IT solutions and industry-grade training.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${outfit.variable} ${plusJakarta.variable} ${spaceGrotesk.variable} ${sora.variable} ${poppins.variable} ${urbanist.variable} ${balooDa2.variable} ${hindSiliguri.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (!sessionStorage.getItem('us_software_initial_loaded')) {
                  document.documentElement.classList.add('app-loading');
                }
              } catch(e) {}
            `,
          }}
        />
      </head>
      <body
        className="min-h-screen flex flex-col font-sans bg-[#f8fafc] text-slate-900 selection:bg-[#008744]/20 selection:text-[#008744] antialiased"
        style={{ fontFamily: "var(--font-hind), sans-serif" }}
      >
        <LoadingScreen>
          <SmoothScroll>
            <LanguageProvider>
              <MouseBubbles />
              {children}
              <FloatingWhatsApp />
            </LanguageProvider>
          </SmoothScroll>
        </LoadingScreen>
      </body>
    </html>
  );
}

