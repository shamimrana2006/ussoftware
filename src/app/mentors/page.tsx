import type { Metadata } from "next";
import MentorsClient from "./MentorsClient";

export const metadata: Metadata = {
  title: "Meet Our Expert Mentors & Industry Leaders | US Software LTD",
  description:
    "Learn from senior software engineers, solution architects, full-stack developers, and cyber security specialists at US Software LTD.",
  alternates: {
    canonical: "/mentors",
  },
  openGraph: {
    title: "Meet Our Expert Mentors | US Software LTD",
    description:
      "Get guided by top-tier industry practitioners with hands-on production experience.",
    url: "https://ussoftwareltd.com/mentors",
    siteName: "US Software LTD",
    images: [
      {
        url: "/logo/us software logo.png",
        width: 800,
        height: 600,
        alt: "US Software LTD Mentors",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Meet Our Expert Mentors | US Software LTD",
    description: "Connect with industry leaders and experienced mentors.",
    images: ["/logo/us software logo.png"],
  },
};

export default function MentorsPage() {
  return <MentorsClient />;
}
