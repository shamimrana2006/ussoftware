import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Us | US Software LTD - Leading IT Training & Software Agency",
  description:
    "Learn about US Software LTD, our mission to empower Bangladeshi tech talent with global software engineering standards, professional IT certifications, and modern enterprise software solutions.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About US Software LTD | Excellence in IT & Tech Education",
    description:
      "Discover our vision, leadership, world-class mentors, and corporate mission to build industry-standard tech engineers.",
    url: "https://ussoftwareltd.com/about",
    siteName: "US Software LTD",
    images: [
      {
        url: "/logo/us software logo.png",
        width: 800,
        height: 600,
        alt: "About US Software LTD",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About US Software LTD | Leading IT Partner in Bangladesh",
    description: "Learn about our journey, training methodology, and industry achievements.",
    images: ["/logo/us software logo.png"],
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
