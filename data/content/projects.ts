import { Project } from "types";

const projects: Project[] = [
  {
    id: 0,
    title: "Company Profile - Royal Klinik",
    summary:
      "A company profile website designed to present Royal Klinik more clearly online, with a clean structure, accessible content, and a stronger digital presence.",
    image: "/static/projects/compro-royal-klinik.png",
    deploymentUrl: "https://health.royal-klinik.cloud/",
    techStack: ["React", "Next.js", "Tailwind CSS", "Express.js", "MySQL"],
    builtBy: [
      {
        name: "Aurelio",
        url: "https://github.com/aurelioo29",
      },
    ],
    role: "Full-Stack Development",
  },
  {
    id: 1,
    title: "Company Profile - Gerindra Humbahas",
    summary:
      "A profile website built to communicate the organization’s identity, activities, and public information in a way that feels more structured and approachable.",
    image: "/static/projects/gerindra.png",
    deploymentUrl: "https://gerindra-humbahas.id/",
    techStack: ["Laravel", "Tailwind CSS", "MySQL"],
    builtBy: [
      {
        name: "Aurelio",
        url: "https://github.com/aurelioo29",
      },
      {
        name: "David",
        url: "https://github.com/Rich1906-G",
      },
    ],
    role: "Frontend & Backend Development",
  },
  {
    id: 2,
    title: "SIMRS - Royal Klinik",
    summary:
      "A hospital information system built to support operational workflows, data handling, and day-to-day administrative processes in a more efficient and organized way.",
    image: "/static/projects/simrs-royal.png",
    deploymentUrl: "https://admin.royal-klinik.cloud/",
    techStack: ["Laravel", "Tailwind CSS", "MySQL"],
    builtBy: [
      {
        name: "David",
        url: "https://github.com/Rich1906-G",
      },
      {
        name: "Ferdinand",
        url: "http://github.com/itsmeFer",
      },
    ],
    role: "System Development",
  },
  {
    id: 3,
    title: "LMS Royal Prima",
    summary:
      "A learning management system developed to manage training materials, learning activities, and user progress in a more structured digital environment.",
    image: "/static/projects/lms-royal.png",
    deploymentUrl: "https://lms-royal.project-mahadatatech.web.id/",
    techStack: ["Laravel", "Tailwind CSS", "MySQL"],
    builtBy: [
      {
        name: "Jimmy",
        url: "https://github.com/dachi01-afk",
      },
      {
        name: "Aurelio",
        url: "https://github.com/aurelioo29",
      },
    ],
    role: "Full-Stack Development",
  },
  {
    id: 4,
    title: "SIMRS - Royal Klinik (Doctor)",
    summary:
      "A mobile application created for doctors to access key clinical workflows more easily, with a focused interface designed for speed and day-to-day usability.",
    image: "/static/projects/simrs-dokter.png",
    deploymentUrl: "https://dokter.royal-klinik.cloud/",
    techStack: ["Flutter"],
    builtBy: [
      {
        name: "Ferdinand",
        url: "http://github.com/itsmeFer",
      },
    ],
    role: "Mobile Development",
  },
  {
    id: 5,
    title: "Company Profile - Siombak",
    summary:
      "A company profile website built to introduce the brand more professionally, highlight core information clearly, and strengthen its online presentation.",
    image: "/static/projects/siombak.png",
    deploymentUrl: "https://siombak.project-mahadatatech.web.id/",
    techStack: ["Inertia.js", "Laravel", "MySQL"],
    builtBy: [
      {
        name: "Jimmy",
        url: "https://github.com/dachi01-afk",
      },
      {
        name: "Aurelio",
        url: "https://github.com/aurelioo29",
      },
    ],
    role: "Frontend & Backend Development",
  },
  {
    id: 6,
    title: "Eucagrow v1",
    summary:
      "An early-stage digital platform developed to support data processing, monitoring, and analytical workflows with a practical and functional web-based setup.",
    image: "/static/projects/eucagrow.png",
    deploymentUrl: "https://eucagrow.cloud/login",
    techStack: ["Python", "HTML", "CSS", "Javascript", "Jupyter Notebook"],
    builtBy: [
      {
        name: "Aurelio",
        url: "https://github.com/aurelioo29",
      },
    ],
    role: "Development & Data Workflow Setup",
  },
  {
    id: 7,
    title: "Monitoring Inventory",
    summary:
      "An inventory monitoring system designed to help track stock movement, improve visibility, and make inventory handling more accurate and manageable.",
    image: "/static/projects/qr-code.png",
    deploymentUrl: "https://qr-code.project-mahadatatech.web.id/",
    techStack: ["Laravel", "Tailwind CSS", "MySQL"],
    builtBy: [
      {
        name: "Aurelio",
        url: "https://github.com/aurelioo29",
      },
    ],
    role: "System Development",
  },
  {
    id: 8,
    title: "Photo Forensics",
    summary:
      "A photo analysis platform built to support forensic workflows through image handling, metadata inspection, and a more structured digital review process.",
    image: "/static/projects/forensic.png",
    deploymentUrl: "https://forensics.royal-klinik.cloud/login",
    techStack: ["Laravel", "Tailwind CSS", "MySQL", "Flask"],
    builtBy: [
      {
        name: "Aurelio",
        url: "https://github.com/aurelioo29",
      },
    ],
    role: "Full-Stack Development",
  },
  {
    id: 9,
    title: "Sistem Logbook - RSGM",
    summary:
      "A digital logbook system created to help record activities, organize submissions, and make reporting workflows more consistent and easier to manage.",
    image: "/static/projects/rsgm.png",
    deploymentUrl: "http://rsgm.project-mahadatatech.web.id/",
    techStack: ["Laravel", "Tailwind CSS", "MySQL"],
    builtBy: [
      {
        name: "David",
        url: "https://github.com/Rich1906-G",
      },
    ],
    role: "Backend & System Development",
  },
];

export default projects;
