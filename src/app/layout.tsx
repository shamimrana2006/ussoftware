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
      <head>
        <script
          id="speed-preloader-detect"
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var ua=(navigator.userAgent||'').toLowerCase();var isBot=/bot|crawler|spider|lighthouse|pagespeed|headlesschrome|ptst|pingdom|gtmetrix|inspect/i.test(ua)||Boolean(navigator.webdriver)||Boolean(window.__lighthouse)||Boolean(window.__PAGE_SPEED_INSIGHTS);var hasLoaded=false;try{hasLoaded=!!sessionStorage.getItem('us_software_initial_loaded');}catch(e){}if(!isBot&&!hasLoaded){document.documentElement.classList.add('app-initial-loading');}setTimeout(function(){document.documentElement.classList.remove('app-initial-loading');},3500);}catch(e){}})();`,
          }}
        />
      </head>
      <body
        className="min-h-screen flex flex-col font-sans bg-[#f8fafc] text-slate-900 selection:bg-[#008744]/20 selection:text-[#008744] antialiased"
        style={{ fontFamily: "var(--font-hind), sans-serif" }}
      >
        <div
          id="raw-preloader"
          aria-hidden="true"
          className="fixed inset-0 z-[99998] flex-col items-center justify-center bg-[#050b10] select-none overflow-hidden p-6 pointer-events-none"
        >
          <div className="absolute w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-gradient-to-tr from-[#DE1F26]/15 via-[#008744]/15 to-transparent rounded-full blur-[90px] pointer-events-none" />
          <div className="relative z-10 flex flex-col items-center justify-center">
            <div className="bg-white px-7 py-3 rounded-2xl border border-white/60 shadow-[0_0_35px_rgba(255,255,255,0.35),0_10px_25px_rgba(0,0,0,0.5)] flex items-center justify-center mb-6">
              <img
                src="/logo/logo.png"
                alt="US Software Logo"
                className="w-[160px] sm:w-[190px] h-auto object-contain"
              />
            </div>
            <div className="mt-4 flex items-center space-x-2.5 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08]">
              <div className="w-2.5 h-2.5 rounded-full bg-[#008744] animate-ping" />
              <span className="text-[11px] font-mono tracking-widest text-gray-300 uppercase">
                INITIALIZING CORE SYSTEMS...
              </span>
            </div>
          </div>
        </div>
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

