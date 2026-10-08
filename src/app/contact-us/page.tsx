import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us & Admission Support | US Software LTD",
  description:
    "Get in touch with US Software LTD. Reach out for course admission counseling, enterprise software inquiries, IT consultancy, or corporate training. Office in Mirpur, Dhaka.",
  alternates: {
    canonical: "/contact-us",
  },
  openGraph: {
    title: "Contact US Software LTD | 24/7 Admission & Tech Support",
    description:
      "Connect with our counseling team via phone, WhatsApp, or office visit at Mirpur, Dhaka.",
    url: "https://ussoftwareltd.com/contact-us",
    siteName: "US Software LTD",
    images: [
      {
        url: "/logo/us software logo.png",
        width: 800,
        height: 600,
        alt: "Contact US Software LTD",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact US Software LTD | Admission & Support",
    description: "Get immediate course admission counseling and support via WhatsApp or phone.",
    images: ["/logo/us software logo.png"],
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
