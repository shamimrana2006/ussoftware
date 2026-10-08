import type { Metadata } from "next";
import GalleryClient from "./GalleryClient";

export const metadata: Metadata = {
  title: "Life at US Software LTD | Campus, Classes & Event Gallery",
  description:
    "Explore photos and videos of US Software LTD campus, live class sessions, student project presentations, certificate ceremonies, and company milestones.",
  alternates: {
    canonical: "/gallery",
  },
  openGraph: {
    title: "Life at US Software LTD | Photo & Video Gallery",
    description:
      "Take a look inside our state-of-the-art campus labs, classroom activities, and student community events.",
    url: "https://ussoftwareltd.com/gallery",
    siteName: "US Software LTD",
    images: [
      {
        url: "/logo/us software logo.png",
        width: 800,
        height: 600,
        alt: "US Software LTD Gallery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Life at US Software LTD | Gallery",
    description: "Discover our classroom vibe, labs, and student activities.",
    images: ["/logo/us software logo.png"],
  },
};

export default function GalleryPage() {
  return <GalleryClient />;
}
