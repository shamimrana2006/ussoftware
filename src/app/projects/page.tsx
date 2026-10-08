import type { Metadata } from "next";
import ProjectsClient from "./ProjectsClient";

export const metadata: Metadata = {
  title: "Live Projects & Portfolio Showcase | US Software LTD",
  description:
    "Explore enterprise web apps, SaaS products, mobile applications, and software portfolios developed by US Software LTD engineers and students.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "Live Projects & Portfolio Showcase | US Software LTD",
    description:
      "Showcase of production-grade apps, AI solutions, and software built during training bootcamps.",
    url: "https://ussoftwareltd.com/projects",
    siteName: "US Software LTD",
    images: [
      {
        url: "/logo/us software logo.png",
        width: 800,
        height: 600,
        alt: "US Software LTD Projects",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Live Projects & Portfolio | US Software LTD",
    description: "Explore our software development portfolio and student projects.",
    images: ["/logo/us software logo.png"],
  },
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}
