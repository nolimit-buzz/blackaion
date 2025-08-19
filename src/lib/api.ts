export interface HomePageData {
  navbar: {
    nav_links: Array<{ link: string; title: string }>;
    logo: {
      id: number;
      documentId: string;
      name: string;
      alternativeText: string | null;
      caption: string | null;
      width: number;
      height: number;
      formats: {
        small: {
          ext: string;
          url: string;
          hash: string;
          mime: string;
          name: string;
          path: string | null;
          size: number;
          width: number;
          height: number;
          sizeInBytes: number;
        };
        thumbnail: {
          ext: string;
          url: string;
          hash: string;
          mime: string;
          name: string;
          path: string | null;
          size: number;
          width: number;
          height: number;
          sizeInBytes: number;
        };
      };
      hash: string;
      ext: string;
      mime: string;
      size: number;
      url: string;
      previewUrl: string | null;
      provider: string;
      provider_metadata: any;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
    };
  };
  hero: {
    heading: string;
    subheading: string;
    cta: string;
    slider: Array<{
      id: number;
      name: string;
      url: string;
      formats: {
        thumbnail: { url: string };
        small: { url: string };
        medium: { url: string };
        large: { url: string };
      };
    }>;
  };
  mandate: {
    heading: string;
    numbers: Array<{
      title: string;
      value: string;
    }>;
    accordion: {
      accordion_items: Array<{
        id: number;
        title: string;
        description: string;
      }>;
    };
  };
  what_we_do: {
    title: string;
    subtitle: string;
    services: Array<{
      id: number;
      title: string;
      description: string;
      cta: string | null;
    }>;
  };
  portfolio: {
    title: string;
    subtitle: string;
    projects: Array<{
      id: number;
      number: string;
      title: string;
      about: Array<{
        type: string;
        children: Array<{
          type: string;
          text: string;
          bold?: boolean;
        }>;
      }>;
      overview: Array<{
        type: string;
        children: Array<{
          type: string;
          text: string;
        }>;
      }>;
      maps: any;
    }>;
  };
  esg_impact: {
    title: string;
    subtitle: string;
    esg_goals: Array<{
      id: number;
      title: string;
      description: string;
      sdg_images: Array<{
        id: number;
        name: string;
        url: string;
        formats: {
          thumbnail: { url: string };
        };
      }>;
    }>;
  };
  footer: {
    description: string;
    social_links: Array<{ link: string; title: string }>;
    quick_links: Array<{ link: string; title: string }>;
    legal: Array<{ link: string; title: string }>;
    offices: Array<{
      id: number;
      name: string;
      address: string;
      telephone: string | null;
    }>;
  };
}

export interface ApiResponse {
  data: HomePageData;
  meta: any;
}

// Cache for API responses
const cache = new Map<string, { data: any; timestamp: number }>();
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

function getCachedData(key: string) {
  const cached = cache.get(key);
  if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
    return cached.data;
  }
  return null;
}

function setCachedData(key: string, data: any) {
  cache.set(key, { data, timestamp: Date.now() });
}

export async function fetchHomePageData(): Promise<HomePageData> {
  const cacheKey = 'homepage-data';
  const cachedData = getCachedData(cacheKey);
  
  if (cachedData) {
    return cachedData;
  }

  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const apiToken = process.env.NEXT_PUBLIC_API_TOKEN;

  if (!apiUrl || !apiToken) {
    throw new Error('API URL or token not configured');
  }

  const endpoint = `${apiUrl}/api/home-page?populate=navbar&populate=navbar.logo&populate=hero&populate=hero.slider&populate=mandate&populate=mandate.accordion&populate=mandate.accordion.accordion_items&populate=what_we_do&populate=what_we_do.services&populate=portfolio&populate=portfolio.projects&populate=esg_impact&populate=esg_impact.esg_goals&populate=esg_impact.esg_goals.sdg_images&populate=footer&populate=footer.offices`;

  try {
    const response = await fetch(endpoint, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${apiToken}`,
        'Content-Type': 'application/json',
      },
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    if (!response.ok) {
      throw new Error(`API request failed: ${response.status} ${response.statusText}`);
    }

    const data: ApiResponse = await response.json();
    const result = data.data;
    
    // Cache the result
    setCachedData(cacheKey, result);
    
    return result;
  } catch (error) {
    console.error('Error fetching home page data:', error);
    throw error;
  }
}

// Helper function to extract text from rich text content
export function extractTextFromRichText(content: Array<{ type: string; children: Array<{ type: string; text: string; bold?: boolean }> }>): string {
  return content
    .map(block => 
      block.children
        .map(child => child.text)
        .join('')
    )
    .join('\n');
} 

export interface AboutPageData {
  id: number;
  documentId: string;
  about_us: {
    title: string;
    numbers: Array<{
      title: string;
      value: string;
    }>;
    description: string;
  };
  navbar: {
    id: number;
    nav_links: Array<{
      link: string;
      title: string;
    }>;
    logo: {
      id: number;
      documentId: string;
      name: string;
      alternativeText: string | null;
      caption: string | null;
      width: number;
      height: number;
      formats: {
        small: {
          ext: string;
          url: string;
          hash: string;
          mime: string;
          name: string;
          path: string | null;
          size: number;
          width: number;
          height: number;
          sizeInBytes: number;
        };
        thumbnail: {
          ext: string;
          url: string;
          hash: string;
          mime: string;
          name: string;
          path: string | null;
          size: number;
          width: number;
          height: number;
          sizeInBytes: number;
        };
      };
      hash: string;
      ext: string;
      mime: string;
      size: number;
      url: string;
      previewUrl: string | null;
      provider: string;
      provider_metadata: any;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
    };
  };
  mandate: {
    id: number;
    title: string;
    mission: string;
    vision: string;
    experience: string;
    company_history: string;
    history_bg_img: {
      id: number;
      documentId: string;
      name: string;
      alternativeText: string | null;
      caption: string | null;
      width: number;
      height: number;
      formats: {
        large: {
          ext: string;
          url: string;
          hash: string;
          mime: string;
          name: string;
          path: string | null;
          size: number;
          width: number;
          height: number;
          sizeInBytes: number;
        };
        small: {
          ext: string;
          url: string;
          hash: string;
          mime: string;
          name: string;
          path: string | null;
          size: number;
          width: number;
          height: number;
          sizeInBytes: number;
        };
        medium: {
          ext: string;
          url: string;
          hash: string;
          mime: string;
          name: string;
          path: string | null;
          size: number;
          width: number;
          height: number;
          sizeInBytes: number;
        };
        thumbnail: {
          ext: string;
          url: string;
          hash: string;
          mime: string;
          name: string;
          path: string | null;
          size: number;
          width: number;
          height: number;
          sizeInBytes: number;
        };
      };
      hash: string;
      ext: string;
      mime: string;
      size: number;
      url: string;
      previewUrl: string | null;
      provider: string;
      provider_metadata: any;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
    };
  };
  footer: {
    description: string;
    social_links: Array<{
      link: string;
      title: string;
    }>;
    quick_links: Array<{
      link: string;
      title: string;
    }>;
    legal: Array<{
      link: string;
      title: string;
    }>;
    offices: Array<{
      id: number;
      name: string;
      address: string;
      telephone: string | null;
    }>;
  };
  milestones: {
    id: number;
    title: string;
    description: string;
    milestones_list: Array<{
      id: number;
      date: string;
      year: number;
      quarter: number;
      title: string;
      description: string;
      img: {
        id: number;
        documentId: string;
        name: string;
        alternativeText: string | null;
        caption: string | null;
        width: number;
        height: number;
        formats: {
          thumbnail: {
            ext: string;
            url: string;
            hash: string;
            mime: string;
            name: string;
            path: string | null;
            size: number;
            width: number;
            height: number;
            sizeInBytes: number;
          };
        };
        hash: string;
        ext: string;
        mime: string;
        size: number;
        url: string;
        previewUrl: string | null;
        provider: string;
        provider_metadata: any;
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
      };
    }>;
  };
  infratech: {
    id: number;
    title: string;
    description: string;
    accordion_items: Array<{
      title: string;
      description: string;
    }>;
  };
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface AboutPageApiResponse {
  data: AboutPageData;
  meta: any;
}

export async function fetchAboutPageData(): Promise<AboutPageData> {
  const cacheKey = 'aboutpage-data';
  const cachedData = getCachedData(cacheKey);
  
  if (cachedData) {
    return cachedData;
  }

  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const apiToken = process.env.NEXT_PUBLIC_API_TOKEN;

  if (!apiUrl || !apiToken) {
    throw new Error('API URL or token not configured');
  }

  const endpoint = `${apiUrl}/api/about-us-page?populate=navbar&populate=navbar.logo&populate=mandate&populate=mandate.history_bg_img&populate=footer&populate=footer.offices&populate=milestones&populate=milestones.milestones_list.img&populate=infratech`;

  try {
    const response = await fetch(endpoint, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${apiToken}`,
        'Content-Type': 'application/json',
      },
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    if (!response.ok) {
      throw new Error(`API request failed: ${response.status} ${response.statusText}`);
    }

    const data: AboutPageApiResponse = await response.json();
    const result = data.data;
    
    // Cache the result
    setCachedData(cacheKey, result);
    
    return result;
  } catch (error) {
    console.error('Error fetching about page data:', error);
    throw error;
  }
}

export interface TeamPageData {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  title: string;
  description: string;
  navbar: {
    id: number;
    nav_links: Array<{
      link: string;
      title: string;
    }>;
    logo: {
      id: number;
      documentId: string;
      name: string;
      alternativeText: string | null;
      caption: string | null;
      width: number;
      height: number;
      formats: {
        large: {
          ext: string;
          url: string;
          hash: string;
          mime: string;
          name: string;
          path: string | null;
          size: number;
          width: number;
          height: number;
          sizeInBytes: number;
        };
        small: {
          ext: string;
          url: string;
          hash: string;
          mime: string;
          name: string;
          path: string | null;
          size: number;
          width: number;
          height: number;
          sizeInBytes: number;
        };
        medium: {
          ext: string;
          url: string;
          hash: string;
          mime: string;
          name: string;
          path: string | null;
          size: number;
          width: number;
          height: number;
          sizeInBytes: number;
        };
        thumbnail: {
          ext: string;
          url: string;
          hash: string;
          mime: string;
          name: string;
          path: string | null;
          size: number;
          width: number;
          height: number;
          sizeInBytes: number;
        };
      };
      hash: string;
      ext: string;
      mime: string;
      size: number;
      url: string;
      previewUrl: string | null;
      provider: string;
      provider_metadata: any;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
    };
  };
  team_members: Array<{
    id: number;
    documentId: string;
    position: string;
    name: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    bio: string;
    img: {
      id: number;
      documentId: string;
      name: string;
      alternativeText: string | null;
      caption: string | null;
      width: number;
      height: number;
      formats: {
        thumbnail: {
          ext: string;
          url: string;
          hash: string;
          mime: string;
          name: string;
          path: string | null;
          size: number;
          width: number;
          height: number;
          sizeInBytes: number;
        };
      } | null;
      hash: string;
      ext: string;
      mime: string;
      size: number;
      url: string;
      previewUrl: string | null;
      provider: string;
      provider_metadata: any;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
    };
  }>;
}

export interface TeamPageApiResponse {
  data: TeamPageData;
  meta: any;
}

export async function fetchTeamPageData(): Promise<TeamPageData> {
  const cacheKey = 'teampage-data';
  const cachedData = getCachedData(cacheKey);
  
  if (cachedData) {
    console.log('Using cached team page data');
    return cachedData;
  }

  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const apiToken = process.env.NEXT_PUBLIC_API_TOKEN;

  if (!apiUrl || !apiToken) {
    throw new Error('API URL or token not configured');
  }

  const endpoint = `${apiUrl}/api/team-page?populate=navbar&populate=navbar.logo&populate=team_members&populate=team_members.img`;
  
  console.log('Fetching team page data from:', endpoint);

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout

    const response = await fetch(endpoint, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${apiToken}`,
        'Content-Type': 'application/json',
      },
      signal: controller.signal,
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    clearTimeout(timeoutId);
    console.log('Team page API response status:', response.status);

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Team page API error response:', errorText);
      throw new Error(`API request failed: ${response.status} ${response.statusText} - ${errorText}`);
    }

    const data: TeamPageApiResponse = await response.json();
    console.log('Team page data received:', data ? 'Yes' : 'No');
    
    const result = data.data;
    
    // Cache the result
    setCachedData(cacheKey, result);
    
    return result;
  } catch (error) {
    console.error('Error fetching team page data:', error);
    if (error instanceof Error && error.name === 'AbortError') {
      throw new Error('Request timed out. Please check your internet connection and try again.');
    }
    throw error;
  }
}

export interface TeamMemberDetailData {
  id: number;
  documentId: string;
  position: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  bio: string;
  img: {
    id: number;
    documentId: string;
    name: string;
    alternativeText: string | null;
    caption: string | null;
    width: number;
    height: number;
    formats: {
      thumbnail: {
        ext: string;
        url: string;
        hash: string;
        mime: string;
        name: string;
        path: string | null;
        size: number;
        width: number;
        height: number;
        sizeInBytes: number;
      };
    } | null;
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: string | null;
    provider: string;
    provider_metadata: any;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}

export interface TeamMemberDetailApiResponse {
  data: TeamMemberDetailData;
  meta: any;
}

export async function fetchTeamMemberDetail(documentId: string): Promise<TeamMemberDetailData> {
  const cacheKey = `team-member-${documentId}`;
  const cachedData = getCachedData(cacheKey);
  
  if (cachedData) {
    return cachedData;
  }

  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const apiToken = process.env.NEXT_PUBLIC_API_TOKEN;

  if (!apiUrl || !apiToken) {
    throw new Error('API URL or token not configured');
  }

  const endpoint = `${apiUrl}/api/teams/${documentId}?populate=img`;

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout

    const response = await fetch(endpoint, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${apiToken}`,
        'Content-Type': 'application/json',
      },
      signal: controller.signal,
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`API request failed: ${response.status} ${response.statusText}`);
    }

    const data: TeamMemberDetailApiResponse = await response.json();
    const result = data.data;
    
    // Cache the result
    setCachedData(cacheKey, result);
    
    return result;
  } catch (error) {
    console.error('Error fetching team member detail:', error);
    if (error instanceof Error && error.name === 'AbortError') {
      throw new Error('Request timed out. Please check your internet connection and try again.');
    }
    throw error;
  }
}

export interface FooterData {
  description: string;
  social_links: Array<{ link: string; title: string }>;
  quick_links: Array<{ link: string; title: string }>;
  legal: Array<{ link: string; title: string }>;
  offices: Array<{
    id: number;
    name: string;
    address: string;
    telephone: string | null;
  }>;
}

export interface FooterApiResponse {
  data: FooterData;
  meta: any;
}

export async function fetchFooterData(): Promise<FooterData> {
  const cacheKey = 'footer-data';
  const cachedData = getCachedData(cacheKey);
  
  if (cachedData) {
    return cachedData;
  }

  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const apiToken = process.env.NEXT_PUBLIC_API_TOKEN;

  if (!apiUrl || !apiToken) {
    throw new Error('API URL or token not configured');
  }

  // Fetch footer data from dedicated footer endpoint
  const endpoint = `${apiUrl}/api/footer?populate=logo`;

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout

    const response = await fetch(endpoint, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${apiToken}`,
        'Content-Type': 'application/json',
      },
      signal: controller.signal,
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`API request failed: ${response.status} ${response.statusText}`);
    }

    const data: any = await response.json();
    const result = data.data;
    
    // Transform the data to match the FooterData interface
    const transformedResult = {
      description: result.description,
      social_links: result.links.social_links,
      quick_links: result.links.quick_links,
      legal: result.links.legal,
      offices: result.links.offices.map((office: any) => ({
        id: office.id || 0,
        name: office.name,
        address: office.address,
        telephone: office.telephone || null
      }))
    };
    
    // Cache the result
    setCachedData(cacheKey, transformedResult);
    
    return transformedResult;
  } catch (error) {
    console.error('Error fetching footer data:', error);
    if (error instanceof Error && error.name === 'AbortError') {
      throw new Error('Request timed out. Please check your internet connection and try again.');
    }
    throw error;
  }
}

export interface NavbarData {
  id: number;
  nav_links: Array<{ link: string; title: string }>;
  logo: {
    id: number;
    documentId: string;
    name: string;
    alternativeText: string | null;
    caption: string | null;
    width: number;
    height: number;
    formats: {
      large: {
        ext: string;
        url: string;
        hash: string;
        mime: string;
        name: string;
        path: string | null;
        size: number;
        width: number;
        height: number;
        sizeInBytes: number;
      };
      small: {
        ext: string;
        url: string;
        hash: string;
        mime: string;
        name: string;
        path: string | null;
        size: number;
        width: number;
        height: number;
        sizeInBytes: number;
      };
      medium: {
        ext: string;
        url: string;
        hash: string;
        mime: string;
        name: string;
        path: string | null;
        size: number;
        width: number;
        height: number;
        sizeInBytes: number;
      };
      thumbnail: {
        ext: string;
        url: string;
        hash: string;
        mime: string;
        name: string;
        path: string | null;
        size: number;
        width: number;
        height: number;
        sizeInBytes: number;
      };
    };
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: string | null;
    provider: string;
    provider_metadata: any;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}

export async function fetchNavbarData(): Promise<NavbarData> {
  const cacheKey = 'navbar-data';
  const cachedData = getCachedData(cacheKey);
  
  if (cachedData) {
    return cachedData;
  }

  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const apiToken = process.env.NEXT_PUBLIC_API_TOKEN;

  if (!apiUrl || !apiToken) {
    throw new Error('API URL or token not configured');
  }

  // Fetch navbar data from dedicated navbar endpoint
  const endpoint = `${apiUrl}/api/navbar?populate=logo`;

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout

    const response = await fetch(endpoint, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${apiToken}`,
        'Content-Type': 'application/json',
      },
      signal: controller.signal,
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`API request failed: ${response.status} ${response.statusText}`);
    }

    const data: any = await response.json();
    const result = data.data;
    
    // Transform the data to match the Navbar component interface
    const transformedResult = {
      id: result.id,
      nav_links: result.links, // Note: API returns 'links' but component expects 'nav_links'
      logo: result.logo
    };
    
    // Cache the result
    setCachedData(cacheKey, transformedResult);
    
    return transformedResult;
  } catch (error) {
    console.error('Error fetching navbar data:', error);
    if (error instanceof Error && error.name === 'AbortError') {
      throw new Error('Request timed out. Please check your internet connection and try again.');
    }
    throw error;
  }
} 

export interface FundsPageData {
  id: number;
  documentId: string;
  title: string;
  subtitle: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  funds: Array<{
    id: number;
    documentId: string;
    title: string;
    content: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    // Optional image fields from CMS
    bg_img?: {
      id: number;
      documentId: string;
      name: string;
      alternativeText: string | null;
      caption: string | null;
      width: number;
      height: number;
      formats?: {
        large?: { ext: string; url: string; hash: string; mime: string; name: string; path: string | null; size: number; width: number; height: number; sizeInBytes: number; };
        medium?: { ext: string; url: string; hash: string; mime: string; name: string; path: string | null; size: number; width: number; height: number; sizeInBytes: number; };
        small?: { ext: string; url: string; hash: string; mime: string; name: string; path: string | null; size: number; width: number; height: number; sizeInBytes: number; };
        thumbnail?: { ext: string; url: string; hash: string; mime: string; name: string; path: string | null; size: number; width: number; height: number; sizeInBytes: number; };
      } | null;
      hash: string; ext: string; mime: string; size: number; url: string; previewUrl: string | null; provider: string; provider_metadata: any; createdAt: string; updatedAt: string; publishedAt: string;
    };
  }>;
}

export interface FundsPageApiResponse { data: FundsPageData; meta: any; }

export async function fetchFundsPageData(): Promise<FundsPageData> {
  const cacheKey = 'funds-page-data';
  const cachedData = getCachedData(cacheKey);
  if (cachedData) {
    return cachedData;
  }

  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const apiToken = process.env.NEXT_PUBLIC_API_TOKEN;

  if (!apiUrl || !apiToken) {
    throw new Error('API URL or token not configured');
  }

  // Populate funds and their potential image fields
  const endpoint = `${apiUrl}/api/funds-page?populate=funds&populate=funds.bg_img`;

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000);

    const response = await fetch(endpoint, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${apiToken}`,
        'Content-Type': 'application/json',
      },
      signal: controller.signal,
      next: { revalidate: 3600 },
    });

    clearTimeout(timeoutId);

    console.log(response)
    if (!response.ok) {
      const text = await response.text();
      throw new Error(`API request failed: ${response.status} ${response.statusText} - ${text}`);
    }

    const data: FundsPageApiResponse = await response.json();
    const result = data.data;
    console.log(result)
    setCachedData(cacheKey, result);
    return result;
  } catch (error) {
    console.error('Error fetching funds page data:', error);
    if (error instanceof Error && error.name === 'AbortError') {
      throw new Error('Request timed out. Please check your internet connection and try again.');
    }
    throw error;
  }
} 

export interface FundDetailData {
  id: number;
  documentId: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  bg_img?: {
    id: number;
    documentId: string;
    name: string;
    alternativeText: string | null;
    caption: string | null;
    width: number;
    height: number;
    formats?: {
      large?: { ext: string; url: string; hash: string; mime: string; name: string; path: string | null; size: number; width: number; height: number; sizeInBytes: number; };
      medium?: { ext: string; url: string; hash: string; mime: string; name: string; path: string | null; size: number; width: number; height: number; sizeInBytes: number; };
      small?: { ext: string; url: string; hash: string; mime: string; name: string; path: string | null; size: number; width: number; height: number; sizeInBytes: number; };
      thumbnail?: { ext: string; url: string; hash: string; mime: string; name: string; path: string | null; size: number; width: number; height: number; sizeInBytes: number; };
    } | null;
    hash: string; ext: string; mime: string; size: number; url: string; previewUrl: string | null; provider: string; provider_metadata: any; createdAt: string; updatedAt: string; publishedAt: string;
  };
}

export interface FundDetailApiResponse { data: FundDetailData; meta: any; }

export async function fetchFundDetail(documentId: string): Promise<FundDetailData> {
  const cacheKey = `fund-detail-${documentId}`;
  const cachedData = getCachedData(cacheKey);
  if (cachedData) {
    return cachedData;
  }

  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const apiToken = process.env.NEXT_PUBLIC_API_TOKEN;

  if (!apiUrl || !apiToken) {
    throw new Error('API URL or token not configured');
  }

  const endpoint = `${apiUrl}/api/funds/${documentId}?populate=bg_img`;

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000);

    const response = await fetch(endpoint, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${apiToken}`,
        'Content-Type': 'application/json',
      },
      signal: controller.signal,
      next: { revalidate: 3600 },
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      const text = await response.text();
      throw new Error(`API request failed: ${response.status} ${response.statusText} - ${text}`);
    }

    const data: FundDetailApiResponse = await response.json();
    const result = data.data;
    setCachedData(cacheKey, result);
    return result;
  } catch (error) {
    console.error('Error fetching fund detail:', error);
    if (error instanceof Error && error.name === 'AbortError') {
      throw new Error('Request timed out. Please check your internet connection and try again.');
    }
    throw error;
  }
} 