import meetingImage from "../assets/sri-lanka-news-1024x576.jpg";
import colomboImage from "../assets/colombo.jpg";
import launchImage from "../assets/launch.png";

export const focusAreas = [
  {
    icon: "research",
    title: "Research & Innovation",
    description: "Addressing real-world challenges through interdisciplinary research and innovation.",
  },
  {
    icon: "education",
    title: "Training & Education",
    description: "Building future-ready talent through industry-aligned learning and skills development.",
  },
  {
    icon: "industry",
    title: "Industry Collaboration",
    description: "Working with industry to co-create solutions and turn research into reality.",
  },
  {
    icon: "international",
    title: "International Engagement",
    description: "Connecting globally to exchange knowledge and create lasting impact.",
  },
  {
    icon: "impact",
    title: "Innovation for Impact",
    description: "Driving technology innovation that benefits society and the economy.",
  },
];

export const newsItems = [
  {
    slug: "high-level-discussions-establishing-wiin",
    category: "Meeting",
    title: "High-Level Discussions on Establishing WIIN",
    date: "12 January 2026",
    summary: "Representatives from Sri Lanka, Finland and India met with the Prime Minister to discuss the establishment of WIIN and future opportunities in research, innovation and capacity building.",
    image: meetingImage,
    imageAlt: "Representatives from Sri Lanka, Finland and India in discussions with the Prime Minister of Sri Lanka.",
    button: "Read More",
    href: "https://www.6gflagship.com/news/6g-flagship-contributes-to-wireless-and-ai-research-plans-in-sri-lanka/",
    external: true,
  },
  {
    slug: "digital-innovation-research-centre-media-coverage",
    category: "Media Coverage",
    title: "Sri Lanka Preparing to Establish New Digital Innovation Research Centre",
    date: "11 May 2026",
    summary: "National media highlighted Sri Lanka’s plans to establish a new research centre that will strengthen digital innovation, research capability and international collaboration.",
    image: colomboImage,
    imageAlt: "Colombo city skyline representing Sri Lanka’s emerging digital research ecosystem.",
    button: "Read Coverage",
    href: "https://www.newswire.lk/2026/05/11/sri-lanka-preparing-to-establish-6g-research-centre-by-q3-2026/",
    external: true,
  },
  {
    slug: "wiin-launch-16-july-2026",
    category: "Upcoming Event",
    title: "WIIN Institute of Technology Launch – 16 July 2026",
    date: "16 July 2026",
    summary: "The launch will bring together the Deputy Minister of Digital Economy, the High Commissioner of India, national and international delegates, universities, research organisations and industry.",
    image: launchImage,
    imageAlt: "WIIN Institute of Technology launch event graphic for 16 July 2026.",
    button: "View Launch Details",
    href: "/news/wiin-launch-16-july-2026",
    external: false,
  },
];

export const contactDetails = {
  email: "info@wiin.lk",
  phone: "+94 77 272 3407",
  address: "TRACE Expert City,Maradana, Colombo 10",
  linkedinLabel: "linkedin.com/company/wiin",
  linkedinUrl: "https://www.linkedin.com/company/wiin",
};
