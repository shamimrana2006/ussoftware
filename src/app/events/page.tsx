import type { Metadata } from "next";
import EventsClient from "./EventsClient";

export const metadata: Metadata = {
  title: "Workshops, Seminars & Tech Bootcamps | US Software LTD",
  description:
    "Join live webinars, free technical masterclasses, hackathons, and corporate networking seminars organized by US Software LTD.",
  alternates: {
    canonical: "/events",
  },
  openGraph: {
    title: "Workshops & Tech Bootcamps | US Software LTD",
    description:
      "Participate in hands-on workshops, seminars, and masterclasses led by industry leaders.",
    url: "https://ussoftwareltd.com/events",
    siteName: "US Software LTD",
    images: [
      {
        url: "/logo/us software logo.png",
        width: 800,
        height: 600,
        alt: "Tech Events & Workshops",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tech Events & Seminars | US Software LTD",
    description: "Stay updated with upcoming free seminars and tech workshops.",
    images: ["/logo/us software logo.png"],
  },
};

export default function EventsPage() {
  return <EventsClient />;
}
