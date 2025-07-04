import { FaBroadcastTower, FaMapMarkerAlt } from 'react-icons/fa';

export const projectsData = [
  {
    id: 1,
    slug: 'asikog-security-consultants',
    title: 'Asikog Security Consultants Limited',
    sector: 'Healthcare',
    state: 'Lagos',
    sdg: 16,
    image: '/project-1.png',
    overview: 'A leading provider of specialized security solutions for healthcare facilities, ensuring the safety of patients, staff, and sensitive data.',
    challenge: 'The healthcare sector faced increasing physical and digital security threats, requiring a specialized approach that standard security firms could not provide. Asikog needed to establish a strong brand presence to communicate its unique value proposition.',
    result: 'After 8 months of collaboration, we successfully launched the new Asikog brand and website, integrated into a custom-built WordPress CMS. With the launch and essential SEO optimizations, we managed to increase website session conversion rates and increase time spent on the website.',
    stats: [
      { value: '69%', label: 'increase in client engagement' },
      { value: '4.2m', label: 'views this project got across our social media networks' },
      { value: '33%', label: 'increase in time spent on website' },
      { value: '$12.8m', label: 'total value of funding so far' },
    ],
    testimonial: {
      quote: 'I am happy with the transparency and the details they describe for all of their Funds. I recommend the service for investors that understand long term investing and are okay with the illiquidity.',
      author: 'Fred Fields',
      authorRole: 'Founder and Partner at Investate',
      authorImage: '/author-placeholder.jpg',
    },
  },
  {
    id: 2,
    slug: 'karu-waste-management',
    title: 'Karu Waste Management',
    sector: 'Waste',
    state: 'Nasarawa',
    sdg: 11,
    image: '/project-2.png',
    overview: 'An innovative waste management company focused on sustainable and efficient waste collection and recycling in urban areas.',
    challenge: 'To create a scalable model for waste management in a rapidly growing state while promoting environmental responsibility and community participation.',
    result: 'Our intervention helped streamline their operations and community outreach, leading to a significant increase in recycling rates and a cleaner environment for Karu residents.',
    stats: [
      { value: '50%', label: 'increase in recycling rates' },
      { value: '10,000+', label: 'households served' },
      { value: '40%', label: 'reduction in landfill waste' },
      { value: '200+', label: 'jobs created' },
    ],
    testimonial: {
      quote: 'The operational efficiency we gained through this partnership has been transformative. We are now a model for sustainable waste management in the region.',
      author: 'Jane Doe',
      authorRole: 'CEO, Karu Waste Management',
      authorImage: '/author-placeholder.jpg',
    },
  },
   // Add more project details here...
  { 
    id: 3, 
    slug: 'swap-station-mobility', 
    title: 'Swap Station Mobility Limited', 
    sector: 'Electric Vehicles', 
    state: 'Lagos', 
    sdg: 7, 
    image: '/project-3.png',
    overview: 'Pioneering battery-swapping stations for electric vehicles to accelerate the adoption of clean transportation.',
    challenge: 'Placeholder challenge text for Swap Station Mobility.',
    result: 'Placeholder result text for Swap Station Mobility.',
  },
  { 
    id: 4, 
    slug: 'blackaion-energy', 
    title: 'Blackaion Energy', 
    sector: 'Renewable Energy', 
    state: 'Lagos', 
    sdg: 7, 
    image: '/project-1.png',
    overview: 'Developing and operating large-scale renewable energy projects to power Nigeria\'s future.',
    challenge: 'Placeholder challenge text for Blackaion Energy.',
    result: 'Placeholder result text for Blackaion Energy.',
  },
  { 
    id: 5, 
    slug: 'kano-electricity', 
    title: 'Kano Electricity Distribution Company', 
    sector: 'Electricity', 
    state: 'Kano', 
    sdg: 7, 
    image: '/project-1.png',
    overview: 'Improving electricity access and reliability for millions of customers in Northern Nigeria.',
    challenge: 'Placeholder challenge text for Kano Electricity.',
    result: 'Placeholder result text for Kano Electricity.',
  },
  { 
    id: 6, 
    slug: 'emerald-industrial', 
    title: 'Emerald Industrial CFZE', 
    sector: 'Multi-functional', 
    state: 'Lagos', 
    sdg: 9, 
    image: '/project-2.png',
    overview: 'A multi-functional industrial park designed to foster innovation and economic growth.',
    challenge: 'Placeholder challenge text for Emerald Industrial.',
    result: 'Placeholder result text for Emerald Industrial.',
  },
  { 
    id: 7, 
    slug: 'capsa-technology', 
    title: 'Capsa Technology', 
    sector: 'FinTech', 
    state: 'Lagos', 
    sdg: 8, 
    image: '/project-1.png',
    overview: 'A financial technology platform providing accessible and innovative solutions for businesses.',
    challenge: 'Placeholder challenge text for Capsa Technology.',
    result: 'Placeholder result text for Capsa Technology.',
  },
  { 
    id: 8, 
    slug: 'komplete-care', 
    title: 'Komplete Care', 
    sector: 'HealthTech', 
    state: 'Lagos', 
    sdg: 3, 
    image: '/project-3.png',
    overview: 'A health-tech solution improving patient outcomes through accessible digital tools.',
    challenge: 'Placeholder challenge text for Komplete Care.',
    result: 'Placeholder result text for Komplete Care.',
  },
];

const sdgColors = [
  'bg-red-500',
  'bg-yellow-500',
  'bg-green-500',
  'bg-blue-500',
  'bg-indigo-500',
  'bg-purple-500',
  'bg-pink-500',
  'bg-teal-500',
];

export const getProjects = () => projectsData.map((project, index) => ({
    ...project,
    sdgColor: sdgColors[index % sdgColors.length],
})); 