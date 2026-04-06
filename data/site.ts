import {
  ContactItem,
  ExperienceItem,
  SkillCategory,
  WritingLink,
} from '@/types';

const githubUsername = process.env.NEXT_PUBLIC_GITHUB_USERNAME || 'oaslananka';
const githubRepo =
  process.env.NEXT_PUBLIC_GITHUB_REPO || `${githubUsername}/vscode-portfolio`;
const primaryDomain = 'https://oaslananka.dev';
const githubPagesDomain = `https://${githubUsername}.github.io/`;

const contactItems: ContactItem[] = [
  {
    social: 'website',
    link: 'oaslananka.dev',
    href: primaryDomain,
  },
  {
    social: 'email',
    link: 'info@oaslananka.dev',
    href: 'mailto:info@oaslananka.dev',
  },
  {
    social: 'github',
    link: githubUsername,
    href: `https://github.com/${githubUsername}`,
  },
  {
    social: 'linkedin',
    link: 'linkedin.com/in/oaslananka',
    href: 'https://www.linkedin.com/in/oaslananka',
  },
  {
    social: 'githubPages',
    link: `${githubUsername}.github.io`,
    href: githubPagesDomain,
  },
];

const skillCategories: SkillCategory[] = [
  {
    title: 'Edge AI & Vision',
    items: ['Computer Vision', 'YOLO', 'OpenCV', 'Edge Inference'],
  },
  {
    title: 'Embedded & IoT',
    items: ['ESP32', 'STM32', 'FreeRTOS', 'MQTT'],
  },
  {
    title: 'Backend & Data',
    items: ['FastAPI', 'Node.js', 'WebSockets', 'PostgreSQL'],
  },
  {
    title: 'Systems & Ops',
    items: ['Docker', 'Linux', 'Observability', 'Device-to-Cloud'],
  },
];

const experiences: ExperienceItem[] = [
  {
    period: 'Current Focus',
    role: 'Edge AI, computer vision, and IoT systems',
    bullets: [
      'Building software for real-world sensing, connectivity, and real-time processing',
      'Shipping device-to-cloud systems with backend integration and edge inference',
      'Working comfortably across product constraints, deployment realities, and technical ownership',
    ],
  },
  {
    period: 'Working Style',
    role: 'Ownership in remote and async teams',
    description:
      'I work well in remote, async environments and I am comfortable owning problems end to end.',
  },
];

const writingLinks: WritingLink[] = [
  {
    label: 'DEV.to',
    href: `https://dev.to/${githubUsername}`,
  },
];

export const siteConfig = {
  owner: {
    name: 'Osman ASLAN',
    firstName: 'Osman',
    role: 'Software Engineer | Edge AI, Computer Vision, IoT Systems',
    location: 'Turkey',
  },
  seo: {
    defaultTitle: 'Osman ASLAN | Portfolio',
    titleTemplate: 'Osman ASLAN | %s',
    description:
      'Osman ASLAN portfolio built with a VS Code inspired interface and focused on software projects, engineering workflows, and clean UI.',
    keywords: [
      'osman aslan',
      'oaslananka',
      'portfolio',
      'software developer',
      'embedded systems',
      'next.js portfolio',
    ],
    image: 'https://imgur.com/4zi5KkQ.png',
    url: primaryDomain,
  },
  links: {
    primaryDomain,
    githubPagesDomain,
    githubProfile: `https://github.com/${githubUsername}`,
    githubRepositories: `https://github.com/${githubUsername}?tab=repositories`,
    githubRepo: `https://github.com/${githubRepo}`,
    devtoProfile: `https://dev.to/${githubUsername}`,
  },
  github: {
    username: githubUsername,
    repo: githubRepo,
  },
  home: {
    greeting: "Hello, I'm",
    role: 'Software Engineer',
    specialties: 'Edge AI, Computer Vision, IoT Systems',
    description:
      'I build software for edge AI, computer vision, and IoT systems where sensing, connectivity, and real-time data processing need to work reliably in practice.',
  },
  about: {
    intro: [
      'I’m a software engineer focused on edge AI, computer vision, and IoT systems. I build software for real-world applications where sensing, connectivity, and real-time data processing need to work reliably in practice.',
      'My experience includes device-to-cloud systems, backend integration, and edge inference for monitoring and automation products. I’m strongest in software-heavy roles around edge systems, especially where product thinking, technical ownership, and deployment constraints all matter.',
      'I work well in remote, async teams and I’m comfortable owning problems end to end.',
    ],
    experiences,
    skills: skillCategories,
    writingIntro:
      'I occasionally share what I learn while building software and experimenting with new tools.',
    writingLinks,
    beyondCode:
      'Outside of coding, I enjoy exploring new tools, learning through side projects, and improving the small details that make products feel complete.',
  },
  contact: {
    title: 'Contact Me',
    subtitle:
      'You can reach me through my website, email, GitHub, or LinkedIn. I usually reply fastest on email or LinkedIn.',
    items: contactItems,
  },
  terminal: {
    about: [
      "Hi, I'm Osman!",
      'I build software for edge AI, computer vision, and IoT systems,',
      'with a focus on real-world reliability, device-to-cloud pipelines,',
      'and production-minded engineering across constrained environments.',
    ],
    skillLines: [
      '  Edge AI:    Computer Vision, YOLO, OpenCV, Edge Inference',
      '  Embedded:   ESP32, STM32, FreeRTOS, MQTT',
      '  Backend:    FastAPI, Node.js, WebSockets, PostgreSQL',
      '  Systems:    Docker, Linux, Observability, Device-to-Cloud',
    ],
  },
} as const;

export const publicContactItems = siteConfig.contact.items.filter(
  (item) => item.link && item.href
);
