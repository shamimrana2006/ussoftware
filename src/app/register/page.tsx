import type { Metadata } from "next";
import RegisterClient from "./RegisterClient";

export const metadata: Metadata = {
  title: "Student Registration & Course Enrollment | US Software LTD",
  description:
    "Register for IT bootcamps and software engineering programs at US Software LTD. Start your learning journey with expert mentors.",
  alternates: {
    canonical: "/register",
  },
  openGraph: {
    title: "Student Registration & Course Enrollment | US Software LTD",
    description: "Enroll online for upcoming batches with scholarship and discount opportunities.",
    url: "https://ussoftwareltd.com/register",
    siteName: "US Software LTD",
    images: [
      {
        url: "/logo/us software logo.png",
        width: 800,
        height: 600,
        alt: "Register at US Software LTD",
      },
    ],
  },
};

export default function RegisterPage() {
  return <RegisterClient />;
}
