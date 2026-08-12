import type { Metadata } from "next";
import { Geist, Geist_Mono, Hind_Siliguri } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import SmoothScroll from "@/components/SmoothScroll";
import MouseBubbles from "@/components/MouseBubbles";
import LoadingScreen from "@/components/LoadingScreen";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const hindSiliguri = Hind_Siliguri({
  weight: ['300', '400', '500', '600', '700'],
  variable: "--font-hind",
  subsets: ["bengali", "latin"],
});

export const metadata: Metadata = {
  title: "US Software LTD | Your Complete IT Partner",
  description: "We deliver smart, scalable, and secure IT solutions to drive your business forward.",
  icons: {
    icon: "/logo/us software logo.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${hindSiliguri.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans" style={{ fontFamily: "var(--font-hind), sans-serif" }}>
        <LoadingScreen />
        <SmoothScroll>
          <LanguageProvider>
            <MouseBubbles />
            {children}
          </LanguageProvider>
        </SmoothScroll>
      </body>
    </html>
  );
}
