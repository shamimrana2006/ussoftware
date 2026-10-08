import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCourseById, coursesData } from "@/data/coursesData";
import CourseDetailClient from "./CourseDetailClient";

export async function generateStaticParams() {
  return coursesData.map((course) => ({
    id: course.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const course = getCourseById(id);

  if (!course) {
    return {
      title: "Course Not Found | US Software LTD",
      description: "The requested course could not be found.",
    };
  }

  const title = `${course.title.en} - Professional IT Course | US Software LTD`;
  const description = `${course.overview.en} Fee: ${course.fee}. Enroll now for live mentorship and certification.`;

  return {
    title,
    description,
    alternates: {
      canonical: `/courses/${course.id}`,
    },
    openGraph: {
      title: `${course.title.en} | US Software LTD`,
      description: course.overview.en,
      url: `https://ussoftwareltd.com/courses/${course.id}`,
      siteName: "US Software LTD",
      images: [
        {
          url: course.image || "/logo/us software logo.png",
          width: 1200,
          height: 630,
          alt: course.title.en,
        },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${course.title.en} | US Software LTD`,
      description: course.overview.en,
      images: [course.image || "/logo/us software logo.png"],
    },
  };
}

export default async function CoursePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const course = getCourseById(id);

  if (!course) {
    notFound();
  }

  const courseJsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": course.title.en,
    "description": course.overview.en,
    "provider": {
      "@type": "Organization",
      "name": "US Software LTD",
      "sameAs": "https://ussoftwareltd.com"
    },
    "offers": {
      "@type": "Offer",
      "price": course.rawFee || "0",
      "priceCurrency": "BDT",
      "category": course.categoryLabel.en,
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": course.rating || 4.9,
      "reviewCount": course.ratingsCount || 48
    },
    "instructor": {
      "@type": "Person",
      "name": course.instructor.name,
      "jobTitle": course.instructor.designation.en
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseJsonLd) }}
      />
      <CourseDetailClient course={course} />
    </>
  );
}
