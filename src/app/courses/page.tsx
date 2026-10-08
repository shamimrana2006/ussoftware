import type { Metadata } from "next";
import { Suspense } from "react";
import CoursesClient from "./CoursesClient";

export const metadata: Metadata = {
  title: "Professional IT & Software Engineering Courses | US Software LTD",
  description:
    "Explore in-demand tech courses at US Software LTD: Full-Stack Web Development, Flutter & Mobile App Development, Cyber Security, Digital Marketing, UI/UX Design, and Data Analytics.",
  alternates: {
    canonical: "/courses",
  },
  openGraph: {
    title: "Professional IT & Software Engineering Courses | US Software LTD",
    description:
      "Explore 50+ industry-aligned software engineering courses and live bootcamp tracks with 1-on-1 industry mentorship.",
    url: "https://ussoftwareltd.com/courses",
    siteName: "US Software LTD",
    images: [
      {
        url: "/logo/us software logo.png",
        width: 800,
        height: 600,
        alt: "US Software LTD Courses",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional IT & Software Engineering Courses | US Software LTD",
    description:
      "Explore industry-aligned tech courses with 1-on-1 industry mentorship and placement support.",
    images: ["/logo/us software logo.png"],
  },
};

export default function CoursesPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#f8fafc]" />}>
      <CoursesClient />
    </Suspense>
  );
}
