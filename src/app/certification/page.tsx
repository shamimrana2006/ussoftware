import type { Metadata } from "next";
import CertificationClient from "./CertificationClient";

export const metadata: Metadata = {
  title: "Verify Student Certificate Online | US Software LTD",
  description:
    "Verify the authenticity of professional certificates issued by US Software LTD using Certificate ID or QR code. ISO certified and cryptographically secured.",
  alternates: {
    canonical: "/certification",
  },
  openGraph: {
    title: "Verify Student Certificate Online | US Software LTD",
    description:
      "Instant online verification for US Software LTD alumni certificates and credentials.",
    url: "https://ussoftwareltd.com/certification",
    siteName: "US Software LTD",
    images: [
      {
        url: "/logo/us software logo.png",
        width: 800,
        height: 600,
        alt: "Certificate Verification",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Verify Student Certificate Online | US Software LTD",
    description: "Verify credentials and graduate certifications issued by US Software LTD.",
    images: ["/logo/us software logo.png"],
  },
};

export default function CertificationPage() {
  return <CertificationClient />;
}
