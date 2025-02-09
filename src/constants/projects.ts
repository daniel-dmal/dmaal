// TODO: Add more projects

import { link, video } from "motion/react-client";

const projects = [
  {
    title: "Webits",
    description:
      "Designed and developed a website for a digital agency. The website is fast, multilingual, accessible, and SEO-friendly (with a 100 score on lighthouse).",
    techStack: ["React", "TypeScript", "Astro", "TailwindCSS"],
    link: "https://webits.mx/en",
  },
  {
    title: "itProve",
    description:
      "designed and develioped a website for a Microsoft partner. The website is fast, multilingual, accessible, and SEO-friendly (with a 100 score on lighthouse).",
    techStack: ["React", "TypeScript", "Astro", "TailwindCSS"],
    link: "https://itprove.tech/en",
  },
  {
    title: "Rewardii",
    description:
      "Currently developing a CRM for a loyalty program. The CRM is used by businesses to manage their loyalty program. it includes a web app and a mobile app.",
    techStack: [
      "React",
      "TypeScript",
      "TailwindCSS",
      "Remix(shopify)",
      "Supabase",
      "Expo",
    ],
    video: true,
  },
];

export default projects;

export type ProjectType = {
  title: string;
  description: string;
  techStack: string[];
  link?: string;
  video?: boolean;
};
