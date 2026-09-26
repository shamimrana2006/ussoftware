const fs = require('fs');
const path = require('path');

const popular = require('./courses/popularCourses.js');
const tech = require('./courses/techCourses.js');
const specialty = require('./courses/specialtyCourses.js');
const managementAndOthers = require('./courses/managementAndOthers.js');

const allCourses = [
  ...popular,
  ...tech,
  ...specialty,
  ...managementAndOthers
];

// Re-index IDs cleanly from 1 to 55
allCourses.forEach((c, idx) => {
  c.id = String(idx + 1);
});

console.log(`Total courses to write: ${allCourses.length}`);

// Header with interface definitions
const header = `export interface CurriculumModule {
  moduleNumber: number;
  title: { en: string; bn: string };
  duration: { en: string; bn: string };
  lessonsCount: number;
  topics: { en: string; bn: string }[];
}

export interface CoreValue {
  id: string;
  title: { en: string; bn: string };
  desc: { en: string; bn: string };
  icon: string;
}

export interface Review {
  id: string;
  name: string;
  avatar: string;
  role: { en: string; bn: string };
  rating: number;
  comment: { en: string; bn: string };
  date: string;
}

export interface CourseDetail {
  id: string;
  slug: string;
  title: { en: string; bn: string };
  subtitle: { en: string; bn: string };
  category: string;
  categoryLabel: { en: string; bn: string };
  badge: { en: string; bn: string };
  mode: { en: string; bn: string };
  modeType: "online" | "offline";
  rating: number;
  ratingsCount: number;
  enrolledCount: string;
  languages: { en: string; bn: string };
  fee: string;
  rawFee: number;
  originalFee?: string;
  duration: { en: string; bn: string };
  classesCount: { en: string; bn: string };
  image: string;
  videoUrl: string;
  whatsappLink?: string;
  instructor: {
    name: string;
    designation: { en: string; bn: string };
    image: string;
    bio: { en: string; bn: string };
    experience: string;
    verified: boolean;
  };
  overview: { en: string; bn: string };
  fullDescription: { en: string; bn: string };
  coreValues: CoreValue[];
  learningOutcomes: { en: string; bn: string }[];
  curriculum: CurriculumModule[];
  includedItems: { en: string; bn: string }[];
  reviews: Review[];
}

export const coursesData: CourseDetail[] = `;

const footer = `;\n
export function getCourseBySlug(slug: string): CourseDetail | undefined {
  return coursesData.find((course) => course.slug === slug);
}

export function getCourseById(id: string): CourseDetail {
  const match = coursesData.find((c) => c.id === id || c.slug === id);
  if (match) return match;

  // Fallback to first course if not found
  return coursesData[0];
}

export function getVideoMeta(url: string) {
  if (!url) return { embedUrl: "", directUrl: "", isFacebook: false, isYouTube: false };
  
  if (url.includes("facebook.com") || url.includes("fb.watch")) {
    let directUrl = url;
    let embedUrl = url;
    if (url.includes("plugins/video.php")) {
      const match = url.match(/href=([^&]+)/);
      if (match) {
        directUrl = decodeURIComponent(match[1]);
      }
      embedUrl = url;
    } else {
      embedUrl = \`https://www.facebook.com/plugins/video.php?href=\${encodeURIComponent(url)}&show_text=0\`;
    }
    return {
      embedUrl: embedUrl,
      directUrl: directUrl,
      isFacebook: true,
      isYouTube: false
    };
  }

  if (url.includes("youtube.com") || url.includes("youtu.be")) {
    let directUrl = url;
    let embedUrl = url;
    if (url.includes("embed/")) {
      const videoId = url.split("embed/")[1]?.split("?")[0];
      if (videoId) directUrl = \`https://www.youtube.com/watch?v=\${videoId}\`;
    } else if (url.includes("watch?v=")) {
      const videoId = url.split("watch?v=")[1]?.split("&")[0];
      if (videoId) embedUrl = \`https://www.youtube.com/embed/\${videoId}?autoplay=1\`;
    } else if (url.includes("youtu.be/")) {
      const videoId = url.split("youtu.be/")[1]?.split("?")[0];
      if (videoId) embedUrl = \`https://www.youtube.com/embed/\${videoId}?autoplay=1\`;
    }
    return {
      embedUrl: embedUrl,
      directUrl: directUrl,
      isFacebook: false,
      isYouTube: true
    };
  }

  return { embedUrl: url, directUrl: url, isFacebook: false, isYouTube: false };
}
`;

const fileContent = header + JSON.stringify(allCourses, null, 2) + footer;
const targetPath = path.join(__dirname, 'coursesData.ts');

fs.writeFileSync(targetPath, fileContent, 'utf-8');
console.log(`Successfully generated ${targetPath} (${fileContent.length} bytes)`);
