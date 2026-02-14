import { Element } from "@/components/Element/Element";
import { fetchHomePageData } from "@/lib/api";

// export const revalidate = 3600;

export default async function Home() {
  const data = await fetchHomePageData();
  
  return <Element data={data} />;
}