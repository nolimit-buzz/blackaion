import { fetchAboutPageData } from "@/lib/api";
import AboutPageClient from "./client";

// Enable static generation for better performance
export const revalidate = 3600; // Revalidate every hour

export default async function AboutPage() {
  // Fetch data on the server side
  const data = await fetchAboutPageData();
  
  return <AboutPageClient initialData={data} />;
} 