type Capability = {
  title: string;
  description: string;
};

type Testimonial = {
  quote: string;
  name: string;
  job: string;
};

export const capabilities: Capability[] = [
  {
    title: "Web Platforms",
    description:
      "Responsive websites and web-based products built to support real business goals.",
  },
  {
    title: "Mobile Platforms",
    description:
      "Mobile applications designed for usability, performance, and seamless user experience across devices.",
  },
  {
    title: "Internal Systems",
    description:
      "Operational tools and digital systems that improve workflow, coordination, and efficiency.",
  },
  {
    title: "Admin Dashboards",
    description:
      "Structured interfaces for managing users, content, reporting, and day-to-day operations.",
  },
  {
    title: "API & Backend Development",
    description:
      "Reliable backend architecture and integrations built for scale, stability, and long-term growth.",
  },
  {
    title: "UI/UX Design",
    description:
      "Clear and consistent interfaces shaped around usability, logic, and visual quality.",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "Communication was clear and consistent throughout the project, and the final design direction was executed with precision.",
    name: "Wilson Bright",
    job: "Co-Founder, BlockSurvey",
  },
  {
    quote:
      "The codebase was clean, well-structured, and easy to work with. It matched exactly what we needed.",
    name: "Philip Imperato",
    job: "CEO, VisualBonus",
  },
  {
    quote:
      "The project was delivered with a strong understanding of our vision. The quality of execution and turnaround time were both excellent.",
    name: "Zach Green",
    job: "Founder, Hangxiety Shrink",
  },
];
