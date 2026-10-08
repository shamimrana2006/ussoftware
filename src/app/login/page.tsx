import type { Metadata } from "next";
import LoginClient from "./LoginClient";

export const metadata: Metadata = {
  title: "Student & Member Login Portal | US Software LTD",
  description:
    "Log in to the US Software LTD student portal to access course materials, live class links, assignments, and grades.",
  alternates: {
    canonical: "/login",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function LoginPage() {
  return <LoginClient />;
}
