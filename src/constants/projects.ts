const projects = [
  {
    title: "Webits",
    description: "Description 1",
    techStack: ["React", "TypeScript", "Astro", "TailwindCSS"],
    link: "https://webits.mx",
  },
  {
    title: "itProve",
    description: "Description 2",
    techStack: ["React", "TypeScript", "Astro", "TailwindCSS"],
  },
];

export default projects;

export type ProjectType = {
  title: string;
  description: string;
  techStack: string[];
  link?: string;
};
