import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { mentorsData } from "@/data/mentorsData";
import MentorDetailClient from "./MentorDetailClient";

export async function generateStaticParams() {
  return mentorsData.map((mentor) => ({
    id: mentor.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const mentor = mentorsData.find((m) => m.id === id);

  if (!mentor) {
    return {
      title: "Mentor Not Found | US Software LTD",
      description: "The requested mentor profile could not be found.",
    };
  }

  const title = `${mentor.name} - ${mentor.role} | US Software LTD Mentor`;
  const description = `${mentor.bio} Experience: ${mentor.trainingExp}. Rating: ${mentor.rating}/5.`;

  return {
    title,
    description,
    alternates: {
      canonical: `/mentors/${mentor.id}`,
    },
    openGraph: {
      title: `${mentor.name} | US Software LTD Mentor`,
      description: mentor.bio,
      url: `https://ussoftwareltd.com/mentors/${mentor.id}`,
      siteName: "US Software LTD",
      images: [
        {
          url: mentor.avatar || "/logo/us software logo.png",
          width: 800,
          height: 800,
          alt: mentor.name,
        },
      ],
    },
    twitter: {
      card: "summary",
      title: `${mentor.name} | US Software LTD`,
      description: mentor.bio,
      images: [mentor.avatar || "/logo/us software logo.png"],
    },
  };
}

export default async function MentorDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const mentor = mentorsData.find((m) => m.id === id);

  if (!mentor) {
    notFound();
  }

  return <MentorDetailClient params={params} />;
}
