import { Element } from "@/components/Element/Element";
import { fetchHomePageData } from "@/lib/api";

// Enable static generation for better performance
export const revalidate = 3600; // Revalidate every hour

export default async function Home() {
  // Fetch data on the server side
  const data = await fetchHomePageData();
  
  return <Element initialData={data} />;
}